import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PillNav, PillNavItem } from './PillNav';

interface BannerProps {
  lang?: 'en' | 'fr';
  setLang?: (lang: 'en' | 'fr') => void;
  t?: Record<string, string>;
  onOpenConsultation?: () => void;
  onSelectNav?: (item: string) => void;
}

export const Banner: React.FC<BannerProps> = ({
  lang = 'fr',
  setLang,
  t,
  onOpenConsultation,
  onSelectNav,
}) => {
  const isFr = lang === 'fr';

  const pillItems: PillNavItem[] = [
    { label: isFr ? 'Accueil' : 'Home', href: '#' },
    { label: isFr ? 'Expertise' : 'Expertise', href: '#expertise-section' },
    { label: isFr ? 'Clinique' : 'Clinic', href: '#expert-section' },
    { label: isFr ? 'Avis' : 'Reviews', href: '#testimonials-section' },
    { label: isFr ? 'FAQ' : 'FAQ', href: '#faq-section' },
    { label: isFr ? 'Cliniques' : 'Clinics', href: '#contact-section' },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* 1. Vídeo de fundo em tela cheia absoluta */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-tooth.mp4" type="video/mp4" />
      </video>

      {/* 2. Gradiente lateral escuro para destacar o texto e deixar o dente à direita livre */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />

      {/* Navbar overlay */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-6 px-6 md:px-16">
        <PillNav
          items={pillItems}
          activeHref="#"
          lang={lang}
          setLang={setLang}
          onOpenConsultation={onOpenConsultation}
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>

      {/* 3. Conteúdo da Hero alinhado à esquerda */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between px-6 md:px-16 py-12">
        {/* Topo: Espaço reservado para a navbar não colar */}
        <div className="h-12" />

        {/* Centro/Esquerda: Textos e Botões */}
        <div className="max-w-xl flex flex-col items-start gap-6 my-auto">
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-white">
            🇨🇭 {t?.heroTagline || 'Excellence Dentaire Suisse'}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[0.95] tracking-tight [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)]">
            {lang === 'fr' ? "L'Art de la Précision. Le Sourire Que Vous Méritez." : "The Art of Precision. The Smile You Deserve."}
          </h1>
          
          <p className="text-sm md:text-base text-zinc-200 [text-shadow:_0_1px_4px_rgb(0_0_0_/_80%)]">
            {t?.heroSub || "Dentisterie esthétique et implantologie d'excellence au cœur de Genève. Des résultats parfaits dans un environnement serein et sans douleur."}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer"
            >
              {t?.bookBtn || 'Réserver une consultation'}
            </button>
            <a
              href="#expertise-section"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-colors cursor-pointer"
            >
              {t?.resultsBtn || 'Découvrir nos résultats'}
            </a>
          </div>
        </div>

        {/* Rodapé da Hero: Estatísticas em linha */}
        <div className="flex gap-6 pt-4 border-t border-white/10 text-white">
          <div>
            <p className="text-2xl font-bold">15+</p>
            <p className="text-xs text-zinc-400">{lang === 'fr' ? "Années d'Expérience" : 'Years Experience'}</p>
          </div>
          <div className="border-l border-white/10 pl-6">
            <p className="text-2xl font-bold">2500+</p>
            <p className="text-xs text-zinc-400">{lang === 'fr' ? 'Patients Accompagnés' : 'Patients Treated'}</p>
          </div>
          <div className="border-l border-white/10 pl-6">
            <p className="text-2xl font-bold">98%</p>
            <p className="text-xs text-zinc-400">{lang === 'fr' ? 'Taux de Réussite' : 'Success Rate'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
