import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "JarryBank - Track Your Avalanche Portfolio",
  description: "Connect your wallet to monitor all your Avalanche tokens in one place. Real-time price tracking, portfolio analytics, and seamless wallet integration for the modern DeFi investor.",
  keywords: "Avalanche, AVAX, DeFi, portfolio tracker, crypto wallet, token prices, blockchain, Web3",
  authors: [{ name: "JarryBank Team" }],
  creator: "JarryBank",
  publisher: "JarryBank",
  category: 'finance',
  applicationName: 'JarryBank',
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jarrybank.com'),
  openGraph: {
    title: "JarryBank - Track Your Avalanche Portfolio",
    description: "Real-time Avalanche token tracking and portfolio management",
    url: 'https://jarrybank.com',
    siteName: 'JarryBank',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JarryBank - Avalanche Portfolio Tracker',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "JarryBank - Track Your Avalanche Portfolio",
    description: "Real-time Avalanche token tracking and portfolio management",
    images: ['/og-image.png'],
    creator: '@jarrybank',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
