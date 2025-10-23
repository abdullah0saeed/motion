import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const aloeveraLight = localFont({
  src: "../assets/fonts/Aloeveracondensed-Light.otf",
  variable: "--font-aloevera-light",
  display: "swap",
  weight: "300"
})

export const metadata: Metadata = {
  title: "Media Zone",
  description: "Media Zone Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${aloeveraLight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
