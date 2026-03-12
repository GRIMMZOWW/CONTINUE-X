CONTINUE-X ⚡

Compress your AI chat into a smart Capsule. Resume instantly in a new conversation.

Show Image
What is CONTINUE-X?
When your AI chat gets too long, it slows down, loses context, and you're forced to start over and re-explain everything from scratch.
CONTINUE-X fixes that.
Paste your long AI conversation → get a compressed smart Capsule → paste into a new chat → AI picks up exactly where you left off.

✨ Features

3 Capsule Styles — Brief, Detailed, Code-focused
Smart Resume Prompt — Auto-generates the perfect prompt to resume your chat
Download as .txt — Save your Capsule locally
Zero Data Storage — Your chats are never saved, logged, or stored anywhere
No Signup Required — Open the website and use it instantly
Works with any AI — Claude, ChatGPT, Cursor, Gemini, Copilot and more
Custom API Key — Bring your own Groq or OpenAI key


🛠️ Tech Stack
LayerTechnologyFrameworkNext.js 14 (App Router)LanguageTypeScriptStylingTailwind CSS + shadcn/uiAI APIGroq (llama-3.3-70b-versatile)DeploymentVercel

🚀 Getting Started
Prerequisites

Node.js 18+
Groq API key (free at console.groq.com)

Installation
bash# Clone the repo
git clone https://github.com/GRIMMZOWW/CONTINUE-X.git
cd CONTINUE-X

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
Environment Variables
Create a .env.local file in the root:
envGROQ_API_KEY=your_groq_api_key_here
Run locally
bashnpm run dev
Open http://localhost:3000 in your browser.

📡 API Reference
POST /api/generate
Generates a compressed Capsule from a chat conversation.
Request Body:
json{
  "chatText": "your full chat conversation here",
  "style": "brief" | "detailed" | "code",
  "customApiKey": "optional",
  "customModel": "optional",
  "customProvider": "groq" | "openai"
}
Response:
json{
  "capsule": "compressed capsule text here"
}

📁 Project Structure
CONTINUE-X/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── how-it-works/         # How it works page
│   │   ├── faq/                  # FAQ page
│   │   ├── guidance/             # User guide
│   │   ├── privacy/              # Privacy policy
│   │   ├── terms/                # Terms of use
│   │   └── api/generate/         # Capsule generation API
│   └── components/
│       ├── CapsuleGenerator.tsx  # Main tool component
│       ├── Navbar.tsx            # Navigation
│       ├── StyleSelector.tsx     # Brief/Detailed/Code picker
│       ├── ChatInput.tsx         # Chat paste area
│       ├── CapsuleOutput.tsx     # Generated capsule display
│       └── ResumePrompt.tsx      # Smart resume prompt
├── public/
└── package.json

🌐 Live Demo
Web App: continue-x.vercel.app
Android App: Download APK

📱 Android App
The Android version is available as a free APK download.
👉 CONTINUE-X Android Repo

🔒 Privacy
CONTINUE-X stores zero data. Your chat text is:

Sent directly to the AI API to generate the Capsule
Never stored in any database
Never logged anywhere
Immediately discarded after the Capsule is generated


👨‍💻 Built By
Bhaumik — Vibecoder & AI Builder

GitHub: @GRIMMZOWW
Project: CONTINUE-X


📄 License
MIT License — free to use, fork, and build on.

<p align="center">Built with ⚡ by Bhaumik — If this helped you, drop a ⭐ on the repo!</p>
