"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { LogoMark } from "./LogoMark";

/**
 * Thin gold hairline divider. Lines draw outward from a centered M mark
 * (or left-to-right when `mark` is false) on scroll into view.
 */
export default function SectionDivider({
  mark = true,
  className = "",
}: {
  mark?: boolean;
  className?: string;
}) {
  if (!mark) {
    return (
      <motion.div
        className={`hairline h-px w-full origin-left ${className}`}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.1, ease: EASE }}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center gap-5 sm:gap-7 ${className}`}
    >
      <motion.span
        className="hairline block h-px flex-1 origin-right"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: EASE }}
      />
      <motion.span
        initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
        whileInView={{ opacity: 0.85, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
        className="shrink-0"
      >
        <LogoMark className="h-7 w-auto" />
      </motion.span>
      <motion.span
        className="hairline block h-px flex-1 origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: EASE }}
      />
    </div>
  );
}
