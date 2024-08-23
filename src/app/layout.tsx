import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tic-Tac-Toe Game",
  description: "Tic-Tac-Toe game build with Next.js and Next UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
