"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "How it Works", href: "/how-it-works" },
        { name: "FAQ", href: "/faq" },
        { name: "Guidance", href: "/guidance" },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 h-16 z-[100] transition-all duration-300 border-b",
            scrolled
                ? "bg-[#080C14]/80 backdrop-blur-md border-[#1E293B]"
                : "bg-transparent border-transparent"
        )}>
            <div className="max-w-[1200px] mx-auto h-full px-8 flex items-center justify-between">
                {/* LOGO */}
                <Link
                    href="/"
                    className="text-xl font-black tracking-widest text-white hover:opacity-80 transition-opacity"
                >
                    CONTINUE-X
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-8 h-full">
                    <div className="flex items-center gap-6 h-full">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-[14px] transition-all h-full flex items-center px-1 border-b-2",
                                    isActive(link.href)
                                        ? "text-white font-semibold border-[#6366F1]"
                                        : "text-[#64748B] hover:text-white border-transparent"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/"
                        className="bg-[#6366F1] hover:bg-[#4F46E5] text-white rounded-lg px-6 h-9 text-[13px] font-semibold transition-all flex items-center justify-center"
                    >
                        Open App
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div className={cn(
                "fixed inset-0 top-16 bg-[#080C14] z-[90] md:hidden transition-transform duration-300 flex flex-col p-8 gap-6 border-t border-[#1E293B]",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-bold text-white"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="bg-[#6366F1] hover:bg-[#4F46E5] text-white py-6 text-lg font-bold rounded-xl mt-4 flex items-center justify-center"
                >
                    Open App
                </Link>
            </div>
        </nav>
    );
}
