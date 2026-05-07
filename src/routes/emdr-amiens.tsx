import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, CheckCircle, Zap, ShieldCheck, Clock, MapPin, Target } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/emdr-amiens')({
  head: () => ({
    meta: [
      {
        title: 'EMDR Amiens & Visio — Traitement des traumatismes',
      },
      {
        name: 'description',
        content: 'Thérapie EMDR avec Sylviane Bouhey, psychopraticienne et psychothérapeute à Amiens et en visio. Libérez-vous de vos traumatismes partout en France.',
      },
    ],
  }),
  component: Emdr,
})

function Emdr() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <section className="py-24 bg-offwhite relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <Zap size={16} />
                  <span>Approche recommandée par l'OMS</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8 italic">Thérapie EMDR à Amiens</h1>
                <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                  L'EMDR (Désensibilisation et Retraitement par les Mouvements Oculaires) est une approche révolutionnaire pour traiter les traumatismes, les phobies et les blocages émotionnels profonds.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:0686105980" className="bg-sage text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-sage/90 transition-all">
                    Prendre RDV (Amiens)
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-sage/5">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">Pourquoi choisir l'EMDR ?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <span className="text-charcoal/80"><strong>Traumatismes :</strong> Accidents, deuils, agressions, chocs émotionnels.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <span className="text-charcoal/80"><strong>Phobies :</strong> Peur de conduire, de l'avion, phobies sociales.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <span className="text-charcoal/80"><strong>Anxiété :</strong> Crises d'angoisse, stress post-traumatique (ESPT).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <span className="text-charcoal/80"><strong>Confiance en soi :</strong> Dépasser des croyances négatives sur soi-même.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 italic text-center">Comment fonctionne une séance d'EMDR ?</h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 bg-sage/10 text-sage rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-xl mb-3">Identification du souvenir</h4>
                  <p className="text-charcoal/70">Nous identifions ensemble le souvenir douloureux ou la situation bloquante qui nécessite un retraitement.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 bg-sage/10 text-sage rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-xl mb-3">Stimulations bilatérales</h4>
                  <p className="text-charcoal/70">Pendant que vous vous concentrez sur le souvenir, je pratique des stimulations bilatérales alternées (mouvements oculaires, tapotements ou sons).</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 bg-sage/10 text-sage rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-xl mb-3">Retraitement émotionnel</h4>
                  <p className="text-charcoal/70">Le cerveau relance son processus naturel de traitement de l'information. L'intensité émotionnelle du souvenir diminue jusqu'à disparaître.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-sage text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-serif font-bold mb-8 italic">Une libération durable</h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              L'EMDR ne fait pas oublier le passé, mais il lui retire sa charge douloureuse. Vous gardez le souvenir, mais la souffrance émotionnelle s'efface pour laisser place à une vision plus sereine de votre histoire.
            </p>
            <a href="tel:0686105980" className="bg-gold text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-all">
              Prendre RDV au 06 86 10 59 80
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
