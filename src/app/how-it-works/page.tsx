"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Zap, Clock, Check, Github, ExternalLink } from "lucide-react";

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-[#080C14] text-zinc-100 flex flex-col items-center py-20 px-6 font-sans">
            <div className="w-full max-w-[800px] space-y-24 md:space-y-32">
                <header className="space-y-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to App
                    </Link>
                    <div className="space-y-3 text-center">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                            How It Works
                        </h1>
                        <p className="text-[#64748B] text-xl">
                            Master the art of AI context compression
                        </p>
                    </div>
                </header>

                {/* HOW IT WORKS SECTION */}
                <section className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { id: "01", title: "Paste Your Chat", body: "Copy your entire AI conversation — any tool, any length." },
                            { id: "02", title: "Choose Your Style", body: "Brief for quick context. Detailed for full history. Code for dev sessions." },
                            { id: "03", title: "Resume Instantly", body: "Paste the Capsule into any new AI chat and continue exactly where you left off." }
                        ].map((step) => (
                            <div key={step.id} className="bg-[#0D1117] border border-[#1E293B] p-8 rounded-2xl space-y-4 overflow-hidden group hover:border-[#6366F1]/50 transition-colors">
                                <span className="text-5xl font-bold text-[#6366F1] opacity-20 block leading-none">
                                    {step.id}
                                </span>
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">{step.title}</h3>
                                <p className="text-sm text-[#64748B] leading-relaxed">{step.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* OBJECTION HANDLER: WHY NOT JUST COPY-PASTE? */}
                <section className="space-y-12">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Why Not Just Copy-Paste Your Chat?</h2>
                        <p className="text-[#64748B] text-lg">We get this question a lot. Here&apos;s the truth.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* RAW COPY-PASTE */}
                        <div className="bg-[#1a0a0a] border border-[#3f1010] rounded-2xl overflow-hidden">
                            <div className="bg-[#3f1010]/20 p-6 border-b border-[#3f1010]">
                                <h3 className="text-xl font-bold text-red-500 flex items-center gap-2">
                                    ❌ Raw Copy-Paste
                                </h3>
                            </div>
                            <ul className="p-8 space-y-4">
                                {[
                                    "Dumps thousands of lines into new chat",
                                    "AI gets confused by conversation format",
                                    "Wastes your entire context window immediately",
                                    "AI focuses on old messages not your current goal",
                                    "Takes 10+ minutes to re-orient the AI",
                                    "New AI has no idea what decisions were made"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-[#CC9999]">
                                        <span className="shrink-0 text-red-900">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CONTINUE-X CAPSULE */}
                        <div className="bg-[#0a1a0f] border border-[#103f1f] rounded-2xl overflow-hidden">
                            <div className="bg-[#103f1f]/20 p-6 border-b border-[#103f1f]">
                                <h3 className="text-xl font-bold text-emerald-500 flex items-center gap-2">
                                    ✅ CONTINUE-X Capsule
                                </h3>
                            </div>
                            <ul className="p-8 space-y-4">
                                {[
                                    "Sends only what matters — goal, state, next step",
                                    "AI reads it instantly and understands everything",
                                    "Context window saved for actual new work",
                                    "AI starts exactly where you left off",
                                    "Resume in under 30 seconds",
                                    "All key decisions preserved and structured"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-[#99CC99]">
                                        <span className="shrink-0 text-emerald-900">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <p className="text-[#64748B] text-center italic max-w-[600px] mx-auto leading-relaxed">
                        &quot;A raw chat paste is noise. A Capsule is signal. The difference is whether your AI picks up exactly where you left off — or has to figure it out.&quot;
                    </p>
                </section>

                {/* WORKS WITH SECTION */}
                <section className="space-y-8 text-center bg-[#0D1117] p-12 rounded-[24px] border border-[#1E293B]">
                    <h2 className="text-[11px] font-bold text-[#475569] uppercase tracking-[0.3em]">
                        Works With Every AI Tool
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Claude", "ChatGPT", "Cursor", "Antigravity", "Gemini", "Copilot"].map((tool) => (
                            <span key={tool} className="px-5 py-2 bg-[#080C14] border border-[#1E293B] rounded-full text-[13px] text-[#64748B] font-medium hover:border-[#6366F1]/50 transition-colors">
                                {tool}
                            </span>
                        ))}
                    </div>
                </section>

                {/* BUILT BY BHAUMIK SECTION */}
                <section className="bg-[#0D1117] border border-[#1E293B] rounded-[24px] p-8 md:p-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full -mr-20 -mt-20" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                                    The Builder
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                                    Built by Bhaumik
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-[#64748B] text-lg leading-relaxed">
                                        CONTINUE-X was born from a real problem I faced myself. Long AI sessions losing context, my work getting interrupted, momentum breaking every time I had to start a new chat. So I built this to solve my own problem — and now it solves yours too.
                                    </p>
                                    <p className="text-[#64748B] leading-relaxed">
                                        Every line of code, every design decision, every capsule style was crafted by me to make AI work feel uninterrupted and focused.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                {["Vibecoder", "AI Builder"].map((tag) => (
                                    <span key={tag} className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[11px] font-bold text-indigo-400 uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#080C14] border border-[#1E293B] rounded-[32px] p-12 text-center space-y-8 group-hover:border-[#6366F1]/30 transition-colors shadow-2xl">
                            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-transparent border border-indigo-500/30 text-5xl font-black text-white relative">
                                B
                                <div className="absolute inset-0 rounded-full border border-indigo-500/50 animate-pulse" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-2xl font-bold text-white">Bhaumik</p>
                                <p className="text-[#64748B] font-medium tracking-wide uppercase text-xs">Founder, CONTINUE-X</p>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href="https://github.com/GRIMMZOWW"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-[#0D1117] border border-[#1E293B] hover:border-[#6366F1] hover:text-white px-6 py-3 rounded-xl text-sm font-bold text-zinc-300 transition-all group/btn w-full justify-center"
                                >
                                    <Github className="w-4 h-4" />
                                    github.com/GRIMMZOWW
                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all" />
                                </a>
                                <p className="text-[#334155] text-[12px] font-medium">Co-built with Claude (Anthropic) — AI pair programming</p>
                            </div>

                            <p className="text-[#475569] text-[11px] font-bold uppercase tracking-widest pt-4">
                                See all my other projects →
                            </p>
                        </div>
                    </div>
                </section>

                {/* WHY CONTINUE-X SECTION */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Shield,
                            title: "Zero Data Storage",
                            body: "Your conversations are processed in memory and never stored, logged, or saved. Ever."
                        },
                        {
                            icon: Zap,
                            title: "Any AI Tool",
                            body: "Works with Claude, ChatGPT, Cursor, Antigravity, Gemini, or any AI tool you use."
                        },
                        {
                            icon: Clock,
                            title: "Resume in Seconds",
                            body: "Don&apos;t rebuild context manually. One capsule, paste, and your AI is fully up to speed."
                        }
                    ].map((feature, i) => (
                        <div key={i} className="space-y-4 group">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-[#6366F1] group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                            <p className="text-sm text-[#64748B] leading-relaxed">{feature.body}</p>
                        </div>
                    ))}
                </section>

                {/* FOR TEAMS SECTION */}
                <section className="bg-[#0D1117] border border-[#1E293B] rounded-[24px] overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12 space-y-6">
                            <span className="text-[11px] font-bold text-[#6366F1] uppercase tracking-wider">
                                For Teams
                            </span>
                            <h2 className="text-3xl font-bold text-white leading-tight">
                                Built for serious AI work
                            </h2>
                            <p className="text-[#64748B] leading-relaxed">
                                Whether you&apos;re a solo developer, a team using AI daily, or an enterprise running complex AI workflows — CONTINUE-X keeps your work moving without losing context.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "No account needed — works instantly",
                                    "Share capsules with teammates to hand off AI work"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-[#CBD5E1]">
                                        <div className="bg-emerald-500/10 p-1 rounded-full">
                                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[#080C14]/50 p-8 md:p-12 border-l border-[#1E293B] grid grid-cols-1 gap-8 content-center">
                            {[
                                { val: "31,000+", label: "characters compressed per session" },
                                { val: "3", label: "capsule styles for every workflow" },
                                { val: "0", label: "bytes of your data stored" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="text-3xl font-black text-white">{stat.val}</div>
                                    <div className="text-[11px] font-bold text-[#475569] uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
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
