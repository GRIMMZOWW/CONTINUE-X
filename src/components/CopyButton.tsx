"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
    text: string;
    disabled?: boolean;
}

export default function CopyButton({ text, disabled }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (!text || disabled) return;

        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Silently fail for copy errors
        }
    };

    return (
        <Button
            variant="outline"
            onClick={handleCopy}
            disabled={disabled}
            className={cn(
                "min-w-[120px] h-9 text-[13px] rounded-lg transition-all duration-300",
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
                    Copy Capsule
                </>
            )}
        </Button>
    );
}
