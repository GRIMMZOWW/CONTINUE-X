"use client";

import { useState } from "react";
import TrustBadge from "./TrustBadge";
import StyleSelector from "./StyleSelector";
import ChatInput from "./ChatInput";
import GenerateButton from "./GenerateButton";
import CapsuleOutput from "./CapsuleOutput";

type StyleType = "Brief" | "Detailed" | "Code-Focused";

export default function CapsuleGenerator() {
    const [chatText, setChatText] = useState("");
    const [style, setStyle] = useState<StyleType>("Brief");
    const [capsule, setCapsule] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        if (!chatText.trim()) return;

        setIsLoading(true);
        setCapsule(""); // Clear previous capsule

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const mockCapsule = `=== CONTINUE-X CAPSULE (${style.toUpperCase()}) ===
GOAL: Building a chat compression web app called CONTINUE-X
CURRENT STATE: Phase 1 UI complete with all components
NEXT STEP: Wire Claude API for real capsule generation
KEY DECISIONS: Next.js 14, TypeScript, Tailwind, zero data storage`;

        setCapsule(mockCapsule);
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#0F172A] text-zinc-100 flex flex-col items-center pb-20">
            <TrustBadge />

            <main className="w-full max-w-[800px] px-6 mt-12 space-y-8 animate-in fade-in slide-in-from-top-4 duration-700">
                <header className="text-center space-y-3">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
                        CONTINUE-X
                    </h1>
                    <p className="text-zinc-400 text-lg">
                        Compress massive AI chats into actionable dev capsules.
                    </p>
                </header>

                <section className="space-y-6 bg-zinc-900/40 p-6 md:p-8 rounded-2xl border border-zinc-800/50 backdrop-blur-sm shadow-xl">
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">
                            Compression Style
                        </label>
                        <StyleSelector selected={style} onSelect={setStyle} />
                    </div>

                    <div className="space-y-3">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">
                            Source Conversation
                        </label>
                        <ChatInput value={chatText} onChange={setChatText} />
                    </div>

                    <GenerateButton
                        onClick={handleGenerate}
                        isLoading={isLoading}
                        disabled={!chatText.trim()}
                    />
                </section>

                <CapsuleOutput capsule={capsule} />
            </main>
        </div>
    );
}
