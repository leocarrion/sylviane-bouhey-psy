import { createFileRoute } from '@tanstack/react-router'
import { Phone, MapPin, Shield } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/mentions-legales')({
  head: () => ({
    meta: [
      {
        title: 'Mentions Légales — Sylviane Bouhey Psychopraticienne',
      },
    ],
  }),
  component: MentionsLegales,
})

function MentionsLegales() {
  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      <Header />

      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-sage/10">
          <h1 className="text-4xl font-serif font-bold text-charcoal mb-12 italic border-b border-sage/20 pb-4">Mentions Légales</h1>
          
          <div className="space-y-12 text-charcoal/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif font-bold text-sage mb-4 flex items-center gap-3">
                <Shield size={24} /> 1. Éditeur du site
              </h2>
              <p>
                Le présent site est la propriété de <strong>Sylviane Bouhey</strong>.<br />
                Profession : Psychopraticienne & Psychanalyste.<br />
                Adresse : 49 Rue Des Visages Radieux, 80000 Amiens, France.<br />
                SIRET : 79840833200020.<br />
                Téléphone : <a href="tel:0686105980" className="text-sage font-bold"> <span className="hidden sm:inline">06 86 10 59 80</span></a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-sage mb-4 flex items-center gap-3">
                <MapPin size={24} /> 2. Hébergement
              </h2>
              <p>
                Le site est hébergé par une plateforme technique sécurisée.<br />
                Pour toute question technique, merci de contacter l'éditeur via le numéro de téléphone indiqué ci-dessus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-sage mb-4">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, photographies, logos) est la propriété exclusive de Sylviane Bouhey, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-sage mb-4">4. Responsabilité</h2>
              <p>
                Sylviane Bouhey s'efforce de fournir des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions ou des lacunes dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-sage mb-4">5. Médiation</h2>
              <p>
                Conformément aux articles L.616-1 et R.616-1 du code de la consommation, nous proposons un dispositif de médiation de la consommation. En cas de litige, vous pouvez déposer votre réclamation sur le site du médiateur désigné.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-charcoal text-white/60 py-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Sylviane Bouhey. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
