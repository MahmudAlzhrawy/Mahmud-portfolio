"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TypingTextInfinite({
  text,
  speed = 80,
  pause = 1000,
}: {
  text: string;
  speed?: number;
  pause?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (index < text.length) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev + text[index]);
          setIndex(index + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => setPhase("pause"), pause);
      }
    }

    if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), pause);
    }

    if (phase === "deleting") {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        }, speed);
      } else {
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [index, phase, text, speed, pause]);

  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayed}
      <span className="text-blue-400">|</span>
    </motion.span>
  );
}
