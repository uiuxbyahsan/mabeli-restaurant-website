"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY } from "@/lib/siteData";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { lockScroll } from "@/lib/scroll";

const SPRING = { type: "spring", stiffness: 200, damping: 25 } as const;
const N = GALLERY.length;

/** shortest signed distance from active on a looping track */
function circOffset(i: number, active: number) {
  let o = i - active;
  if (o > N / 2) o -= N;
  else if (o < -N / 2) o += N;
  return o;
}

/** coverflow position for a given offset from center */
function slidePos(off: number) {
  const abs = Math.abs(off);
  const sign = Math.sign(off);
  if (abs > 2) {
    return { x: `${sign * 150}%`, scale: 0.5, opacity: 0, filter: "blur(8px)" };
  }
  const byAbs = [
    { x: "0%", scale: 1, opacity: 1, filter: "blur(0px)" },
    { x: `${sign * 54}%`, scale: 0.82, opacity: 0.5, filter: "blur(2px)" },
    { x: `${sign * 96}%`, scale: 0.64, opacity: 0.28, filter: "blur(4px)" },
  ];
  return byAbs[abs];
}

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);

  const prev = useCallback(() => setActive((a) => (a - 1 + N) % N), []);
  const next = useCallback(() => setActive((a) => (a + 1) % N), []);

  // keyboard: arrows move carousel; in zoom, also Esc to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setZoom(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  useEffect(() => {
    lockScroll(zoom);
    return () => lockScroll(false);
  }, [zoom]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -300) next();
    else if (info.offset.x > 60 || info.velocity.x > 300) prev();
  };

  return (
    <section id="gallery" className="relative overflow-hidden bg-graphite-950 py-24 sm:py-32">
      <div className="container-mab">
        {/* heading */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mb-12 flex flex-col gap-6 text-center sm:mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="display-title title-section text-cream"
          >
            Moments at <span className="text-gold">Mabelli</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* coverflow stage */}
      <div className="relative mx-auto max-w-5xl px-4">
        <motion.div
          className="relative h-[360px] cursor-grab active:cursor-grabbing sm:h-[460px] lg:h-[520px]"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.16}
          onDragEnd={onDragEnd}
        >
          {GALLERY.map((img, i) => {
            const off = circOffset(i, active);
            const p = slidePos(off);
            const isCenter = off === 0;
            return (
              <div
                key={img.src}
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                style={{ zIndex: 30 - Math.abs(off) * 10 }}
              >
                <motion.button
                  type="button"
                  aria-label={isCenter ? `View ${img.alt}` : `Show ${img.alt}`}
                  className="pointer-events-auto relative h-full w-[78%] overflow-hidden rounded-[4px] shadow-plate sm:w-[64%] lg:w-[52%]"
                  animate={p}
                  transition={SPRING}
                  onClick={() => (isCenter ? setZoom(true) : setActive(i))}
                  draggable={false}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 78vw, 520px"
                    className="object-cover"
                    draggable={false}
                  />
                  {/* darken side slides; gold ring + caption on the center */}
                  <div
                    className={`absolute inset-0 transition-colors duration-500 ${
                      isCenter ? "bg-transparent" : "bg-graphite-950/45"
                    }`}
                  />
                  {isCenter && (
                    <>
                      <div className="absolute inset-0 rounded-[4px] ring-1 ring-inset ring-gold/40" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite-950/80 to-transparent p-5 pt-12 text-left">
                        <span className="text-sm font-light uppercase tracking-widest2 text-cream/90">
                          {img.alt}
                        </span>
                      </div>
                    </>
                  )}
                </motion.button>
              </div>
            );
          })}
        </motion.div>

        {/* arrows */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-1 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-graphite-950/50 text-gold backdrop-blur-sm transition-colors duration-300 hover:border-gold hover:bg-graphite-900 sm:left-3"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-1 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-graphite-950/50 text-gold backdrop-blur-sm transition-colors duration-300 hover:border-gold hover:bg-graphite-900 sm:right-3"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* dots */}
      <div className="mt-10 flex items-center justify-center gap-2.5">
        {GALLERY.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-gold" : "w-1.5 bg-cream/25 hover:bg-cream/50"
            }`}
          />
        ))}
      </div>

      {/* lightbox on center tap */}
      <AnimatePresence>
        {zoom && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-graphite-950/92 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setZoom(false)}
          >
            <button
              onClick={() => setZoom(false)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.figure
              key={GALLERY[active].src}
              className="relative mx-auto"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY[active].src}
                alt={GALLERY[active].alt}
                className="max-h-[82vh] max-w-[92vw] rounded-[3px] object-contain shadow-plate"
              />
              <figcaption className="mt-3 text-center text-xs uppercase tracking-widest2 text-cream/50">
                {GALLERY[active].alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
