"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

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
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <Button
            variant="outline"
            onClick={handleCopy}
            disabled={disabled}
            className="min-w-[140px] transition-all duration-300"
        >
            {copied ? (
                <>
                    <Check className="mr-2 h-4 w-4 text-emerald-500" />
                    Copied!
                </>
            ) : (
                <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Capsule
                </>
            )}
        </Button>
    );
}
