import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';

interface ExpertSectionProps {
  lang?: 'en' | 'fr';
  onOpenConsultation?: () => void;
}

export const ExpertSection: React.FC<ExpertSectionProps> = ({
  lang = 'fr',
  onOpenConsultation,
}) => {
  const isFr = lang === 'fr';

  return (
    <section id="expert-section" className="w-full bg-transparent py-10 sm:py-16 px-2 sm:px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column: Clinic Tour Video */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/20 shadow-2xl min-h-[380px] sm:min-h-[460px] flex flex-col justify-end group">
          <video 
            src="images/Filming_clinic_room_tour_202608251740.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
          
          {/* Bottom Floating Badge on Video */}
          <div className="relative z-10 p-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{isFr ? '📍 Genève, Suisse' : '📍 Geneva, Switzerland'}</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">
              {isFr ? 'Excellence & Confort' : 'Excellence & Comfort'}
            </p>
          </div>
        </div>

        {/* Right Column: Minimalist Off-White Authority Card */}
        <div className="lg:col-span-7 bg-stone-50 text-slate-950 rounded-3xl p-7 sm:p-10 md:p-12 shadow-2xl border border-stone-200 flex flex-col justify-between">
          <div>
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/10 border border-slate-950/15 text-slate-900 text-xs font-bold uppercase tracking-widest mb-4">
              <span>🇨🇭</span>
              <span>{isFr ? 'NOTRE CLINIQUE' : 'OUR CLINIC'}</span>
            </div>

            {/* Titles */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {isFr ? "L'Excellence Dentaire au Cœur de Genève" : 'Dental Excellence in the Heart of Geneva'}
            </h2>
            <p className="text-sm sm:text-base font-bold text-slate-600 mt-1 uppercase tracking-wider">
              {isFr ? 'Technologie Suisse & Confort Absolu' : 'Swiss Technology & Absolute Comfort'}
            </p>

            {/* Bio / Main Paragraph */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mt-5">
              {isFr
                ? "Découvrez un espace conçu pour votre bien-être. À la Geneva Dental Clinic, nous allions des équipements de pointe à une approche profondément humaine. Spécialisés dans l'esthétique et l'implantologie, nous offrons un environnement apaisant, idéal pour surmonter l'anxiété dentaire avec des protocoles garantissant des soins sans douleur."
                : 'Discover a space designed for your well-being. At Geneva Dental Clinic, we combine cutting-edge technology with a deeply human approach. Specialized in aesthetics and implantology, we offer a soothing environment, ideal for overcoming dental anxiety with protocols guaranteeing pain-free care.'}
            </p>

            {/* Benefits List (Mobile: flex-col gap-3 / Desktop: grid-cols-2 gap-4) */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4 mt-6 pt-6 border-t border-slate-200/80">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-800">
                <Check className="w-4 h-4 text-green-500 shrink-0 stroke-[2.5]" />
                <span>{isFr ? 'Technologie de Pointe (Scanner 3D)' : 'Cutting-Edge Technology (3D Scanner)'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-800">
                <Check className="w-4 h-4 text-green-500 shrink-0 stroke-[2.5]" />
                <span>{isFr ? 'Cadre Relaxant & Premium' : 'Relaxing & Premium Setting'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-800">
                <Check className="w-4 h-4 text-green-500 shrink-0 stroke-[2.5]" />
                <span>{isFr ? 'Approche Douce (Zéro Phobie)' : 'Gentle Approach (Zero Phobia)'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-800">
                <Check className="w-4 h-4 text-green-500 shrink-0 stroke-[2.5]" />
                <span>{isFr ? "+15 Ans d'Expertise Suisse" : '15+ Years of Swiss Expertise'}</span>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="mt-8 pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button 
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-slate-950 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-slate-800 transition-all shadow-lg cursor-pointer"
            >
              <span>{isFr ? 'RÉSERVER UNE CONSULTATION' : 'BOOK A CONSULTATION'}</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>

            <a 
              href="https://wa.me/41788509393" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-emerald-500/10 text-emerald-700 font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-emerald-500/20 transition-all cursor-pointer border border-emerald-500/30"
            >
              <span>{isFr ? 'VOIR LA CLINIQUE' : 'EXPLORE THE CLINIC'}</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-600" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
