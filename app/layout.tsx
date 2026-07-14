import type { Metadata } from "next";
import { Inter, Geist_Mono, Instrument_Serif } from "next/font/google";
import "@/styles/globals.css";
import { rootMetadata } from "@/lib/metadata";
import { personJsonLd, jsonLdScript } from "@/lib/structured-data";
import { PortfolioHeader } from "@/components/navigation/PortfolioHeader";
import { Footer } from "@/components/navigation/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Accent-only italic serif for the hero greeting. Not a body/UI typeface —
// keeps the developer-docs restraint everywhere except this one moment.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  variable: "--font-accent-serif",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Set theme before paint: stored choice → system preference. Prevents
            a flash of the wrong theme. Runs synchronously in <head>. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();",
          }}
        />
      </head>
      <body className="min-h-dvh">
        <script
          type="application/ld+json"
          // JSON-LD built from verified public details only
          dangerouslySetInnerHTML={{ __html: jsonLdScript(personJsonLd()) }}
        />
        <a
          href="#main"
          className="no-print sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-canvas"
        >
          Skip to content
        </a>
        <PortfolioHeader />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
