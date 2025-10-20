"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function ChatMessage({ role, text }) {
  const [copied, setCopied] = useState(false);
  const codeMatch = text.match(/```(\w+)?\n([\s\S]*?)```/);

  const handleCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  // AI message with code
  if (codeMatch) {
    const language = codeMatch[1] || "text";
    const code = codeMatch[2];

    return (
      <div className="w-full my-2">
        <div className="relative w-full bg-zinc-900 rounded-lg overflow-hidden">
          <button
            onClick={() => handleCopy(code)}
            className="absolute top-2 right-2 text-xs bg-zinc-800 px-2 py-1 rounded-md text-gray-300 hover:text-white transition"
          >
            {copied ? 
            <span className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
</svg>
Copied!
            </span>
             : 
             <span className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg>
              
Copy
             </span>
             
             }
          </button>
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            wrapLongLines={true}
            customStyle={{
              backgroundColor: "#1E1E1E",
              borderRadius: "0.5rem",
              paddingTop: "2rem",
              fontSize: "0.9rem",
              margin: 0,
            }}
          >
            {code.trim()}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }

  // Normal text messages
  const isUser = role === "user";

  return (
    <div
      className={`flex my-2 ${
        isUser ? "justify-end" : "justify-start"
      } w-full`}
    >
      <div
        className={`p-3 max-w-[75%] rounded-lg ${
          isUser ? "bg-zinc-700 text-zin-100" : "bg-zinc-700 text-zinc-100"
        }`}
      >
        <pre className="whitespace-pre-wrap font-sans">{text}</pre>
      </div>
    </div>
  );
}
