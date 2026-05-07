import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Phone, CheckCircle, Star, ShieldCheck, MapPin, Clock, Heart, Brain, Zap, Users, Shield, Sparkles, MessageCircle, Moon, Activity, Smile, Target, LifeBuoy, ChevronDown, ChevronUp, Quote } from 'lucide-react'
import { Header } from '../components/Header'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Sylviane Bouhey — Psychopraticienne & Psychanalyste à Amiens et en Visio',
      },
      {
        name: 'description',
        content: 'Sylviane Bouhey, psychopraticienne et psychothérapeute à Amiens. EMDR, Hypnose, Analyse Transactionnelle. En cabinet & visio partout en France.',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Sylviane Bouhey — Psychopraticienne & Psychothérapeute Amiens",
          "telephone": "0686105980",
          "email": "sy.bouhey@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "49 Rue Des Visages Radieux",
            "addressLocality": "Amiens",
            "postalCode": "80000",
            "addressCountry": "FR"
          },
          "priceRange": "60€–80€",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "9"
          },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "15:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "11:00", "closes": "14:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "15:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "15:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "11:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "19:00" }
          ]
        }),
      },
    ],
  }),
  component: Home,
})

function Home() {
  const [openApproach, setOpenApproach] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whyConsult = [
    {
      title: "Une écoute profonde",
      description: "Un espace de non-jugement où chaque parole est accueillie avec bienveillance et humanité.",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Une expertise reconnue",
      description: "Plusieurs années d'expérience en analyse transactionnelle, EMDR et hypnose thérapeutique.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Des résultats concrets",
      description: "Un accompagnement orienté vers le changement et le mieux-être, à votre rythme.",
      icon: <Target className="w-8 h-8" />
    }
  ];

  const topics = [
    { name: "Confiance en soi", icon: <Smile /> },
    { name: "Stress & anxiété", icon: <Brain />, slug: "/anxiete-depression-amiens" },
    { name: "Traumatismes", icon: <Zap />, slug: "/emdr-amiens" },
    { name: "Burn-out", icon: <Target />, slug: "/burn-out-amiens" },
    { name: "Dépression", icon: <Activity />, slug: "/anxiete-depression-amiens" },
    { name: "Séparation & deuil", icon: <LifeBuoy /> },
    { name: "Thérapie de couple", icon: <Heart />, slug: "/therapie-couple-amiens" },
    { name: "Sexualité & intimité", icon: <MessageCircle /> },
    { name: "Relations familiales", icon: <Users /> },
    { name: "Maladie chronique", icon: <Activity /> },
    { name: "Troubles alimentaires", icon: <Target /> },
    { name: "Prise de décision", icon: <Sparkles /> }
  ];

  const approaches = [
    { 
      title: "Analyse Transactionnelle (AT)", 
      slug: "/analyse-transactionnelle-amiens",
      content: "Développée par Eric Berne, l'AT permet de comprendre nos comportements, nos relations aux autres et notre 'scénario de vie' pour s'en libérer." 
    },
    { 
      title: "EMDR", 
      slug: "/emdr-amiens",
      content: "Reconnue par l'OMS, l'EMDR traite les traumatismes par des stimulations bilatérales alternées pour désensibiliser les souvenirs douloureux." 
    },
    { 
      title: "Hypnose thérapeutique", 
      slug: "/hypnose-amiens",
      content: "Un état de conscience modifié où votre participation est active. Efficace pour l'arrêt du tabac, les phobies et la gestion de la douleur." 
    },
    { 
      title: "Analyse transgénérationnelle", 
      content: "Exploration de votre arbre généalogique pour identifier les héritages familiaux inconscients et les secrets qui impactent votre présent." 
    },
    { 
      title: "Psychanalyse", 
      content: "La 'cure par la parole' utilisant l'association libre, l'analyse des rêves et le transfert pour explorer l'inconscient en profondeur." 
    },
    { 
      title: "TCC", 
      content: "Thérapies Cognitivo-Comportementales : agir sur les pensées, les croyances et les comportements pour instaurer des changements positifs durables." 
    },
    { 
      title: "Gestalt thérapie", 
      content: "Une approche centrée sur l'ici et maintenant, favorisant la prise de conscience des sensations physiques et des émotions dans l'instant." 
    },
    { 
      title: "Thérapie centrée sur les émotions", 
      content: "Apprendre à identifier, accueillir et réguler ses émotions pour ne plus se laisser submerger par elles." 
    },
    { 
      title: "Thérapie de couple", 
      content: "Rétablir le dialogue, identifier les blocages de communication et retrouver un espace de partage et de compréhension mutuelle." 
    },
    { 
      title: "Méditation de pleine conscience", 
      content: "Pratiques de présence attentive pour réduire le stress, prévenir les rechutes dépressives et améliorer la qualité de vie au quotidien." 
    },
    { 
      title: "Thérapie de groupe AT", 
      content: "Le groupe comme miroir et laboratoire social pour expérimenter de nouvelles manières d'être en relation, sous le cadre de l'Analyse Transactionnelle." 
    },
    { 
      title: "Sexothérapie", 
      content: "Accompagnement des troubles sexuels individuels ou au sein du couple dans un cadre sécurisant et dénué de tout jugement." 
    }
  ];

  const steps = [
    {
      title: "Premier contact",
      desc: "Appelez-moi ou envoyez-moi un SMS au 06 86 10 59 80 pour échanger brièvement sur votre situation.",
      icon: <Phone size={24} />
    },
    {
      title: "Première séance offerte",
      desc: "Nous faisons connaissance et définissons ensemble les objectifs de votre accompagnement, sans engagement.",
      icon: <CheckCircle size={24} />
    },
    {
      title: "Suivi personnalisé",
      desc: "Nous fixons le rythme des séances en fonction de vos besoins et des outils thérapeutiques choisis.",
      icon: <Target size={24} />
    }
  ];

  const testimonials = [
    { name: "Adrien", text: "Un accueil bienveillant, beaucoup d'humanisme et de transparence. On se sent tout de suite en sécurité.", date: "mars 2026" },
    { name: "Rachida", text: "Une écoute profonde et des analyses très pertinentes qui m'ont permis d'avancer rapidement.", date: "mars 2026" },
    { name: "Catherine", text: "Sylviane m'a accompagnée sur le chemin de la guérison avec une douceur incroyable.", date: "mars 2026" },
    { name: "Léa", text: "J'ai retrouvé confiance en moi et j'ai pu aborder des sujets très intimes en toute sérénité.", date: "mars 2026" },
    { name: "Michel S.", text: "Disponibilité, écoute et bienveillance sont les maîtres mots de son cabinet.", date: "mars 2026" },
    { name: "L.M.", text: "Je me suis sentie écoutée et soutenue dès la première séance. Je recommande vivement.", date: "mars 2026" },
    { name: "Aurore P.", text: "Après 2 rdv d'hypnose avec Madame Bouhey, j'ai arrêté la cigarette. Je n'y croyais pas et pourtant... Mille fois merci.", date: "mars 2026" },
    { name: "Fabienne M.", text: "Accueillie dans un cadre chaleureux, on se sent tout de suite en confiance pour parler.", date: "mars 2026" },
    { name: "Catherine T.", text: "Elle comprend très vite les problématiques et répond avec une grande justesse.", date: "mars 2026" }
  ];

  const faqs = [
    { q: "Combien coûte une séance de psy à Amiens ?", a: "Le tarif d'une séance individuelle ou de couple est de 60€ à 80€. À noter que la première séance de prise de contact est GRATUITE." },
    { q: "La psychothérapie est-elle remboursée ?", a: "La psychothérapie n'est pas remboursée par la Sécurité Sociale, mais de nombreuses mutuelles proposent des remboursements partiels sur présentation d'une facture." },
    { q: "Comment prendre rendez-vous ?", a: "La prise de rendez-vous se fait exclusivement par téléphone ou par SMS au 06 86 10 59 80. Je vous réponds généralement sous 24h à 48h." },
    { q: "Proposez-vous des consultations en ligne ?", a: "Oui, je propose des consultations en visioconférence (Skype, WhatsApp, Zoom) ou par téléphone pour toute la France." },
    { q: "L'hypnose fonctionne-t-elle pour arrêter de fumer ?", a: "Oui, l'hypnose thérapeutique offre d'excellents résultats pour le sevrage tabagique, souvent en seulement 1 à 3 séances." },
    { q: "Qu'est-ce que l'EMDR ?", a: "L'EMDR est une thérapie recommandée par l'OMS pour traiter les états de stress post-traumatique via des stimulations sensorielles bilatérales." },
    { q: "Combien de séances sont nécessaires ?", a: "Cela varie selon votre problématique. Certaines demandes se règlent en thérapie brève (5-10 séances), d'autres nécessitent un travail de fond plus long." },
    { q: "Puis-je consulter depuis chez moi ?", a: "Absolument. Les séances en visio ou par téléphone permettent de bénéficier du même accompagnement depuis le confort de votre domicile." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        {/* 2. Hero Section */}
        <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <CheckCircle size={16} />
                  <span>Première consultation offerte</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal leading-tight mb-6">
                  Retrouvez l'équilibre et la sérénité avec Sylviane Bouhey
                </h1>
                
                <p className="text-lg md:text-xl text-charcoal/80 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Psychopraticienne en cabinet à Amiens et en visioconférence pour toute la France. Un accompagnement bienveillant pour surmonter vos blocages, anxiétés et traumatismes.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                  <a 
                    href="tel:0686105980" 
                    className="w-full sm:w-auto bg-sage text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-sage/90 transition-all shadow-lg active:scale-95 text-center"
                  >
                    Prendre RDV (Appel/SMS)
                  </a>
                  <Link 
                    to="/approches" 
                    className="w-full sm:w-auto bg-white border-2 border-sage/20 text-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:border-sage/40 hover:bg-sage/5 transition-all active:scale-95 text-center"
                  >
                    Découvrir mes approches
                  </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-charcoal/60 font-medium">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={20} className="text-gold" />
                    <span>Prise en charge rapide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-gold" />
                    <span>Cabinet à Amiens & Visio</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative">
                <div className="relative w-full max-w-[500px] aspect-[4/5] mx-auto">
                  <div className="absolute -inset-4 border-2 border-sage/20 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
                  <div className="w-full h-full bg-beige rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/sylviane-2.jpg" 
                      alt="Sylviane Bouhey - Psychopraticienne à Amiens & Visio France" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl hidden md:block">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center text-sage">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-charcoal/60 font-bold uppercase">Réponse rapide</p>
                        <p className="text-sm font-bold text-charcoal">Sous 24h à 48h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Social Proof Bar */}
        <section className="bg-sage py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-white/90">
              <div className="flex items-center gap-3">
                <div className="flex items-center text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="font-bold text-xl">4.8/5</span>
              </div>
              <div className="h-6 w-px bg-white/20 hidden md:block"></div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-xl uppercase tracking-wider">9 Avis vérifiés</span>
              </div>
              <div className="h-6 w-px bg-white/20 hidden md:block"></div>
              <div className="flex items-center gap-3 text-xl font-bold">
                <CheckCircle size={24} />
                <span>100% Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Why Consult Section */}
        <section className="py-24 bg-beige/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6 italic">Pourquoi consulter ?</h2>
              <p className="text-lg text-charcoal/70">
                Entreprendre une thérapie est un acte de courage envers soi-même. C'est choisir de ne plus subir et de devenir acteur de sa propre vie.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {whyConsult.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-sage/10 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center text-sage mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-4">{item.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Consultation Topics */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6 italic">Mes domaines d'intervention</h2>
              <p className="text-lg text-charcoal/70">
                Je vous accompagne sur un large éventail de problématiques, que ce soit pour un soutien ponctuel ou un travail de fond.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {topics.map((topic, index) => (
                <div key={index} className="group relative">
                  {topic.slug ? (
                    <Link 
                      to={topic.slug} 
                      className="block p-6 rounded-xl border border-sage/10 bg-offwhite hover:bg-sage hover:text-white transition-all duration-300 text-center cursor-pointer"
                    >
                      <div className="w-12 h-12 mx-auto mb-4 text-sage group-hover:text-white transition-colors">
                        {topic.icon}
                      </div>
                      <span className="font-semibold text-sm md:text-base">{topic.name}</span>
                    </Link>
                  ) : (
                    <div className="p-6 rounded-xl border border-sage/10 bg-offwhite hover:bg-sage hover:text-white transition-all duration-300 text-center cursor-default">
                      <div className="w-12 h-12 mx-auto mb-4 text-sage group-hover:text-white transition-colors">
                        {topic.icon}
                      </div>
                      <span className="font-semibold text-sm md:text-base">{topic.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-charcoal/60 mb-8 italic">"Chaque parcours est unique. Votre souffrance mérite d'être entendue."</p>
              <a href="tel:0686105980" className="inline-flex items-center gap-2 bg-sage text-white px-8 py-4 rounded-lg font-bold hover:bg-sage/90 transition-all shadow-md">
                Parlons-en au 06 86 10 59 80
              </a>
            </div>
          </div>
        </section>

        {/* 6. About Section */}
        <section className="py-24 bg-sage/5 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 relative order-2 lg:order-1">
                <div className="relative w-full max-w-[450px] aspect-square mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-sage rounded-3xl rotate-3 scale-105 opacity-10"></div>
                  <div className="w-full h-full bg-beige rounded-3xl overflow-hidden shadow-xl relative z-10">
                    <img 
                      src="/sylviane-3.jpg" 
                      alt="Sylviane Bouhey" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6 italic">Sylviane Bouhey</h2>
                <h3 className="text-xl font-medium text-sage mb-8">Psychopraticienne intégrative & Psychanalyste</h3>
                <div className="space-y-6 text-charcoal/80 leading-relaxed text-lg">
                  <p>Passionnée par l'humain et la complexité de nos parcours de vie, j'ai choisi d'orienter ma pratique vers une approche intégrative.</p>
                  <div className="bg-white p-6 rounded-2xl border border-sage/10 shadow-sm">
                    <img src="/cabinet.jpg" alt="Le cabinet" className="w-full h-48 object-cover rounded-xl mb-4" />
                    <p className="text-sm italic text-charcoal/60">Mon cabinet de consultation à Amiens.</p>
                  </div>
                  <div className="pt-4">
                    <Link to="/a-propos" className="inline-flex items-center gap-2 text-sage font-bold hover:gap-4 transition-all">
                      En savoir plus sur mon parcours <Target size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Approaches Accordion */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6 italic">Mes outils thérapeutiques</h2>
              <p className="text-lg text-charcoal/70">La thérapie intégrative permet de choisir l'outil le plus adapté à votre problématique et à votre sensibilité.</p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-4">
              {approaches.map((approach, index) => (
                <div key={index} className="border-b border-sage/10">
                  <button onClick={() => setOpenApproach(openApproach === index ? null : index)} className="w-full py-6 flex items-center justify-between text-left group">
                    <span className={`text-lg font-bold transition-colors ${openApproach === index ? 'text-sage' : 'text-charcoal group-hover:text-sage'}`}>{approach.title}</span>
                    {openApproach === index ? <ChevronUp className="text-sage" /> : <ChevronDown className="text-charcoal/40 group-hover:text-sage" />}
                  </button>
                  {openApproach === index && (
                    <div className="pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-charcoal/70 leading-relaxed mb-4">{approach.content}</p>
                      {approach.slug && (
                        <Link to={approach.slug} className="text-sage font-bold flex items-center gap-2 hover:gap-3 transition-all">
                          En savoir plus <Target size={16} />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Featured Testimonial */}
        <section className="py-24 bg-beige/40 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-xl relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Quote size={120} className="text-sage" />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-sage/10 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg flex items-center justify-center text-sage">
                  <Users size={64} />
                </div>
                <div>
                  <div className="flex items-center text-gold mb-6">{[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}</div>
                  <blockquote className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-8 leading-tight italic">
                    "Après 2 rdv d'hypnose avec Madame Bouhey, j'ai arrêté la cigarette. Je n'y croyais pas et pourtant... Mille fois merci."
                  </blockquote>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-charcoal">Aurore P.</span>
                    <span className="text-sage font-medium uppercase tracking-widest text-sm">Arrêt du tabac par l'hypnose</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. How it works */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6 italic">Comment ça se passe ?</h2>
              <p className="text-lg text-charcoal/70">Trois étapes simples pour débuter votre chemin vers le mieux-être.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="absolute top-12 left-0 w-full h-0.5 bg-sage/10 hidden md:block -z-10"></div>
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white border-2 border-sage/20 text-sage rounded-full flex items-center justify-center mb-8 shadow-lg relative z-10">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-bold text-sm">{index + 1}</div>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-4">{step.title}</h3>
                  <p className="text-charcoal/70">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Testimonials */}
        <section className="py-24 bg-offwhite">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6 italic">Ce que mes patients disent</h2>
              <div className="flex items-center justify-center gap-2 text-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                <span className="text-charcoal font-bold ml-2">4.8/5 sur 9 avis</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-sage/5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center text-gold mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                    <p className="text-charcoal/80 italic mb-6">"{t.text}"</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-sage/10 pt-4">
                    <span className="font-bold text-charcoal">{t.name}</span>
                    <span className="text-xs text-charcoal/40 uppercase">{t.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Pricing */}
        <section className="py-24 bg-sage text-white relative overflow-hidden" id="tarifs">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Tarifs & Modalités</h2>
                <div className="space-y-6 text-white/80 text-lg">
                  <p>L'aspect financier ne doit pas être un frein à votre mieux-être. Je propose des tarifs adaptés à la réalité de chacun.</p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 justify-center lg:justify-start"><CheckCircle className="text-gold" /> Règlement par chèque ou espèces</li>
                    <li className="flex items-center gap-3 justify-center lg:justify-start"><CheckCircle className="text-gold" /> Facture pour remboursement mutuelle</li>
                    <li className="flex items-center gap-3 justify-center lg:justify-start"><CheckCircle className="text-gold" /> Cabinet, visio ou téléphone</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg">
                <div className="bg-white rounded-3xl p-8 md:p-12 text-charcoal shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gold text-white px-6 py-2 rounded-bl-2xl font-bold uppercase text-xs animate-pulse">1ère séance offerte</div>
                  <div className="space-y-8">
                    <div className="flex items-center justify-between border-b border-sage/10 pb-4">
                      <div><h4 className="font-bold text-lg">Individuel</h4><p className="text-sm text-charcoal/60">Adultes uniquement</p></div>
                      <span className="text-2xl font-serif font-bold text-sage">60€–80€</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-sage/10 pb-4">
                      <div><h4 className="font-bold text-lg">Couple</h4><p className="text-sm text-charcoal/60">Séance d'une heure</p></div>
                      <span className="text-2xl font-serif font-bold text-sage">60€–80€</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-sage/10 pb-4">
                      <div><h4 className="font-bold text-lg">Groupe / Coaching</h4><p className="text-sm text-charcoal/60">Analyse Transactionnelle</p></div>
                      <span className="text-lg font-bold text-sage italic">Sur demande</span>
                    </div>
                    <a href="tel:0686105980" className="block w-full bg-sage text-white py-4 rounded-xl font-bold text-center text-lg shadow-lg">Prendre rendez-vous</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <section className="py-24 bg-white" id="faq">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6 italic">Questions fréquentes</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-sage/10 rounded-2xl overflow-hidden bg-offwhite">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full p-6 flex items-center justify-between text-left font-bold text-charcoal">
                    <span>{faq.q}</span>
                    {openFaq === index ? <ChevronUp className="text-sage" /> : <ChevronDown className="text-sage" />}
                  </button>
                  {openFaq === index && <div className="px-6 pb-6 text-charcoal/70 leading-relaxed">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. Exit-intent CTA section */}
        <section className="py-20 bg-beige/30">
          <div className="container mx-auto px-4">
            <div className="bg-sage rounded-[3rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 italic">Et si aujourd'hui était le premier jour de votre nouvelle vie ?</h2>
                <p className="text-xl text-white/80 mb-12">
                  N'attendez pas que la situation s'aggrave. La première consultation est gratuite et vous permet de voir si mon approche vous convient.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a href="tel:0686105980" className="bg-white text-sage px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-all">
                    Prendre RDV au 06 86 10 59 80
                  </a>
                  <Link to="/contact" className="bg-sage border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
                    Formulaire de contact
                  </Link>
                </div>
                <p className="mt-8 text-white/60 font-medium italic">Réponse rapide garantie sous 24h à 48h</p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </section>

        {/* 14. Contact */}
        <section className="py-24 bg-beige/30" id="contact">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8 italic">Contact</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center flex-shrink-0"><Phone size={24} /></div>
                    <div>
                      <h4 className="font-bold text-lg text-charcoal">Téléphone / SMS</h4>
                      <a href="tel:0686105980" className="text-2xl font-serif font-bold text-sage"> <span className="hidden sm:inline">06 86 10 59 80</span></a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center flex-shrink-0"><Clock size={24} /></div>
                    <div>
                      <h4 className="font-bold text-lg text-charcoal">Horaires</h4>
                      <div className="text-sm text-charcoal/70">
                        <p>Lun, Mer, Jeu : 15h00 – 19h00</p>
                        <p>Mar : 11h00 – 14h00</p>
                        <p>Ven : 11h00 – 19h00</p>
                        <p>Sam : 10h00 – 19h00</p>
                        <p className="italic mt-2">Les horaires peuvent être modifiés.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center flex-shrink-0"><MapPin size={24} /></div>
                    <div className="w-full">
                      <h4 className="font-bold text-lg text-charcoal">Cabinet d'Amiens</h4>
                      <p className="text-charcoal/70 mb-4">49 Rue Des Visages Radieux<br />80000 Amiens</p>
                      <div className="w-full h-64 rounded-2xl overflow-hidden shadow-inner border border-sage/10 bg-offwhite">
                        <iframe 
                          src="https://www.google.com/maps?q=49+Rue+Des+Visages+Radieux,+80000+Amiens,+France&output=embed" 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen={true} 
                          loading="lazy" 
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-white p-8 md:p-12 rounded-3xl shadow-xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Prénom" className="w-full bg-offwhite border border-sage/10 rounded-lg p-3" />
                    <input type="tel" placeholder="Téléphone" className="w-full bg-offwhite border border-sage/10 rounded-lg p-3" />
                  </div>
                  <input type="email" placeholder="Email" className="w-full bg-offwhite border border-sage/10 rounded-lg p-3" />
                  <div className="relative">
                    <select className="w-full bg-offwhite border border-sage/10 rounded-lg p-3 appearance-none">
                      <option>Format souhaité</option>
                      <option>Cabinet (Amiens)</option>
                      <option>Visioconférence</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-charcoal/40">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                  <textarea rows={4} placeholder="Message" className="w-full bg-offwhite border border-sage/10 rounded-lg p-3"></textarea>
                  <button type="submit" className="w-full bg-sage text-white py-4 rounded-xl font-bold text-lg shadow-lg">Envoyer</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 15. Footer */}
        <footer className="bg-charcoal text-white/60 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="lg:col-span-2">
                <span className="text-2xl font-serif font-bold text-white mb-6 block italic">Sylviane Bouhey</span>
                <p className="max-w-md leading-relaxed">Psychopraticienne & Psychanalyste à Amiens. Accompagnement en cabinet et en visioconférence pour toute la France.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Navigation</h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li><Link to="/" className="hover:text-sage">Accueil</Link></li>
                  <li><Link to="/a-propos" className="hover:text-sage">À propos</Link></li>
                  <li><Link to="/approches" className="hover:text-sage">Approches</Link></li>
                  <li><Link to="/tarifs-psy-amiens" className="hover:text-sage">Tarifs</Link></li>
                  <li><a href="mailto:sy.bouhey@gmail.com" className="hover:text-sage">sy.bouhey@gmail.com</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="tel:0686105980" className="font-bold text-white"> <span className="hidden sm:inline">06 86 10 59 80</span></a></li>
                  <li>49 Rue Des Visages Radieux, Amiens</li>
                  <li className="pt-4 text-white/40">
                    <p>Lun : 15h–19h | Mar : 11h–14h</p>
                    <p>Mer, Jeu : 15h–19h</p>
                    <p>Ven : 11h–19h | Sam : 10h–19h</p>
                    <p className="italic text-[9px] mt-1">Les horaires peuvent être modifiés.</p>
                  </li>
                  <li className="text-[10px] uppercase mt-4">SIRET : 79840833200020</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
              <p>© 2026 Sylviane Bouhey. Tous droits réservés.</p>
              <div className="flex gap-8 uppercase tracking-widest">
                <Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link>
                <Link to="/confidentialite" className="hover:text-white">Confidentialité</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
