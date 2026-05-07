import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, Heart, Target, CheckCircle } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/therapie-couple-amiens')({
  head: () => ({
    meta: [
      {
        title: 'Thérapie de Couple Amiens — Rétablir le Dialogue | Sylviane Bouhey',
      },
      {
        name: 'description',
        content: 'Votre couple traverse une crise ? Sylviane Bouhey vous aide à Amiens à retrouver une communication saine et à dénouer les blocages relationnels.',
      },
    ],
  }),
  component: Couple,
})

function Couple() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <section className="py-24 bg-beige/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8 italic">Thérapie de Couple à Amiens</h1>
            <p className="text-xl text-charcoal/80 leading-relaxed mb-12 text-center">
              "Le couple est un espace de croissance mutuelle qui nécessite parfois un tiers pour retrouver son équilibre."
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-sage/5">
                <h3 className="text-xl font-serif font-bold text-sage mb-6">Quand consulter ?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><CheckCircle className="text-gold mt-1" size={18} /> <span className="text-charcoal/70">Communication rompue ou conflictuelle</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="text-gold mt-1" size={18} /> <span className="text-charcoal/70">Infidélité ou perte de confiance</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="text-gold mt-1" size={18} /> <span className="text-charcoal/70">Désir sexuel en berne</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="text-gold mt-1" size={18} /> <span className="text-charcoal/70">Arrivée d'un enfant / Crise de milieu de vie</span></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-sage/5">
                <h3 className="text-xl font-serif font-bold text-sage mb-6">Objectifs des séances</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><CheckCircle className="text-gold mt-1" size={18} /> <span className="text-charcoal/70">Identifier les jeux relationnels toxiques</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="text-gold mt-1" size={18} /> <span className="text-charcoal/70">Exprimer ses besoins sans accuser l'autre</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="text-gold mt-1" size={18} /> <span className="text-charcoal/70">Retrouver une intimité émotionnelle</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="text-gold mt-1" size={18} /> <span className="text-charcoal/70">Prendre une décision éclairée pour l'avenir</span></li>
                </ul>
              </div>
            </div>

            <div className="space-y-8 text-charcoal/80 leading-relaxed text-lg">
              <h3 className="text-2xl font-serif font-bold text-charcoal italic">Ma méthode d'accompagnement</h3>
              <p>
                En thérapie de couple, mon client n'est ni l'un ni l'autre des partenaires, mais **la relation elle-même**. Je propose un cadre neutre où chacun peut se faire entendre.
              </p>
              <p>
                J'utilise notamment les outils de l'Analyse Transactionnelle pour mettre en lumière les schémas de communication (qui parle ? le Parent, l'Adulte ou l'Enfant ?) et aider le couple à sortir des cercles vicieux pour retrouver un cercle vertueux.
              </p>
            </div>

            <div className="mt-16 text-center">
              <a href="tel:0686105980" className="inline-flex items-center gap-3 bg-sage text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl">
                Prendre RDV à deux : 06 86 10 59 80
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
