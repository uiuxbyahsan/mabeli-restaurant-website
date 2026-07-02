"use client";

import { motion } from "framer-motion";
import { LogoLockup } from "./ui/LogoMark";
import SectionDivider from "./ui/SectionDivider";
import { SITE, NAV_LINKS } from "@/lib/siteData";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-graphite-950 pt-16">
      <div className="container-mab">
        <SectionDivider mark={false} className="mb-14" />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]"
        >
          {/* brand */}
          <motion.div variants={fadeUp}>
            <LogoLockup className="h-20 w-auto" />
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-cream/55">
              A moody, modern bistro in {SITE.tagline}. Dry-aged steaks, fresh
              seafood and house pastry, served with Balkan warmth.
            </p>
          </motion.div>

          {/* explore */}
          <motion.nav variants={fadeUp} aria-label="Footer">
            <h4 className="mb-5 text-[0.66rem] font-medium uppercase tracking-widest3 text-gold">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-light text-cream/65 transition-colors hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="font-light text-cream/65 transition-colors hover:text-cream">
                  Reserve a Table
                </a>
              </li>
            </ul>
          </motion.nav>

          {/* visit */}
          <motion.div variants={fadeUp}>
            <h4 className="mb-5 text-[0.66rem] font-medium uppercase tracking-widest3 text-gold">
              Visit
            </h4>
            <address className="space-y-3 text-sm not-italic">
              <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer" className="block font-light leading-relaxed text-cream/65 transition-colors hover:text-cream">
                {SITE.address.line1}, {SITE.address.line2}
              </a>
              <a href={SITE.phoneHref} className="block font-light text-cream/65 transition-colors hover:text-cream">
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="block font-light text-cream/65 transition-colors hover:text-cream">
                {SITE.email}
              </a>
            </address>
          </motion.div>
        </motion.div>

        {/* giant wordmark — each letter justified edge to edge */}
        <div
          aria-hidden
          className="pointer-events-none mt-16 flex w-full select-none justify-between overflow-hidden font-display text-[clamp(2.5rem,16vw,12rem)] font-light leading-[0.8] text-white/[0.05]"
        >
          {"MABELLI".split("").map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
        </div>

        {/* bottom bar */}
        <div className="flex items-center justify-center border-t border-white/5 py-7 text-center text-xs text-cream/40">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
