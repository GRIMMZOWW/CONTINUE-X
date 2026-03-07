"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#080C14] text-zinc-100 flex flex-col items-center py-12 md:py-20 px-4 md:px-6">
            <div className="w-full max-w-[760px] space-y-10 md:space-y-12">
                <header className="space-y-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to App
                    </Link>
                    <div className="space-y-2 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-[#64748B] text-base md:text-lg">
                            Last updated: January 2026
                        </p>
                    </div>
                </header>

                <main className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-white">1. Our Core Promise</h2>
                        <p className="text-[#64748B] leading-relaxed text-base md:text-xl">
                            CONTINUE-X is built on one principle: your conversations are yours. We do not store, log, sell, or process your chat data in any way beyond generating your Capsule.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-white">2. What We Collect</h2>
                        <p className="text-[#64748B] leading-relaxed text-base md:text-xl">
                            We collect nothing. No account information, no chat content, no IP addresses tied to your conversations, no cookies, no analytics tied to your identity.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-white">3. How Your Data Is Processed</h2>
                        <p className="text-[#64748B] leading-relaxed text-base md:text-xl">
                            When you paste a conversation and click Generate, your text is sent to our AI engine, processed in memory to create your Capsule, and immediately discarded. Nothing is written to any database or log file.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-white">4. Third Party Services</h2>
                        <p className="text-[#64748B] leading-relaxed text-base md:text-xl">
                            CONTINUE-X uses Groq&apos;s API to power capsule generation. Your conversation text is sent to Groq&apos;s servers for processing only. Groq&apos;s privacy policy applies to this processing. We do not share your data with any other third parties.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-white">5. Contact</h2>
                        <p className="text-[#64748B] leading-relaxed text-base md:text-xl">
                            If you have any questions about this privacy policy, you can reach us at: <a href="mailto:privacy@continue-x.app" className="text-[#6366F1] hover:underline">privacy@continue-x.app</a>
                        </p>
                    </section>
                </main>

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
