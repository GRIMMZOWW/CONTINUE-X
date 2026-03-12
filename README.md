# CONTINUE-X ⚡

> Compress your AI chat into a smart Capsule. Resume instantly in a new conversation.

**🌐 Live:** [continue-x.vercel.app](https://continue-x.vercel.app) &nbsp;|&nbsp; **📱 Android:** [Download APK](https://github.com/GRIMMZOWW/CONTINUE-X-android/releases/download/v1.0.0/app-release.apk)

---

## 😤 The Problem

When your AI chat gets too long it slows down, loses context, and you're forced to start over and re-explain everything from scratch.

## ✅ The Fix

Paste your long AI conversation → get a compressed smart **Capsule** → paste into a new chat → AI picks up exactly where you left off.

---

## ✨ Features

- 📦 **3 Capsule Styles** — Brief, Detailed, Code-focused
- ✨ **Smart Resume Prompt** — Auto-generates the perfect prompt to continue
- 💾 **Download as .txt** — Save your Capsule locally
- 🔒 **Zero Data Storage** — Your chats are never saved or logged anywhere
- ⚡ **No Signup Required** — Open and use instantly
- 🌐 **Works with any AI** — Claude, ChatGPT, Cursor, Gemini, Copilot and more
- 🔑 **Custom API Key** — Bring your own Groq or OpenAI key

---

## 🛠️ Tech Stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS + shadcn/ui
- **AI API** — Groq (llama-3.3-70b-versatile)
- **Deployment** — Vercel

---

## 🚀 Run Locally

```bash
git clone https://github.com/GRIMMZOWW/CONTINUE-X.git
cd CONTINUE-X
npm install
```

Create a `.env.local` file:

```
GROQ_API_KEY=your_groq_api_key_here
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔒 Privacy

Your chat text is sent to the AI API only to generate the Capsule. Nothing is stored in any database. Nothing is logged. Everything is discarded immediately after the Capsule is generated.

---

## 👨‍💻 Built By

**Bhaumik** — Vibecoder & AI Builder

- GitHub: [@GRIMMZOWW](https://github.com/GRIMMZOWW)
- Web: [continue-x.vercel.app](https://continue-x.vercel.app)

---

## 📄 License

MIT — free to use, fork, and build on.

---

<p align="center">Built with ⚡ by Bhaumik &nbsp;—&nbsp; If this helped you, drop a ⭐</p>
