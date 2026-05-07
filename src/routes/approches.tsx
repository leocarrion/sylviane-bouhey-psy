import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, CheckCircle, Star, Target, ShieldCheck, MapPin, Brain, Heart, Zap, Sparkles, MessageCircle, Activity, Users } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/approches')({
  head: () => ({
    meta: [
      {
        title: 'Approches — Psychopraticienne à Amiens & Visio France',
      },
      {
        name: 'description',
        content: 'Découvrez mes outils : Analyse Transactionnelle, EMDR, Hypnose, Psychanalyse. Psychopraticienne et psychothérapeute à Amiens et en visio partout en France.',
      },
    ],
  }),
  component: Approches,
})

function Approches() {
  const allApproches = [
    { 
      id: 'emdr',
      title: "EMDR", 
      icon: <Zap className="text-gold" size={32} />,
      slug: '/emdr-amiens',
      desc: "Traitement des traumatismes et chocs émotionnels par stimulations bilatérales.",
      content: "L'EMDR (Eye Movement Desensitization and Reprocessing) est une thérapie reconnue par l'OMS qui permet de traiter les souvenirs traumatiques. Lorsque nous vivons un traumatisme, le cerveau peut rester 'bloqué' sur l'événement. L'EMDR aide à retraiter ces informations pour que le souvenir ne soit plus douloureux."
    },
    { 
      id: 'hypnose',
      title: "Hypnose Thérapeutique", 
      icon: <Moon className="text-gold" size={32} />,
      slug: '/hypnose-amiens',
      desc: "Accéder à vos ressources inconscientes pour transformer vos comportements.",
      content: "L'hypnose n'est pas un sommeil, mais un état de conscience modifié où votre attention est focalisée. Dans cet état, nous pouvons communiquer avec votre inconscient pour lever des blocages, arrêter de fumer, gérer des phobies ou réduire le stress."
    },
    { 
      id: 'at',
      title: "Analyse Transactionnelle", 
      icon: <Users className="text-gold" size={32} />,
      slug: '/analyse-transactionnelle-amiens',
      desc: "Comprendre vos relations et votre scénario de vie pour plus d'autonomie.",
      content: "L'AT étudie les 'transactions' (échanges) entre personnes. Elle permet de comprendre pourquoi nous répétons certains schémas relationnels et comment sortir de notre 'scénario de vie' pour devenir pleinement auteur de nos choix."
    },
    { 
      id: 'psychanalyse',
      title: "Psychanalyse", 
      icon: <Heart className="text-gold" size={32} />,
      desc: "La cure par la parole pour explorer l'inconscient en profondeur.",
      content: "La psychanalyse est une exploration de l'inconscient à travers la parole libre. Elle permet de mettre au jour les sources profondes de nos souffrances et de transformer durablement notre rapport à nous-mêmes et aux autres."
    },
    { 
      id: 'tcc',
      title: "TCC", 
      icon: <Brain className="text-gold" size={32} />,
      desc: "Modifier les pensées et comportements pour un mieux-être concret.",
      content: "Les Thérapies Cognitivo-Comportementales se concentrent sur les liens entre nos pensées, nos émotions et nos comportements. En identifiant les schémas de pensée négatifs, nous apprenons à les remplacer par des réactions plus positives."
    },
    { 
      id: 'couple',
      title: "Thérapie de Couple", 
      icon: <Heart className="text-gold" size={32} />,
      slug: '/therapie-couple-amiens',
      desc: "Retrouver le dialogue et dénouer les crises relationnelles.",
      content: "La thérapie de couple offre un espace neutre et sécurisant pour que chacun puisse exprimer ses besoins. Mon rôle est de faciliter la communication, d'identifier les jeux de pouvoir et d'aider le couple à trouver sa propre solution."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <section className="py-20 bg-sage text-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">Une thérapie sur mesure</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Chaque personne est unique. Mon approche intégrative me permet de combiner différents outils thérapeutiques pour m'adapter à votre rythme et à vos besoins.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allApproches.map((approach) => (
                <div key={approach.id} className="bg-white p-10 rounded-3xl border border-sage/10 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                  <div className="w-16 h-16 bg-sage/5 rounded-2xl flex items-center justify-center mb-8">
                    {approach.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">{approach.title}</h3>
                  <p className="text-charcoal/60 font-medium mb-6 italic">{approach.desc}</p>
                  <p className="text-charcoal/80 leading-relaxed mb-8 flex-grow">
                    {approach.content}
                  </p>
                  {approach.slug ? (
                    <Link to={approach.slug} className="text-sage font-bold flex items-center gap-2 hover:gap-4 transition-all">
                      En savoir plus <Target size={18} />
                    </Link>
                  ) : (
                    <span className="text-charcoal/40 text-sm font-medium italic">Accompagnement personnalisé</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-beige/30">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 italic">Comment choisir la bonne approche ?</h2>
            <p className="text-lg text-charcoal/70 mb-12">
              Il n'est pas nécessaire de choisir un outil avant de me consulter. Lors de notre première séance (gratuite), nous échangerons sur vos difficultés et je vous proposerai l'accompagnement qui me semble le plus pertinent pour vous.
            </p>
            <a href="tel:0686105980" className="inline-flex items-center gap-3 bg-sage text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-all">
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
          <div className="mt-8 text-[10px] text-white/20 font-bold space-y-2 uppercase tracking-widest">
            <p>SIRET : 79840833200020</p>
            <p>Lun : 15h–19h | Mar : 11h–14h | Mer, Jeu : 15h–19h | Ven : 11h–19h | Sam : 10h–19h</p>
            <p className="italic text-[9px] mt-1">Les horaires peuvent être modifiés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Moon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}
