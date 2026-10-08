import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { brandConfig } from "@/lib/brandConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(brandConfig.url),
  title: {
    default: `${brandConfig.name} | Modern Software, Mobile Apps & Enterprise Tech Kenya`,
    template: `%s | ${brandConfig.name}`,
  },
  description: brandConfig.description,
  keywords: [
    "Microsil System",
    "software development Kenya",
    "web development Nairobi",
    "Flutter mobile apps Kenya",
    "Laravel developers Kenya",
    "Next.js agency Nairobi",
    "business automation Python",
    "Power BI data consultancy Kenya",
    "CCTV installation Nairobi",
    "Daraja M-Pesa API integration",
  ],
  authors: [{ name: "Microsil System" }],
  creator: "Microsil System Ltd",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: brandConfig.url,
    title: `${brandConfig.name} - Technology That Works for Your Business`,
    description: brandConfig.description,
    siteName: brandConfig.name,
    images: [
      {
        url: "/brand/Microsil Logo.jpg",
        width: 1080,
        height: 283,
        alt: "Microsil System - Premier Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brandConfig.name,
    description: brandConfig.description,
    images: ["/brand/Microsil Logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/brand/micro.png", sizes: "186x185", type: "image/png" },
      { url: "/brand/LOGO- microsil-for favicon.png", sizes: "719x719", type: "image/png" },
    ],
    apple: [
      { url: "/brand/LOGO- microsil-for favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brandConfig.name,
    image: `${brandConfig.url}/brand/MIcrosil%20Logo_.png`,
    telephone: brandConfig.phone,
    email: brandConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    url: brandConfig.url,
    priceRange: "$$",
    description: brandConfig.description,
    openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[#89D9A4] selection:text-[#1E283A]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
