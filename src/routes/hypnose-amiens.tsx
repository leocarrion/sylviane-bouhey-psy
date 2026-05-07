import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, CheckCircle, MapPin, Target, ShieldCheck } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/hypnose-amiens')({
  head: () => ({
    meta: [
      {
        title: 'Hypnose Thérapeutique Amiens & Visio — Arrêt Tabac & Stress',
      },
      {
        name: 'description',
        content: 'Pratiquez l\'hypnose thérapeutique avec Sylviane Bouhey, psychopraticienne et psychothérapeute à Amiens et en visio. Arrêt du tabac, stress, phobies partout en France.',
      },
    ],
  }),
  component: Hypnose,
})

function Hypnose() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <section className="py-24 bg-beige/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8 italic">Hypnose Thérapeutique à Amiens</h1>
                <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                  Loin de l'hypnose de spectacle, l'hypnose thérapeutique est un outil puissant pour accéder à vos ressources inconscientes et initier des changements comportementaux durables.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-sage/10 mb-8 italic text-sage font-medium">
                  "L'hypnose permet de contourner les résistances du mental pour s'adresser directement à la partie de vous qui sait comment changer."
                </div>
                <a href="tel:0686105980" className="bg-sage text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg">
                  Réserver une séance d'hypnose
                </a>
              </div>
              <div className="flex-1 relative">
                <div className="aspect-square bg-offwhite rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
                  <img 
                    src="/sylviane-1.jpg" 
                    alt="Hypnose Thérapeutique" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-sage/10 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-charcoal text-center mb-16 italic">Domaines d'application</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Arrêt du tabac", desc: "Se libérer de la dépendance physique et psychologique en 1 à 3 séances." },
                { title: "Gestion du poids", desc: "Retrouver un rapport sain à l'alimentation et comprendre les causes émotionnelles." },
                { title: "Stress & Phobies", desc: "Calmer le système nerveux et désactiver les peurs irrationnelles." },
                { title: "Confiance en soi", desc: "Renforcer l'estime de soi et surmonter la timidité ou le syndrome de l'imposteur." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-offwhite border border-sage/5 hover:border-sage/20 transition-all text-center">
                  <h4 className="font-bold text-xl mb-4 text-charcoal">{item.title}</h4>
                  <p className="text-charcoal/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-sage text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-12 italic">Une méthode participative</h2>
              <div className="grid md:grid-cols-2 gap-12 text-left">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gold">Ce que l'hypnose n'est PAS :</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>- Une perte de contrôle ou de conscience.</li>
                    <li>- Un sommeil profond où vous ne vous souvenez de rien.</li>
                    <li>- Une influence extérieure contre votre volonté.</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gold">Ce que l'hypnose EST :</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>- Un état naturel de concentration focalisée.</li>
                    <li>- Une collaboration active entre vous et moi.</li>
                    <li>- Un accès privilégié à votre créativité intérieure.</li>
                  </ul>
                </div>
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
