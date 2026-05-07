import { createFileRoute } from '@tanstack/react-router'
import { ShieldCheck, Eye, Lock, RefreshCcw } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/confidentialite')({
  head: () => ({
    meta: [
      {
        title: 'Politique de Confidentialité — Sylviane Bouhey Psychopraticienne',
      },
    ],
  }),
  component: Confidentialite,
})

function Confidentialite() {
  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      <Header />

      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-sage/10">
          <h1 className="text-4xl font-serif font-bold text-charcoal mb-12 italic border-b border-sage/20 pb-4">Politique de Confidentialité (RGPD)</h1>
          
          <div className="space-y-12 text-charcoal/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif font-bold text-sage mb-4 flex items-center gap-3">
                <ShieldCheck size={24} /> 1. Protection des données
              </h2>
              <p>
                Sylviane Bouhey s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site, soient conformes au règlement général sur la protection des données (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-sage mb-4 flex items-center gap-3">
                <Eye size={24} /> 2. Données collectées
              </h2>
              <p>
                Lorsque vous utilisez le formulaire de contact, nous collectons : 
                <ul className="list-disc ml-6 mt-2">
                  <li>Votre nom / prénom</li>
                  <li>Votre numéro de téléphone</li>
                  <li>Votre adresse email</li>
                  <li>Le contenu de votre message</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-sage mb-4 flex items-center gap-3">
                <Lock size={24} /> 3. Finalité et Conservation
              </h2>
              <p>
                Ces données sont uniquement utilisées pour répondre à votre demande de renseignement ou de rendez-vous. Elles ne sont jamais cédées à des tiers.
              </p>
              <p className="mt-2">
                Les données sont conservées pendant la durée nécessaire à la gestion de la relation thérapeutique, ou pour une durée maximale de 3 ans après le dernier contact pour les demandes n'ayant pas abouti à un suivi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-sage mb-4 flex items-center gap-3">
                <RefreshCcw size={24} /> 4. Vos droits
              </h2>
              <p>
                Conformément à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.
              </p>
              <p className="mt-2">
                Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter Sylviane Bouhey par téléphone au <a href="tel:0686105980" className="text-sage font-bold"> <span className="hidden sm:inline">06 86 10 59 80</span></a> ou via le formulaire de contact.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-sage mb-4">5. Cookies</h2>
              <p>
                Ce site peut utiliser des cookies techniques strictement nécessaires à sa navigation. Nous n'utilisons pas de cookies de traçage publicitaire.
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
