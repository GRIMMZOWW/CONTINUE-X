"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function GuidancePage() {
    return (
        <div className="min-h-screen bg-[#080C14] text-zinc-100 flex flex-col items-center py-12 md:py-20 px-4 md:px-6">
            <div className="w-full max-w-[760px] space-y-12 md:space-y-24">
                {/* HEADER */}
                <header className="space-y-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to App
                    </Link>
                    <div className="space-y-3 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                            How to Use CONTINUE-X
                        </h1>
                        <p className="text-[#64748B] text-lg md:text-xl">
                            A step-by-step guide to compressing and resuming AI sessions
                        </p>
                    </div>
                </header>

                {/* SECTION 1: THE PROBLEM */}
                <section className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-[#1a1033] border border-[#6366F1] px-4 py-1.5 rounded-full">
                        <span className="text-[11px] font-bold text-[#6366F1] uppercase tracking-wider">01 . The Problem</span>
                    </div>
                    <p className="text-[#CBD5E1] text-base md:text-lg leading-relaxed">
                        Every AI tool has a context limit. When your chat gets too long, the AI starts slowing down, losing track of earlier decisions, and giving weaker responses. Starting a new chat means rebuilding all that context from scratch — which wastes time and breaks your flow.
                    </p>
                </section>

                {/* SECTION 2: THE SOLUTION */}
                <section className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-[#1a1033] border border-[#6366F1] px-4 py-1.5 rounded-full">
                        <span className="text-[11px] font-bold text-[#6366F1] uppercase tracking-wider">02 . The Solution: Capsules</span>
                    </div>
                    <p className="text-[#CBD5E1] text-base md:text-lg leading-relaxed">
                        A Capsule is a compressed version of your conversation that fits into the start of any new AI session. Instead of re-explaining your entire project, you paste one Capsule and the AI immediately understands everything.
                    </p>
                </section>

                {/* SECTION 3: STEP BY STEP */}
                <section className="space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">Step by Step</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { n: "1", t: "Copy your entire AI conversation", b: "Select all messages in your AI tool and copy them as plain text." },
                            { n: "2", t: "Paste into CONTINUE-X", b: "Open the app, paste your conversation into the input area." },
                            { n: "3", t: "Choose your capsule style", b: "Brief for quick context, Detailed for full history, Code-Focused for dev sessions." },
                            { n: "4", t: "Copy and resume", b: "Copy the generated Capsule and paste it as the first message in your new AI chat." }
                        ].map((s) => (
                            <div key={s.n} className="bg-[#0D1117] border border-[#1E293B] p-6 md:p-8 rounded-2xl space-y-4 relative overflow-hidden">
                                <span className="text-5xl md:text-6xl font-black text-[#6366F1]/10 absolute -top-2 -right-2">{s.n}</span>
                                <h3 className="text-lg font-bold text-white relative z-10">{s.t}</h3>
                                <p className="text-sm text-[#64748B] leading-relaxed relative z-10">{s.b}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 4: STYLES */}
                <section className="space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">Choosing the Right Style</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {[
                            { id: "Brief", desc: "Best for: Quick context switches, simple tasks, when you need to resume a conversation fast.", out: "~200 words" },
                            { id: "Detailed", desc: "Best for: Long research sessions, complex projects with many threads.", out: "~500 words" },
                            { id: "Code-Focused", desc: "Best for: Development sessions, debugging, architecture work. Preserves file names and function names.", out: "~600 words" }
                        ].map((st) => (
                            <div key={st.id} className="bg-[#0D1117] border border-[#1E293B] p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 hover:border-[#6366F1]/50 transition-colors group">
                                <div className="space-y-2 text-center md:text-left">
                                    <h3 className="text-xl font-bold text-[#6366F1]">{st.id}</h3>
                                    <p className="text-sm text-[#64748B] max-w-md leading-relaxed">{st.desc}</p>
                                </div>
                                <div className="text-[10px] md:text-[11px] font-bold text-[#475569] uppercase tracking-widest bg-[#080C14] px-4 py-2 rounded-lg border border-[#1E293B] self-center md:self-auto">
                                    Output: {st.out}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 5: TIPS */}
                <section className="bg-[#0D1117] p-6 md:p-12 rounded-[24px] border border-[#1E293B] space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">Tips for Best Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Copy the full conversation including both your messages and the AI responses",
                            "For very long chats, use Brief mode first",
                            "The Capsule works best when pasted as the FIRST message in a new chat",
                            "Add \"Please read this context and confirm you understand before we continue\" after pasting the Capsule"
                        ].map((tip, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                </div>
                                <p className="text-sm text-[#CBD5E1] leading-relaxed">{tip}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="text-center pt-12 pb-20 border-t border-[#1E293B]/50">
                    <p className="text-[#1E293B] text-[12px] uppercase tracking-widest font-bold mb-4">
                        CONTINUE-X — Built by Bhaumik for AI builders who ship
                    </p>
                    <div className="flex justify-center gap-6 text-[12px] text-[#334155] font-medium">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <a href="https://github.com/GRIMMZOWW" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                    <p className="text-[#1E293B] text-[10px] mt-8 uppercase tracking-[0.2em] font-medium opacity-50">
                        © 2026 CONTINUE-X by Bhaumik. Your chats never touch our servers.
                    </p>
                </footer>
            </div>
        </div>
    );
}
