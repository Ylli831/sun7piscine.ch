"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // When open, increase header height so the PNG background stretches downward.
  const expandedHeight = '360px'; // adjust as needed

  return (
    <header
      className={`site-header flex flex-col sticky top-0 z-50 w-full transition-all duration-300`}
      style={{
        height: open ? expandedHeight : 'var(--header-height)',
        backgroundSize: open ? '100% 360px' : '100% 100%',
      }}
    >
  <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4" style={{ height: 'var(--header-height)' }}>
        <Link href="/" className="flex items-center gap-3 pl-2" aria-label="Accueil">
          <Image src="/logo-without-bg.png" alt="SUN 7" width={160} height={160} priority />
        </Link>

        <nav className="hidden md:flex gap-5 items-center" aria-label="Navigation principale">
          <a href="#services" className="text-white font-semibold px-3 py-2 rounded-lg transition-all duration-150 hover:text-blue-300 hover:-translate-y-0.5">Services</a>
          <a href="#portfolio" className="text-white font-semibold px-3 py-2 rounded-lg transition-all duration-150 hover:text-blue-300 hover:-translate-y-0.5">Portfolio</a>
          <a href="#quote" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-full transition-all duration-300">Devis</a>
        </nav>

        <button
          className="md:hidden bg-transparent border-none text-white p-2 rounded-lg z-50"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {!open ? (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu placed inside the header so the header PNG naturally extends downward when open.
          Render links directly on the header background (no glass panel) and center them.
      */}
      <div className={`w-full md:hidden px-4 transition-all duration-300 ${open ? 'block' : 'hidden'}`}>
        <div className="mt-2 flex flex-col items-center gap-4 py-4">
          <a href="#services" className="text-white font-bold text-lg px-4 py-2 rounded-md hover:text-blue-300 w-full text-center" onClick={() => setOpen(false)}>Services</a>
          <a href="#portfolio" className="text-white font-bold text-lg px-4 py-2 rounded-md hover:text-blue-300 w-full text-center" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="#quote" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-6 py-2 rounded-full w-full max-w-xs text-center" onClick={() => setOpen(false)}>Demander un Devis</a>
        </div>
      </div>
    </header>
  );
}
