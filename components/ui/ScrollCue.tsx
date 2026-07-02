"use client";

import { motion } from "framer-motion";

export default function ScrollCue() {
  return (
    <motion.a
      href="#about"
      aria-label="Scroll to content"
      className="group flex flex-col items-center gap-2 text-cream/55 transition-colors hover:text-gold"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.7, duration: 1, ease: "easeOut" }}
    >
      <span className="text-[0.6rem] font-medium uppercase tracking-widest3">
        Scroll
      </span>
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
    </motion.a>
  );
}
