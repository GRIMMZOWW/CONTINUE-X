"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
    const faqs = [
        {
            q: "Is my chat data stored anywhere?",
            a: "No. Never. Your conversation is sent directly to our AI engine, processed in memory, and the capsule is returned to you. We do not store, log, or save any part of your chat. Not even temporarily."
        },
        {
            q: "Which AI tools does CONTINUE-X work with?",
            a: "CONTINUE-X works with every AI tool — Claude, ChatGPT, Cursor, Antigravity, Gemini, GitHub Copilot, and any other AI chat interface. Just copy the conversation as plain text and paste it in."
        },
        {
            q: "What is a Capsule?",
            a: "A Capsule is a compressed, structured summary of your AI conversation. It contains your goal, current state, decisions made, and the exact next step — everything a new AI session needs to understand your full context instantly."
        },
        {
            q: "What is the difference between Brief, Detailed, and Code-Focused?",
            a: "Brief gives you a short 200-word summary — perfect for quick context handoffs. Detailed captures the full history including background, decisions, and open threads up to 500 words. Code-Focused preserves technical details like file names, functions, errors, and architecture decisions — ideal for development sessions."
        },
        {
            q: "Do I need to create an account?",
            a: "No. CONTINUE-X requires zero signup, zero login, and zero personal information. Open the app and use it instantly."
        },
        {
            q: "How long can my chat be?",
            a: "You can paste chats up to 120,000 characters — roughly equivalent to a full day of intensive AI work. For very long sessions we recommend using Brief mode first."
        },
        {
            q: "Can I use CONTINUE-X for my team?",
            a: "Yes. Generate a Capsule and share it with any teammate. They paste it into their AI session and instantly have full context of where the work stands. No account sharing needed."
        },
        {
            q: "Is CONTINUE-X free?",
            a: "Yes, completely free right now. Use it as much as you need."
        }
    ];

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
                            Frequently Asked Questions
                        </h1>
                        <p className="text-[#64748B] text-lg">
                            Everything you need to know about CONTINUE-X
                        </p>
                    </div>
                </header>

                <section className="bg-[#0D1117] border border-[#1E293B] rounded-2xl overflow-hidden shadow-2xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="border-b border-[#1E293B] last:border-0 px-8"
                            >
                                <AccordionTrigger className="text-left text-white py-6 hover:no-underline font-bold text-lg">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-[#64748B] text-base leading-relaxed pb-8">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
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
