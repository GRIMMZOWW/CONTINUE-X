"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type StyleType = "Brief" | "Detailed" | "Code-Focused";

interface StyleSelectorProps {
    selected: StyleType;
    onSelect: (style: StyleType) => void;
}

export default function StyleSelector({ selected, onSelect }: StyleSelectorProps) {
    const options: { id: StyleType; label: string; icon: string }[] = [
        { id: "Brief", label: "Brief", icon: "📋" },
        { id: "Detailed", label: "Detailed", icon: "📄" },
        { id: "Code-Focused", label: "Code-Focused", icon: "💻" },
    ];

    return (
        <div className="space-y-3">
            <label className="text-[11px] font-bold text-[#475569] uppercase tracking-[0.2em] px-1">
                Compression Mode
            </label>
            <div className="flex flex-wrap md:flex-row gap-2">
                {options.map((opt) => (
                    <Button
                        key={opt.id}
                        onClick={() => onSelect(opt.id)}
                        className={cn(
                            "flex-1 min-w-[100px] md:min-w-0 h-11 transition-all duration-200 rounded-lg flex items-center justify-center gap-2 text-[13px] md:text-[14px] px-2 md:px-4",
                            selected === opt.id
                                ? "bg-[#6366F1] hover:bg-[#5558E3] text-white font-semibold border-none shadow-lg shadow-indigo-500/20"
                                : "bg-[#0F172A] border border-[#1E293B] text-[#475569] hover:border-[#6366F1] hover:text-[#94A3B8]"
                        )}
                    >
                        <span className="text-[14px] md:text-[16px]">{opt.icon}</span>
                        <span className="truncate">{opt.label}</span>
                    </Button>
                ))}
            </div>
        </div>
    );
}
