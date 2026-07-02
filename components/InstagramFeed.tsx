"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { GALLERY, SITE } from "@/lib/siteData";
import { fadeUp, scaleIn, stagger, VIEWPORT } from "@/lib/motion";

const IG_URL = "https://www.instagram.com/caferestoranmabelli/";
const TILES = GALLERY.slice(0, 6);

export default function InstagramFeed() {
  return (
    <section className="relative bg-graphite-950 pt-24 sm:pt-32">
      {/* heading */}
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="container-mab mb-12 text-center sm:mb-14"
      >
        <motion.h2
          variants={fadeUp}
          className="display-title title-section text-cream"
        >
          Follow Us on <span className="text-gold">Instagram</span>
        </motion.h2>
        <motion.a
          variants={fadeUp}
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm tracking-wide text-cream/60 transition-colors hover:text-gold"
        >
          <Instagram className="h-4 w-4" />
          {SITE.instagramHandle}
        </motion.a>
      </motion.div>

      {/* full-bleed row of square tiles — scrollable on small screens */}
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {TILES.map((img) => (
          <motion.a
            key={img.src}
            variants={scaleIn}
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${SITE.instagramHandle} on Instagram`}
            className="group relative aspect-square w-[44%] shrink-0 snap-start sm:w-1/3 md:w-1/6"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 44vw, (max-width: 768px) 33vw, 16vw"
              className="object-cover"
            />
            {/* hover overlay + Instagram icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-graphite-950/0 transition-colors duration-200 group-hover:bg-graphite-950/55">
              <Instagram
                className="h-7 w-7 scale-75 text-cream opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
                strokeWidth={1.5}
              />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
