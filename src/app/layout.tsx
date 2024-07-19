import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdTaquiImam.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "md",
    "taqui",
    "imam",
    "Md",
    "MD",
    "TAQUI",
    "Taqui",
    "Imam",
    "Imam",
    "Ritesh Kumar Maurya",
    "ritesh kumar maurya",
    "riteshui",
    "riteshkumar",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "MD TAQUI IMAM ",
    "website",
    "@Taquiimam",
    "Taquiimam",
    "taqui developer",
  ],
  authors: [
    {
      name: "Taqui Imam",
      url: "https://github.com/taqui-786",
    },
  ],
  creator: "Taqui imam",

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
    creator: "@Taquiimam14",
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
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex relative screen break-words min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]",
            // { "bg-black": "#E6E7EB" }
          )}
          style={{backgroundColor:"#222831"}}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
