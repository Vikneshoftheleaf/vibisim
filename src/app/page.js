"use client";
import { useState, useEffect, useRef } from "react";
import InputBar from "@/components/inputbar";
import ChatMessage from "@/components/chat";
import Header from "@/components/header";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const bottomRef = useRef(null);

  // Auto-scroll to bottom when messages or generating state changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

  const sendMessage = async (prompt) => {
    const dsl = localStorage.getItem("dsl") || "";

    // Push user message immediately
    setMessages((prev) => [...prev, { role: "user", text: prompt }]);
    setIsGenerating(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, dsl }),
      });

      const data = await res.json();

      // Push AI response
      setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ Something went wrong. Try again." },
      ]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <Header />
      
    
      <section className="bg-zinc-800">

        <div className="flex flex-col h-screen max-w-4xl justify-center m-auto bg-zinc-800 text-zinc-100">


          {(messages.length > 0) ?
            <div className="flex-1 flex-col overflow-y-auto p-6 space-y-8 pt-16">
              {messages.map((msg, i) => (<>
                <ChatMessage key={i} role={msg.role} text={msg.text} />
                </>
              ))}

              {isGenerating && <ChatMessage role="ai" text="Generating..." />}

              {/* Always scroll to this div */}
              <div ref={bottomRef} />
            </div>
            : <h1 className="text-2xl font-bold text-center">Hello, How Can I help you?</h1>
          }

          <InputBar onSend={sendMessage} />
        </div>
      </section>
    </>
  );
}
