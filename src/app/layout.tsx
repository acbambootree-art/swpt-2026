import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SWPT — South West Poker Tournament | Guang'an, May 8–13 2026",
  description:
    "The 1st SWPT South West Poker Tournament. Six days, 46 events, May 8–13, 2026 at the Grand Rezen in Yuechi, Guang'an, China.",
  openGraph: {
    title: "SWPT — South West Poker Tournament",
    description: "Six days, 46 events, May 8–13, 2026 in Guang'an, Sichuan.",
    images: ["/swpt-logo.png"],
    type: "website",
  },
  icons: {
    icon: "/swpt-logo.png",
    apple: "/swpt-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
