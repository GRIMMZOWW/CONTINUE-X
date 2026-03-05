"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Zap, Clock, Check } from "lucide-react";

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-[#080C14] text-zinc-100 flex flex-col items-center py-20 px-6">
            <div className="w-full max-w-[760px] space-y-20">
                <header className="space-y-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to App
                    </Link>
                    <div className="space-y-2 text-center">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                            How It Works
                        </h1>
                        <p className="text-[#64748B] text-lg">
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
                            <div key={step.id} className="bg-[#0D1117] border border-[#1E293B] p-7 rounded-2xl space-y-4 overflow-hidden group hover:border-[#6366F1]/50 transition-colors">
                                <span className="text-5xl font-bold text-[#6366F1] opacity-20 block leading-none">
                                    {step.id}
                                </span>
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">{step.title}</h3>
                                <p className="text-sm text-[#64748B] leading-relaxed">{step.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WORKS WITH SECTION */}
                <section className="space-y-6 text-center">
                    <h2 className="text-[11px] font-bold text-[#475569] uppercase tracking-[0.3em]">
                        Works With Every AI Tool
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Claude", "ChatGPT", "Cursor", "Antigravity", "Gemini", "Copilot"].map((tool) => (
                            <span key={tool} className="px-4 py-1.5 bg-[#0D1117] border border-[#1E293B] rounded-full text-[13px] text-[#64748B] font-medium">
                                {tool}
                            </span>
                        ))}
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

                <footer className="text-center pt-12">
                    <p className="text-[#1E293B] text-[12px] uppercase tracking-widest font-bold">
                        CONTINUE-X — Built for AI builders
                    </p>
                </footer>
            </div>
        </div>
    );
}
