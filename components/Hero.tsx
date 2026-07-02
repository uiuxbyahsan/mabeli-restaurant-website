"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { SITE } from "@/lib/siteData";
import { EASE } from "@/lib/motion";
import ScrollCue from "./ui/ScrollCue";
import Button from "./ui/Button";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  // Force the browser to (re)fetch the current source, never a cached old clip
  useEffect(() => {
    videoRef.current?.load();
  }, []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // staggered entrance
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
  };
  const item = {
    hidden: { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      {/* Background video with parallax + slow zoom */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={reduce ? undefined : { y: bgY }}
      >
        <video
          ref={videoRef}
          key="hero-v3"
          className="h-[112%] w-full object-cover object-center animate-kenburns"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/img/venue-dining.jpg"
        >
          <source src="/video/hero-v3.mp4" type="video/mp4" />
        </video>
        {/* light overlay — transparent at top, darker only toward the bottom third where text sits */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/35" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-graphite-950" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="container-mab relative flex h-full flex-col items-start justify-center pb-24 pt-24"
        style={reduce ? undefined : { y: textY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="eyebrow mb-7 text-shadow-lux">
          <span className="h-px w-8 bg-gold" />
          Cafe Restoran Mabelli
        </motion.p>

        <h1 className="display-title title-hero text-cream text-shadow-lux">
          <motion.span variants={item} className="block">
            Where Flavour
          </motion.span>
          <motion.span variants={item} className="block text-gold">
            Meets Elegance
          </motion.span>
        </h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-md text-base font-light leading-relaxed tracking-wide text-cream/75 sm:text-lg"
        >
          A moody, modern bistro in {SITE.tagline}. Dry-aged steaks, fresh
          seafood and house pastry, crafted with warm Balkan hospitality.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex">
          <Button href="#menu">View Menu</Button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-7 z-10 flex justify-center">
        <ScrollCue />
      </div>
    </section>
  );
}
