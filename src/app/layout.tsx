import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SITE } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  formatDetection: { telephone: false },
};

/* Runs before paint so animated content is never stranded invisible when JS
   is off or the visitor asked for reduced motion. */
const BOOT = `document.documentElement.classList.remove('no-js');
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reduced-motion')}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`no-js ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body className="bg-ground font-sans text-dark-body">
        <SmoothScroll />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
