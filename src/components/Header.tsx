'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Adresses', href: '/adresses', submenu: ['Messine', 'Saint-Honoré', 'Madeleine', 'Haussmann'] },
  { label: 'Bureaux', href: '/#bureaux' },
  { label: 'Expériences', href: '/#experiences' },
  { label: 'Événements', href: '/#evenements' },
  { label: 'Galerie', href: '/galerie' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={`font-serif text-2xl tracking-[0.15em] font-light transition-colors duration-300 ${
                scrolled ? 'text-kwerk-black' : 'text-white'
              }`}
            >
              kwerk
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className={`nav-link ${scrolled ? 'text-kwerk-dark' : 'text-white'}`}
                >
                  {link.label}
                </Link>
                {link.submenu && activeSubmenu === link.label && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg py-3 min-w-[160px]">
                    {link.submenu.map((item) => (
                      <Link
                        key={item}
                        href={`/adresses#${item.toLowerCase().replace('é', 'e')}`}
                        className="block px-5 py-2 text-xs tracking-widest uppercase font-sans font-light text-kwerk-dark hover:text-kwerk-gold transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex items-center gap-2 text-xs tracking-widest font-sans font-light ${scrolled ? 'text-kwerk-dark' : 'text-white'}`}>
              <span className="cursor-pointer hover:text-kwerk-gold transition-colors">FR</span>
              <span className="opacity-40">/</span>
              <span className="cursor-pointer hover:text-kwerk-gold transition-colors opacity-50">EN</span>
            </div>
            <Link
              href="/contact"
              className={`nav-link border px-5 py-2 transition-all duration-300 ${
                scrolled
                  ? 'text-kwerk-dark border-kwerk-dark hover:bg-kwerk-dark hover:text-white'
                  : 'text-white border-white hover:bg-white hover:text-kwerk-dark'
              }`}
            >
              Contactez-nous
            </Link>
          </div>

          {/* Burger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Ouvrir le menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-px transition-colors duration-300 ${scrolled ? 'bg-kwerk-dark' : 'bg-white'}`}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-kwerk-black transition-transform duration-500 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-8 py-8">
          <div className="flex items-center justify-between mb-16">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <span className="font-serif text-2xl tracking-[0.15em] font-light text-white">kwerk</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white text-3xl font-thin"
              aria-label="Fermer le menu"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col gap-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-white font-light hover:text-kwerk-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="font-serif text-3xl text-white font-light hover:text-kwerk-gold transition-colors"
            >
              Contactez-nous
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-xs tracking-widest font-sans font-light text-white/60">
            <span className="cursor-pointer hover:text-white transition-colors">FR</span>
            <span>/</span>
            <span className="cursor-pointer hover:text-white transition-colors">EN</span>
          </div>
        </div>
      </div>
    </>
  )
}
