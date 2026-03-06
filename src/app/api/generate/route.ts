import { NextRequest, NextResponse } from "next/server";
import { validateInput } from "@/lib/validators";
import { generateCapsule, generateResumePrompt } from "@/lib/claude";

export const maxDuration = 60;

function smartTruncate(text: string): string {
    const words = text.split(/\s+/);

    // If under 4000 words, use as-is
    if (words.length <= 4000) return text;

    // Take first 1000 words (context/setup)
    const start = words.slice(0, 1000).join(' ');

    // Take last 2000 words (most recent work)
    const end = words.slice(-2000).join(' ');

    return start + '\n\n[... earlier parts of conversation compressed ...]\n\n' + end;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { chatText, customApiKey, customModel, customProvider } = body;
        const normalizedStyle = body.style?.toLowerCase()?.trim();

        // 1. Validate Input
        const { valid, error } = validateInput(chatText, normalizedStyle);
        if (!valid) {
            return NextResponse.json({ error }, { status: 400 });
        }

        // 2. Smart Truncation for Large Chats
        const processedText = smartTruncate(chatText);

        // 3. Generate Capsule
        const capsule = await generateCapsule(
            processedText,
            normalizedStyle as "brief" | "detailed" | "code",
            customApiKey,
            customProvider,
            customModel
        );

        // 4. Generate Smart Resume Prompt
        const resumePrompt = await generateResumePrompt(capsule, customApiKey, customProvider);

        // 5. Return Result
        return NextResponse.json({ capsule, resumePrompt }, { status: 200 });
    } catch (error) {
        // Note: NEVER log chatText for privacy
        console.error("API Route Error:", error instanceof Error ? error.message : "Internal Server Error");
        return NextResponse.json(
            { error: "Generation failed, please try again" },
            { status: 500 }
        );
    }
}
