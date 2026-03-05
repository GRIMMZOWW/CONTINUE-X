import { NextRequest, NextResponse } from "next/server";
import { validateInput } from "@/lib/validators";
import { generateCapsule } from "@/lib/claude";

export async function POST(req: NextRequest) {
    try {
        const { chatText, style } = await req.json();

        // 1. Validate Input
        const { valid, error } = validateInput(chatText, style);
        if (!valid) {
            return NextResponse.json({ error }, { status: 400 });
        }

        // 2. Map style to lowercase as requested by Claude helper signature
        const styleMap: Record<string, "brief" | "detailed" | "code"> = {
            "Brief": "brief",
            "Detailed": "detailed",
            "Code-Focused": "code"
        };
        const mappedStyle = styleMap[style];

        // 3. Smart Truncation for Large Chats
        const words = chatText.split(/\s+/);
        let processedText = chatText;

        if (words.length > 6000) {
            const firstPartCount = Math.floor(words.length * 0.3);
            const lastPartCount = Math.floor(words.length * 0.4);

            const firstPart = words.slice(0, firstPartCount).join(" ");
            const lastPart = words.slice(words.length - lastPartCount).join(" ");

            processedText = `${firstPart}\n\n[... middle section compressed ...]\n\n${lastPart}`;
        }

        // 4. Generate Capsule
        const capsule = await generateCapsule(processedText, mappedStyle);

        // 4. Return Result
        return NextResponse.json({ capsule }, { status: 200 });
    } catch (error) {
        // Note: NEVER log chatText for privacy
        console.error("API Route Error:", error instanceof Error ? error.message : "Internal Server Error");
        return NextResponse.json(
            { error: "Generation failed, please try again" },
            { status: 500 }
        );
    }
}
