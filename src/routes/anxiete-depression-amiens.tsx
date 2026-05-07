import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, Brain, Activity, CheckCircle } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/anxiete-depression-amiens')({
  head: () => ({
    meta: [
      {
        title: 'Anxiété & Dépression Amiens — Retrouver la Joie | Sylviane Bouhey',
      },
      {
        name: 'description',
        content: 'Vous souffrez d\'anxiété, de crises d\'angoisse ou de dépression ? Sylviane Bouhey vous accompagne à Amiens pour surmonter ces épreuves avec bienveillance.',
      },
    ],
  }),
  component: Anxiete,
})

function Anxiete() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <section className="py-24 bg-sage/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8 italic text-center">Surmonter l'Anxiété & la Dépression</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16 mt-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-sage italic">L'Anxiété</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  L'anxiété est une projection vers un futur menaçant. Elle se manifeste par des ruminations, des crises d'angoisse, une hypervigilance ou des troubles du sommeil. Mon approche combine l'EMDR pour apaiser les sources d'angoisse et les TCC pour reprendre le contrôle sur vos pensées.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-sage italic">La Dépression</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  La dépression est souvent liée à un passé qui pèse trop lourd. Perte d'élan vital, sentiment d'inutilité, tristesse profonde... Nous travaillons ensemble pour retrouver du sens, petit à petit, en explorant vos besoins fondamentaux délaissés.
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-sage/10 space-y-8">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-4 text-center italic">Mon approche thérapeutique</h3>
              <ul className="grid md:grid-cols-2 gap-6">
                <li className="flex items-start gap-3"><CheckCircle className="text-sage mt-1" size={20} /> <span>Régulation émotionnelle et apaisement du système nerveux</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-sage mt-1" size={20} /> <span>Identification des schémas de pensée négatifs</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-sage mt-1" size={20} /> <span>Travail sur l'estime de soi et la confiance</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-sage mt-1" size={20} /> <span>Retrouver une capacité d'agir au quotidien</span></li>
              </ul>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-charcoal/70 mb-10 italic">"Vous n'êtes pas seul(e) face à ce tunnel. Il existe des chemins pour en sortir."</p>
              <a href="tel:0686105980" className="inline-flex items-center gap-3 bg-sage text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl transition-transform hover:scale-105">
                Prendre rendez-vous : 06 86 10 59 80
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
