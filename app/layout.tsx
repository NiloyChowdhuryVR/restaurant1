import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Syne, Protest_Strike} from 'next/font/google'
import Provider from "@/components/Provider";

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-syne',
})
const prostrike = Protest_Strike({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-prostrike',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himalaya Bites - Best Momos for you",
  description: "Get the best momo for you!",
  other:{
    "color-scheme":"light"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${prostrike.variable} ${syne.variable} antialiased`}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
