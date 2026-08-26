import React, { useState } from 'react';

// Pure Component SVG Icons
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.028-.052-.777-.246-1.748-.823-2.628-1.704-.88-.88-1.458-1.851-1.704-2.628-.124-.394-.097-.716-.052-1.028.05-.333.419-1.026.824-1.17.135-.048.281-.039.398.026.155.086.582 1.34.619 1.488.037.148.016.275-.052.378-.073.111-.144.185-.237.284-.092.1-.194.223-.083.413.24.412.784 1.157 1.398 1.703.614.546 1.319.789 1.547.904.228.115.36.096.495-.059.135-.155.578-.673.733-.905.155-.232.31-.194.52-.116.21.078 1.33.628 1.558.742.228.114.38.172.436.269.056.097.056.562-.088.967z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

interface ClinicInfo {
  id: number;
  label: string;
  name: string;
  pinTitle: string;
  address: string;
  mapEmbedUrl: string;
}

const CLINICS: ClinicInfo[] = [
  {
    id: 1,
    label: 'CLINIC 1',
    name: 'Clinic 1 - Saint-Léger',
    pinTitle: 'Geneva Dental Clinic',
    address: 'Rue Saint Léger, 8, 1204 Genève 🇨🇭',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Geneva+Dental+Clinic+Rue+Saint+L%C3%A9ger+8+1204+Gen%C3%A8ve+Switzerland&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 2,
    label: 'CLINIC 2',
    name: 'Clinic 2 - Prévost-Martin',
    pinTitle: 'Mrs. Catherine Hendrikx Diététicienne',
    address: 'Rue Prévost-Martin 4BIS, 1205 Genève, Suíça',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Mrs.+Catherine+Hendrikx+Di%C3%A9t%C3%A9ticienne+Rue+Pr%C3%A9vost-Martin+4B+1205+Gen%C3%A8ve+Switzerland&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
];

interface ContactSectionProps {
  id?: string;
  lang?: 'en' | 'fr';
  t?: Record<string, string>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ id = 'contact', lang = 'fr', t }) => {
  const [activeMap, setActiveMap] = useState<'saintleger' | 'prevost'>('saintleger');

  const mapSrc =
    activeMap === 'saintleger'
      ? 'https://maps.google.com/maps?q=Geneva%20Dental%20Clinic,%20Rue%20Saint-L%C3%A9ger%208,%20Gen%C3%A8ve&t=&z=15&ie=UTF8&iwloc=&output=embed'
      : 'https://maps.google.com/maps?q=Rue%20Pr%C3%A9vost-Martin%204B,%201205%20Gen%C3%A8ve&t=&z=15&ie=UTF8&iwloc=&output=embed';

  return (
    <section
      id={id}
      className="w-full bg-transparent flex flex-col pt-8 md:pt-12 px-2 md:px-6 pb-12 gap-8 md:gap-10 transition-all font-sans select-none"
    >
      {/* Cabeçalho */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)] tracking-tight leading-[1.05]">
          {t?.contactTitle || (lang === 'fr' ? 'Prenez contact, dites-nous comment nous pouvons vous aider' : 'Get in touch, let us know how we can help')}
        </h2>
      </div>

      {/* Container Principal Dividido em Duas Colunas Lado a Lado (Vidro Escuro) */}
      <div className="bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 max-w-5xl mx-auto w-full shadow-2xl">
        
        {/* Coluna Esquerda: Mapa Interativo Direto com Alfinete */}
        <div className="flex-1 relative w-full h-full min-h-[400px] md:min-h-[450px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
          <iframe
            key={activeMap}
            src={mapSrc}
            loading="lazy"
            title="Google Maps"
            className="w-full h-full min-h-[400px] md:min-h-[450px] border-0"
            allowFullScreen={false}
          />

          {/* Badge sutil indicando alfinete ativo */}
          <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-2 pointer-events-none shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-white">
              {activeMap === 'saintleger' ? 'Rue Saint-Léger 8' : 'Rue Prévost-Martin 4B'}
            </span>
          </div>
        </div>

        {/* Coluna Direita: Seletor de Clínicas */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          <div className="mb-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)] tracking-tight leading-tight">
              {t?.chooseClinic || (lang === 'fr' ? 'Choisissez votre clinique' : 'Choose your clinic')}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-zinc-300 mt-1">
              {t?.chooseClinicSub || (lang === 'fr' ? "Sélectionnez un lieu pour l'afficher sur la carte ou cliquez sur le bouton WhatsApp pour échanger directement avec notre équipe." : 'Select a location to view on the map or tap the WhatsApp button to chat directly with our team.')}
            </p>
          </div>

          {/* Cartão Clínica 1 (Saint-Léger) */}
          <div
            onClick={() => setActiveMap('saintleger')}
            className={`w-full rounded-2xl p-5 flex items-center justify-between transition-all duration-300 cursor-pointer group ${
              activeMap === 'saintleger'
                ? 'bg-white text-black shadow-xl scale-[1.01] border-2 border-white'
                : 'bg-white/5 backdrop-blur-md text-white border border-white/10 hover:border-white/20 hover:bg-white/10'
            }`}
          >
            <div className="flex flex-col gap-1 min-w-0 pr-3">
              <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${
                activeMap === 'saintleger' ? 'text-slate-700' : 'text-zinc-400 group-hover:text-zinc-200'
              }`}>
                GENEVA DENTAL CLINIC
              </span>
              <span className={`text-sm md:text-base font-extrabold leading-snug ${
                activeMap === 'saintleger' ? 'text-black' : 'text-zinc-200 group-hover:text-white'
              }`}>
                Rue Saint-Léger 8, 1204 Genève
              </span>
            </div>

            <a
              href="https://wa.me/41788509393"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 shadow-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
                activeMap === 'saintleger'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-white hover:bg-emerald-500'
              }`}
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>

          {/* Cartão Clínica 2 (Prévost-Martin) */}
          <div
            onClick={() => setActiveMap('prevost')}
            className={`w-full rounded-2xl p-5 flex items-center justify-between transition-all duration-300 cursor-pointer group ${
              activeMap === 'prevost'
                ? 'bg-white text-black shadow-xl scale-[1.01] border-2 border-white'
                : 'bg-white/5 backdrop-blur-md text-white border border-white/10 hover:border-white/20 hover:bg-white/10'
            }`}
          >
            <div className="flex flex-col gap-1 min-w-0 pr-3">
              <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${
                activeMap === 'prevost' ? 'text-slate-700' : 'text-zinc-400 group-hover:text-zinc-200'
              }`}>
                CLINIC 2
              </span>
              <span className={`text-sm md:text-base font-extrabold leading-snug ${
                activeMap === 'prevost' ? 'text-black' : 'text-zinc-200 group-hover:text-white'
              }`}>
                Rue Prévost-Martin 4B, 1205 Genève
              </span>
            </div>

            <a
              href="https://wa.me/41788509393"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 shadow-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
                activeMap === 'prevost'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-white hover:bg-emerald-500'
              }`}
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

      </div>

      {/* Cartões de Contato (Rodapé da Seção) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto w-full">
        {/* Email */}
        <a
          href="mailto:info@geneva-dental.ch"
          className="bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 flex items-center gap-4 group cursor-pointer shadow-xl hover:border-white/20 transition-all"
        >
          <div className="w-12 h-12 bg-white/10 border border-white/20 text-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-white transition-transform">
            <MailIcon />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-zinc-400 font-semibold mb-0.5">Email address</p>
            <p className="text-sm md:text-base text-white font-bold truncate">info@geneva-dental.ch</p>
          </div>
        </a>

        {/* Telefone */}
        <a
          href="https://api.whatsapp.com/send?phone=+41788509393"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 flex items-center gap-4 group cursor-pointer shadow-xl hover:border-white/20 transition-all"
        >
          <div className="w-12 h-12 bg-white/10 border border-white/20 text-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-white transition-transform">
            <PhoneIcon />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-zinc-400 font-semibold mb-0.5">Phone Number</p>
            <p className="text-sm md:text-base text-white font-bold">+41 78 850 93 93</p>
          </div>
        </a>

        {/* Endereço */}
        <div className="bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 flex items-center gap-4 shadow-xl">
          <div className="w-12 h-12 bg-white/10 border border-white/20 text-white rounded-xl flex items-center justify-center shrink-0">
            <MapPinIcon />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-zinc-400 font-semibold mb-0.5">Our Location</p>
            <p className="text-sm md:text-base text-white font-bold">Genève, Switzerland</p>
          </div>
        </div>
      </div>
    </section>
  );
};

