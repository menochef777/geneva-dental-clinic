import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ConsultationButtonProps {
  onClick?: () => void;
  className?: string;
  size?: number;
  whatsappUrl?: string;
}

export const ConsultationButton: React.FC<ConsultationButtonProps> = ({
  onClick,
  className = '',
  size = 148,
  whatsappUrl = 'https://api.whatsapp.com/send?phone=+41788509393',
}) => {
  const text = "CHATWHATSAPP • AGENDAR CONSULTA • ";

  return (
    <a
      id="btn-whatsapp-hero"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center rounded-full select-none transition-all duration-500 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-4 focus:ring-offset-black cursor-pointer ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-label="Agendar via WhatsApp: +41 78 850 93 93"
      title="Falar diretamente no WhatsApp (+41 78 850 93 93)"
    >
      {/* Outer ambient glow on hover */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Base Disc (Crisp pure white with subtle glass depth) */}
      <div className="absolute inset-0 rounded-full bg-white text-black shadow-[0_10px_35px_rgba(0,0,0,0.4),0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:bg-neutral-50 group-hover:shadow-[0_15px_45px_rgba(16,185,129,0.3),0_0_25px_rgba(255,255,255,0.4)]" />

      {/* Rotating SVG circular text around the circumference */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-spin-slow">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ transformOrigin: 'center center' }}
        >
          <defs>
            <path
              id="whatsappCirclePath"
              d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
              fill="none"
            />
          </defs>
          <text
            className="fill-black font-['Montserrat'] text-[8px] font-black tracking-[0.16em] uppercase"
          >
            <textPath href="#whatsappCirclePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Circle Element */}
      <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-black text-white border-2 border-neutral-900 group-hover:border-emerald-500 transition-all duration-300 shadow-inner group-hover:scale-105">
        {/* Crisp Vector Official WhatsApp Icon + Arrow Up-Right Accent */}
        <div className="relative flex items-center justify-center">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 fill-emerald-400 group-hover:fill-emerald-300 transition-colors duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9 7.42 8.73 7.71C8.45 8.01 7.69 8.72 7.69 10.19C7.69 11.66 8.76 13.07 8.91 13.27C9.06 13.47 11.02 16.5 14.05 17.8C14.77 18.11 15.33 18.3 15.77 18.44C16.49 18.67 17.15 18.64 17.67 18.56C18.25 18.47 19.46 17.82 19.71 17.11C19.96 16.41 19.96 15.81 19.89 15.69C19.82 15.56 19.62 15.48 19.32 15.33C19.02 15.18 17.55 14.45 17.27 14.35C17 14.25 16.8 14.2 16.6 14.5C16.4 14.8 15.84 15.5 15.67 15.7C15.5 15.9 15.32 15.92 15.02 15.77C14.72 15.62 13.77 15.31 12.64 14.3C11.76 13.51 11.16 12.54 10.99 12.24C10.82 11.94 10.97 11.78 11.12 11.63C11.26 11.5 11.43 11.27 11.58 11.1C11.73 10.93 11.78 10.8 11.88 10.6C11.98 10.4 11.93 10.23 11.86 10.08C11.78 9.93 11.18 8.46 10.93 7.86C10.68 7.28 10.44 7.35 10.25 7.34C10.08 7.34 9.88 7.34 9.53 7.34Z" />
          </svg>

          {/* Micro arrow indicator on top right */}
          <div className="absolute -top-1.5 -right-2 bg-emerald-500 text-black rounded-full p-0.5 shadow-sm transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
            <ArrowUpRight className="w-2.5 h-2.5" strokeWidth={3} />
          </div>
        </div>

        {/* Pulsing Live Online Indicator Badge */}
        <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-black" />
        </span>
      </div>

      {/* Floating Mini Badge / Tooltip on Hover */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
        <span className="px-2.5 py-1 rounded-full bg-neutral-900/95 border border-emerald-500/40 text-[10px] font-semibold tracking-wide text-emerald-400 shadow-xl backdrop-blur-md">
          +41 78 850 93 93
        </span>
      </div>
    </a>
  );
};
