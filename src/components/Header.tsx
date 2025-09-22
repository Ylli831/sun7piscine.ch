"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="logo" aria-label="Accueil">
          <Image src="/logo-without-bg.png" alt="SUN 7" width={220} height={220} priority />
        </Link>

        <nav className={`nav ${open ? "open" : ""}`} aria-label="Navigation principale">
          <a href="#services">Services</a>
          <a href="#gallery">Galerie</a>
          <a href="#contact" className="btn">Contact</a>
        </nav>

        <button className="mobile-toggle" aria-label="Menu" onClick={() => setOpen((s) => !s)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
