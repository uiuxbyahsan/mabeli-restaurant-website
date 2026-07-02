"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoMark, LogoLockup } from "./ui/LogoMark";
import { NAV_LINKS, SITE } from "@/lib/siteData";
import { lockScroll } from "@/lib/scroll";
import { EASE } from "@/lib/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // transparent -> solid on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active section highlight
  useEffect(() => {
    const ids = ["home", "about", "menu", "gallery", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // lock scroll + Esc to close while drawer open
  useEffect(() => {
    lockScroll(open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lockScroll(false);
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-graphite-950/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-mab flex h-[68px] items-center justify-between md:h-[76px]">
          {/* Logo */}
          <motion.a
            href="#home"
            aria-label="Mabelli, home"
            className="relative flex items-center"
            initial={{ scale: 0.82, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          >
            <LogoLockup
              priority
              className="h-11 w-auto transition-transform duration-500 hover:scale-[1.03] md:h-12"
            />
          </motion.a>

          {/* Desktop links */}
          <div className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative text-[0.82rem] font-medium uppercase tracking-widest2 text-cream/80 transition-colors hover:text-cream"
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500 ease-lux ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
            <a
              href="#contact"
              className="rounded-full border border-gold/70 bg-gold px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-widest2 text-graphite-950 shadow-gold-soft transition-all duration-300 hover:bg-gold-light hover:shadow-gold"
            >
              Reserve a Table
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-cream md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col items-end gap-[5px]">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-6 bg-current" />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[70] flex w-[82%] max-w-sm flex-col bg-graphite-900 px-8 pb-10 pt-7 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="flex items-center justify-between">
                <LogoMark className="h-9 w-auto" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center text-cream/70 transition-colors hover:text-gold"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-14 flex flex-col gap-7">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-cream transition-colors hover:text-gold"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: EASE }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-auto rounded-full bg-gold px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-widest2 text-graphite-950"
              >
                Reserve a Table
              </a>
              <a
                href={SITE.phoneHref}
                className="mt-4 text-center text-sm tracking-wide text-cream/60"
              >
                {SITE.phone}
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
