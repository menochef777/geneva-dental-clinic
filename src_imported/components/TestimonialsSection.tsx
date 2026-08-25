import React from 'react';

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
}) => {
  return (
    <section
      id={id}
      className="w-full bg-black py-24 px-4 sm:px-6 md:px-8 mt-6 sm:mt-10 overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 text-xs font-semibold uppercase tracking-widest shadow-inner mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
          NOS PATIENTS TÉMOIGNENT
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight leading-[1.08] max-w-3xl">
          A la Geneva Dental Clinic, nous aimons tous les sourires
        </h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-16 w-full">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-zinc-800 hover:border-zinc-700 hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)] cursor-pointer break-inside-avoid flex flex-col justify-between"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, starIdx) => (
                  <StarIcon key={starIdx} />
                ))}
              </div>

              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mt-4 mb-6 font-normal">
                "{item.review}"
              </p>

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
