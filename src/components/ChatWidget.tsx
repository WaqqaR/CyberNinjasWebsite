"use client";

import { useState, useRef, useEffect } from "react";

const WHATSAPP_NUMBER = "07930265886"; // Replace with your number (international format, no +)

interface Message {
  role: "user" | "assistant";
  content: string;
}

function buildWhatsAppUrl(messages: Message[]) {
  const lastMessages = messages.slice(-6);
  const summary = lastMessages
    .map((m) => `${m.role === "user" ? "Visitor" : "Bot"}: ${m.content}`)
    .join("\n");
  const text = `Hi, I was chatting on your website and would like to continue the conversation.\n\n--- Chat Summary ---\n${summary}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [transcriptSent, setTranscriptSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const userMessageCount = messages.filter((m) => m.role === "user").length;

  function sendTranscript(msgs: Message[]) {
    if (msgs.length === 0 || transcriptSent) return;
    setTranscriptSent(true);
    fetch("/api/send-transcript", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: msgs }),
    }).catch(() => {});
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.message }]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Something went wrong on our end. Give it another shot." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* Chat bubble + prompt */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {showPrompt && !isOpen && (
          <button
            onClick={() => { setIsOpen(true); setShowPrompt(false); }}
            className="animate-fade-in px-3 py-2 rounded-lg text-xs font-medium theme-bg-card theme-text-primary border theme-border shadow-lg cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Let&apos;s talk
          </button>
        )}
        <button
          onClick={() => {
            if (isOpen) sendTranscript(messages);
            setIsOpen(!isOpen);
          }}
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 bg-[#1c1917] dark:bg-[#0f1e1e] border border-[#333] dark:border-[#2a3a33] text-white"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7 yin-yang-icon" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="var(--bg-primary)" />
              <path d="M50 2 A48 48 0 0 0 50 98 A24 24 0 0 0 50 50 A24 24 0 0 1 50 2Z" fill="white" />
              <circle cx="50" cy="74" r="7" fill="white" />
              <circle cx="50" cy="26" r="7" fill="var(--bg-primary)" />
            </svg>
          )}
        </button>
      </div>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[500px] flex flex-col rounded-lg shadow-2xl border theme-border overflow-hidden theme-bg-primary transition-colors duration-[1000ms]">
          {/* Header */}
          <div className="px-4 py-3 border-b theme-border bg-[#1c1917] dark:bg-[#0f1e1e] text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 yin-yang-icon" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="var(--bg-primary)" />
                  <path d="M50 2 A48 48 0 0 0 50 98 A24 24 0 0 0 50 50 A24 24 0 0 1 50 2Z" fill="white" />
                  <circle cx="50" cy="74" r="7" fill="white" />
                  <circle cx="50" cy="26" r="7" fill="var(--bg-primary)" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Cyber Ninjas</p>
                <p className="text-xs opacity-70">Ask us anything</p>
              </div>
              <a
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 rounded text-xs bg-white/20 hover:bg-white/30 transition-colors whitespace-nowrap"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Meeting
              </a>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[350px]">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-2xl mb-3">🥷</p>
                <p className="text-sm theme-text-muted">
                  Hey — I&apos;m the Cyber Ninjas assistant.
                </p>
                <p className="text-xs theme-text-subtle mt-1">
                  Ask me about our services, products, or expertise.
                </p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#1c1917] dark:bg-[#0f1e1e] text-white"
                      : "theme-bg-tertiary theme-text-primary border theme-border"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="theme-bg-tertiary border theme-border px-3 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-current theme-text-subtle animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 rounded-full bg-current theme-text-subtle animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 rounded-full bg-current theme-text-subtle animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* WhatsApp handoff */}
          {userMessageCount >= 1 && (
            <div className="px-3 pt-2">
              <a
                href={buildWhatsAppUrl(messages)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendTranscript(messages)}
                className="flex items-center justify-center gap-2 w-full py-2 rounded-md text-xs font-medium bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Continue on WhatsApp
              </a>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t theme-border">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm rounded-md border theme-border theme-bg-secondary theme-text-primary placeholder:theme-text-subtle focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-3 py-2 rounded-md text-sm font-medium bg-[#1c1917] dark:bg-[#0f1e1e] text-white disabled:opacity-50 hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
