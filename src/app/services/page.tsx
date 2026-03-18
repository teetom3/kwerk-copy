import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services – kwerk',
  description: 'Restaurant Le Dana, Lounge & Barista, Sport & Coaching, Wellness — des services d\'exception inclus pour tous les membres Kwerk.',
}

const services = [
  {
    id: 'restaurant',
    category: 'Gastronomie',
    name: 'Le Dana',
    tagline: 'Une cuisine authentique et raffinée',
    description:
      'Restaurant semi-gastronomique réservé aux membres Kwerk et leurs invités. Sous la direction du Chef Lais Borba, le Dana propose une cuisine authentique et raffinée, renouvelée chaque semaine selon les saisons et les arrivages.',
    details: [
      'Cuisine de saison, produits locaux',
      'Menu renouvelé chaque semaine',
      'Service déjeuner et dîner',
      'Privatisation possible pour événements',
      'Cave à vin sélectionnée',
      'Service traiteur disponible',
    ],
    quote: '« Une cuisine généreuse, précise et équilibrée, qui prend soin de ceux qui la dégustent. »',
    accent: 'bg-stone-100',
  },
  {
    id: 'lounge',
    category: 'Café & Bien-être',
    name: 'Lounge & Barista',
    tagline: 'Saveurs et convivialité tout au long de la journée',
    description:
      'Cafés de spécialité, thés d\'exception, boissons fraîches et snacks gourmands tout au long de la journée. À chaque étage, des stations d\'infusions, eaux aromatisées et fruits frais accueillent les membres dans une atmosphère apaisante.',
    details: [
      'Cafés de spécialité',
      'Thés et infusions sélectionnés',
      'Eaux aromatisées fraîches',
      'Fruits frais de saison',
      'Snacks et pâtisseries artisanales',
      'Stations à chaque étage',
    ],
    quote: '« Le plaisir d\'une pause, sublimé par des produits d\'exception. »',
    accent: 'bg-neutral-100',
  },
  {
    id: 'sport',
    category: 'Fitness & Performance',
    name: 'Sport & Coaching',
    tagline: 'Plus de 40 heures de cours hebdomadaires',
    description:
      'Un programme sportif complet avec plus de 40 heures de cours hebdomadaires. HIIT, boxe, cycling, yoga, pilates, Hyrox — nos coachs experts vous accompagnent vers vos objectifs. La salle de sport est accessible 24h/24, 7j/7 pour les séances en autonomie.',
    details: [
      'HIIT et cardio',
      'Boxe et arts martiaux',
      'Cycling',
      'Yoga et pilates',
      'Hyrox et préparation physique',
      'Coaching personnalisé disponible',
    ],
    quote: '« La performance passe aussi par le corps. Un esprit sain dans un corps sain. »',
    accent: 'bg-stone-100',
  },
  {
    id: 'wellness',
    category: 'Bien-être & Sérénité',
    name: 'Wellness',
    tagline: 'Un sanctuaire de bien-être au cœur de votre journée',
    description:
      'Rituels de méditation quotidiens, accompagnement ayurvédique personnalisé, saunas, cabines de flottaison et salles de sieste. Chez Kwerk, le bien-être des membres est une priorité, intégrée naturellement au rythme du travail.',
    details: [
      'Méditation guidée quotidienne',
      'Accompagnement ayurvédique',
      'Saunas',
      'Cabines de flottaison',
      'Salles de sieste',
      'Espaces de détente dédiés',
    ],
    quote: '« Se ressourcer pour mieux performer. Une philosophie de vie au service du travail. »',
    accent: 'bg-neutral-100',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-kwerk-cream overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
          <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-6">
            Expériences incluses
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-kwerk-dark leading-tight mb-8 max-w-2xl">
            Au-delà du bureau
          </h1>
          <p className="font-sans font-light text-kwerk-grey text-sm md:text-base leading-relaxed max-w-xl">
            Chez Kwerk, nous croyons que l'excellence du lieu de travail se mesure aussi aux expériences qu'il procure. C'est pourquoi nous avons imaginé un écosystème complet de services pour nourrir le corps et l'esprit.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-5">
          <div className="absolute inset-0 bg-gradient-to-l from-kwerk-gold to-transparent" />
        </div>
      </section>

      {/* Services */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section-padding ${i % 2 === 0 ? 'bg-white' : s.accent}`}
        >
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
              {/* Visual */}
              <div className={`relative h-[500px] ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div
                  className={`absolute inset-0 ${
                    i === 0
                      ? 'bg-gradient-to-br from-stone-700 to-stone-900'
                      : i === 1
                      ? 'bg-gradient-to-br from-amber-900 to-stone-800'
                      : i === 2
                      ? 'bg-gradient-to-br from-neutral-700 to-neutral-900'
                      : 'bg-gradient-to-br from-teal-900 to-stone-900'
                  }`}
                />
                <div className="absolute inset-6 border border-white/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-serif text-7xl md:text-8xl font-light text-white/10">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="w-full h-px bg-kwerk-gold/30" />
                  <p className="text-kwerk-gold/60 text-xs tracking-widest uppercase font-sans font-light mt-4 text-center">
                    {s.name}
                  </p>
                </div>
              </div>

              {/* Text */}
              <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-4">
                  {s.category}
                </p>
                <h2 className="font-serif text-5xl font-light text-kwerk-dark mb-3">{s.name}</h2>
                <p className="font-sans font-light text-kwerk-grey text-sm mb-8 italic">{s.tagline}</p>
                <div className="w-8 h-px bg-kwerk-gold mb-8" />
                <p className="font-sans font-light text-kwerk-grey text-sm leading-relaxed mb-10">
                  {s.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-10">
                  {s.details.map((d) => (
                    <div key={d} className="flex items-center gap-3 text-sm font-sans font-light text-kwerk-dark">
                      <span className="text-kwerk-gold flex-shrink-0">—</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-2 border-kwerk-gold pl-6 italic font-serif text-lg text-kwerk-dark/60 leading-relaxed mb-10">
                  {s.quote}
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-kwerk-black py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 text-center">
          <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-6">
            Devenez membre
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-8">
            Tous ces services vous attendent
          </h2>
          <p className="font-sans font-light text-white/60 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
            L'ensemble de ces services est inclus dans votre adhésion Kwerk. Contactez-nous pour découvrir nos offres et planifier une visite.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary-light">
              Demander une offre
            </Link>
            <Link href="/galerie" className="text-white text-xs tracking-widest uppercase font-sans font-light underline underline-offset-4 hover:text-kwerk-gold transition-colors self-center">
              Voir la galerie
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
