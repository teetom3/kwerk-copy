import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactez-nous – kwerk',
  description: 'Contactez l\'équipe Kwerk pour planifier une visite de nos bureaux d\'exception à Paris.',
}

const locations = [
  { name: 'Messine', address: '16 Avenue de Messine, 75008 Paris' },
  { name: 'Saint-Honoré', address: '18 Rue de Courcelles, 75008 Paris' },
  { name: 'Madeleine', address: '22 Boulevard Malesherbes, 75008 Paris' },
  { name: 'Haussmann', address: '29 Rue de Courcelles, 75008 Paris' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-kwerk-cream overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
          <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-6">
            Nous contacter
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-kwerk-dark leading-tight max-w-2xl">
            Parlons de votre <em>projet</em>
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white section-padding">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <h2 className="font-serif text-3xl font-light text-kwerk-dark mb-8">
                  Notre équipe vous accompagne
                </h2>
                <p className="font-sans font-light text-kwerk-grey text-sm leading-relaxed mb-10">
                  Chaque demande fait l'objet d'une attention personnalisée. Notre équipe prend contact avec vous dans les 24 heures pour organiser une visite privée de nos espaces.
                </p>

                <div className="space-y-8 mb-12">
                  <div>
                    <p className="text-xs tracking-widest uppercase font-sans font-light text-kwerk-gold mb-3">
                      Téléphone
                    </p>
                    <a
                      href="tel:0783489457"
                      className="font-serif text-2xl text-kwerk-dark hover:text-kwerk-gold transition-colors"
                    >
                      07 83 48 94 57
                    </a>
                  </div>

                  <div>
                    <p className="text-xs tracking-widest uppercase font-sans font-light text-kwerk-gold mb-4">
                      Nos adresses
                    </p>
                    <div className="space-y-4">
                      {locations.map((l) => (
                        <div key={l.name} className="border-b border-kwerk-grey/10 pb-4">
                          <p className="font-sans text-xs tracking-widest uppercase font-light text-kwerk-dark mb-1">
                            {l.name}
                          </p>
                          <p className="font-sans font-light text-kwerk-grey text-sm">{l.address}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs tracking-widest uppercase font-sans font-light text-kwerk-gold mb-4">
                      Réseaux sociaux
                    </p>
                    <div className="flex gap-6">
                      <a
                        href="https://www.instagram.com/kwerk.paris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-sans font-light text-kwerk-dark hover:text-kwerk-gold transition-colors tracking-wider"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.linkedin.com/company/kwerk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-sans font-light text-kwerk-dark hover:text-kwerk-gold transition-colors tracking-wider"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
