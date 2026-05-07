import { createFileRoute, Link } from '@tanstack/react-router'
import { Target, Award, Heart, ShieldCheck } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/a-propos')({
  head: () => ({
    meta: [
      {
        title: 'À propos de Sylviane Bouhey — Psychopraticienne à Amiens & Visio France',
      },
      {
        name: 'description',
        content: 'Découvrez le parcours de Sylviane Bouhey, psychopraticienne et psychothérapeute à Amiens et en visioconférence pour toute la France. Une approche humaine.',
      },
    ],
  }),
  component: About,
})

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-beige/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-8 italic">Mon parcours & ma philosophie</h1>
              <p className="text-xl text-charcoal/70 leading-relaxed">
                "Je vous accompagne vers la compréhension de votre propre histoire pour mieux habiter votre présent, que ce soit en cabinet ou à distance."
              </p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="relative w-full max-w-[450px] aspect-[3/4] mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-sage rounded-3xl -rotate-3 opacity-10"></div>
                  <div className="w-full h-full bg-beige rounded-3xl overflow-hidden shadow-xl relative z-10">
                    <img 
                      src="/sylviane-3.jpg" 
                      alt="Sylviane Bouhey" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl font-serif font-bold text-charcoal italic">Sylviane Bouhey</h2>
                <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
                  <p>
                    Psychopraticienne intégrative et psychanalyste installée à Amiens, mon engagement auprès de mes patients est guidé par une conviction profonde : chaque individu possède en lui les ressources nécessaires pour son propre changement.
                  </p>
                  <p>
                    Aujourd'hui, je propose mon accompagnement aussi bien en <strong>cabinet à Amiens</strong> qu'en <strong>visioconférence pour toute la France</strong>. Cette flexibilité permet à chacun de bénéficier d'un suivi de qualité, quel que soit son lieu de résidence.
                  </p>
                  <p>
                    Mon travail consiste à vous aider à identifier ces ressources et à lever les voiles qui les occultent. À travers une écoute active et bienveillante, nous explorons ensemble les mécanismes inconscients, les blessures du passé et les blocages relationnels qui freinent votre épanouissement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cabinet Photo Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="flex-1">
                <div className="relative w-full max-w-[600px] aspect-video mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-gold rounded-3xl rotate-2 opacity-10"></div>
                  <div className="w-full h-full bg-beige rounded-3xl overflow-hidden shadow-xl relative z-10">
                    <img 
                      src="/cabinet.jpg" 
                      alt="Le cabinet de consultation à Amiens" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-serif font-bold text-charcoal mb-6 italic">Un cadre apaisant & moderne</h2>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Je vous accueille dans mon cabinet situé à Amiens, un espace calme conçu pour favoriser la parole. Pour ceux qui préfèrent le confort de leur domicile, mes <strong>séances en visio</strong> offrent la même profondeur thérapeutique.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Chaque détail a été pensé pour vous offrir la sécurité et la sérénité nécessaires à votre travail thérapeutique, en présentiel comme en distanciel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-sage text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 italic">Mes valeurs fondamentales</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">La Bienveillance</h3>
                <p className="text-white/80">Un accueil inconditionnel de qui vous êtes, sans jugement, dans un respect total de votre singularité.</p>
              </div>
              <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">La Confidentialité</h3>
                <p className="text-white/80">Le cabinet ou la visio est un espace protégé. Tout ce qui s'y dit reste strictement entre nous.</p>
              </div>
              <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">L'Éthique</h3>
                <p className="text-white/80">Une pratique cadrée par une déontologie rigoureuse pour garantir la qualité de mon accompagnement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 text-center italic">Formation & Certifications</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start p-6 rounded-2xl bg-offwhite border border-sage/10">
                  <Award className="text-sage flex-shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold text-lg">Formation Supérieure en Psychanalyse</h4>
                    <p className="text-charcoal/70">Étude approfondie de l'inconscient et des mécanismes de défense.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start p-6 rounded-2xl bg-offwhite border border-sage/10">
                  <Award className="text-sage flex-shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold text-lg">Certification en EMDR</h4>
                    <p className="text-charcoal/70">Traitement des traumatismes par les stimulations bilatérales alternées.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start p-6 rounded-2xl bg-offwhite border border-sage/10">
                  <Award className="text-sage flex-shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold text-lg">Praticienne certifiée en Analyse Transactionnelle (AT)</h4>
                    <p className="text-charcoal/70">Analyse des échanges relationnels et du scénario de vie.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start p-6 rounded-2xl bg-offwhite border border-sage/10">
                  <Award className="text-sage flex-shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold text-lg">Formation en Hypnose Thérapeutique</h4>
                    <p className="text-charcoal/70">Utilisation des états de conscience modifiés pour le changement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-beige/30 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 italic">Prêt(e) à faire le premier pas ?</h2>
            <p className="text-lg text-charcoal/70 mb-12 max-w-2xl mx-auto">
              La première consultation est gratuite et sans engagement. Elle nous permet de faire connaissance, en cabinet ou en visio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:0686105980" className="bg-sage text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-sage/90 transition-all">
                Appeler le 06 86 10 59 80
              </a>
              <Link to="/contact" className="bg-white border-2 border-sage/20 text-charcoal px-10 py-4 rounded-xl font-bold text-lg hover:border-sage/40 transition-all">
                Formulaire de contact
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-charcoal text-white/60 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="border-t border-white/10 pt-8 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
              <p>© 2026 Sylviane Bouhey. Tous droits réservés.</p>
              <div className="flex gap-8 uppercase tracking-widest text-white/40">
                <Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link>
                <Link to="/confidentialite" className="hover:text-white">Confidentialité</Link>
              </div>
            </div>
            <p className="mt-8 text-xs uppercase tracking-widest text-white/20 font-bold">SIRET : 79840833200020 — Amiens & Visio France</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
