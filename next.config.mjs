/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for Netlify (drag-and-drop / static hosting). The site has no
  // server features (all client components, no API routes), so it exports to /out.
  output: "export",
  images: {
    // Image Optimization isn't available on a static export — serve images as-is.
    // (They're already sized for the layout.)
    unoptimized: true,
  },
  // NOTE: next.config headers() are not supported with output: "export".
  // The hero-video cache rule lives in public/_headers (read by Netlify).
};

export default nextConfig;
