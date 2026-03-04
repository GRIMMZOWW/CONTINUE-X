"use client";

import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function ChatInput({ value, onChange }: ChatInputProps) {
    return (
        <div className="relative">
            <Textarea
                placeholder="Paste your full AI conversation here..."
                className="min-h-[300px] w-full resize-none p-4 text-base focus-visible:ring-[#6366F1]"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <div className="absolute bottom-3 right-3 text-xs text-muted-foreground bg-white/80 px-1 rounded">
                {value.length.toLocaleString()} characters
            </div>
        </div>
    );
}
