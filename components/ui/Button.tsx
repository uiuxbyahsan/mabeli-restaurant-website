"use client";

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "outline";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  /** show the trailing arrow — defaults to true for primary */
  showArrow?: boolean;
  loading?: boolean;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold uppercase tracking-widest2 transition-all duration-300 ease-lux will-change-transform disabled:cursor-not-allowed disabled:opacity-80";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold px-8 py-3.5 text-graphite-950 shadow-gold-soft hover:bg-gold-light hover:shadow-gold hover:scale-[1.02]",
  outline:
    "border border-gold/60 px-8 py-3.5 text-gold hover:border-gold hover:bg-gold/10 hover:scale-[1.02]",
};

export default function Button({
  children,
  variant = "primary",
  showArrow,
  loading = false,
  className = "",
  href,
  type = "button",
  disabled,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const withArrow = (showArrow ?? variant === "primary") && !loading;
  const cls = `${base} ${variants[variant]} ${className}`;

  const inner = (
    <>
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-graphite-950/40 border-t-graphite-950" />
      )}
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 ease-lux group-hover:translate-x-1"
          strokeWidth={2.2}
          aria-hidden
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls} target={target} rel={rel} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {inner}
    </button>
  );
}
