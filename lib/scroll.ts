/** Lock/unlock page scrolling for overlays (drawer, lightbox).
 *  Works whether or not Lenis is active (reduced-motion users). */
export function lockScroll(lock: boolean) {
  if (typeof window === "undefined") return;
  const lenis = (window as unknown as {
    lenis?: { stop(): void; start(): void };
  }).lenis;
  if (lock) {
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
  } else {
    lenis?.start();
    document.documentElement.style.overflow = "";
  }
}
