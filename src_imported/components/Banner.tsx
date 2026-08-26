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

      {/* 3. Conteúdo da Hero dividido em Topo (Textos) / Centro Vazio (3D) / Rodapé (Ações) */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 px-6 md:px-16">
        
        {/* Bloco Superior (Textos): Tagline, H1 e Subheadline ancorados no topo */}
        <div className="max-w-xl flex flex-col items-start gap-2.5 sm:gap-3.5 pt-2">
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white shadow-sm select-none">
            🇨🇭 {t?.heroTagline || 'Excellence Dentaire Suisse'}
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight [text-shadow:_0_4px_16px_rgba(0,0,0,0.95)]">
            {lang === 'fr' ? "L'Art de la Précision. Le Sourire Que Vous Méritez." : "The Art of Precision. The Smile You Deserve."}
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base text-zinc-200 leading-relaxed [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)] max-w-lg">
            {t?.heroSub || "Dentisterie esthétique et implantologie d'excellence au cœur de Genève. Des résultats parfaits dans un environnement serein et sans douleur."}
          </p>
        </div>

        {/* Espaço Vazio (Flex-grow): 100% livre para o dente 3D rodar */}
        <div className="flex-grow min-h-[25vh] sm:min-h-[30vh] pointer-events-none" />

        {/* Bloco Inferior (Rodapé): Apenas Botões de Ação */}
        <div className="max-w-xl flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 sm:py-4 bg-white text-black font-extrabold rounded-full hover:bg-zinc-200 active:scale-[0.98] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 group"
          >
            <span>{t?.bookBtn || 'Réserver une consultation'}</span>
            <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <a
            href="#expertise-section"
            className="px-7 py-3.5 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 active:scale-[0.98] transition-all duration-300 shadow-sm cursor-pointer text-xs sm:text-sm uppercase tracking-wider text-center flex items-center justify-center [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]"
          >
            {t?.resultsBtn || 'Découvrir nos résultats'}
          </a>
        </div>

      </div>
    </section>
  );
};
