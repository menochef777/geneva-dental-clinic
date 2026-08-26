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
    <div
      id="genevadentalclinic-hero-banner"
      className="relative w-full max-w-[1400px] mx-auto min-h-[92vh] md:min-h-[820px] bg-black text-white rounded-[28px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden select-none flex flex-col justify-between p-4 sm:p-6 md:p-10 border border-white/10 shadow-2xl"
    >
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/hero-tooth.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 z-0 pointer-events-none" />

      {/* PILL NAV MOTION HEADER */}
      <div className="relative z-30 pb-4 sm:pb-6">
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

      {/* BLOCO SUPERIOR (TOPO) - Tagline, H1 e Subheadline */}
      <div className="relative z-10 w-full md:max-w-md lg:max-w-lg flex flex-col items-start pt-2 md:pt-4">
        {/* Top Minimalist Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md shadow-md w-fit mb-3 sm:mb-4 select-none">
          <span className="text-xs">🇨🇭</span>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_90%)]">
            {t?.heroTagline || 'EXCELLENCE DENTAIRE SUISSE'}
          </span>
        </div>

        {/* Headline H1 with Strong Text Shadow */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] flex flex-col items-start font-sans [text-shadow:_0_4px_16px_rgba(0,0,0,0.95)]">
          <span>{lang === 'fr' ? "L'Art de la Précision." : 'The Art of Precision.'}</span>
          <span className="mt-1 sm:mt-2">{lang === 'fr' ? 'Le Sourire Que Vous Méritez.' : 'The Smile You Deserve.'}</span>
        </h1>

        {/* Subheadline with Strong Text Shadow */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-zinc-100 max-w-md leading-relaxed font-normal [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]">
          {t?.heroSub || 'World-class aesthetic dentistry and implantology in the heart of Geneva. Experience flawless results in a completely stress-free, pain-free environment.'}
        </p>
      </div>

      {/* ESPAÇO VAZIO (MEIO) - Deixa o centro totalmente livre para o dente 3D rodando no vídeo */}
      <div className="my-auto min-h-[140px] sm:min-h-[180px] md:min-h-0 pointer-events-none" />

      {/* BLOCO INFERIOR (RODAPÉ DA HERO) - Bandeja Glassmorphism */}
      <div className="relative z-10 w-full md:max-w-md lg:max-w-lg bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col gap-3.5 sm:gap-4 pb-4">
        
        {/* Google Maps Trust Badge (Clickable Link) */}
        <a
          href="https://maps.app.goo.gl/6Git9UTDtpqcmfvo8"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 sm:p-3 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-[0.98] backdrop-blur-md border border-white/15 hover:border-white/40 inline-flex items-center gap-3 shadow-md w-full select-none transition-all duration-300 group cursor-pointer text-white"
        >
          <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5 text-yellow-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-bold text-white tracking-tight [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
                {t?.topRated || 'Mieux Noté sur Google Maps'}
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-white/80 font-medium mt-0.5 [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
              {t?.reviewsSub || 'Basé sur des avis vérifiés de patients'}
            </span>
          </div>

          {/* Arrow Icon */}
          <div className="ml-auto pl-1 text-white/70 group-hover:text-white group-hover:translate-x-0.5 transition-all">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </a>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-black text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-900 active:scale-[0.98] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer group"
          >
            <span>{t?.bookBtn || 'Réserver une Consultation'}</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href="#expertise-section"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-full bg-transparent border border-white text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/10 active:scale-[0.98] transition-all duration-300 shadow-sm cursor-pointer"
          >
            <span>{t?.resultsBtn || 'Découvrir Nos Résultats'}</span>
          </a>
        </div>

        {/* Stats Bar in Tray */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center">
          <div>
            <div className="text-base sm:text-lg font-black text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.8)]">15+</div>
            <div className="text-[9px] sm:text-[10px] text-zinc-300 font-semibold uppercase tracking-wider">{lang === 'fr' ? "Ans d'Expérience" : 'Years Experience'}</div>
          </div>
          <div className="border-x border-white/10">
            <div className="text-base sm:text-lg font-black text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.8)]">2500+</div>
            <div className="text-[9px] sm:text-[10px] text-zinc-300 font-semibold uppercase tracking-wider">{lang === 'fr' ? 'Patients' : 'Patients'}</div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-black text-emerald-400 [text-shadow:_0_1px_4px_rgba(0,0,0,0.8)]">98%</div>
            <div className="text-[9px] sm:text-[10px] text-zinc-300 font-semibold uppercase tracking-wider">{lang === 'fr' ? 'Succès' : 'Success'}</div>
          </div>
        </div>

      </div>
    </div>
  );
};
