import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos adresses – kwerk',
  description: 'Quatre adresses d\'exception dans le 8ème arrondissement de Paris : Messine, Saint-Honoré, Madeleine, Haussmann.',
}

const locations = [
  {
    id: 'messine',
    name: 'Messine',
    address: '16 Avenue de Messine',
    city: '75008 Paris',
    description:
      'Adresse haussmannienne d\'exception avec des espaces privés modulables, un service barista raffiné et deux toits végétalisés offrant une vue panoramique imprenable sur Paris. Chaque détail a été pensé pour offrir un cadre de travail d\'excellence.',
    features: [
      'Espaces modulables personnalisables',
      'Deux toits végétalisés',
      'Vue panoramique sur Paris',
      'Service barista dédié',
      'Lobby élégant',
      'Salles de réunion équipées',
    ],
    accent: 'from-stone-700 to-stone-900',
  },
  {
    id: 'saint-honore',
    name: 'Saint-Honoré',
    address: '18 Rue de Courcelles',
    city: '75008 Paris',
    description:
      'Espace contemporain et élégant, distingué par une installation de canopée de bambous dépassant dix mètres de hauteur. Situé face à l\'église Saint-Philippe-du-Roule, ce lieu allie modernité et caractère. Une signature architecturale unique au cœur du 8ème.',
    features: [
      'Canopée de bambous de 10 mètres',
      'Face à Saint-Philippe-du-Roule',
      'Design contemporain',
      'Espaces lumineux',
      'Salles de réunion',
      'Lounge barista',
    ],
    accent: 'from-neutral-700 to-neutral-900',
  },
  {
    id: 'madeleine',
    name: 'Madeleine',
    address: '22 Boulevard Malesherbes',
    city: '75008 Paris',
    description:
      'Véritable temple du travail aux accents exotiques subtils et aux matériaux nobles soigneusement sélectionnés. Niché entre deux églises historiques du 8ème arrondissement, cet espace offre des bureaux privatifs sereins et une atmosphère propice à la créativité.',
    features: [
      'Temple du travail',
      'Matériaux nobles',
      'Entre deux églises historiques',
      'Bureaux privatifs sereins',
      'Accents exotiques',
      'Atmosphère inspirante',
    ],
    accent: 'from-stone-600 to-stone-800',
  },
  {
    id: 'haussmann',
    name: 'Haussmann',
    address: '29 Rue de Courcelles',
    city: '75008 Paris',
    description:
      'Adresse résolument tournée vers la nature, avec un lobby verdoyant et baigné de lumière naturelle. L\'architecture ouverte et les volumes généreux favorisent la concentration et la performance, dans un environnement apaisant et inspirant.',
    features: [
      'Lobby verdoyant',
      'Architecture ouverte',
      'Lumière naturelle abondante',
      'Volumes généreux',
      'Propice à la concentration',
      'Atmosphère apaisante',
    ],
    accent: 'from-neutral-600 to-neutral-800',
  },
]

export default function AdressesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-kwerk-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(201,169,110,0.08)_0%,transparent_60%)]" />
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
          <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-6">
            Paris 8ème
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight mb-8 max-w-2xl">
            Quatre adresses<br />d'exception
          </h1>
          <p className="font-sans font-light text-white/60 text-sm md:text-base leading-relaxed max-w-xl">
            Chacune de nos adresses est le fruit d'une vision architecturale singulière et d'une attention portée aux moindres détails, pour créer des lieux de travail véritablement exceptionnels.
          </p>
        </div>
      </section>

      {/* Map navigation */}
      <section className="bg-kwerk-light py-10 sticky top-20 z-30 border-b border-kwerk-grey/10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-8 overflow-x-auto">
            {locations.map((loc) => (
              <a
                key={loc.id}
                href={`#${loc.id}`}
                className="text-xs tracking-widest uppercase font-sans font-light text-kwerk-grey hover:text-kwerk-dark transition-colors whitespace-nowrap flex-shrink-0"
              >
                {loc.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      {locations.map((loc, i) => (
        <section
          key={loc.id}
          id={loc.id}
          className={`section-padding ${i % 2 === 0 ? 'bg-white' : 'bg-kwerk-light'}`}
        >
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text */}
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-4">
                  {loc.address}
                </p>
                <h2 className="font-serif text-5xl md:text-6xl font-light text-kwerk-dark mb-6">
                  {loc.name}
                </h2>
                <p className="font-sans font-light text-kwerk-grey text-sm mb-2">{loc.city}</p>
                <div className="w-8 h-px bg-kwerk-gold my-8" />
                <p className="font-sans font-light text-kwerk-grey text-sm leading-relaxed mb-10">
                  {loc.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-12">
                  {loc.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm font-sans font-light text-kwerk-dark">
                      <span className="text-kwerk-gold text-xs">—</span>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex gap-6">
                  <Link href="/contact" className="btn-primary">
                    Visiter {loc.name}
                  </Link>
                  <Link
                    href="/galerie"
                    className="text-kwerk-dark text-xs tracking-widest uppercase font-sans font-light underline underline-offset-4 hover:text-kwerk-gold transition-colors self-center"
                  >
                    Voir la galerie
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className={`relative h-[500px] md:h-[600px] ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${loc.accent}`} />
                <div className="absolute inset-6 border border-white/10" />
                <div className="absolute bottom-8 left-8">
                  <p className="font-serif text-white/20 text-6xl font-light">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                </div>
                <div className="absolute top-8 right-8 text-right">
                  <p className="text-white/30 text-xs tracking-widest uppercase font-sans font-light">
                    Kwerk {loc.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Contact */}
      <section className="bg-kwerk-black section-padding">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-6">
              Planifiez votre visite
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
              Venez découvrir nos espaces
            </h2>
          </div>
          <div className="max-w-2xl mx-auto bg-white p-10 md:p-16">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
