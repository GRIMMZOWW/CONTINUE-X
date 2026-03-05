export function validateInput(chatText: string, style: string): { valid: boolean; error?: string } {
    if (!chatText || chatText.trim() === "") {
        return { valid: false, error: "Please paste your chat first" };
    }

    if (chatText.length < 100) {
        return { valid: false, error: "Chat seems too short" };
    }

    const validStyles = ["Brief", "Detailed", "Code-Focused"];
    if (!validStyles.includes(style)) {
        return { valid: false, error: "Invalid style selected" };
    }

    return { valid: true };
}
