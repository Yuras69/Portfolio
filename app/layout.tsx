import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageLoader } from "@/components/layout/page-loader";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import "./globals.css";

const SITE_URL = "https://yuras.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yuras Pokharel — Full Stack Developer",
    template: "%s | Yuras Pokharel",
  },
  description:
    "Portfolio of Yuras Pokharel — a full stack developer and final-year student at Itahari International College building with React, Next.js, TypeScript, Tailwind CSS, and Node.js.",
  keywords: [
    "Yuras Pokharel",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Business Development Intern",
    "Nepal Developer Portfolio",
  ],
  authors: [{ name: "Yuras Pokharel", url: SITE_URL }],
  creator: "Yuras Pokharel",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Yuras Pokharel — Full Stack Developer",
    description:
      "Full stack developer and final-year student at Itahari International College. Explore projects, experience, and skills.",
    siteName: "Yuras Pokharel Portfolio",
    images: [{ url: "/images/og-cover.png", width: 1200, height: 630, alt: "Yuras Pokharel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuras Pokharel — Full Stack Developer",
    description: "Full stack developer and final-year student at Itahari International College.",
    images: ["/images/og-cover.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <PageLoader />
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
