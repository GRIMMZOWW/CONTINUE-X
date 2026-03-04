"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type StyleType = "Brief" | "Detailed" | "Code-Focused";

interface StyleSelectorProps {
    selected: StyleType;
    onSelect: (style: StyleType) => void;
}

export default function StyleSelector({ selected, onSelect }: StyleSelectorProps) {
    const styles: StyleType[] = ["Brief", "Detailed", "Code-Focused"];

    return (
        <div className="flex gap-2">
            {styles.map((style) => (
                <Button
                    key={style}
                    variant={selected === style ? "default" : "outline"}
                    onClick={() => onSelect(style)}
                    className={cn(
                        "flex-1 transition-all duration-200",
                        selected === style
                            ? "bg-[#6366F1] hover:bg-[#5558E3] text-white border-transparent"
                            : "hover:bg-zinc-100"
                    )}
                >
                    {style}
                </Button>
            ))}
        </div>
    );
}
