"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { serviceDetails } from "../data/services";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <header
      className="site-header flex flex-col fixed top-0 z-50 w-full transition-all duration-500"
      style={{
        height: open ? "700px" : "var(--header-height)",
      }}
      suppressHydrationWarning
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4" style={{ height: 'var(--header-height)' }}>
        <Link href="/" className="flex items-center gap-3 pl-2" aria-label="Accueil">
          <Image src="/logo-without-bg.png" alt="SUN 7" width={88} height={88} priority className="h-[88px] w-auto" />
        </Link>

        <nav className="hidden md:flex gap-5 items-center" aria-label="Navigation principale">
          <div className="relative group">
            <Link
              href="/services"
              className="flex items-center gap-2 text-white font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden"
              onMouseEnter={(e) => e.currentTarget.style.color = '#fefe00'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              Services
              {/* Animated line expanding from center */}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#fefe00] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
            <div className="pointer-events-none absolute left-1/2 top-full hidden w-72 -translate-x-1/2 pt-4 group-hover:pointer-events-auto group-hover:block group-focus-within:pointer-events-auto group-focus-within:block">
              <div className="relative rounded-2xl border border-white/40 bg-white/95 p-4 shadow-2xl transform transition-all duration-300 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-white/80 to-white/95" aria-hidden />
                <div className="relative space-y-1">
                  {serviceDetails.map((service, index) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-start gap-3 rounded-xl px-3 py-2 text-left text-[#00008f] transition-all duration-200 hover:bg-[#009dfe]/10 transform hover:translate-x-1"
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: 'slideInLeft 0.3s ease-out forwards'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#009dfe'; e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 157, 254, 0.15)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#00008f'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#009dfe]/20 transition-all duration-200 hover:bg-[#009dfe]/30 hover:scale-110" style={{ color: '#fefe00' }}>
                        <service.icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold leading-tight">{service.title}</span>
                        <span className="block text-xs text-[#00008f]/70">{service.excerpt}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link href="/realisations" className="text-white font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden group" onMouseEnter={(e) => e.currentTarget.style.color = '#fefe00'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
            Réalisations
            {/* Animated line expanding from center */}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#fefe00] transition-all duration-300 -translate-x-1/2 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </Link>
          <Link href="/about" className="text-white font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden group" onMouseEnter={(e) => e.currentTarget.style.color = '#fefe00'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
            À Propos
            {/* Animated line expanding from center */}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#fefe00] transition-all duration-300 -translate-x-1/2 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </Link>
          <Link href="/faq" className="text-white font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden group" onMouseEnter={(e) => e.currentTarget.style.color = '#fefe00'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
            FAQ
            {/* Animated line expanding from center */}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#fefe00] transition-all duration-300 -translate-x-1/2 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
          </Link>
          <Link 
            href="/contact"
            className="ripple-button text-white font-bold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: '#009dfe', boxShadow: '0 4px 14px rgba(0, 157, 254, 0.3)' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0088e0'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 136, 224, 0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#009dfe'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 157, 254, 0.3)'; }}
          >
            Devis Gratuit
          </Link>
        </nav>

        <button
          className="md:hidden bg-white/10 backdrop-blur-sm border border-white/20 text-white p-2 rounded-lg z-50 transition-all duration-300 hover:bg-white/20"
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

      <div
        className="w-full md:hidden px-4 transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: open ? 'calc(100vh - var(--header-height))' : 0,
          opacity: open ? 1 : 0,
        }}
        aria-hidden={!open}
      >
        <div className="mt-2 flex flex-col items-center gap-4 py-4">
          <div className="w-full max-w-3xl mx-auto">

            {/* Services accordion - plain (no background) */}
            <div className="mt-2">
              <button
                type="button"
                className="flex w-full items-center justify-between text-white font-bold text-lg px-4 py-3 transition-colors duration-300"
                onMouseEnter={(e) => e.currentTarget.style.color = '#fefe00'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                onClick={() => setShowServices((s) => !s)}
                aria-expanded={showServices}
              >
                <span>Services</span>
                <svg className={`h-5 w-5 transition-transform ${showServices ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="w-full overflow-hidden pt-2" style={{ maxHeight: showServices ? '640px' : 0, transition: 'max-height 320ms ease' }}>
                <Link href="/services" className="block w-full px-4 py-3 text-left text-white/90 text-base font-medium transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#fefe00'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'} onClick={() => setOpen(false)}>
                  Tous les services
                </Link>
                <div className="mt-2 space-y-2 px-2">
                  {serviceDetails.map((service, index) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block w-full px-4 py-3 text-left text-white/85 text-base font-medium transition-colors duration-300"
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: showServices ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#fefe00'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}
                      onClick={() => setOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/realisations" className="block text-white font-bold text-lg px-4 py-3 transition-colors duration-300 text-center mt-4" onMouseEnter={(e) => e.currentTarget.style.color = '#fefe00'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} onClick={() => setOpen(false)}>
              Réalisations
            </Link>

            <Link href="/about" className="block text-white font-bold text-lg px-4 py-3 transition-colors duration-300 text-center mt-2" onMouseEnter={(e) => e.currentTarget.style.color = '#fefe00'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} onClick={() => setOpen(false)}>
              À Propos
            </Link>

            <Link href="/faq" className="block text-white font-bold text-lg px-4 py-3 transition-colors duration-300 text-center mt-2" onMouseEnter={(e) => e.currentTarget.style.color = '#fefe00'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} onClick={() => setOpen(false)}>
              FAQ
            </Link>

            <div className="flex justify-center mt-4">
              <Link
                href="/contact"
                className="ripple-button bg-[#009dfe] hover:bg-[#0088e0] text-white font-bold text-lg px-6 py-2 rounded-full text-center transition-all duration-300"
                onClick={() => setOpen(false)}
              >
                Demander un Devis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
