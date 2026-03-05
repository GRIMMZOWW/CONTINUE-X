"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface GenerateButtonProps {
    onClick: () => void;
    isLoading: boolean;
    disabled?: boolean;
}

export default function GenerateButton({ onClick, isLoading, disabled }: GenerateButtonProps) {
    return (
        <Button
            onClick={onClick}
            disabled={isLoading || disabled}
            className="w-full h-[52px] text-[15px] font-semibold bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white rounded-xl shadow-[0_4px_24px_rgba(99,102,241,0.3)] hover:shadow-[0_4px_32px_rgba(99,102,241,0.5)] active:scale-[0.98] transition-all duration-300 disabled:opacity-40 disabled:shadow-none disabled:active:scale-100"
        >
            {isLoading ? (
                <div className="flex items-center gap-3">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Compressing your chat...</span>
                </div>
            ) : (
                <span className="flex items-center gap-2">
                    Generate Capsule ⚡
                </span>
            )}
        </Button>
    );
}
