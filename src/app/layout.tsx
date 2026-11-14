import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SITE } from "@/content/site";
import { absolute } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "Motion 8 Agency",
    "growth infrastructure",
    "digital marketing agency",
    "software development agency",
    "blockchain development",
    "AI automation agency",
    "funded startups",
    "answer engine optimization",
    "generative engine optimization",
    "AEO",
    "GEO",
    "performance marketing",
    "conversion rate optimization",
  ],
  alternates: {
    canonical: SITE.url,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: absolute("/og-image.png"),
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Growth Infrastructure for Startups`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [absolute("/og-image.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

/* Runs before paint so animated content is never stranded invisible when JS
   is off or the visitor asked for reduced motion. */
const BOOT = `document.documentElement.classList.remove('no-js');
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reduced-motion')}
try{if(sessionStorage.getItem('m8:intro')==='1'||/[?&](utm_[a-z_]+|gclid|fbclid)=/i.test(location.search)){document.documentElement.classList.add('skip-intro')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`no-js ${manrope.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body className="bg-ground font-sans text-dark-body">
        <a
          href="#main"
          data-skip-link
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-pill focus:bg-terracotta focus:px-5 focus:py-3 focus:text-[13px] focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <ScrollProgress />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PDL1Y3N3SV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PDL1Y3N3SV');
          `}
        </Script>
      </body>
    </html>
  );
}
