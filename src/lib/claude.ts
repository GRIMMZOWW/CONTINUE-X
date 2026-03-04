export async function generateCapsule(
    chatText: string,
    style: 'brief' | 'detailed' | 'code'
): Promise<string> {

    const prompts = {
        brief: "You are a context compression engine. Compress this AI chat into a Brief Capsule with these sections:\n=== CONTINUE-X CAPSULE (BRIEF) ===\nGOAL: (1-2 sentences)\nCURRENT STATE: (bullet points)\nNEXT STEP: (1 sentence)\nKEY DECISIONS: (bullet points)\nMax 200 words. No filler. Second person. Output capsule only.",
        detailed: "You are a context compression engine. Compress this AI chat into a Detailed Capsule with these sections:\n=== CONTINUE-X CAPSULE (DETAILED) ===\nGOAL:\nBACKGROUND:\nCOMPLETED WORK:\nCURRENT STATE:\nDECISIONS MADE:\nOPEN THREADS:\nNEXT STEP:\nMax 500 words. Output capsule only.",
        code: "You are a context compression engine for dev sessions. Compress this AI chat into a Code Capsule with these sections:\n=== CONTINUE-X CAPSULE (CODE) ===\nPROJECT:\nFILES TOUCHED:\nFUNCTIONS/COMPONENTS:\nCURRENT TASK:\nERRORS DISCUSSED:\nDECISIONS:\nNEXT ACTION:\nMax 600 words. Preserve exact file and function names. Output capsule only."
    };

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            max_tokens: 1024,
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
