import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CONTINUE-X — Resume any AI chat instantly",
  description: "Compress long AI conversations into a Capsule. Paste into a new chat and resume exactly where you left off.",
  icons: {
    icon: "/logo.svg",
  },
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#080C14] antialiased relative pt-16`}>
        {/* Sublte top glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
