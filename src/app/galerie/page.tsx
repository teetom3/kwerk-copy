'use client'

import { useState } from 'react'

type Location = 'Tout' | 'Messine' | 'Saint-Honoré' | 'Madeleine' | 'Haussmann'

interface GalleryItem {
  id: number
  location: Exclude<Location, 'Tout'>
  category: string
  title: string
  aspect: 'landscape' | 'portrait' | 'square'
  gradient: string
}

const galleryItems: GalleryItem[] = [
  // Messine
  { id: 1, location: 'Messine', category: 'Lobby', title: 'Hall d\'entrée', aspect: 'landscape', gradient: 'from-stone-600 to-stone-800' },
  { id: 2, location: 'Messine', category: 'Bureaux', title: 'Suite executive', aspect: 'portrait', gradient: 'from-stone-700 to-neutral-800' },
  { id: 3, location: 'Messine', category: 'Rooftop', title: 'Toit végétalisé', aspect: 'landscape', gradient: 'from-green-900 to-stone-800' },
  { id: 4, location: 'Messine', category: 'Barista', title: 'Espace café', aspect: 'square', gradient: 'from-amber-900 to-stone-800' },
  { id: 5, location: 'Messine', category: 'Bureaux', title: 'Bureau privatif', aspect: 'portrait', gradient: 'from-stone-500 to-stone-700' },
  { id: 6, location: 'Messine', category: 'Réunion', title: 'Salle de réunion', aspect: 'landscape', gradient: 'from-neutral-600 to-stone-800' },
  // Saint-Honoré
  { id: 7, location: 'Saint-Honoré', category: 'Lobby', title: 'Canopée de bambous', aspect: 'portrait', gradient: 'from-green-800 to-neutral-800' },
  { id: 8, location: 'Saint-Honoré', category: 'Bureaux', title: 'Espace de travail', aspect: 'landscape', gradient: 'from-neutral-700 to-neutral-900' },
  { id: 9, location: 'Saint-Honoré', category: 'Wellness', title: 'Espace bien-être', aspect: 'square', gradient: 'from-teal-900 to-neutral-800' },
  { id: 10, location: 'Saint-Honoré', category: 'Événements', title: 'Espace événementiel', aspect: 'landscape', gradient: 'from-neutral-600 to-neutral-800' },
  { id: 11, location: 'Saint-Honoré', category: 'Bureaux', title: 'Suite privée', aspect: 'portrait', gradient: 'from-stone-600 to-neutral-700' },
  { id: 12, location: 'Saint-Honoré', category: 'Réunion', title: 'Board room', aspect: 'square', gradient: 'from-neutral-700 to-stone-800' },
  // Madeleine
  { id: 13, location: 'Madeleine', category: 'Lobby', title: 'Temple du travail', aspect: 'landscape', gradient: 'from-stone-600 to-amber-900' },
  { id: 14, location: 'Madeleine', category: 'Bureaux', title: 'Bureau noble', aspect: 'portrait', gradient: 'from-amber-900 to-stone-800' },
  { id: 15, location: 'Madeleine', category: 'Wellness', title: 'Sauna', aspect: 'square', gradient: 'from-stone-700 to-amber-950' },
  { id: 16, location: 'Madeleine', category: 'Barista', title: 'Lounge café', aspect: 'landscape', gradient: 'from-amber-800 to-stone-800' },
  // Haussmann
  { id: 17, location: 'Haussmann', category: 'Lobby', title: 'Lobby végétal', aspect: 'portrait', gradient: 'from-green-900 to-neutral-800' },
  { id: 18, location: 'Haussmann', category: 'Bureaux', title: 'Espace ouvert', aspect: 'landscape', gradient: 'from-neutral-500 to-neutral-800' },
  { id: 19, location: 'Haussmann', category: 'Sport', title: 'Salle de sport', aspect: 'square', gradient: 'from-neutral-700 to-stone-800' },
  { id: 20, location: 'Haussmann', category: 'Wellness', title: 'Méditation', aspect: 'landscape', gradient: 'from-teal-900 to-neutral-900' },
]

const filters: Location[] = ['Tout', 'Messine', 'Saint-Honoré', 'Madeleine', 'Haussmann']

export default function GaleriePage() {
  const [active, setActive] = useState<Location>('Tout')
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  const filtered = active === 'Tout' ? galleryItems : galleryItems.filter((i) => i.location === active)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-kwerk-dark overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
          <p className="text-kwerk-gold text-xs tracking-[0.4em] uppercase font-sans font-light mb-6">
            Nos espaces en images
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight max-w-2xl">
            Galerie
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-kwerk-grey/15 sticky top-20 z-30">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-8 overflow-x-auto py-5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-xs tracking-widest uppercase font-sans font-light whitespace-nowrap flex-shrink-0 transition-all duration-200 pb-1 border-b ${
                  active === f
                    ? 'text-kwerk-dark border-kwerk-dark'
                    : 'text-kwerk-grey border-transparent hover:text-kwerk-dark hover:border-kwerk-grey/50'
                }`}
              >
                {f}
                {f !== 'Tout' && (
                  <span className="ml-1 text-kwerk-grey/50">
                    ({galleryItems.filter((i) => i.location === f).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                className="relative overflow-hidden cursor-pointer group break-inside-avoid"
              >
                <div
                  className={`bg-gradient-to-br ${item.gradient} ${
                    item.aspect === 'landscape' ? 'h-56' : item.aspect === 'portrait' ? 'h-80' : 'h-64'
                  } w-full transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-kwerk-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-kwerk-gold text-xs tracking-widest uppercase font-sans font-light mb-1">
                      {item.category} — {item.location}
                    </p>
                    <p className="text-white font-serif text-xl font-light">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-kwerk-grey font-light">Aucune image disponible</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-kwerk-black/95 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-8 text-white/60 hover:text-white text-4xl font-thin"
            onClick={() => setSelected(null)}
            aria-label="Fermer"
          >
            ×
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`bg-gradient-to-br ${selected.gradient} w-full ${
                selected.aspect === 'portrait' ? 'h-[70vh]' : 'h-[60vh]'
              }`}
            />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-kwerk-gold text-xs tracking-widest uppercase font-sans font-light mb-1">
                  {selected.category} — {selected.location}
                </p>
                <p className="text-white font-serif text-2xl font-light">{selected.title}</p>
              </div>
              <div className="text-white/40 text-sm font-sans font-light tracking-wider">
                {filtered.indexOf(selected) + 1} / {filtered.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
