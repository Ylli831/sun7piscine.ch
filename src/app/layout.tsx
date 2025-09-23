import type { Metadata } from "next";
import Header from "../components/Header";
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
  title: "Piscines et Spas en Suisse | SUN7 – Construction & Entretien",
  description: "Construction, rénovation et entretien de piscines et spas en Suisse Romande. Devis gratuit et service premium.",
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

        <footer className="site-footer container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 20, paddingBottom: 20, gap: 12 }}>
            <div>
              <strong>SUN 7</strong>
              <div style={{ color: "var(--color-muted)" }}>Piscine & Spa — Conception, entretien & rénovation</div>
              <div style={{ color: "var(--color-muted)", marginTop: 8 }}>Adresse : Esplanade des Récréations 22, 1217 Meyrin</div>
              <div style={{ color: "var(--color-muted)" }}>Téléphone : +41 79 346 32 00</div>
            </div>

            <div style={{ color: "var(--color-muted)" }}>
              © {new Date().getFullYear()} SUN 7 — Tous droits réservés
              <div style={{ fontSize: 12 }}>
                Site réalisé par <a href="https://atlas-studio.eu" target="_blank" rel="noreferrer">Atlas Studio</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
