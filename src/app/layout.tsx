import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import StructuredData from "@/components/StructuredData";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ordermatic.ai'),
  title: {
    default: "Ordermatic - AI Powered WhatsApp Solutions",
    template: "%s | Ordermatic"
  },
  description: "Ordermatic is an AI-driven WhatsApp solution that automates orders, appointments, and customer support. Streamline operations, boost revenue, and delight customers with real-time chat and a unified dashboard.",
  keywords: [
    'AI WhatsApp automation',
    'WhatsApp business solutions',
    'automated customer support',
    'order management system',
    'appointment scheduling',
    'WhatsApp chatbot',
    'business automation',
    'customer engagement',
    'revenue optimization',
    'real-time chat'
  ],
  authors: [{ name: "Ordermatic Team" }],
  creator: "Ordermatic",
  publisher: "Ordermatic",
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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ordermatic.ai',
    title: 'Ordermatic - AI Powered WhatsApp Solutions',
    description: 'Automate orders, appointments, and customer support with our AI-driven WhatsApp solution. Boost revenue and streamline operations.',
    siteName: 'Ordermatic',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ordermatic - AI Powered WhatsApp Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ordermatic - AI Powered WhatsApp Solutions',
    description: 'Automate orders, appointments, and customer support with our AI-driven WhatsApp solution. Boost revenue and streamline operations.',
    creator: '@ordermatic',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.ordermatic.ai',
  },
  category: 'Business Software',
  classification: 'Business Automation Platform',
  verification: {
    // Add these when you get the verification codes
    // google: 'google-verification-code',
    // yandex: 'yandex-verification-code',
    // yahoo: 'yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="homepage" />
      </head>
      <body className={cn(dmSans.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
