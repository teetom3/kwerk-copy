import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

const locations = [
  {
    id: 'messine',
    name: 'Messine',
    address: '16 Avenue de Messine, 75008',
    description:
      "Adresse haussmannienne d'exception, avec des espaces privés modulables, un service barista et deux toits végétalisés offrant une vue panoramique sur Paris.",
    highlight: 'Toits végétalisés & vue panoramique',
    bg: 'bg-stone-200',
  },
  {
    id: 'saint-honore',
    name: 'Saint-Honoré',
    address: '18 Rue de Courcelles, 75008',
    description:
      "Cadre contemporain et élégant, distingué par une canopée de bambous dépassant dix mètres de hauteur, face à l'église Saint-Philippe-du-Roule.",
    highlight: 'Canopée de bambous de 10 mètres',
    bg: 'bg-neutral-300',
  },
  {
    id: 'madeleine',
    name: 'Madeleine',
    address: '22 Boulevard Malesherbes, 75008',
    description:
      'Temple du travail aux accents exotiques subtils et matériaux nobles. Bureaux privatifs sereins entre deux églises historiques du 8ème.',
    highlight: 'Temple du travail entre deux églises',
    bg: 'bg-stone-300',
  },
  {
    id: 'haussmann',
    name: 'Haussmann',
    address: '29 Rue de Courcelles, 75008',
    description:
      'Adresse tournée vers la nature, avec un lobby verdoyant et lumineux, une architecture ouverte et volumineuse propice à la concentration.',
    highlight: 'Architecture ouverte & lumière naturelle',
    bg: 'bg-neutral-200',
  },
]

const services = [
  {
    id: 'restaurant',
    name: 'Le Dana',
    category: 'Restaurant',
    description:
      'Restaurant semi-gastronomique réservé aux membres et leurs invités. Le Chef Lais Borba compose une cuisine authentique, raffinée et renouvelée chaque semaine.',
    icon: '◈',
  },
  {
    id: 'lounge',
    name: 'Lounge & Barista',
    category: 'Café & Snacks',
    description:
      'Cafés de spécialité, thés, boissons fraîches et snacks tout au long de la journée. Infusions, eaux aromatisées et fruits frais à chaque étage.',
    icon: '◇',
  },
  {
    id: 'sport',
    name: 'Sport & Coaching',
    category: 'Fitness',
    description:
      'Plus de 40 heures de cours hebdomadaires — HIIT, boxe, cycling, yoga, pilates, Hyrox. Salle de sport accessible 24h/24, 7j/7.',
    icon: '◈',
  },
  {
    id: 'wellness',
    name: 'Wellness',
    category: 'Bien-être',
    description:
      'Rituels de méditation quotidiens, accompagnement ayurvédique personnalisé, sauna, cabines de flottaison et salles de sieste.',
    icon: '◇',
  },
]

const workspaces = [
  { name: 'Bureaux privatifs', desc: 'Des espaces dédiés à votre équipe, entièrement personnalisables.' },
  { name: 'Suites executives', desc: 'Le summum du confort pour les dirigeants les plus exigeants.' },
  { name: 'Étages privés', desc: 'Un étage complet à votre image, avec services inclus.' },
  { name: 'Salles de réunion', desc: 'Espaces de collaboration équipés, disponibles à la demi-journée.' },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-screen flex items-end justify-start overflow-hidden">
        {/* Hero background image */}
        <Image
          src="/images/hero-terrasse.jpg"
          alt="Terrasse - Bureaux d'exception Kwerk"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
          style={{ objectFit: 'cover' }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800/80 via-kwerk-black/85 to-stone-900/80" />

        {/* Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 pb-20 md:pb-32 w-full">
          <div className="max-w-2xl">
            <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-6 animate-fade-in-up">
              Paris 8ème — Bureaux d'exception
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight mb-8 animate-fade-in-up-delay">
              Stephane Marat
            </h1>
            <p className="font-sans font-light text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-xl animate-fade-in-up-delay-2">
              Kwerk crée des bureaux d'exception au cœur de Paris, où hospitalité, discrétion et art de recevoir façonnent une expérience de travail unique.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-2">
              <Link href="/adresses" className="btn-primary-light">
                Découvrir nos adresses
              </Link>
              <Link href="/contact" className="text-white text-xs tracking-widest uppercase font-sans font-light underline underline-offset-4 hover:text-kwerk-gold transition-colors self-center">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-10 flex flex-col items-center gap-3 text-white/40">
          <span className="text-xs tracking-widest font-sans font-light rotate-90 origin-center">Scroll</span>
          <div className="w-px h-12 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ─── INTRO TAGLINE ─── */}
      <section className="bg-kwerk-light section-padding">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-8">
              Notre philosophie
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-kwerk-dark leading-tight">
              Hospitalité, discrétion<br />et art de recevoir
            </h2>
            <div className="w-12 h-px bg-kwerk-gold mx-auto my-10" />
            <p className="font-sans font-light text-kwerk-grey text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Dans chacune de nos quatre adresses du 8ème arrondissement, nous avons pensé chaque détail pour que votre lieu de travail devienne un avantage compétitif. Un cadre d'excellence qui inspire, qui protège et qui rayonne.
            </p>
          </div>
        </div>
      </section>

      {/* ─── LOCATIONS ─── */}
      <section id="adresses" className="bg-white section-padding">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-4">
              Quatre adresses
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-kwerk-dark">
              Nos adresses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {locations.map((loc, i) => (
              <div key={loc.id} className="group relative overflow-hidden">
                {/* Image placeholder or actual image */}
                <div
                  className={`relative h-[450px] md:h-[500px] overflow-hidden ${loc.id === 'haussmann' ? '' : loc.bg}`}
                >
                  {loc.id === 'haussmann' && (
                    <Image
                      src="/images/lobby-haussmann.jpg"
                      alt={`${loc.name} - Kwerk`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      className="object-cover"
                      priority={false}
                    />
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-kwerk-black/80 via-kwerk-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70" />

                  {/* Number */}
                  <div className="absolute top-8 right-8 font-serif text-7xl font-light text-white/10 z-20">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 translate-y-0">
                  <p className="text-kwerk-gold text-xs tracking-widest uppercase font-sans font-light mb-2">
                    {loc.highlight}
                  </p>
                  <h3 className="font-serif text-3xl text-white font-light mb-2">{loc.name}</h3>
                  <p className="text-white/50 text-xs font-sans font-light tracking-wider mb-4">{loc.address}</p>
                  <p className="text-white/70 text-sm font-sans font-light leading-relaxed mb-6 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0">
                    {loc.description}
                  </p>
                  <Link
                    href={`/adresses#${loc.id}`}
                    className="text-white text-xs tracking-widest uppercase font-sans font-light border-b border-white/40 hover:border-kwerk-gold hover:text-kwerk-gold transition-all duration-300 pb-0.5"
                  >
                    Découvrir
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUREAUX ─── */}
      <section id="bureaux" className="bg-kwerk-black section-padding">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-6">
                Espaces de travail
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight mb-8">
                Des espaces taillés <em>sur mesure</em>
              </h2>
              <p className="font-sans font-light text-white/60 text-sm leading-relaxed mb-12">
                Chaque espace Kwerk est conçu pour répondre aux besoins des entreprises les plus exigeantes. De la suite executive à l'étage privatif, nous façonnons votre cadre de travail.
              </p>
              <div className="space-y-6">
                {workspaces.map((w) => (
                  <div key={w.name} className="border-b border-white/10 pb-6">
                    <h4 className="font-sans text-xs tracking-widest uppercase text-white font-light mb-2">
                      {w.name}
                    </h4>
                    <p className="font-sans font-light text-white/40 text-sm">{w.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link href="/contact" className="btn-primary-light">
                  Demander une visite
                </Link>
              </div>
            </div>
            {/* Visual placeholder */}
            <div className="relative h-[600px]">
              <Image
                src="/images/KWERK-MESSINE.jpg"
                alt="Bureau privatif — Messine"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="object-cover rounded-sm"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="experiences" className="bg-kwerk-light section-padding">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-4">
              Expériences
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-kwerk-dark">
              Au-delà du bureau
            </h2>
            <div className="w-12 h-px bg-kwerk-gold mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-kwerk-grey/20">
            {services.map((s) => (
              <div key={s.id} className="bg-kwerk-light p-10 md:p-14 group hover:bg-white transition-colors duration-300">
                <p className="text-kwerk-gold text-xs tracking-widest uppercase font-sans font-light mb-6">
                  {s.category}
                </p>
                <h3 className="font-serif text-3xl font-light text-kwerk-dark mb-4">{s.name}</h3>
                <p className="font-sans font-light text-kwerk-grey text-sm leading-relaxed">{s.description}</p>
                <Link
                  href={`/services#${s.id}`}
                  className="inline-block mt-8 text-xs tracking-widest uppercase font-sans font-light text-kwerk-dark border-b border-kwerk-dark/30 hover:border-kwerk-gold hover:text-kwerk-gold transition-all duration-300 pb-0.5"
                >
                  En savoir plus
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EVENEMENTS ─── */}
      <section id="evenements" className="bg-white section-padding">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative h-[500px] order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-6xl text-kwerk-dark/10 font-light">Événements</p>
                </div>
              </div>
              <div className="absolute inset-6 border border-kwerk-dark/10" />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-6">
                Événements & privatisation
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-kwerk-dark leading-tight mb-8">
                Des espaces d'exception pour vos événements
              </h2>
              <p className="font-sans font-light text-kwerk-grey text-sm leading-relaxed mb-8">
                Séminaires, lancements de produits, conférences de presse ou dîners privés — nos espaces s'adaptent à chaque occasion avec une discrétion et une excellence de service incomparables.
              </p>
              <ul className="space-y-4 mb-12">
                {['Espaces privatisables jusqu\'à 200 personnes', 'Service traiteur par Le Dana', 'Équipements audiovisuels haut de gamme', 'Accompagnement personnalisé'].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-sm font-sans font-light text-kwerk-grey">
                    <span className="text-kwerk-gold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                Privatiser un espace
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="bg-kwerk-cream py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-light text-kwerk-dark mb-6">
            Prêt à rejoindre Kwerk ?
          </h2>
          <p className="font-sans font-light text-kwerk-grey text-sm leading-relaxed mb-10 max-w-lg mx-auto">
            Planifiez une visite privée de nos adresses parisiennes et découvrez l'excellence d'un cadre de travail d'exception.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Planifier une visite
            </Link>
            <a href="tel:0783489457" className="text-kwerk-dark text-xs tracking-widest uppercase font-sans font-light underline underline-offset-4 hover:text-kwerk-gold transition-colors self-center">
              07 83 48 94 57
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section id="contact" className="bg-white section-padding">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-6">
                Contact
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-kwerk-dark leading-tight mb-8">
                Parlons de <em>votre projet</em>
              </h2>
              <p className="font-sans font-light text-kwerk-grey text-sm leading-relaxed mb-8">
                Notre équipe vous accompagne pour trouver l'espace idéal parmi nos quatre adresses parisiennes. Chaque demande fait l'objet d'une attention personnalisée.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs tracking-widest uppercase font-sans font-light text-kwerk-grey mb-1">Téléphone</p>
                  <a href="tel:0783489457" className="font-serif text-xl text-kwerk-dark hover:text-kwerk-gold transition-colors">
                    07 83 48 94 57
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-sans font-light text-kwerk-grey mb-2">Nos adresses</p>
                  {locations.map((l) => (
                    <p key={l.id} className="text-sm font-sans font-light text-kwerk-dark/70">{l.address}</p>
                  ))}
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
