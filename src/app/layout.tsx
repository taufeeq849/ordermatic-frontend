import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ordermatic - AI Powered Whatsapp Solutions",
  description: "Ordermatic is an AI-driven WhatsApp solution that automates orders, appointments, and customer support. Streamline operations, boost revenue, and delight customers with real-time chat and a unified dashboard.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(dmSans.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
