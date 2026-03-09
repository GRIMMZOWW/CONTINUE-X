"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Download, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResumePromptProps {
    prompt: string;
}

export default function ResumePrompt({ prompt }: ResumePromptProps) {
    const [copied, setCopied] = useState(false);

    if (!prompt) return null;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(prompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Silently fail for copy errors as they are rare and often handled by browser
        }
    };

    const handleDownload = () => {
        const blob = new Blob([prompt], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `continuex-resume-prompt-${new Date().getTime()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 space-y-4 pt-12">
            <div className="flex items-center gap-2 px-1">
                <Wand2 className="w-3.5 h-3.5 text-[#6366F1]" />
                <label className="text-[11px] font-bold text-[#475569] uppercase tracking-[0.2em]">
                    Smart Resume Prompt
                </label>
            </div>

            <div className="bg-[#0D1117] rounded-xl border border-[#1E293B] p-6 shadow-2xl relative group">
                <div className="space-y-4">
                    <div className="space-y-1">
                        <h3 className="text-sm font-bold text-white flex items-center gap-2">
                            PASTE THIS INTO YOUR NEW AI CHAT
                        </h3>
                        <p className="text-[12px] text-[#64748B]">
                            Best for resuming the conversation exactly where you left off.
                        </p>
                    </div>

                    <div className="bg-[#080C14] rounded-lg p-4 border border-[#1E293B]/50">
                        <p className="text-[13px] leading-[1.6] text-[#A5F3FC] font-medium italic">
                            &quot;{prompt}&quot;
                        </p>
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                        <Button
                            variant="outline"
                            onClick={handleDownload}
                            className="h-9 text-[12px] rounded-lg bg-transparent border-[#1E293B] text-[#64748B] hover:border-[#6366F1] hover:text-white transition-all"
                        >
                            <Download className="mr-2 h-3.5 w-3.5" />
                            Download Prompt
                        </Button>
                        <Button
                            variant="outline"
                            onClick={handleCopy}
                            className={cn(
                                "min-w-[120px] h-9 text-[12px] rounded-lg transition-all duration-300",
                                copied
                                    ? "bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-600"
                                    : "bg-transparent border-[#1E293B] text-[#64748B] hover:border-[#6366F1] hover:text-white"
                            )}
                        >
                            {copied ? (
                                <>
                                    <Check className="mr-2 h-3.5 w-3.5" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Copy className="mr-2 h-3.5 w-3.5" />
                                    Copy Prompt
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
