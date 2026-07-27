import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCtaBar from "@/components/ui/StickyCtaBar";
import "./globals.css";

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
    default: "NXChess — The Next Generation of Chess",
    template: "%s | NXChess",
  },
  description:
    "The Next Generation of Chess. Premier chess academy combining structured 8-level piece curriculum, master coaching, self-learning digital modules, and tournament equipment.",
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
      <body className="min-h-full flex flex-col bg-background text-foreground pb-16">
        <Header />
        <div className="flex-1 pt-16">{children}</div>
        <Footer />
        <StickyCtaBar />
      </body>
    </html>
  );
}
