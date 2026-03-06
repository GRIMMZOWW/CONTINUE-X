"use client";

import CopyButton from "./CopyButton";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CapsuleOutputProps {
    capsule: string;
}

export default function CapsuleOutput({ capsule }: CapsuleOutputProps) {
    if (!capsule) return null;

    const handleDownload = () => {
        const blob = new Blob([capsule], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `continuex-capsule-${new Date().getTime()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // Simple syntax highlighting for sections
    const renderCapsule = (text: string) => {
        return text.split("\n").map((line, i) => {
            if (line.startsWith("===") && line.endsWith("===")) {
                return <div key={i} className="text-[#818CF8] font-bold mb-2">{line}</div>;
            }
            if (line.match(/^[A-Z\s]+:/)) {
                const [label, ...rest] = line.split(":");
                return (
                    <div key={i} className="mb-1">
                        <span className="text-[#F59E0B] font-semibold">{label}:</span>
                        <span className="text-[#CBD5E1] ml-2">{rest.join(":") || ""}</span>
                    </div>
                );
            }
            if (line.trim().startsWith("-")) {
                return <div key={i} className="text-[#CBD5E1] ml-2 leading-relaxed">{line}</div>;
            }
            return <div key={i} className="text-[#CBD5E1] leading-relaxed">{line}</div>;
        });
    };

    return (
        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
            <div className="flex items-center gap-2 px-1">
                <div className="relative flex h-1.5 w-1.5">
                    <span className="animate-pulse-green absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </div>
                <label className="text-[11px] font-bold text-[#475569] uppercase tracking-[0.2em]">
                    Generated Capsule
                </label>
            </div>

            <div className="bg-[#080C14] rounded-xl border border-[#1E293B] p-6 shadow-2xl overflow-hidden relative group">
                <div className="bg-[#080C14] rounded-lg p-1 max-h-[450px] overflow-y-auto custom-scrollbar">
                    <pre className="font-mono text-[13px] break-all whitespace-pre-wrap leading-[1.8] text-[#A5F3FC]">
                        {renderCapsule(capsule)}
                    </pre>
                </div>
                <div className="mt-6 pt-4 border-t border-[#1E293B]/50 flex justify-end gap-3">
                    <Button
                        variant="outline"
                        onClick={handleDownload}
                        className="min-w-[120px] h-9 text-[13px] rounded-lg transition-all duration-300 bg-transparent border-[#1E293B] text-[#64748B] hover:border-[#6366F1] hover:text-white"
                    >
                        <Download className="mr-2 h-3.5 w-3.5" />
                        Download Capsule
                    </Button>
                    <CopyButton text={capsule} />
                </div>
            </div>
        </div>
    );
}
