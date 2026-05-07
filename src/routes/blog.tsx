import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, BookOpen, Clock, Tag, ChevronRight } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/blog')({
  head: () => ({
    meta: [
      {
        title: 'Blog Psychothérapie & Bien-être — Sylviane Bouhey Amiens',
      },
      {
        name: 'description',
        content: 'Articles et conseils sur la psychothérapie, le stress, l\'EMDR et l\'hypnose par Sylviane Bouhey, psychothérapeute à Amiens.',
      },
    ],
  }),
  component: Blog,
})

function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <section className="py-24 bg-sage text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">Le Blog Bien-être</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Réflexions, conseils et éclairages sur la psychothérapie et les outils du changement.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-16">
                {/* Empty State for Blog */}
                <div className="text-center py-20 bg-offwhite rounded-[3rem] border border-sage/10">
                  <BookOpen size={64} className="text-sage/20 mx-auto mb-8" />
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-4 italic">Bientôt de nouveaux articles</h2>
                  <p className="text-charcoal/60 max-w-md mx-auto mb-10">
                    Je prépare actuellement des ressources pour vous accompagner dans votre réflexion. Revenez très prochainement !
                  </p>
                  <Link to="/" className="text-sage font-bold hover:underline">Retourner à l'accueil</Link>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-12">
                <div className="bg-beige/30 p-10 rounded-[2.5rem] border border-sage/5">
                  <h4 className="font-serif font-bold text-xl text-charcoal mb-8 italic text-center">Catégories</h4>
                  <ul className="space-y-4">
                    {['Anxiété & Stress', 'EMDR & Traumatismes', 'Hypnose', 'Vie de couple', 'Relations familiales'].map((cat, i) => (
                      <li key={i}>
                        <Link to="/blog" className="flex items-center justify-between group hover:text-sage transition-colors">
                          <span className="font-medium">{cat}</span>
                          <ChevronRight size={16} className="text-sage/40 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-sage p-10 rounded-[2.5rem] text-white">
                  <h4 className="font-serif font-bold text-xl mb-6 italic text-center">Besoin d'aide ?</h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-8 text-center">
                    Parfois, la lecture ne suffit pas. Si vous ressentez le besoin d'échanger, je suis à votre écoute.
                  </p>
                  <a href="tel:0686105980" className="block w-full bg-white text-sage py-4 rounded-xl font-bold text-center shadow-lg hover:scale-[1.02] transition-all">
                    Me contacter
                  </a>
                </div>
              </aside>
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
