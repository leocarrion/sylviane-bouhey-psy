import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, CheckCircle, ShieldCheck, MapPin, Target, Users } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/tarifs-psy-amiens')({
  head: () => ({
    meta: [
      {
        title: 'Tarifs — Psychopraticienne',
      },
      {
        name: 'description',
        content: 'Consultez les tarifs de Sylviane Bouhey, psychopraticienne et psychothérapeute à Amiens et en visio partout en France. Séance individuelle, thérapie de couple.',
      },
    ],
  }),
  component: Tarifs,
})

function Tarifs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <section className="py-24 bg-beige/30">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8 italic">Transparence & Engagement</h1>
            <p className="text-xl text-charcoal/70 mb-12">
              Le prix d'une séance ne doit pas être un obstacle à votre équilibre. Je propose des tarifs clairs et une première rencontre offerte pour débuter sereinement.
            </p>
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full text-sage font-bold border border-sage/20 shadow-sm">
              <CheckCircle size={20} />
              <span>Première consultation GRATUITE</span>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-2 bg-charcoal/5 text-charcoal/60 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest border border-charcoal/10">
                <Users size={16} />
                <span>Consultations pour adultes uniquement</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="p-8 rounded-3xl border border-sage/10 bg-offwhite hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">Consultation Individuelle</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-serif font-bold text-sage">60€–80€</span>
                    <span className="text-charcoal/40 text-sm">/ séance</span>
                  </div>
                  <p className="text-charcoal/70">Adultes uniquement. Séance d'une durée de 45 à 60 minutes selon le format.</p>
                </div>

                <div className="p-8 rounded-3xl border border-sage/10 bg-offwhite hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">Thérapie de Couple</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-serif font-bold text-sage">60€–80€</span>
                    <span className="text-charcoal/40 text-sm">/ séance</span>
                  </div>
                  <p className="text-charcoal/70">Séance dédiée au dialogue et à la résolution des crises relationnelles.</p>
                </div>
              </div>

              <div className="bg-sage text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <ShieldCheck size={120} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-8 italic">Prise en charge & Mutuelles</h3>
                <div className="space-y-6 text-white/80 leading-relaxed">
                  <p>
                    Bien que la psychothérapie libérale ne soit pas remboursée par la Sécurité Sociale, de plus en plus de mutuelles proposent une prise en charge forfaitaire ou à la séance.
                  </p>
                  <p>
                    <strong>Je vous délivre une facture</strong> à la fin de chaque séance pour faciliter vos démarches de remboursement auprès de votre organisme complémentaire.
                  </p>
                  <div className="pt-6 border-t border-white/20 mt-6">
                    <p className="text-white/60 text-sm mb-3">Modes de paiement acceptés :</p>
                    <div className="bg-white/90 px-4 py-2 rounded-xl inline-block shadow-sm">
                      <p className="font-bold text-lg text-charcoal">Chèque · Espèces</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-offwhite text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 italic">Une question sur les tarifs ?</h2>
            <p className="text-lg text-charcoal/70 mb-12">
              N'hésitez pas à me contacter par téléphone ou SMS pour toute précision sur les tarifs des prestations spécifiques (groupes, coaching).
            </p>
            <a href="tel:0686105980" className="inline-flex items-center gap-3 bg-sage text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl">
              06 86 10 59 80
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal text-white/60 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest">
            <p>© 2026 Sylviane Bouhey — Psychopraticienne</p>
            <div className="flex gap-8">
              <Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link>
              <Link to="/confidentialite" className="hover:text-white">Confidentialité</Link>
            </div>
          </div>
          <div className="mt-8 text-[10px] text-white/20 font-bold space-y-2 uppercase tracking-widest"><p>SIRET : 79840833200020</p><p>Lun : 15h–19h | Mar : 11h–14h | Mer, Jeu : 15h–19h | Ven : 11h–19h | Sam : 10h–19h</p><p className="italic text-[9px] mt-1">Les horaires peuvent être modifiés.</p></div>
        </div>
      </footer>
    </div>
  )
}
