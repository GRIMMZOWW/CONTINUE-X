import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CONTINUE-X — Resume any AI chat instantly",
  description: "Compress long AI conversations into a Capsule. Paste into a new chat and resume exactly where you left off.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0F172A] antialiased`}>
        {children}
      </body>
    </html>
  );
}
