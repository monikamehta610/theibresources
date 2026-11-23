import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The IB Resources — IBDP Biology & ESS Study Materials",
    template: "%s | The IB Resources",
  },
  description: "Independent IBDP Biology and Environmental Systems & Societies (ESS) resources. Interactive slides, study guides, IA/EE frameworks, and expert tutoring. Not affiliated with the IBO.",
  keywords: ["IB Biology", "IB ESS", "IBDP", "Environmental Systems and Societies", "Internal Assessment", "Extended Essay", "IB tutoring", "IB study guides"],
  authors: [{ name: "Monika Mehta" }],
  creator: "Monika Mehta",
  publisher: "The IB Resources",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theibresources.com",
    siteName: "The IB Resources",
    title: "The IB Resources — IBDP Biology & ESS Study Materials",
    description: "Independent IBDP Biology and ESS resources. Interactive slides, study guides, IA/EE frameworks.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The IB Resources - IBDP Science Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The IB Resources",
    description: "Independent IBDP Biology & ESS resources",
    images: ["/og-image.png"],
    creator: "@monikamehta",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#1C1C1C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
