import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface ExpertiseSectionProps {
  id?: string;
  lang?: 'en' | 'fr';
  t?: Record<string, string>;
  onOpenConsultation?: () => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  id = 'expertise-section',
  lang = 'en',
  t,
  onOpenConsultation,
}) => {
  const cards = [
    {
      num: '01 / 04',
      title: lang === 'fr' ? 'Dentisterie Esthétique' : 'Aesthetic Dentistry',
      tag: lang === 'fr' ? 'Confectionné à Genève' : 'Handcrafted in Geneva',
      metricVal: '100%',
      metricLbl: lang === 'fr' ? 'Sur-mesure' : 'Personalization',
      head: lang === 'fr' ? 'Des résultats naturels, pensés pour vous.' : 'Natural results, designed for you.',
      desc: lang === 'fr' 
        ? "Nos facettes en porcelaine et céramiques sont confectionnées artisanalement dans notre laboratoire partenaire à Genève, préservant l'harmonie naturelle de votre sourire."
        : 'Our porcelain veneers and ceramic restorations are handcrafted in a partner lab in Geneva, preserving the natural biological harmony of every smile.',
      features: lang === 'fr'
        ? ['Céramique Pure Artisanale', 'Facettes Ultra-fines', 'Design Numérique du Sourire (DSD)', 'Harmonisation Esthétique Faciale']
        : ['Pure Handcrafted Ceramic', 'Ultra-thin Veneers', 'Digital Smile Design (DSD)', 'Facial Aesthetics Harmony'],
      img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85'
    },
    {
      num: '02 / 04',
      title: lang === 'fr' ? 'Implantologie' : 'Implantology',
      tag: lang === 'fr' ? 'Précision Suisse Straumann®' : 'Straumann® Swiss Precision',
      metricVal: '99.4%',
      metricLbl: lang === 'fr' ? 'Ostéointégration' : 'Osseointegration',
      head: lang === 'fr' ? 'La précision, de la planification à la pose.' : 'Precision from planning to placement.',
      desc: lang === 'fr'
        ? 'Planification chirurgicale 3D guidée par ordinateur et implants suisses Straumann®, garantissant prévisibilité maximale, ostéointégration supérieure et confort absolu.'
        : '3D computer-guided surgical planning and Swiss Straumann® implants, ensuring maximum predictability, osseointegration, and absolute comfort.',
      features: lang === 'fr'
        ? ['Implants Suisses Straumann', 'Chirurgie Guidée par Ordinateur', 'Protocole de Mise en Charge Immédiate', 'Régénération Osseuse Avancée']
        : ['Straumann Swiss Implants', 'Computer-Guided Surgery', 'Immediate Load Protocol', 'Advanced Bone Regeneration'],
      img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85'
    },
    {
      num: '03 / 04',
      title: lang === 'fr' ? 'Orthodontie' : 'Orthodontics',
      tag: lang === 'fr' ? "Systèmes d'Aligneurs Numériques" : 'Digital Aligner Systems',
      metricVal: '2.5k+',
      metricLbl: lang === 'fr' ? 'Sourires Alignés' : 'Aligned Smiles',
      head: lang === 'fr' ? 'Fonction, équilibre et confiance.' : 'Function, balance and confidence.',
      desc: lang === 'fr'
        ? 'Une prise en charge orthodontique alliant esthétique et biomécanique fonctionnelle, assurant stabilité et harmonie grâce aux aligneurs invisibles et scanners 3D.'
        : 'Orthodontic care focused on both aesthetics and function, promoting occlusal stability and alignment with invisible aligners and 3D intraoral scanning.',
      features: lang === 'fr'
        ? ['Aligneurs Transparents', 'Planification Occlusale 3D', 'Empreinte Optique HD 3D', 'Traitement Accéléré']
        : ['Clear Aligners', '3D Occlusal Planning', 'HD Intraoral Scanning', 'Accelerated Treatment'],
      img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85'
    },
    {
      num: '04 / 04',
      title: lang === 'fr' ? 'Dentisterie Préventive' : 'Preventive Dentistry',
      tag: lang === 'fr' ? 'Microscopie Optique' : 'Optical Microscopy',
      metricVal: '0.1mm',
      metricLbl: lang === 'fr' ? 'Précision Optique' : 'Optical Precision',
      head: lang === 'fr' ? 'Préserver ce qui vous appartient naturellement.' : 'Preserve what is naturally yours.',
      desc: lang === 'fr'
        ? 'Dentisterie biomimétique et mini-invasive sous microscope opératoire à fort grossissement, évitant les interventions inutiles et préservant les tissus sains.'
        : 'Biomimetic and minimally invasive dentistry with optical surgical microscopy, preventing unnecessary interventions and conserving tooth structure.',
      features: lang === 'fr'
        ? ['Microscope Clinique Haute Précision', 'Diagnostic Laser Avancé', 'Préservation Biologique', 'Aéropolissage Guidé AirFlow®']
        : ['High-Precision Microscope', 'Laser Diagnostics', 'Biological Preservation', 'AirFlow® Guided Cleaning'],
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85'
    }
  ];

  return (
    <section id={id} className="w-full bg-transparent p-2 sm:p-4 md:p-6 select-none relative overflow-visible">
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-10 sm:mb-14">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-sm [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>{t?.expTag || 'OUR EXPERTISE'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.08] [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]">
            {lang === 'fr' ? 'La dentisterie, ' : 'Dentistry, '}
            <br className="hidden sm:inline" />
            <span className="text-neutral-400 font-light italic">
              {lang === 'fr' ? 'pensée avec précision.' : 'precisely considered.'}
            </span>
          </h2>
        </div>

        <div className="flex items-center gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]">15+</div>
            <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
              {t?.statExp || 'Years Experience'}
            </div>
          </div>
          <div className="w-[1px] h-8 bg-white/10" />
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]">20k+</div>
            <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
              {t?.statPatients || 'Patients Treated'}
            </div>
          </div>
          <div className="w-[1px] h-8 bg-white/10" />
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]">99%</div>
            <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
              {t?.statSuccess || 'Success Rate'}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-2xl mx-auto flex flex-col space-y-12 sm:space-y-16 pb-12">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="sticky top-24 sm:top-28 w-full max-w-2xl mx-auto rounded-3xl bg-black/20 backdrop-blur-sm border border-white/10 p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform-gpu transition-all duration-300 overflow-hidden"
          >
            <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-white/15">
              <img src={card.img} alt={card.title} className="w-full h-full object-cover filter brightness-95" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"></div>

              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold text-white flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="[text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">{card.tag}</span>
                </span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 z-10 flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest block [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
                    {card.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
                    {card.title}
                  </h3>
                </div>
                <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 text-right">
                  <span className="text-lg font-black text-white block leading-none [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
                    {card.metricVal}
                  </span>
                  <span className="text-[8px] uppercase tracking-wider text-neutral-400 font-semibold [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
                    {card.metricLbl}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-extrabold text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
                {card.head}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
                {card.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {card.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-neutral-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="[text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between gap-3 border-t border-white/10 mt-3">
                <a
                  href="https://api.whatsapp.com/send?phone=+41788509393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all cursor-pointer shadow-md"
                >
                  <span className="font-extrabold">{t?.consultBtn || 'Consult'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                </a>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-neutral-300 hover:text-white uppercase tracking-wider underline cursor-pointer [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]"
                >
                  {t?.evalBtn || 'Book Assessment →'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
