import React, { useState } from 'react';

interface FAQSectionProps {
  lang?: 'en' | 'fr';
}

interface FAQItemData {
  q: string;
  a: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang = 'fr' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isFr = lang === 'fr';

  const faqs: FAQItemData[] = isFr
    ? [
        {
          q: "La pose d'implants dentaires est-elle douloureuse ?",
          a: "Non. Grâce à l'anesthésie locale de pointe et à la planification 3D guidée par ordinateur, l'intervention est totalement indolore. Pour les patients très anxieux, nous proposons des solutions de sédation douce pour un confort absolu tout au long du soin."
        },
        {
          q: "Combien de temps durent les facettes dentaires en céramique ?",
          a: "Nos facettes en céramique pure, confectionnées artisanalement dans notre laboratoire partenaire à Genève, ont une durée de vie moyenne de 15 à 20 ans avec une bonne hygiène bucco-dentaire et des contrôles réguliers."
        },
        {
          q: "Prenez-vous en charge les patients souffrant de phobie dentaire ?",
          a: "Oui, c'est l'une de nos grandes spécialités. Le Dr. Thinard et son équipe prennent le temps d'écouter vos craintes, d'expliquer chaque étape et d'adapter le rythme du soin sans aucun jugement ni précipitation."
        },
        {
          q: "Acceptez-vous les assurances suisses et internationales ?",
          a: "Oui. Nous fournissons des devis détaillés conformes aux normes DENTOTAR® (SSO) et vous accompagnons dans les démarches de remboursement auprès des assurances complémentaires suisses et internationales."
        },
        {
          q: "Comment se déroule la première consultation d'évaluation ?",
          a: "La première consultation comprend un examen clinique approfondi, des radiographies numériques si nécessaire, et un échange ouvert sur vos attentes pour établir un plan de traitement clair, sur-mesure et sans engagement."
        }
      ]
    : [
        {
          q: 'Does the dental implant procedure hurt?',
          a: 'No. Thanks to state-of-the-art local anesthesia and 3D computer-guided planning, the procedure is completely painless. For nervous patients, gentle sedation solutions are available for total peace of mind.'
        },
        {
          q: 'How long do porcelain dental veneers last?',
          a: 'Our handcrafted pure ceramic veneers, crafted in our Geneva partner laboratory, last 15 to 20+ years with proper oral hygiene and regular check-ups.'
        },
        {
          q: 'Do you manage nervous or dental-phobic patients?',
          a: 'Yes, it is one of our core specialties. Dr. Thinard and his team dedicate time to address your concerns, explain every step, and adapt the pace without judgment or rush.'
        },
        {
          q: 'Do you accept Swiss and international insurances?',
          a: 'Yes. We provide transparent estimates compliant with SSO DENTOTAR® standards and assist you in filing claims with Swiss and international health insurances.'
        },
        {
          q: 'How does the initial assessment consultation work?',
          a: 'The initial visit includes a comprehensive examination, digital imaging if required, and a tailored discussion to design a clear, transparent treatment plan.'
        }
      ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="w-full bg-transparent py-12 sm:py-20 px-2 sm:px-4 md:px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 border border-slate-700/50 text-slate-300 text-xs font-semibold uppercase tracking-widest shadow-inner mb-4 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>{isFr ? 'QUESTIONS FRÉQUENTES' : 'FREQUENTLY ASKED QUESTIONS'}</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center tracking-tight leading-[1.08] mb-3">
          {isFr ? 'Questions Fréquentes' : 'Common Questions'}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 text-center max-w-xl mb-10">
          {isFr
            ? 'Tout ce que vous devez savoir avant votre consultation à la Geneva Dental Clinic.'
            : 'Everything you need to know before your consultation at Geneva Dental Clinic.'}
        </p>

        {/* Accordion List */}
        <div className="w-full space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="faq-item bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                <button 
                  onClick={() => toggle(index)} 
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-100">
                    {faq.q}
                  </span>
                  <span 
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-extrabold text-base transition-all duration-300 ${
                      isOpen ? 'rotate-45 bg-emerald-500 text-white' : 'bg-white/10 text-white'
                    }`}
                  >
                    {isOpen ? '×' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
