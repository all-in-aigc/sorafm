import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s, Sora AI Video Showcases | Sora.FM",
    default: "Sora AI Video Showcases | Sora.FM",
  },
  description:
    "Sora AI Video Showcases, Discover awesome AI Videos made with Sora.",
  keywords:
    "sora,sora fm,sora ai,openai sora,video ai,ai video,sora video,ai video generator,text to video,sora ai video,sora ai video generator,sora webui,sora showcase,sora ai showcases",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" richColors />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
