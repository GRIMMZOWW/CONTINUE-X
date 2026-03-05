"use client";

import { useState } from "react";
import Link from "next/link";
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

                {/* MAIN TOOL CARD */}
                <section id="app" className="bg-[#0D1117] p-8 rounded-[24px] border border-[#1E293B] shadow-[0_0_60px_rgba(99,102,241,0.06)] space-y-8 relative">
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
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                            <a href="https://github.com/GRIMMZOWW/CONTINUE-X" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
