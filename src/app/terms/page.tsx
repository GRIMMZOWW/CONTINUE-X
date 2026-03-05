"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#080C14] text-zinc-100 flex flex-col items-center py-20 px-6">
            <div className="w-full max-w-[760px] space-y-12">
                <header className="space-y-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to App
                    </Link>
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                            Terms of Use
                        </h1>
                        <p className="text-[#64748B] text-lg">
                            Last updated: January 2026
                        </p>
                    </div>
                </header>

                <main className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Acceptance</h2>
                        <p className="text-[#64748B] leading-relaxed text-lg">
                            By using CONTINUE-X you agree to these terms. If you do not agree, please do not use the service.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. What CONTINUE-X Does</h2>
                        <p className="text-[#64748B] leading-relaxed text-lg">
                            CONTINUE-X is a tool that compresses AI conversations into reusable context capsules. It is provided as-is for personal and professional use.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. Acceptable Use</h2>
                        <p className="text-[#64748B] leading-relaxed text-lg">
                            You agree not to use CONTINUE-X to process conversations containing illegal content, to attempt to reverse engineer the service, or to use the service in any way that violates applicable laws.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. No Warranty</h2>
                        <p className="text-[#64748B] leading-relaxed text-lg">
                            CONTINUE-X is provided without warranty of any kind. We do not guarantee the accuracy or completeness of generated capsules. Use your judgment when relying on capsule output.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
                        <p className="text-[#64748B] leading-relaxed text-lg">
                            CONTINUE-X shall not be liable for any damages arising from your use of the service.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Changes</h2>
                        <p className="text-[#64748B] leading-relaxed text-lg">
                            We may update these terms at any time. Continued use of CONTINUE-X after changes constitutes acceptance.
                        </p>
                    </section>
                </main>

                <footer className="text-center pt-12">
                    <p className="text-[#1E293B] text-[12px] uppercase tracking-widest font-bold">
                        CONTINUE-X — Built for AI builders
                    </p>
                </footer>
            </div>
        </div>
    );
}
