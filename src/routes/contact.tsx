import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, MapPin, Mail, Clock, ShieldCheck, CheckCircle, ChevronDown } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: 'Contact Sylviane Bouhey — Psychopraticienne à Amiens & Visio France',
      },
      {
        name: 'description',
        content: 'Prenez rendez-vous avec Sylviane Bouhey, psychopraticienne à Amiens et en visio partout en France. Contact par téléphone ou SMS au 06 86 10 59 80. Première consultation gratuite.',
      },
    ],
  }),
  component: Contact,
})

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <section className="py-24 bg-beige/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8 italic">Contactez-moi</h1>
              <p className="text-xl text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
                Un doute, une question ou une demande de rendez-vous ? Je vous réponds avec plaisir que vous soyez à Amiens ou ailleurs en France.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-20">
              {/* Info Sidebar */}
              <div className="flex-1 space-y-12">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 italic">Coordonnées</h2>
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-sage text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Phone size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-charcoal">Téléphone / SMS</h4>
                        <p className="text-charcoal/60 mb-2 italic">Réponse privilégiée par SMS</p>
                        <a href="tel:0686105980" className="text-2xl font-serif font-bold text-sage"> <span className="hidden sm:inline">06 86 10 59 80</span></a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-sage text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Mail size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-charcoal">Email</h4>
                        <a href="mailto:sy.bouhey@gmail.com" className="text-xl font-bold text-sage underline">sy.bouhey@gmail.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-sage text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-charcoal">Cabinet & Visio</h4>
                        <p className="text-charcoal/70 leading-relaxed">
                          49 Rue Des Visages Radieux, 80000 Amiens<br />
                          <span className="font-bold text-gold">Consultations en ligne partout en France.</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-sage text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Clock size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-charcoal">Horaires</h4>
                        <div className="text-charcoal/70 leading-relaxed text-sm">
                          <p>Lundi : 15h00 – 19h00</p>
                          <p>Mardi : 11h00 – 14h00</p>
                          <p>Mercredi : 15h00 – 19h00</p>
                          <p>Jeudi : 15h00 – 19h00</p>
                          <p>Vendredi : 11h00 – 19h00</p>
                          <p>Samedi : 10h00 – 19h00</p>
                          <p className="mt-2 italic font-medium">Les horaires peuvent être modifiés.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-sage/5 p-8 rounded-3xl border border-sage/10">
                  <div className="flex items-center gap-4 text-sage mb-4">
                    <ShieldCheck size={32} />
                    <h4 className="font-bold text-lg">Cadre Déontologique</h4>
                  </div>
                  <p className="text-sm text-charcoal/70 leading-relaxed italic">
                    "Toutes nos séances sont soumises au secret professionnel le plus strict. Votre espace de parole est un sanctuaire de confidentialité."
                  </p>
                </div>
              </div>

              {/* Form & Map Column */}
              <div className="flex-1 space-y-8">
                <div className="w-full h-[350px] rounded-3xl overflow-hidden shadow-lg border border-sage/10">
                  <iframe
                    src="https://www.google.com/maps?q=49+Rue+Des+Visages+Radieux,+80000+Amiens,+France&output=embed"
                    width="100%"
                    height="350"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>

                <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-sage/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gold text-white px-8 py-2 rounded-bl-3xl font-bold uppercase text-xs tracking-widest animate-pulse">
                    1ère séance offerte
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-10 italic">Formulaire de contact</h3>
                  
                  <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-charcoal/60 uppercase tracking-wider ml-1">Prénom</label>
                        <input type="text" required className="w-full bg-offwhite border border-sage/10 rounded-2xl p-4 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/20 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-charcoal/60 uppercase tracking-wider ml-1">Téléphone</label>
                        <input type="tel" required className="w-full bg-offwhite border border-sage/10 rounded-2xl p-4 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/20 transition-all" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-charcoal/60 uppercase tracking-wider ml-1">Email</label>
                      <input type="email" className="w-full bg-offwhite border border-sage/10 rounded-2xl p-4 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/20 transition-all" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-charcoal/60 uppercase tracking-wider ml-1">Format de consultation</label>
                      <div className="relative">
                        <select className="w-full bg-offwhite border border-sage/10 rounded-2xl p-4 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/20 transition-all appearance-none cursor-pointer">
                          <option>Cabinet (Amiens)</option>
                          <option>Visioconférence (Visio)</option>
                          <option>Téléphone</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-charcoal/40">
                          <ChevronDown size={20} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-charcoal/60 uppercase tracking-wider ml-1">Votre message</label>
                      <textarea rows={5} className="w-full bg-offwhite border border-sage/10 rounded-2xl p-4 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/20 transition-all resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-sage text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-sage/20 hover:bg-sage/90 hover:scale-[1.02] active:scale-100 transition-all">
                      Envoyer ma demande
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-charcoal/40 text-xs text-center uppercase tracking-widest font-medium">
                      <CheckCircle size={14} />
                      <span>Réponse sous 24h à 48h</span>
                    </div>
                  </form>
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
          <div className="mt-8 text-[10px] text-white/20 font-bold space-y-2 uppercase tracking-widest">
            <p>SIRET : 79840833200020</p>
            <p>Lun : 15h–19h | Mar : 11h–14h | Mer, Jeu : 15h–19h | Ven : 11h–19h | Sam : 10h–19h</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
