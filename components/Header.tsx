'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '#marche', label: 'Le marché' },
  { href: '#solutions', label: 'Nos Solutions' },
  { href: '#apropos', label: 'À Propos' },
  { href: '#formules', label: 'Nos formules' },
  { href: '#equipe', label: 'Notre équipe' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md w-full px-4 sm:px-6 md:px-10 lg:px-20 py-3 md:py-4 z-[60] shadow-sm border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex-shrink-0 min-w-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Image
            src="/images/logo_mw.png"
            alt="MobileWallet"
            width={180}
            height={60}
            className="h-7 sm:h-8 md:h-12 lg:h-16 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black text-sm lg:text-[15px] font-medium hover:text-[#F9A825] hover:underline underline-offset-4 transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden sm:flex items-center justify-center bg-[#F9A825] text-white font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:bg-[#F57C00] hover:scale-105 transition-all duration-200 text-sm whitespace-nowrap shrink-0"
          >
            Nous contacter
          </Link>
          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 px-4 text-black font-medium hover:bg-[#F9A825]/10 hover:text-[#F9A825] rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 sm:hidden w-full bg-[#F9A825] text-white font-semibold py-3 rounded-lg hover:bg-black transition-colors text-center block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nous contacter
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
