import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoNexus - AI-Powered E-Commerce Content & Research",
  description: "Automate product descriptions, competitor research, and marketing content for your e-commerce store",
  keywords: "e-commerce, AI, product descriptions, competitor research, marketing content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
