import React, { useState } from 'react';

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

interface ContactSectionProps {
  id?: string;
  lang?: 'en' | 'fr';
  t?: Record<string, string>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ id = 'contact' }) => {
  const [activeMap, setActiveMap] = useState<'saintleger' | 'prevost'>('saintleger');

  const mapSrc =
    activeMap === 'saintleger'
      ? 'https://maps.google.com/maps?q=Rue+Saint-L%C3%A9ger+8,+1204+Gen%C3%A8ve,+Switzerland&t=&z=17&ie=UTF8&iwloc=B&output=embed'
      : 'https://maps.google.com/maps?q=Rue+Pr%C3%A9vost-Martin+4B,+1205+Gen%C3%A8ve,+Switzerland&t=&z=17&ie=UTF8&iwloc=B&output=embed';

  return (
    <section
      id={id}
      className="w-full bg-[#E5E5E5] rounded-[32px] sm:rounded-[40px] flex flex-col pt-12 md:pt-20 px-4 md:px-8 pb-12 gap-8 md:gap-12 mt-6 sm:mt-10 overflow-hidden shadow-2xl transition-all font-sans"
    >
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-[1.05]">
          Get in touch, let us know <br className="hidden md:block" /> how we can help
        </h2>
      </div>

      <div className="bg-stone-100 rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 max-w-5xl mx-auto w-full shadow-sm border border-neutral-200/70">
        <div className="flex-1 rounded-2xl overflow-hidden min-h-[400px] md:min-h-[450px] relative shadow-inner border border-neutral-200/60 bg-zinc-200">
          <iframe
            key={activeMap}
            src={mapSrc}
            className="w-full h-full min-h-[400px] md:min-h-[450px] border-0"
            allowFullScreen={false}
            loading="lazy"
            title={activeMap === 'saintleger' ? 'Geneva Dental Clinic - Saint Léger' : 'Geneva Dental Clinic - Prévost-Martin'}
          />

          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-neutral-200 flex items-center gap-2 pointer-events-none">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-black">
              {activeMap === 'saintleger' ? 'Rue Saint Léger, 8' : 'Rue Prévost-Martin 4B'}
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-4">
          <div className="mb-2">
            <h3 className="text-3xl font-bold text-black tracking-tight leading-tight">
              Choose your clinic
            </h3>
            <p className="text-sm font-medium text-neutral-500 mt-1">
              Select a location to view on the map or tap the WhatsApp button to chat directly with our team.
            </p>
          </div>

          <div
            onClick={() => setActiveMap('saintleger')}
            className={`w-full rounded-2xl p-5 flex items-center justify-between border-2 transition-all duration-300 cursor-pointer group ${
              activeMap === 'saintleger'
                ? 'bg-white border-black shadow-md scale-[1.01]'
                : 'bg-zinc-100 border-transparent hover:bg-white/80 hover:border-neutral-300'
            }`}
          >
            <div className="flex flex-col gap-1 min-w-0 pr-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                GENEVA DENTAL CLINIC
              </span>
              <span className="text-sm md:text-base font-bold text-black leading-snug">
                Rue Saint Léger, 8, 1204 Genève
              </span>
            </div>

            <a
              href="https://wa.me/41788509393"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`w-11 h-11 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
                activeMap === 'saintleger'
                  ? 'bg-green-500'
                  : 'bg-black group-hover:bg-green-500'
              }`}
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>

          <div
            onClick={() => setActiveMap('prevost')}
            className={`w-full rounded-2xl p-5 flex items-center justify-between border-2 transition-all duration-300 cursor-pointer group ${
              activeMap === 'prevost'
                ? 'bg-white border-black shadow-md scale-[1.01]'
                : 'bg-zinc-100 border-transparent hover:bg-white/80 hover:border-neutral-300'
            }`}
          >
            <div className="flex flex-col gap-1 min-w-0 pr-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                CLINIC 2
              </span>
              <span className="text-sm md:text-base font-bold text-black leading-snug">
                Rue Prévost-Martin 4B, 1205 Genève
              </span>
            </div>

            <a
              href="https://wa.me/41788509393"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`w-11 h-11 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
                activeMap === 'prevost'
                  ? 'bg-green-500'
                  : 'bg-black group-hover:bg-green-500'
              }`}
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto w-full">
        <a
          href="mailto:info@geneva-dental.ch"
          className="bg-white rounded-2xl p-5 md:p-6 flex items-center gap-4 shadow-sm border border-neutral-200/60 hover:shadow-md transition-shadow group"
        >
          <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <MailIcon />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-neutral-500 font-semibold mb-0.5">Email address</p>
            <p className="text-sm md:text-base text-black font-bold truncate">info@geneva-dental.ch</p>
          </div>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=+41788509393"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-5 md:p-6 flex items-center gap-4 shadow-sm border border-neutral-200/60 hover:shadow-md transition-shadow group"
        >
          <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <PhoneIcon />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-neutral-500 font-semibold mb-0.5">Phone Number</p>
            <p className="text-sm md:text-base text-black font-bold">+41 78 850 93 93</p>
          </div>
        </a>

        <div className="bg-white rounded-2xl p-5 md:p-6 flex items-center gap-4 shadow-sm border border-neutral-200/60">
          <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center shrink-0">
            <MapPinIcon />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-neutral-500 font-semibold mb-0.5">Our Location</p>
            <p className="text-sm md:text-base text-black font-bold">Genève, Switzerland</p>
          </div>
        </div>
      </div>
    </section>
  );
};
