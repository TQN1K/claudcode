import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StarfieldBackground } from "@/components/StarfieldBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cloud Pixel | Web Development Agency in Winter Garden, Florida",
  description:
    "Cloud Pixel builds clean, fast, and professional websites for local businesses in Winter Garden and Central Florida. Get more calls, leads, and customers. Call 321-977-1333.",
  keywords: [
    "web development agency Winter Garden Florida",
    "website design Central Florida",
    "small business websites Orlando",
    "local SEO Winter Garden",
    "professional website design Florida",
    "landing page design Orlando",
    "mobile-friendly websites Florida",
    "Cloud Pixel web design",
  ],
  authors: [{ name: "Cloud Pixel", url: "https://cloudpixel.dev" }],
  creator: "Cloud Pixel",
  publisher: "Cloud Pixel",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Cloud Pixel | Web Development Agency – Winter Garden, Florida",
    description:
      "We build fast, beautiful, lead-generating websites for local businesses in Central Florida. Get your free quote today.",
    siteName: "Cloud Pixel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Pixel | Web Development – Winter Garden, FL",
    description:
      "Professional websites that turn visitors into customers. Call 321-977-1333.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://cloudpixel.dev" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Winter Garden, Florida" />
      </head>
      <body className="min-h-full flex flex-col bg-[#00000a] text-slate-50 relative">
        {/* Persistent starfield behind all content */}
        <StarfieldBackground />
        {/* All page content sits above z-0 */}
        <div className="relative z-10 flex flex-col min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
