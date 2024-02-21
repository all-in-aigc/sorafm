import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s, Made with Sora AI Video Generator | Sora.FM",
    default: "Sora AI Video Generator | Sora.FM",
  },
  description: "Sora AI Video Generator is used to make AI Video.",
  keywords:
    "sora,sora fm,sora ai,openai sora,video ai,ai video,sora video,ai video generator,text to video,sora ai video,sora ai video generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster position="top-center" richColors />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
