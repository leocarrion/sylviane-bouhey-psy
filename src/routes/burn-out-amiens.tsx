import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, CheckCircle, Brain, Target, ShieldCheck } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/burn-out-amiens')({
  head: () => ({
    meta: [
      {
        title: 'Accompagnement Burn-out Amiens — Épuisement Professionnel | Sylviane Bouhey',
      },
      {
        name: 'description',
        content: 'Vous souffrez d\'épuisement professionnel ? Sylviane Bouhey vous accompagne à Amiens pour sortir du burn-out et retrouver votre équilibre.',
      },
    ],
  }),
  component: BurnOut,
})

function BurnOut() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <section className="py-24 bg-red-50/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8 italic">Burn-out : sortir de l'épuisement</h1>
            <p className="text-xl text-charcoal/80 leading-relaxed mb-12">
              Le burn-out n'est pas une fatalité, c'est le signal d'un système qui a trop forcé. À Amiens, je vous accompagne pour comprendre les mécanismes de cet épuisement et reconstruire vos limites.
            </p>
            
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-red-100 mb-16">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-8 italic">Reconnaître les signes</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><CheckCircle className="text-red-400" size={20} /> <span className="text-charcoal/70">Fatigue chronique persistante</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-red-400" size={20} /> <span className="text-charcoal/70">Perte de motivation et de sens</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-red-400" size={20} /> <span className="text-charcoal/70">Irritabilité et cynisme</span></li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><CheckCircle className="text-red-400" size={20} /> <span className="text-charcoal/70">Troubles du sommeil et de concentration</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-red-400" size={20} /> <span className="text-charcoal/70">Sentiment d'inefficacité</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-red-400" size={20} /> <span className="text-charcoal/70">Douleurs physiques inexpliquées</span></li>
                </ul>
              </div>
            </div>

            <div className="space-y-8 text-charcoal/80 leading-relaxed text-lg">
              <h3 className="text-2xl font-serif font-bold text-charcoal italic">Mon accompagnement</h3>
              <p>
                La prise en charge du burn-out demande du temps et une approche respectueuse de votre rythme. Nous travaillons d'abord sur la récupération physique et émotionnelle, puis nous analysons les causes profondes (difficulté à dire non, perfectionnisme, environnement toxique).
              </p>
              <p>
                L'objectif est de vous permettre de retourner au travail — ou d'envisager une nouvelle voie — avec des outils solides pour protéger votre équilibre.
              </p>
            </div>

            <div className="mt-16 text-center">
              <a href="tel:0686105980" className="inline-flex items-center gap-3 bg-sage text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl">
                Parlons-en au 06 86 10 59 80
              </a>
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
