import Link from 'next/link'

const locations = ['Messine', 'Saint-Honoré', 'Madeleine', 'Haussmann']

const navColumns = [
  {
    title: 'Espaces',
    links: [
      { label: 'Bureaux', href: '/#bureaux' },
      { label: 'Suites', href: '/#bureaux' },
      { label: 'Étages privés', href: '/#bureaux' },
      { label: 'Salles de réunion', href: '/#bureaux' },
      { label: 'Événements', href: '/#evenements' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Le Dana', href: '/services#restaurant' },
      { label: 'Lounge & Barista', href: '/services#lounge' },
      { label: 'Sport & Coaching', href: '/services#sport' },
      { label: 'Wellness', href: '/services#wellness' },
    ],
  },
  {
    title: 'Informations',
    links: [
      { label: 'Galerie', href: '/galerie' },
      { label: 'Contactez-nous', href: '/contact' },
      { label: 'CGU', href: '/cgu' },
      { label: 'Mentions légales', href: '/mentions-legales' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-kwerk-black text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Logo & tagline */}
          <div className="lg:col-span-2">
            <Link href="/">
              <span className="font-serif text-3xl tracking-[0.15em] font-light text-white">kwerk</span>
            </Link>
            <p className="mt-6 text-sm font-sans font-light text-white/60 leading-relaxed max-w-xs">
              Bureaux d'exception au cœur de Paris, où hospitalité, discrétion et art de recevoir façonnent une expérience de travail unique.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.instagram.com/kwerk.paris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-kwerk-gold transition-colors text-xs tracking-widest uppercase font-sans"
              >
                Instagram
              </a>
              <span className="text-white/30">—</span>
              <a
                href="https://www.linkedin.com/company/kwerk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-kwerk-gold transition-colors text-xs tracking-widest uppercase font-sans"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Adresses */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-light text-kwerk-gold mb-6">
              Adresses
            </h4>
            <ul className="space-y-3">
              {locations.map((loc) => (
                <li key={loc}>
                  <Link
                    href={`/adresses#${loc.toLowerCase().replace('é', 'e')}`}
                    className="text-sm font-sans font-light text-white/60 hover:text-white transition-colors"
                  >
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          {navColumns.slice(0, 2).map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-widest uppercase font-sans font-light text-kwerk-gold mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-sans font-light text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-sans font-light text-white/30 tracking-widest">
            © {new Date().getFullYear()} Kwerk. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {navColumns[2].links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-sans font-light text-white/30 hover:text-white/60 transition-colors tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs font-sans font-light text-white/20 tracking-widest">
            07 83 48 94 57
          </p>
        </div>
      </div>
    </footer>
  )
}
