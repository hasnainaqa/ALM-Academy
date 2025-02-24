import type React from "react";
import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "ALM Academy ",
  description:
    "Learn Quran online with qualified teachers. Male and female staff available.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          amiri.variable,
          "min-h-screen font-sans antialiased bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-950"
        )}
      >
        {children}
      </body>
    </html>
  );
}
