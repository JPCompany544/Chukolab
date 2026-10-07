import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chukolab — Product Studio",
  description: "Product studio building serious custom software, fintech infrastructure, digital platforms, and complex business operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased selection:bg-[#435BFF] selection:text-white`}
    >
      <body className="min-h-full flex flex-col bg-transparent text-[#111111] tracking-[-0.01em]">
        {children}
      </body>
    </html>
  );
}
