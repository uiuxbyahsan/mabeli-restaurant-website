import type { Variants } from "framer-motion";

/** Luxurious ease-out used across all entrances */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeUpSm: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

/** Parent container that staggers its children */
export const stagger = (gap = 0.08, delay = 0.04): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

/** Shared whileInView viewport config */
export const VIEWPORT = { once: true, amount: 0.2 } as const;
export const VIEWPORT_SOON = { once: true, amount: 0.35 } as const;
