"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { type MenuItem as MenuItemType, formatKM } from "@/lib/menuData";
import { fadeUpSm } from "@/lib/motion";

export default function MenuItem({
  item,
  image,
  isOpen,
  onToggle,
  onHover,
}: {
  item: MenuItemType;
  image?: string;
  isOpen: boolean;
  onToggle: () => void;
  onHover: () => void;
}) {
  return (
    <motion.div variants={fadeUpSm}>
      <div
        onMouseEnter={onHover}
        onClick={onToggle}
        className={`group relative -mx-3 select-none rounded-lg px-3 py-3 transition-colors duration-300 hover:bg-white/[0.04] md:cursor-default ${
          isOpen ? "cursor-pointer bg-white/[0.04]" : "cursor-pointer"
        }`}
      >
        <div className="flex items-baseline">
          <span className="font-sans text-[1.05rem] font-medium leading-tight text-cream transition-colors duration-300 group-hover:text-gold-light">
            {item.name}
          </span>
          {item.tag && (
            <span className="ml-2.5 shrink-0 translate-y-[-2px] text-[0.6rem] font-medium uppercase tracking-widest2 text-gold/80">
              {item.tag}
            </span>
          )}
          <span className="leader" aria-hidden />
          <span className="tnum shrink-0 font-sans text-[1.05rem] font-semibold text-gold transition-colors duration-300 group-hover:text-gold-light">
            {formatKM(item.price)}
          </span>
          {/* tap affordance — touch (below md) only */}
          {image && (
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="ml-3 flex shrink-0 self-center text-gold/55 md:hidden"
              aria-hidden
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          )}
        </div>

        {item.note && (
          <p className="mt-1 max-w-[44ch] text-[0.82rem] font-light leading-snug text-cream/45">
            {item.note}
          </p>
        )}

        {/* tap-to-expand inline image (below md) — opens in document flow, no overlap */}
        {image && (
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="preview"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden md:hidden"
              >
                <div className="relative mt-3 aspect-[16/10] max-h-[200px] w-full overflow-hidden rounded-xl border border-gold/30 shadow-plate">
                  <Image
                    src={image}
                    alt={item.name}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
}
