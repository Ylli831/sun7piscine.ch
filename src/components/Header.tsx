"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { serviceDetails } from "../data/services";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="site-header flex flex-col fixed top-0 z-50 w-full transition-all duration-500"
      style={{
        height: open ? "360px" : "var(--header-height)",
  backgroundSize: "100% 100%",
  backgroundPosition: "center bottom",
  backgroundRepeat: "no-repeat",
      }}
      suppressHydrationWarning
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4" style={{ height: 'var(--header-height)' }}>
        <Link href="/" className="flex items-center gap-3 pl-2" aria-label="Accueil">
          <Image src="/logo-without-bg.png" alt="SUN 7" width={160} height={160} priority />
        </Link>

        <nav className="hidden md:flex gap-5 items-center" aria-label="Navigation principale">
          <Link href="/" className="text-[#112A46] font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:text-amber-400 hover:-translate-y-0.5">
            Accueil
          </Link>
          <div className="relative group">
            <Link
              href="/services"
              className="flex items-center gap-2 text-[#112A46] font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:text-amber-400 hover:-translate-y-0.5"
            >
              Services
            </Link>
            <div className="pointer-events-none absolute left-1/2 top-full hidden w-72 -translate-x-1/2 pt-4 group-hover:pointer-events-auto group-hover:block group-focus-within:pointer-events-auto group-focus-within:block">
              <div className="relative rounded-2xl border border-white/40 bg-white/95 p-4 shadow-2xl">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-white/80 to-white/95" aria-hidden />
                <div className="relative space-y-1">
                  {serviceDetails.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-start gap-3 rounded-xl px-3 py-2 text-left text-[#112A46] transition-all duration-200 hover:bg-[#C3D5FD]/40 hover:text-amber-500"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C3D5FD]/40 text-amber-500">
                        <service.icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold leading-tight">{service.title}</span>
                        <span className="block text-xs text-[#112A46]/70">{service.excerpt}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link href="/portfolio" className="text-[#112A46] font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:text-amber-400 hover:-translate-y-0.5">
            Réalisations
          </Link>
          <Link href="/about" className="text-[#112A46] font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:text-amber-400 hover:-translate-y-0.5">
            À Propos
          </Link>
          <Link href="/faq" className="text-[#112A46] font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:text-amber-400 hover:-translate-y-0.5">
            FAQ
          </Link>
          <Link 
            href="/contact"
            className="ripple-button bg-cyan-400 hover:bg-cyan-500 text-[#112A46] font-bold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Devis Gratuit
          </Link>
        </nav>

        <button
          className="md:hidden bg-[#C3D5FD]/10 backdrop-blur-sm border border-[#112A46]/20 text-[#112A46] p-2 rounded-lg z-50 transition-all duration-300 hover:bg-[#C3D5FD]/20"
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

      <div className={`w-full md:hidden px-4 transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mt-2 flex flex-col items-center gap-4 py-4">
          <Link href="/" className="text-[#112A46] font-bold text-lg px-4 py-2 rounded-md hover:text-amber-400 w-full text-center transition-colors duration-300" onClick={() => setOpen(false)}>
            Accueil
          </Link>
          <Link href="/services" className="text-[#112A46] font-bold text-lg px-4 py-2 rounded-md hover:text-amber-400 w-full text-center transition-colors duration-300" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/portfolio" className="text-[#112A46] font-bold text-lg px-4 py-2 rounded-md hover:text-amber-400 w-full text-center transition-colors duration-300" onClick={() => setOpen(false)}>
            Réalisations
          </Link>
          <div className="w-full space-y-2">
            {serviceDetails.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="w-full rounded-lg bg-white/70 px-4 py-2 text-left text-[#112A46]/80 text-base font-medium transition-colors duration-300 hover:bg-[#C3D5FD]/60 hover:text-amber-500"
                onClick={() => setOpen(false)}
              >
                {service.title}
              </Link>
            ))}
          </div>
          <Link href="/about" className="text-[#112A46] font-bold text-lg px-4 py-2 rounded-md hover:text-amber-400 w-full text-center transition-colors duration-300" onClick={() => setOpen(false)}>
            À Propos
          </Link>
          <Link href="/faq" className="text-[#112A46] font-bold text-lg px-4 py-2 rounded-md hover:text-amber-400 w-full text-center transition-colors duration-300" onClick={() => setOpen(false)}>
            FAQ
          </Link>
          <Link 
            href="/contact"
            className="ripple-button bg-amber-400 hover:bg-amber-500 text-[#112A46] font-bold text-lg px-6 py-2 rounded-full w-full max-w-xs text-center transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Demander un Devis
          </Link>
        </div>
      </div>
    </header>
  );
}
