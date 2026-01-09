import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riteshmaurya.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,
  keywords: [
    "Ritesh Kumar Maurya",
    "ritesh kumar maurya",
    "riteshintro",
    "portfolio",
    "web developer",
    "software engineer",
    "react developer",
    "nextjs developer",
    "full stack developer",
  ],
  authors: [
    {
      name: "Ritesh Maurya",
      url: "https://github.com/riteshintro",
    },
  ],
  creator: "Ritesh Maurya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@riteshintro",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        {/* Animated Gradient Mesh Background */}
        <div className="gradient-mesh" aria-hidden="true" />
        
        {/* Grain Texture Overlay */}
        <div className="grain" aria-hidden="true" />
        
        <main
          className={cn(
            "relative min-h-screen flex items-center justify-between",
            "pt-24 pb-8 px-8 md:px-16 lg:px-32 xl:px-40",
            "max-sm:pt-28 max-sm:px-4"
          )}
        >
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
