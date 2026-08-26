import React from 'react';

// Pure Component SVG Star Icon
const StarIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-500 fill-yellow-500 shrink-0"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

interface Testimonial {
  name: string;
  date: string;
  review: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marco Forini',
    date: '2022-01-25',
    review:
      'Dr. Thinard and his assitant, Raquel, were great. They were very caring from the first contact, always explaining everything they were doing as well as making sure you are confortable and mainly, not feeling any disconfort or pain...',
    initials: 'MF',
  },
  {
    name: 'sarah cynamon',
    date: '2022-02-02',
    review:
      "Je suis absolument ravie. Étant atteinte de phobie dentaire depuis maintenant une dizaine d'années, je suis absolument fan du docteur Thinard! Il a su me mettre à l'aise, comprendre ma peur et être patient avec moi...",
    initials: 'SC',
  },
  {
    name: 'ludovic ferrecchia',
    date: '2022-02-03',
    review: 'Extremely friendly staff and good treatment and advice.',
    initials: 'LF',
  },
  {
    name: 'Donia ZF',
    date: '2022-01-24',
    review:
      "Vraiment super bonne accueil prise en charge au top et tres rapide, tres a l'écoute ayant tres peur des dentiste j'ai trouver pour petit coin de paradis pour mes petite dents Merci au Docteur Thinard et a son assistante Raquel",
    initials: 'DZ',
  },
  {
    name: 'Anwei Zhou',
    date: '2021-11-26',
    review:
      'Un cabinet cu mult profesionalism și o atmosfera plăcută ! Domnul Dr Thinard își face treaba intr-o maniera ireproșabila,gata sa dea cele mai bune sfaturi și foarte atent la detalii ! Recomand cu încredere !',
    initials: 'AZ',
  },
  {
    name: 'Perrelet Michel',
    date: '2022-01-20',
    review: 'Bonjour . Oui très Bel Acceuil, de plus j’ai été reçu en urgence . Merci',
    initials: 'PM',
  },
];

interface TestimonialsSectionProps {
  id?: string;
  lang?: 'en' | 'fr';
  t?: Record<string, string>;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  id = 'testimonials',
  lang = 'fr',
  t,
}) => {
  return (
    <section
      id={id}
      className="w-full bg-transparent py-16 sm:py-24 px-4 sm:px-6 md:px-8 mt-6 sm:mt-10 overflow-hidden font-sans select-none"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Tag / Badge Centralizado */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest shadow-inner mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
          {t?.testimonialsTag || (lang === 'fr' ? 'NOS PATIENTS TÉMOIGNENT' : 'OUR PATIENTS SHARE THEIR EXPERIENCE')}
        </div>

        {/* Título Principal */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight leading-[1.08] max-w-3xl [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)]">
          {t?.testimonialsTitle || (lang === 'fr' ? 'À la Geneva Dental Clinic, nous prenons soin de chaque sourire' : 'At Geneva Dental Clinic, we care for every smile')}
        </h2>

        {/* Google Maps Trust Badge (Clickable Link to Google Reviews) */}
        <a
          href="https://maps.app.goo.gl/CvPqHyjYZVbZUKvR8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors mt-6 mb-8 group cursor-pointer shadow-lg select-none"
        >
          {/* Lado Esquerdo: Ícone do Google (G colorido) */}
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
          </div>

          {/* Lado Direito (Coluna) */}
          <div className="flex flex-col min-w-0">
            {/* Linha 1: 5 Estrelas Amarelas + Título */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-yellow-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-bold text-sm md:text-base [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
                {t?.badgeTopRated || (lang === 'fr' ? 'Mieux Noté sur Google Maps' : 'Top Rated on Google Maps')}
              </span>
            </div>

            {/* Linha 2: Subtítulo */}
            <span className="text-zinc-400 text-xs mt-0.5">
              {t?.badgeReviewsSub || (lang === 'fr' ? 'Basé sur des avis vérifiés de patients' : 'Based on verified patient reviews')}
            </span>
          </div>

          {/* Ícone Extra: Seta Externa (↗) */}
          <div className="ml-2 text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </a>

        {/* Grade Masonry */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-4 w-full">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] cursor-pointer break-inside-avoid flex flex-col justify-between"
            >
              {/* Topo: 5 Estrelas */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, starIdx) => (
                  <StarIcon key={starIdx} />
                ))}
              </div>

              {/* Meio: Texto do Review */}
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mt-4 mb-6 font-normal">
                "{item.review}"
              </p>

              {/* Rodapé: Avatar, Nome e Data */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/60">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-inner">
                  {item.initials}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-sm text-white truncate">{item.name}</span>
                  <span className="text-xs text-zinc-500 font-medium">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
