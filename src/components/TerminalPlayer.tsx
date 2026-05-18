"use client";

import { useEffect, useRef, useState } from "react";

export type TerminalLineType =
  | "prompt"
  | "think"
  | "tool"
  | "out"
  | "add"
  | "del"
  | "done"
  | "gap";

export interface TerminalLine {
  type: TerminalLineType;
  text: string;
  /** Render instantly instead of typing char-by-char. */
  instant?: boolean;
}

interface TerminalPlayerProps {
  script: TerminalLine[];
  title?: string;
  loop?: boolean;
  startDelay?: number;
  className?: string;
}

const LINE_CLASS: Record<TerminalLineType, string> = {
  prompt: "text-[#5eead8]",
  think: "text-[#7d8fa3] italic",
  tool: "text-[#c98fe0]",
  out: "text-[#cfe3df]",
  add: "text-[#5ee6a8]",
  del: "text-[#ff8b8b]",
  done: "text-[#5ee6a8] font-medium",
  gap: "",
};

const PREFIX: Partial<Record<TerminalLineType, string>> = {
  prompt: "❯ ",
  tool: "● ",
  add: "+ ",
  del: "- ",
  done: "✓ ",
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function TerminalPlayer({
  script,
  title = "claude — agentic session",
  loop = true,
  startDelay = 350,
  className = "",
}: TerminalPlayerProps) {
  const [rendered, setRendered] = useState<TerminalLine[]>([]);
  const [partial, setPartial] = useState("");
  const [typing, setTyping] = useState(true);
  const cancelled = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cancelled.current = false;

    if (prefersReducedMotion()) {
      setRendered(script);
      setPartial("");
      setTyping(false);
      return;
    }

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, ms));

    async function play() {
      do {
        setRendered([]);
        setPartial("");
        setTyping(true);
        await sleep(startDelay);
        if (cancelled.current) return;

        for (const line of script) {
          if (cancelled.current) return;

          if (line.type === "gap") {
            setRendered((r) => [...r, line]);
            await sleep(140);
            continue;
          }

          if (line.instant || line.type === "think") {
            setRendered((r) => [...r, line]);
            await sleep(line.type === "think" ? 420 : 160);
            continue;
          }

          // Type the line out character by character.
          for (let i = 1; i <= line.text.length; i++) {
            if (cancelled.current) return;
            setPartial(line.text.slice(0, i));
            await sleep(line.text.length > 48 ? 9 : 16);
          }
          setRendered((r) => [...r, line]);
          setPartial("");
          await sleep(260);
        }

        setTyping(false);
        if (!loop) return;
        await sleep(4200);
      } while (!cancelled.current && loop);
    }

    void play();
    return () => {
      cancelled.current = true;
    };
  }, [script, loop, startDelay]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [rendered, partial]);

  return (
    <div className={`cn-terminal ${className}`} aria-hidden="true">
      <div className="cn-terminal-bar">
        <span className="cn-terminal-dot" style={{ background: "#ff5f57" }} />
        <span className="cn-terminal-dot" style={{ background: "#febc2e" }} />
        <span className="cn-terminal-dot" style={{ background: "#28c840" }} />
        <span className="cn-terminal-title">{title}</span>
      </div>
      <div ref={scrollRef} className="cn-terminal-body">
        <pre className="cn-terminal-pre">
          {rendered.map((line, idx) =>
            line.type === "gap" ? (
              <div key={idx} className="h-3" />
            ) : (
              <div key={idx} className={LINE_CLASS[line.type]}>
                {PREFIX[line.type] ?? ""}
                {line.text}
              </div>
            )
          )}
          {partial && (
            <div className="text-[#cfe3df]">
              {partial}
              <span className="cn-caret" />
            </div>
          )}
          {!partial && typing && (
            <div className="text-[#5eead8]">
              <span className="cn-caret" />
            </div>
          )}
        </pre>
      </div>
      <div className="cn-terminal-scan" />
    </div>
  );
}
