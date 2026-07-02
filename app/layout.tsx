import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://mabelli.ba"),
  title: {
    default: "Cafe Restoran Mabelli | Aria, Sarajevo",
    template: "%s | Mabelli",
  },
  description:
    "Cafe Restoran Mabelli. A moody, modern bistro in Aria, Sarajevo. Dry-aged steaks, fresh seafood, house pasta and pastry. Reserve a table.",
  keywords: [
    "Mabelli",
    "Cafe Restoran Mabelli",
    "Sarajevo restaurant",
    "Ilidža",
    "fine dining Sarajevo",
    "steak Sarajevo",
  ],
  authors: [{ name: "Cafe Restoran Mabelli" }],
  openGraph: {
    title: "Cafe Restoran Mabelli | Aria, Sarajevo",
    description:
      "A moody, modern bistro in Aria, Sarajevo. Dry-aged steaks, fresh seafood, house pasta and pastry.",
    type: "website",
    locale: "en_US",
    siteName: "Cafe Restoran Mabelli",
    images: [{ url: "/img/logo-full.jpg", width: 1080, height: 1080, alt: "Mabelli" }],
  },
  icons: {
    icon: "/img/logo-full.jpg",
    apple: "/img/logo-full.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
