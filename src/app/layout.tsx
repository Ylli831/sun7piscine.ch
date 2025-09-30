import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/sun7piscine.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
