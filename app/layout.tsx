import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexIO - Modern IT Services",
  description: "Next-generation IT services and consulting. We build scalable, cloud-native solutions for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${jetbrains.variable} font-sans antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
