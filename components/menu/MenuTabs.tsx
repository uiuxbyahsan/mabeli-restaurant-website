"use client";

import { motion } from "framer-motion";
import { MENU } from "@/lib/menuData";

export default function MenuTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (key: string) => void;
}) {
  return (
    <div className="sticky top-[66px] z-30 border-y border-white/5 bg-graphite-900/90 backdrop-blur-md md:top-[74px]">
      <div
        role="tablist"
        aria-label="Menu categories"
        className="container-mab flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {MENU.map((cat) => {
          const isActive = cat.key === active;
          return (
            <button
              key={cat.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(cat.key)}
              className="relative whitespace-nowrap px-4 py-4 text-[0.78rem] font-medium uppercase tracking-widest2 transition-colors duration-300 sm:px-5"
            >
              <span
                className={
                  isActive ? "text-gold" : "text-cream/55 hover:text-cream"
                }
              >
                {cat.label}
              </span>
              {isActive && (
                <motion.span
                  layoutId="menu-underline"
                  className="absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
