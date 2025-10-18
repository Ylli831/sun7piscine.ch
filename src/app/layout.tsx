import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import WhatsAppButton from "../components/WhatsAppButton";
import BackToTop from "../components/BackToTop";
import StructuredData from "../components/StructuredData";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pisciniste Suisse Romande | SUN7 – Construction, Rénovation & Entretien",
  description: "Au bénéfice de plus de 20 ans d'expérience dans l'entretien et la rénovation de piscines en Suisse romande. Construction, rénovation, entretien de spas, bassins et piscines. Devis gratuit.",
  keywords: "piscine suisse romande, construction piscine, rénovation piscine, entretien piscine, pisciniste, spa suisse, piscine sur mesure, piscine haut de gamme, jacuzzi suisse",
  authors: [{ name: "SUN7 Piscine" }],
  creator: "Atlas Studio",
  
  metadataBase: new URL('https://sun7piscine.ch'),
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: "https://sun7piscine.ch",
    siteName: "SUN7 Piscine",
    title: "Pisciniste Suisse Romande | SUN7 – Expert en Piscines",
    description: "Plus de 20 ans d'expérience - Construction, rénovation et entretien de piscines haut de gamme en Suisse Romande. 500+ projets réalisés. Devis gratuit.",
    images: [
      {
        url: "/sun7piscine.png",
        width: 1200,
        height: 630,
        alt: "SUN7 Piscine - Expert en piscines et spas en Suisse Romande",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "SUN7 Piscine - Pisciniste Suisse Romande",
    description: "Construction, rénovation et entretien de piscines haut de gamme. 20+ ans d'expérience.",
    images: ["/sun7piscine.png"],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  verification: {
    google: "your-google-verification-code", // TODO: Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/sun7piscine.ico" />
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />

        <main className="page-surface">{children}</main>

        <ContactSection />

        <Footer />
        
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
