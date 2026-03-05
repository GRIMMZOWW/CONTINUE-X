"use client";

import { useState } from "react";
import TrustBadge from "./TrustBadge";
import StyleSelector from "./StyleSelector";
import ChatInput from "./ChatInput";
import GenerateButton from "./GenerateButton";
import CapsuleOutput from "./CapsuleOutput";
import { Shield, Zap, Clock, Check, Loader2 } from "lucide-react";

type StyleType = "Brief" | "Detailed" | "Code-Focused";

export default function CapsuleGenerator() {
    const [chatText, setChatText] = useState("");
    const [style, setStyle] = useState<StyleType>("Brief");
    const [capsule, setCapsule] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!chatText.trim()) return;

        setIsLoading(true);
        setCapsule(""); // Clear previous capsule
        setError(null);

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ chatText, style }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Generation failed");
            }

            setCapsule(data.capsule);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unexpected error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#080C14] text-zinc-100 flex flex-col items-center">
            <TrustBadge />

            <main className="w-full max-w-[760px] px-6 mt-16 md:mt-24 space-y-20 md:space-y-32 animate-in fade-in duration-1000">
                {/* HERO SECTION */}
                <header className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 bg-[#1a1033] border border-[#6366F1] px-4 py-1.5 rounded-full mb-2">
                        <span className="text-[11px] font-bold text-[#6366F1] uppercase tracking-wider">
                            ⚡ AI Context Engine
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-[0.15em] text-white">
                        CONTINUE-X
                    </h1>
                    <p className="text-[#64748B] text-[16px]">
                        When your AI chat slows down — compress it.
                    </p>
                </header>

                {/* HOW IT WORKS */}
                <section className="space-y-12">
                    <h2 className="text-2xl font-bold text-white text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { id: "01", title: "Paste Your Chat", body: "Copy your entire AI conversation — any tool, any length." },
                            { id: "02", title: "Choose Your Style", body: "Brief for quick context. Detailed for full history. Code for dev sessions." },
                            { id: "03", title: "Resume Instantly", body: "Paste the Capsule into any new AI chat and continue exactly where you left off." }
                        ].map((step) => (
                            <div key={step.id} className="bg-[#0D1117] border border-[#1E293B] p-7 rounded-2xl space-y-4 overflow-hidden group hover:border-[#6366F1]/50 transition-colors">
                                <span className="text-5xl font-bold text-[#6366F1] opacity-20 block leading-none">
                                    {step.id}
                                </span>
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">{step.title}</h3>
                                <p className="text-sm text-[#64748B] leading-relaxed">{step.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WORKS WITH */}
                <section className="space-y-6 text-center">
                    <h2 className="text-[11px] font-bold text-[#475569] uppercase tracking-[0.3em]">
                        Works With Every AI Tool
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Claude", "ChatGPT", "Cursor", "Antigravity", "Gemini", "Copilot"].map((tool) => (
                            <span key={tool} className="px-4 py-1.5 bg-[#0D1117] border border-[#1E293B] rounded-full text-[13px] text-[#64748B] font-medium">
                                {tool}
                            </span>
                        ))}
                    </div>
                </section>

                {/* MAIN TOOL CARD */}
                <section id="generate" className="bg-[#0D1117] p-8 rounded-[24px] border border-[#1E293B] shadow-[0_0_60px_rgba(99,102,241,0.06)] space-y-8 relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-500/10 blur-3xl rounded-full -z-10" />
                    <StyleSelector selected={style} onSelect={setStyle} />
                    <ChatInput value={chatText} onChange={setChatText} />

                    <div className="space-y-4">
                        <GenerateButton
                            onClick={handleGenerate}
                            isLoading={isLoading}
                            disabled={!chatText.trim()}
                        />
                        {error && (
                            <p className="text-red-400 text-[13px] text-center font-medium animate-in fade-in slide-in-from-top-1">
                                {error}
                            </p>
                        )}
                    </div>
                </section>

                <CapsuleOutput capsule={capsule} />

                {/* WHY CONTINUE-X */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Shield,
                            title: "Zero Data Storage",
                            body: "Your conversations are processed in memory and never stored, logged, or saved. Ever."
                        },
                        {
                            icon: Zap,
                            title: "Any AI Tool",
                            body: "Works with Claude, ChatGPT, Cursor, Antigravity, Gemini, or any AI tool you use."
                        },
                        {
                            icon: Clock,
                            title: "Resume in Seconds",
                            body: "Don't rebuild context manually. One capsule, paste, and your AI is fully up to speed."
                        }
                    ].map((feature, i) => (
                        <div key={i} className="space-y-4 group">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-[#6366F1] group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                            <p className="text-sm text-[#64748B] leading-relaxed">{feature.body}</p>
                        </div>
                    ))}
                </section>

                {/* FOR TEAMS */}
                <section className="bg-[#0D1117] border border-[#1E293B] rounded-[24px] overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12 space-y-6">
                            <span className="text-[11px] font-bold text-[#6366F1] uppercase tracking-wider">
                                For Teams
                            </span>
                            <h2 className="text-3xl font-bold text-white leading-tight">
                                Built for serious AI work
                            </h2>
                            <p className="text-[#64748B] leading-relaxed">
                                Whether you're a solo developer, a team using AI daily, or an enterprise running complex AI workflows — CONTINUE-X keeps your work moving without losing context.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "No account needed — works instantly",
                                    "Share capsules with teammates to hand off AI work"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-[#CBD5E1]">
                                        <div className="bg-emerald-500/10 p-1 rounded-full">
                                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[#080C14]/50 p-8 md:p-12 border-l border-[#1E293B] grid grid-cols-1 gap-8 content-center">
                            {[
                                { val: "31,000+", label: "characters compressed per session" },
                                { val: "3", label: "capsule styles for every workflow" },
                                { val: "0", label: "bytes of your data stored" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="text-3xl font-black text-white">{stat.val}</div>
                                    <div className="text-[11px] font-bold text-[#475569] uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ENHANCED FOOTER */}
                <footer className="pt-20 pb-12 border-t border-[#1E293B]/50 space-y-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div className="text-xl font-black tracking-widest text-white">
                            CONTINUE-X
                        </div>
                        <div className="text-sm text-[#64748B] font-medium">
                            Built for AI builders who ship
                        </div>
                        <div className="text-sm text-[#475569] font-bold uppercase tracking-widest">
                            Zero data. Pure focus.
                        </div>
                    </div>

                    <div className="pt-8 border-t border-[#1E293B]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#334155] font-medium">
                        <p>© 2026 CONTINUE-X. Your chats never touch our servers.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-white transition-colors">GitHub</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
