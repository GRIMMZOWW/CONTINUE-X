"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Settings, ExternalLink, Shield, Save, RotateCcw, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdvancedSettings() {
    const [isOpen, setIsOpen] = useState(false);
    const [provider, setProvider] = useState<"groq" | "openai">("groq");
    const [apiKey, setApiKey] = useState("");
    const [model, setModel] = useState("");
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const savedProvider = localStorage.getItem("continuex_provider") as "groq" | "openai";
        const savedKey = localStorage.getItem("continuex_api_key");
        const savedModel = localStorage.getItem("continuex_model");

        if (savedProvider) setProvider(savedProvider);
        if (savedKey) setApiKey(savedKey);
        if (savedModel) setModel(savedModel);
    }, []);

    const handleSave = () => {
        localStorage.setItem("continuex_provider", provider);
        localStorage.setItem("continuex_api_key", apiKey);
        localStorage.setItem("continuex_model", model || (provider === "groq" ? "llama-3.3-70b-versatile" : "gpt-4o-mini"));

        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2000);
    };

    const handleClear = () => {
        localStorage.removeItem("continuex_provider");
        localStorage.removeItem("continuex_api_key");
        localStorage.removeItem("continuex_model");
        setApiKey("");
        setModel("");
        setProvider("groq");
    };

    const groqModels = [
        "llama-3.3-70b-versatile",
        "llama-3.1-8b-instant",
        "mixtral-8x7b-32768"
    ];

    const openaiModels = [
        "gpt-4o-mini",
        "gpt-4o",
        "gpt-3.5-turbo"
    ];

    return (
        <div className="w-full space-y-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-[12px] text-[#334155] hover:text-[#64748B] transition-colors mx-auto font-medium"
            >
                <Settings className="w-3 h-3" />
                Advanced Settings
            </button>

            {isOpen && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-500 bg-[#0D1117] border border-[#1E293B] rounded-[20px] p-8 md:p-10 space-y-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[60px] rounded-full -mr-10 -mt-10" />

                    <div className="space-y-2 relative z-10">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            Use Your Own API Key
                        </h3>
                        <p className="text-sm text-[#64748B] leading-relaxed max-w-[500px]">
                            By default CONTINUE-X uses our built-in AI. Optionally add your own API key to use your preferred model and higher rate limits.
                        </p>
                    </div>

                    <div className="space-y-6 relative z-10">
                        {/* PROVIDER TOGGLE */}
                        <div className="flex bg-[#080C14] p-1 rounded-xl border border-[#1E293B]/50 max-w-fit">
                            <button
                                onClick={() => setProvider("groq")}
                                className={cn(
                                    "px-6 py-2 rounded-lg text-xs font-bold transition-all",
                                    provider === "groq" ? "bg-[#1E293B] text-white shadow-lg" : "text-[#475569] hover:text-[#64748B]"
                                )}
                            >
                                Groq
                            </button>
                            <button
                                onClick={() => setProvider("openai")}
                                className={cn(
                                    "px-6 py-2 rounded-lg text-xs font-bold transition-all",
                                    provider === "openai" ? "bg-[#1E293B] text-white shadow-lg" : "text-[#475569] hover:text-[#64748B]"
                                )}
                            >
                                OpenAI
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* API KEY INPUT */}
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-[#475569] uppercase tracking-widest pl-1">
                                    {provider === "groq" ? "Groq API Key" : "OpenAI API Key"}
                                </label>
                                <input
                                    type="password"
                                    value={apiKey}
                                    onChange={(e) => setApiKey(e.target.value)}
                                    placeholder={provider === "groq" ? "gsk_..." : "sk-..."}
                                    className="w-full bg-[#080C14] border border-[#1E293B] rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-[#334155] focus:outline-none focus:border-[#6366F1]/50 transition-colors"
                                />
                            </div>

                            {/* MODEL SELECTOR */}
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-[#475569] uppercase tracking-widest pl-1">
                                    Model Selector
                                </label>
                                <select
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                    className="w-full bg-[#080C14] border border-[#1E293B] rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-[#6366F1]/50 transition-colors appearance-none"
                                >
                                    {(provider === "groq" ? groqModels : openaiModels).map((m) => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-4 border-t border-[#1E293B]/30">
                            <a
                                href={provider === "groq" ? "https://console.groq.com" : "https://platform.openai.com"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[12px] text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1 transition-colors"
                            >
                                {provider === "groq" ? "Get free Groq API key" : "Get OpenAI API key"}
                                <ExternalLink className="w-3 h-3" />
                            </a>

                            <div className="flex gap-3 w-full md:w-auto">
                                <Button
                                    variant="outline"
                                    onClick={handleClear}
                                    className="flex-1 md:flex-none h-10 px-6 bg-transparent border-[#1E293B] text-[#64748B] hover:text-white transition-all text-xs font-bold uppercase tracking-wider"
                                >
                                    <RotateCcw className="w-3.5 h-3.5 mr-2" />
                                    Clear
                                </Button>
                                <Button
                                    onClick={handleSave}
                                    className={cn(
                                        "flex-1 md:flex-none h-10 px-8 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                                        isSaved ? "bg-emerald-600 text-white" : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                                    )}
                                >
                                    {isSaved ? <Check className="w-4 h-4 mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                                    {isSaved ? "Saved" : "Save Settings"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
