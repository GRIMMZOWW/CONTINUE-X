"use client";

import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function ChatInput({ value, onChange }: ChatInputProps) {
    return (
        <div className="space-y-3">
            <label className="text-[11px] font-bold text-[#475569] uppercase tracking-[0.2em] px-1">
                Source Conversation
            </label>
            <div className="relative">
                <Textarea
                    placeholder="Paste your full AI conversation here..."
                    className="min-h-[280px] w-full resize-none p-4 text-[14px] leading-relaxed bg-[#080C14] border-[#1E293B] text-[#CBD5E1] rounded-xl focus-visible:ring-2 focus-visible:ring-[#6366F1]/20 focus-visible:border-[#6366F1] transition-all duration-300"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                <div className="absolute bottom-4 right-4 text-[12px] text-[#334155] font-mono select-none">
                    {value.length.toLocaleString()} characters
                </div>
            </div>
        </div>
    );
}
