import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, CheckCircle, Brain, ShieldCheck, Clock, MapPin, Target, Users } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/analyse-transactionnelle-amiens')({
  head: () => ({
    meta: [
      {
        title: 'Analyse Transactionnelle Amiens — Eric Berne | Sylviane Bouhey',
      },
      {
        name: 'description',
        content: 'Découvrez l\'Analyse Transactionnelle (AT) à Amiens avec Sylviane Bouhey. Comprenez vos relations et votre scénario de vie pour plus d\'autonomie.',
      },
    ],
  }),
  component: AT,
})

function AT() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <section className="py-24 bg-offwhite">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <Users size={16} />
                <span>Théorie de la personnalité & de la communication</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8 italic">Analyse Transactionnelle à Amiens</h1>
              <p className="text-xl text-charcoal/80 leading-relaxed mb-12">
                Développée par Eric Berne, l'Analyse Transactionnelle (AT) est une approche qui permet de comprendre comment nous sommes structurés psychologiquement et comment nous entrons en relation avec les autres.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-sage/10 text-center">
                  <div className="text-sage font-serif font-bold text-4xl mb-4">P</div>
                  <h4 className="font-bold mb-2">Parent</h4>
                  <p className="text-sm text-charcoal/60 italic">Normes, valeurs, jugements hérités.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-sage/10 text-center">
                  <div className="text-sage font-serif font-bold text-4xl mb-4">A</div>
                  <h4 className="font-bold mb-2">Adulte</h4>
                  <p className="text-sm text-charcoal/60 italic">Ici et maintenant, traitement de l'info.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-sage/10 text-center">
                  <div className="text-sage font-serif font-bold text-4xl mb-4">E</div>
                  <h4 className="font-bold mb-2">Enfant</h4>
                  <p className="text-sm text-charcoal/60 italic">Émotions, créativité, besoins spontanés.</p>
                </div>
              </div>

              <div className="space-y-8 text-charcoal/80 leading-relaxed text-lg">
                <h3 className="text-2xl font-serif font-bold text-charcoal italic">Sortir de son "Scénario de Vie"</h3>
                <p>
                  Nous avons tous écrit un "plan de vie" dans notre enfance, sous l'influence de notre entourage. Ce scénario nous a protégés autrefois, mais il peut devenir une prison à l'âge adulte.
                </p>
                <p>
                  L'AT vous aide à prendre conscience de vos schémas répétitifs pour retrouver votre autonomie : la capacité d'être conscient, spontané et d'entrer dans une véritable intimité avec les autres.
                </p>
              </div>
            </div>
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
