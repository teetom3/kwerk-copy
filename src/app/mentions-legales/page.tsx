import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales – kwerk',
}

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-kwerk-light">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <h1 className="font-serif text-5xl font-light text-kwerk-dark">Mentions légales</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="space-y-10 font-sans font-light text-kwerk-grey text-sm leading-relaxed">
            <div>
              <h2 className="font-sans text-xs tracking-widest uppercase text-kwerk-dark mb-4">Éditeur du site</h2>
              <p>Kwerk SAS<br />
              Siège social : 16 Avenue de Messine, 75008 Paris<br />
              Téléphone : 07 83 48 94 57<br />
              Capital social : [À compléter]<br />
              RCS Paris : [À compléter]</p>
            </div>

            <div>
              <h2 className="font-sans text-xs tracking-widest uppercase text-kwerk-dark mb-4">Hébergement</h2>
              <p>Ce site est hébergé par Vercel Inc.<br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
            </div>

            <div>
              <h2 className="font-sans text-xs tracking-widest uppercase text-kwerk-dark mb-4">Propriété intellectuelle</h2>
              <p>
                L'ensemble des éléments figurant sur ce site (textes, images, graphismes, logo, icônes) est la propriété exclusive de Kwerk SAS ou fait l'objet d'une autorisation d'utilisation. Toute reproduction, représentation, modification ou exploitation sans autorisation préalable et écrite de Kwerk est interdite.
              </p>
            </div>

            <div>
              <h2 className="font-sans text-xs tracking-widest uppercase text-kwerk-dark mb-4">Données personnelles</h2>
              <p>
                Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ces droits, contactez-nous à l'adresse suivante : contact@kwerk.fr.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
