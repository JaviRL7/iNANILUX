import type { Metadata } from "next";
import { Playfair_Display, Inter, Space_Grotesk, Cormorant_Garamond, DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/contexts/theme-context";
import { LanguageProvider } from "@/lib/contexts/language-context";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inanilux | Pokémon Artist & Content Creator",
  description: "Portfolio of Inanilux, a passionate Pokémon artist and content creator specializing in fan art, GO Fest coverage, and creative illustrations.",
  keywords: ["Inanilux", "Pokémon", "artist", "fan art", "GO Fest", "illustrations", "content creator"],
  authors: [{ name: "Inanilux" }],
  creator: "Inanilux",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inanilux.com",
    title: "Inanilux | Pokémon Artist & Content Creator",
    description: "Portfolio of Inanilux, a passionate Pokémon artist and content creator.",
    siteName: "Inanilux Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inanilux | Pokémon Artist & Content Creator",
    description: "Portfolio of Inanilux, a passionate Pokémon artist and content creator.",
    creator: "@inanilux",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="w-full">
      <body
        className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable} ${cormorant.variable} ${dmSans.variable} ${bricolage.variable} antialiased w-full`}
      >
        <LanguageProvider>
          <ThemeProvider>
            <SmoothScroll />
            <div className="flex flex-col min-h-screen w-full">
              <main className="flex-grow w-full">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

