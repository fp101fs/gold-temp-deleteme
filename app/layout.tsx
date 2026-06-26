import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aureum — Gold Standard Digital",
  description:
    "Premium glassmorphic landing page built with Next.js and a gold-inspired palette.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-[#0f0b05] via-[#1a1208] to-[#0f0b05] text-gold-100 antialiased">
        {children}
      </body>
    </html>
  );
}
