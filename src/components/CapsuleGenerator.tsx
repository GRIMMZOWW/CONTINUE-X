"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TrustBadge from "./TrustBadge";
import StyleSelector from "./StyleSelector";
import ChatInput from "./ChatInput";
import GenerateButton from "./GenerateButton";
import CapsuleOutput from "./CapsuleOutput";
import ResumePrompt from "./ResumePrompt";
import { Button } from "@/components/ui/button";

type StyleType = "Brief" | "Detailed" | "Code-Focused";

export default function CapsuleGenerator() {
    const [chatText, setChatText] = useState("");
    const [style, setStyle] = useState<StyleType>("Brief");
    const [capsule, setCapsule] = useState("");
    const [resumePrompt, setResumePrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!chatText.trim()) return;

        setIsLoading(true);
        setCapsule(""); // Clear previous capsule
        setResumePrompt("");
        setError(null);

        // Get custom settings from localStorage
        const customApiKey = localStorage.getItem("continuex_api_key");
        const customProvider = localStorage.getItem("continuex_provider");
        const customModel = localStorage.getItem("continuex_model");

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chatText,
                    style,
                    customApiKey,
                    customProvider,
                    customModel
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Generation failed");
            }

            setCapsule(data.capsule);
            setResumePrompt(data.resumePrompt);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unexpected error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    const [isUsingCustomKey, setIsUsingCustomKey] = useState(false);

    useEffect(() => {
        setIsUsingCustomKey(!!localStorage.getItem("continuex_api_key"));
    }, []);

    return (
        <div className="min-h-screen bg-[#080C14] text-zinc-100 flex flex-col items-center">
            <TrustBadge />

            <main className="w-full max-w-[760px] px-4 md:px-6 mt-12 md:mt-24 space-y-16 md:space-y-32 animate-in fade-in duration-1000">
                {/* HERO SECTION */}
                <header className="text-center space-y-4 md:space-y-6">
                    <div className="inline-flex items-center gap-2 bg-[#1a1033] border border-[#6366F1] px-3 md:px-4 py-1.5 rounded-full mb-2">
                        <span className="text-[10px] md:text-[11px] font-bold text-[#6366F1] uppercase tracking-wider">
                            ⚡ AI Context Engine
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-[0.1em] md:tracking-[0.15em] text-white">
                        CONTINUE-X
                    </h1>
                    <p className="text-[#64748B] text-[14px] md:text-[16px] px-4">
                        When your AI chat slows down — compress it.
                    </p>
                </header>

                {/* MAIN TOOL CARD */}
                <section id="app" className="bg-[#0D1117] p-4 md:p-8 rounded-[20px] md:rounded-[24px] border border-[#1E293B] shadow-[0_0_60px_rgba(99,102,241,0.06)] space-y-6 md:space-y-8 relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-500/10 blur-3xl rounded-full -z-10" />
                    <StyleSelector selected={style} onSelect={setStyle} />
                    <ChatInput value={chatText} onChange={setChatText} />

                    <div className="space-y-4">
                        <div className="flex flex-col items-center gap-2">
                            <GenerateButton
                                onClick={handleGenerate}
                                isLoading={isLoading}
                                disabled={!chatText.trim()}
                            />
                            {isUsingCustomKey && (
                                <span className="text-[#F59E0B] text-[12px] font-medium animate-pulse">
                                    Using your own API key
                                </span>
                            )}
                        </div>
                        {error && (
                            <p className="text-red-400 text-[13px] text-center font-medium animate-in fade-in slide-in-from-top-1">
                                {error}
                            </p>
                        )}
                    </div>
                </section>

                <div className="space-y-12">
                    <CapsuleOutput capsule={capsule} />
                    <ResumePrompt prompt={resumePrompt} />

                    {(capsule || resumePrompt) && (
                        <div className="pt-8">
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setChatText("");
                                    setCapsule("");
                                    setResumePrompt("");
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                                className="w-full h-[52px] text-[15px] font-semibold bg-transparent border-2 border-[#1E293B] text-[#64748B] hover:border-[#6366F1] hover:text-white transition-all duration-300 rounded-xl uppercase tracking-wider"
                            >
                                Start New Capsule
                            </Button>
                        </div>
                    )}
                </div>

                {/* ENHANCED FOOTER */}
                <footer className="pt-20 pb-12 border-t border-[#1E293B]/50 space-y-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div className="text-xl font-black tracking-widest text-white">
                            CONTINUE-X
                        </div>
                        <div className="text-sm text-[#64748B] font-medium">
                            Built by Bhaumik for AI builders who ship
                        </div>
                        <div className="text-sm text-[#475569] font-bold uppercase tracking-widest">
                            Zero data. Pure focus.
                        </div>
                    </div>

                    <div className="pt-8 border-t border-[#1E293B]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#334155] font-medium">
                        <p>© 2026 CONTINUE-X by Bhaumik. Your chats never touch our servers.</p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                            <a href="https://github.com/GRIMMZOWW" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
