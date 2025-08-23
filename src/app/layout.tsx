import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../app/components/Header";
import VoxelLoader from "./components/VoxelLoader";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monty & The Iron Egg",
  description:
    "Motorcycle culture meets storytelling – inspired by travel, design, and freedom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-neutral-900`}
      >
        <Header />

        <main className="px-6 md:px-12 lg:px-24 py-8">{children}</main>

        <section className="w-full flex justify-center items-center py-16">
          <div className="w-full max-w-5xl">
            <VoxelLoader />
          </div>
        </section>

        <Footer />
      </body>
    </html>
  );
}
