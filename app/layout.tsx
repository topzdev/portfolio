import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/lib/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = profile.seo.url;
const ogImage = `${siteUrl}${profile.seo.ogImage}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: profile.seo.title,
    template: `%s | ${profile.alias}`,
  },
  description: profile.seo.description,
  openGraph: {
    title: profile.seo.ogTitle,
    description: profile.seo.description,
    url: siteUrl,
    siteName: profile.seo.title,
    images: [
      { url: ogImage, width: 1200, height: 630, alt: profile.seo.ogTitle },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seo.ogTitle,
    description: profile.seo.description,
    creator: `@${profile.seo.twitterHandle}`,
    images: [ogImage],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: profile.seo.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
