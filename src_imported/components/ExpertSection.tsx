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
        
        {/* Left Column: Doctor Photo Portrait */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-zinc-200 border border-white/20 shadow-2xl min-h-[380px] sm:min-h-[460px] flex flex-col justify-end group">
          <img 
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=85" 
            alt="Dr. Thinard - Lead Dental Surgeon" 
            className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
          
          {/* Bottom Floating Badge on Photo */}
          <div className="relative z-10 p-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Dr. Thinard • Geneva Clinic</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">
              {isFr ? 'Chirurgien-Dentiste Diplômé • Précision & Confort' : 'Certified Dental Surgeon • Precision & Comfort'}
            </p>
          </div>
        </div>

        {/* Right Column: Minimalist Off-White Authority Card */}
        <div className="lg:col-span-7 bg-stone-50 text-slate-950 rounded-3xl p-7 sm:p-10 md:p-12 shadow-2xl border border-stone-200 flex flex-col justify-between">
          <div>
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/10 border border-slate-950/15 text-slate-900 text-xs font-bold uppercase tracking-widest mb-4">
              <span>🇨🇭</span>
              <span>{isFr ? "L'EXPERTISE MÉDICALE" : 'CLINICAL EXPERTISE'}</span>
            </div>

            {/* Titles */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.05]">
              {isFr ? 'Rencontrez le Dr. Thinard' : 'Meet Dr. Thinard'}
            </h2>
            <p className="text-sm sm:text-base font-bold text-slate-600 mt-1 uppercase tracking-wider">
              {isFr ? 'Chirurgien-Dentiste Principal & Fondateur' : 'Lead Dental Surgeon & Founder'}
            </p>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mt-5">
              {isFr
                ? "Fort de plus de 15 années d'excellence clinique à Genève, le Dr. Thinard allie la rigueur de la précision suisse à une écoute humaine et attentive. Pionnier en implantologie guidée 3D et en dentisterie esthétique sur-mesure, il a développé un protocole exclusif de soins sans douleur, assurant aux patients anxieux ou souffrant de phobie dentaire une expérience sereine et rassurante."
                : 'With over 15 years of clinical excellence in Geneva, Dr. Thinard combines the rigor of Swiss precision with compassionate, dedicated patient care. A pioneer in 3D computer-guided implantology and bespoke aesthetic dentistry, he developed an exclusive stress-free and pain-free protocol tailored specifically for nervous and dental-phobic patients.'}
            </p>

            {/* Credentials List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-200/80">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-900">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{isFr ? 'Membre Société Suisse des Dentistes (SSO)' : 'Member Swiss Dental Association (SSO)'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-900">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{isFr ? "15+ Années d'Expérience Clinique" : '15+ Years Clinical Experience'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-900">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{isFr ? 'Spécialiste Implantologie Guidée 3D' : 'Specialist in 3D Guided Implantology'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-900">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{isFr ? 'Protocole Sans Douleur & Phobie Dentaire' : 'Stress-Free & Pain-Free Protocol'}</span>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="mt-8 pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button 
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-slate-950 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-slate-800 transition-all shadow-lg cursor-pointer"
            >
              <span>{isFr ? 'Réserver avec le Dr. Thinard' : 'Book Consultation with Dr. Thinard'}</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>

            <a 
              href="https://wa.me/41788509393" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-emerald-500/10 text-emerald-700 font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-emerald-500/20 transition-all cursor-pointer border border-emerald-500/30"
            >
              <span>{isFr ? 'Échanger sur WhatsApp' : 'Chat on WhatsApp'}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
