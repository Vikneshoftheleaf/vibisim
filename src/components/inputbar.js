"use client";
import { useState } from "react";

export default function InputBar({ onSend }) {
  const [prompt, setPrompt] = useState("");

  const handleSend = () => {
    if (!prompt.trim()) return;
    onSend(prompt);
    setPrompt("");
  };

  return (
    <div className="m-4 px-3 py-3 bg-zinc-700 rounded-full flex justify-between items-center ">
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "enter" && !e.shiftKey) {
            e.preventDefault(); // stop newline
            handleSend();       // ✅ call the function
          }
        }}
        placeholder="Ask something..."
        className="flex-1 px-3 bg-zinc-700 text-gray-100 text-sm rounded-lg outline-none"
      />

      <button
        onClick={handleSend} // triggers on button click
        className="p-2 text-gray-300 hover:text-white transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
        </svg>
      </button>
    </div>
  );
}
