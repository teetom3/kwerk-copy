'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    societe: '',
    postes: '',
    type: [] as string[],
    description: '',
    source: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const typeOptions = [
    'Bureau privatif',
    'Suite executive',
    'Étage privé',
    'Salle de réunion',
    'Événement',
  ]

  const handleType = (val: string) => {
    setForm((f) => ({
      ...f,
      type: f.type.includes(val) ? f.type.filter((t) => t !== val) : [...f.type, val],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h3 className="font-serif text-3xl font-light text-kwerk-dark mb-4">Merci pour votre message</h3>
        <p className="font-sans font-light text-kwerk-grey text-sm tracking-wider">
          Notre équipe vous contactera dans les plus brefs délais.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase font-sans font-light text-kwerk-grey mb-2">
            Prénom *
          </label>
          <input
            type="text"
            required
            value={form.prenom}
            onChange={(e) => setForm({ ...form, prenom: e.target.value })}
            className="w-full border-b border-kwerk-grey/40 bg-transparent py-2 text-sm font-sans font-light text-kwerk-dark focus:outline-none focus:border-kwerk-dark transition-colors placeholder:text-kwerk-grey/40"
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase font-sans font-light text-kwerk-grey mb-2">
            Nom *
          </label>
          <input
            type="text"
            required
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            className="w-full border-b border-kwerk-grey/40 bg-transparent py-2 text-sm font-sans font-light text-kwerk-dark focus:outline-none focus:border-kwerk-dark transition-colors placeholder:text-kwerk-grey/40"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase font-sans font-light text-kwerk-grey mb-2">
            Email *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border-b border-kwerk-grey/40 bg-transparent py-2 text-sm font-sans font-light text-kwerk-dark focus:outline-none focus:border-kwerk-dark transition-colors placeholder:text-kwerk-grey/40"
            placeholder="votre@email.com"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase font-sans font-light text-kwerk-grey mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            value={form.telephone}
            onChange={(e) => setForm({ ...form, telephone: e.target.value })}
            className="w-full border-b border-kwerk-grey/40 bg-transparent py-2 text-sm font-sans font-light text-kwerk-dark focus:outline-none focus:border-kwerk-dark transition-colors placeholder:text-kwerk-grey/40"
            placeholder="+33 6 00 00 00 00"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase font-sans font-light text-kwerk-grey mb-2">
            Société
          </label>
          <input
            type="text"
            value={form.societe}
            onChange={(e) => setForm({ ...form, societe: e.target.value })}
            className="w-full border-b border-kwerk-grey/40 bg-transparent py-2 text-sm font-sans font-light text-kwerk-dark focus:outline-none focus:border-kwerk-dark transition-colors placeholder:text-kwerk-grey/40"
            placeholder="Nom de votre société"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase font-sans font-light text-kwerk-grey mb-2">
            Nombre de postes
          </label>
          <input
            type="number"
            value={form.postes}
            onChange={(e) => setForm({ ...form, postes: e.target.value })}
            className="w-full border-b border-kwerk-grey/40 bg-transparent py-2 text-sm font-sans font-light text-kwerk-dark focus:outline-none focus:border-kwerk-dark transition-colors placeholder:text-kwerk-grey/40"
            placeholder="Ex: 10"
          />
        </div>
      </div>

      {/* Type de projet */}
      <div>
        <label className="block text-xs tracking-widest uppercase font-sans font-light text-kwerk-grey mb-4">
          Type de projet
        </label>
        <div className="flex flex-wrap gap-3">
          {typeOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => handleType(opt)}
              className={`px-4 py-2 text-xs tracking-widest uppercase font-sans font-light border transition-all duration-200 ${
                form.type.includes(opt)
                  ? 'border-kwerk-dark bg-kwerk-dark text-white'
                  : 'border-kwerk-grey/40 text-kwerk-grey hover:border-kwerk-dark hover:text-kwerk-dark'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-xs tracking-widest uppercase font-sans font-light text-kwerk-grey mb-2">
          Décrivez votre projet
        </label>
        <textarea
          rows={4}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border-b border-kwerk-grey/40 bg-transparent py-2 text-sm font-sans font-light text-kwerk-dark focus:outline-none focus:border-kwerk-dark transition-colors placeholder:text-kwerk-grey/40 resize-none"
          placeholder="Partagez-nous vos besoins et ambitions..."
        />
      </div>

      {/* Source */}
      <div>
        <label className="block text-xs tracking-widest uppercase font-sans font-light text-kwerk-grey mb-2">
          Comment nous avez-vous connu ?
        </label>
        <select
          value={form.source}
          onChange={(e) => setForm({ ...form, source: e.target.value })}
          className="w-full border-b border-kwerk-grey/40 bg-transparent py-2 text-sm font-sans font-light text-kwerk-dark focus:outline-none focus:border-kwerk-dark transition-colors appearance-none"
        >
          <option value="">Sélectionner</option>
          <option>Bouche à oreille</option>
          <option>Réseaux sociaux</option>
          <option>Moteur de recherche</option>
          <option>Presse</option>
          <option>Autre</option>
        </select>
      </div>

      <div className="pt-4">
        <button type="submit" className="btn-primary">
          Envoyer ma demande
        </button>
      </div>
    </form>
  )
}
