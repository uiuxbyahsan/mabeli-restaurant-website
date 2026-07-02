"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/siteData";
import { fadeUp, stagger, VIEWPORT, EASE } from "@/lib/motion";
import Button from "./ui/Button";

type Status = "idle" | "loading" | "success";

const fieldCls =
  "w-full rounded-[3px] border border-white/10 bg-graphite-800/60 px-4 py-3 text-sm text-cream placeholder-cream/30 outline-none transition-colors duration-300 focus:border-gold focus:bg-graphite-800 focus:ring-1 focus:ring-gold/40";
const labelCls =
  "mb-2 block text-[0.66rem] font-medium uppercase tracking-widest2 text-cream/50";

export default function Reservation() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    // front-end only — simulate the request, then confirm
    setTimeout(() => setStatus("success"), 1400);
  };

  return (
    <section id="contact" className="grain relative overflow-hidden bg-graphite-900 py-24 sm:py-32">
      <div className="container-mab">
        {/* heading */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mb-14 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="display-title title-section text-cream"
          >
            Reserve a <span className="text-gold">Table</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-cream/60"
          >
            Tell us when you&apos;d like to join us and we&apos;ll confirm by phone.
            For same-day bookings, please call us directly.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative rounded-3xl border border-white/10 bg-graphite-950/40 p-8 sm:p-10"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <motion.svg
                    width="68"
                    height="68"
                    viewBox="0 0 52 52"
                    className="mb-6"
                    initial="hidden"
                    animate="show"
                  >
                    <motion.circle
                      cx="26"
                      cy="26"
                      r="24"
                      fill="none"
                      stroke="#C9A86A"
                      strokeWidth="2"
                      variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                    <motion.path
                      d="M16 27l7 7 14-15"
                      fill="none"
                      stroke="#C9A86A"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
                      transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
                    />
                  </motion.svg>
                  <h3 className="font-display text-2xl text-cream">
                    Reservation requested
                  </h3>
                  <p className="mt-3 max-w-xs text-sm font-light text-cream/60">
                    Thank you. We&apos;ll call you shortly to confirm. For anything
                    urgent, reach us at{" "}
                    <a href={SITE.phoneHref} className="text-gold hover:underline">
                      {SITE.phone}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-7 text-xs uppercase tracking-widest2 text-cream/50 transition-colors hover:text-gold"
                  >
                    Make another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  variants={stagger(0.07)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  <motion.div variants={fadeUp} className="sm:col-span-2">
                    <label htmlFor="name" className={labelCls}>
                      Full name
                    </label>
                    <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldCls} />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label htmlFor="phone" className={labelCls}>
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+387 …" className={fieldCls} />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label htmlFor="guests" className={labelCls}>
                      Guests
                    </label>
                    <select id="guests" name="guests" required defaultValue="2" className={`${fieldCls} appearance-none`}>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n} className="bg-graphite-800">
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                      <option value="9+" className="bg-graphite-800">9+ guests</option>
                    </select>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label htmlFor="date" className={labelCls}>
                      Date
                    </label>
                    <input id="date" name="date" type="date" required className={`${fieldCls} [color-scheme:dark]`} />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label htmlFor="time" className={labelCls}>
                      Time
                    </label>
                    <input id="time" name="time" type="time" required className={`${fieldCls} [color-scheme:dark]`} />
                  </motion.div>

                  <motion.div variants={fadeUp} className="sm:col-span-2">
                    <label htmlFor="notes" className={labelCls}>
                      Notes <span className="text-cream/25">(optional)</span>
                    </label>
                    <textarea id="notes" name="notes" rows={3} placeholder="Allergies, seating preference, occasion…" className={`${fieldCls} resize-none`} />
                  </motion.div>

                  <motion.div variants={fadeUp} className="sm:col-span-2">
                    <Button
                      type="submit"
                      loading={status === "loading"}
                      disabled={status === "loading"}
                      className="w-full !py-4"
                    >
                      {status === "loading" ? "Sending…" : "Request Reservation"}
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* info card */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="group flex flex-col justify-between rounded-3xl border border-gold/20 bg-gradient-to-b from-graphite-800/50 to-graphite-950/50 p-8 transition-all duration-500 hover:border-gold/50 hover:shadow-gold-soft sm:p-10"
          >
            <div>
              <h3 className="font-display text-2xl font-light uppercase tracking-widest2 text-gold">
                Visit us
              </h3>
              <p className="mt-2 text-sm font-light text-cream/55">
                {SITE.name}
              </p>

              <ul className="mt-8 space-y-6 text-sm">
                <InfoRow label="Address" href={SITE.mapsHref}>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                  <br />
                  {SITE.address.line3}
                </InfoRow>
                <InfoRow label="Phone" href={SITE.phoneHref}>
                  {SITE.phone}
                </InfoRow>
                <InfoRow label="Email" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </InfoRow>
                <div>
                  <div className={labelCls}>Opening hours</div>
                  <div className="space-y-1">
                    {SITE.hours.map((h) => (
                      <div key={h.days} className="flex justify-between gap-4 text-cream/80">
                        <span className="font-light">{h.days}</span>
                        <span className="tnum text-cream/55">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ul>
            </div>

            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 text-sm text-cream/70 transition-colors hover:text-gold"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
              </svg>
              {SITE.instagramHandle}
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <div className={labelCls}>{label}</div>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="font-light leading-relaxed text-cream/85 transition-colors hover:text-gold"
      >
        {children}
      </a>
    </li>
  );
}
