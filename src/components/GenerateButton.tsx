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
            className="w-full h-12 text-lg font-semibold bg-[#6366F1] hover:bg-[#5558E3] transition-colors"
        >
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Compressing...
                </>
            ) : (
                <>Generate Capsule ⚡</>
            )}
        </Button>
    );
}
