"use client";

import CopyButton from "./CopyButton";

interface CapsuleOutputProps {
    capsule: string;
}

export default function CapsuleOutput({ capsule }: CapsuleOutputProps) {
    if (!capsule) return null;

    return (
        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-6 shadow-2xl">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 block">
                    Generated Capsule
                </label>
                <div className="bg-zinc-900/50 rounded-lg p-4 mb-6 border border-zinc-800/50 max-h-[400px] overflow-y-auto custom-scrollbar">
                    <pre className="font-mono text-sm text-zinc-300 whitespace-pre-wrap break-all leading-relaxed">
                        {capsule}
                    </pre>
                </div>
                <div className="flex justify-end">
                    <CopyButton text={capsule} />
                </div>
            </div>
        </div>
    );
}
