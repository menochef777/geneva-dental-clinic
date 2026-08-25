import React from 'react';

interface FooterProps {
  lang?: 'en' | 'fr';
}

export const Footer: React.FC<FooterProps> = ({ lang = 'fr' }) => {
  const isFr = lang === 'fr';

  return (
    <footer className="w-full max-w-[1280px] py-12 px-4 sm:px-6 md:px-10 bg-zinc-950/90 border-t border-white/10 rounded-3xl flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400 gap-6 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
        <span className="font-extrabold text-sm text-slate-100 tracking-tight">GENEVA DENTAL CLINIC</span>
        <span className="hidden sm:inline text-zinc-600">•</span>
        <span>{isFr ? '© 2026 Geneva Dental Clinic. Tous droits réservés.' : '© 2026 Geneva Dental Clinic. All rights reserved.'}</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 text-zinc-400 font-medium">
        <a href="#" className="hover:text-white transition-colors">
          {isFr ? 'Politique de Confidentialité' : 'Privacy Policy'}
        </a>
        <span className="text-zinc-700">•</span>
        <a href="#" className="hover:text-white transition-colors">
          {isFr ? 'Conditions Générales' : 'Terms of Service'}
        </a>
        <span className="text-zinc-700">•</span>
        <a href="#" className="hover:text-white transition-colors">
          {isFr ? 'Mentions Légales' : 'Legal Notice'}
        </a>
      </div>
    </footer>
  );
};
