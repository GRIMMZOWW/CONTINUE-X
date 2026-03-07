export async function generateCapsule(
    chatText: string,
    style: 'brief' | 'detailed' | 'code',
    customApiKey?: string,
    customProvider?: string,
    customModel?: string
): Promise<string> {

    const prompts = {
        brief: "You are a context compression engine. Compress this AI chat into a Brief Capsule with these sections:\n=== CONTINUE-X CAPSULE (BRIEF) ===\nGOAL: (1-2 sentences)\nCURRENT STATE: (bullet points)\nNEXT STEP: (1 sentence)\nKEY DECISIONS: (bullet points)\nMax 200 words. No filler. Second person. Output capsule only.",
        detailed: "You are a context compression engine. Compress this AI chat into a Detailed Capsule with these sections:\n=== CONTINUE-X CAPSULE (DETAILED) ===\nGOAL:\nBACKGROUND:\nCOMPLETED WORK:\nCURRENT STATE:\nDECISIONS MADE:\nOPEN THREADS:\nNEXT STEP:\nMax 500 words. Output capsule only.",
        code: "You are a context compression engine for dev sessions. Compress this AI chat into a Code Capsule with these sections:\n=== CONTINUE-X CAPSULE (CODE) ===\nPROJECT:\nFILES TOUCHED:\nFUNCTIONS/COMPONENTS:\nCURRENT TASK:\nERRORS DISCUSSED:\nDECISIONS:\nNEXT ACTION:\nMax 600 words. Preserve exact file and function names. Output capsule only."
    };

    const apiKey = customApiKey || process.env.GROQ_API_KEY;
    const baseUrl = customProvider === "openai"
        ? "https://api.openai.com/v1/chat/completions"
        : "https://api.groq.com/openai/v1/chat/completions";

    // Default model if none provided based on provider
    const defaultModel = customProvider === "openai" ? "gpt-4o-mini" : "llama-3.3-70b-versatile";
    const model = customModel || defaultModel;

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: model,
            max_tokens: 2048,
            messages: [
                { role: 'system', content: prompts[style] },
                { role: 'user', content: chatText }
            ]
        })
    });

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Groq API error: ${response.status} - ${errorBody}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

export async function generateResumePrompt(
    capsule: string,
    customApiKey?: string,
    customProvider?: string
): Promise<string> {
    const systemPrompt = `You are a prompt engineer. Based on this context capsule,
generate a single short ready-to-use prompt the user should
paste at the start of their new AI chat to resume work.
Keep it under 2 sentences. Start with what they were working
on. End with asking the AI to read the capsule and continue.
Output only the prompt, nothing else.`;

    const apiKey = customApiKey || process.env.GROQ_API_KEY;
    const baseUrl = customProvider === "openai"
        ? "https://api.openai.com/v1/chat/completions"
        : "https://api.groq.com/openai/v1/chat/completions";

    const model = customProvider === "openai" ? "gpt-4o-mini" : "llama-3.3-70b-versatile";

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: model,
            max_tokens: 512,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: `Capsule content:\n${capsule}` }
            ]
        })
    });

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Resume Prompt generation error: ${response.status} - ${errorBody}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}
