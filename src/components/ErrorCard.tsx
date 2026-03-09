"use client";

import { AlertTriangle } from "lucide-react";

interface ErrorCardProps {
    message: string;
}

export default function ErrorCard({ message }: ErrorCardProps) {
    if (!message) return null;

    return (
        <div className="bg-[#1a0a0a] border border-[#ef4444] rounded-xl p-6 flex flex-col items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-500">
            <div className="w-10 h-10 rounded-full bg-[#ef4444]/10 flex items-center justify-center border border-[#ef4444]/20">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-[#94A3B8] text-[14px] text-center leading-relaxed">
                {message}
            </p>
        </div>
    );
}
