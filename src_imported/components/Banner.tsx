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
      className="relative w-full max-w-[1280px] mx-auto bg-transparent text-white rounded-[28px] sm:rounded-[40px] md:rounded-[44px] p-2 sm:p-4 md:p-6 overflow-hidden select-none"
    >
      {/* PILL NAV MOTION HEADER */}
      <div className="relative z-30 pb-6 sm:pb-10">
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

      {/* HERO CONTENT AREA */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 sm:pb-24 lg:pb-16 pt-2 sm:pt-4">
        
        {/* Left / Main Typography Column in Light Smoke Glass Container */}
        <div className="lg:col-span-8 flex flex-col justify-start z-20 bg-black/15 backdrop-blur-[4px] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
          
          {/* Top Minimalist Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-sm shadow-sm w-fit mb-4 sm:mb-6 select-none">
            <span className="text-xs">🇨🇭</span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-neutral-300 [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
              {t?.heroTagline || 'SWISS DENTAL EXCELLENCE'}
            </span>
          </div>

          {/* Headline H1 with Soft Text Shadow matching Section 4 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] flex flex-col items-start font-sans [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]">
            <span>{lang === 'fr' ? "L'Art de la Précision." : 'The Art of Precision.'}</span>
            <span className="text-neutral-200 mt-1 sm:mt-2">{lang === 'fr' ? 'Le Sourire Que Vous Méritez.' : 'The Smile You Deserve.'}</span>
          </h1>

          {/* Subheadline with Soft Text Shadow */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-neutral-300 max-w-lg leading-relaxed font-normal [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
            {t?.heroSub || 'World-class aesthetic dentistry and implantology in the heart of Geneva. Experience flawless results in a completely stress-free, pain-free environment.'}
          </p>

          {/* Google Maps Trust Badge */}
          <div className="mt-6 sm:mt-7 p-3 sm:p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 inline-flex items-center gap-3 sm:gap-4 shadow-lg w-fit max-w-md select-none">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24">
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
                  {t?.topRated || 'Top Rated on Google Maps'}
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-neutral-400 font-medium mt-0.5 [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
                {t?.reviewsSub || 'Based on real patient reviews'}
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-black text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-900 active:scale-[0.98] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer group"
            >
              <span>{t?.bookBtn || 'Book Your Consultation'}</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="#expertise-section"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/20 active:scale-[0.98] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span>{t?.resultsBtn || 'View Our Results'}</span>
            </a>
          </div>

        </div>

        {/* Right Column: 15+ Years Excellence Card */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end z-10 w-full max-md:hidden">
          <div className="w-full max-w-sm bg-black/20 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-neutral-400 [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
                {t?.qualityCare || 'Quality Care'}
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold px-2.5 py-0.5 sm:py-1 rounded-full bg-neutral-200 text-black shadow-sm">
                Geneva
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none mb-2 [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]">
              {t?.yearsExcellence || '15+ Years'}
            </div>
            <p className="text-xs sm:text-sm font-medium text-neutral-300 leading-relaxed [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
              {t?.qualityCareDesc || 'Of excellence in dental surgery, implantology, and aesthetic dentistry in Geneva.'}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
