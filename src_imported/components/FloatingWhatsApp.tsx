import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+41788509393"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-[0_10px_30px_rgba(16,185,129,0.5)] hover:bg-emerald-400 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
      <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9 7.42 8.73 7.71C8.45 8.01 7.69 8.72 7.69 10.19C7.69 11.66 8.76 13.07 8.91 13.27C9.06 13.47 11.02 16.5 14.05 17.8C14.77 18.11 15.33 18.3 15.77 18.44C16.49 18.67 17.15 18.64 17.67 18.56C18.25 18.47 19.46 17.82 19.71 17.11C19.96 16.41 19.96 15.81 19.89 15.69C19.82 15.56 19.62 15.48 19.32 15.33C19.02 15.18 17.55 14.45 17.27 14.35C17 14.25 16.8 14.2 16.6 14.5C16.4 14.8 15.84 15.5 15.67 15.7C15.5 15.9 15.32 15.92 15.02 15.77C14.72 15.62 13.77 15.31 12.64 14.3C11.76 13.51 11.16 12.54 10.99 12.24C10.82 11.94 10.97 11.78 11.12 11.63C11.26 11.5 11.43 11.27 11.58 11.1C11.73 10.93 11.78 10.8 11.88 10.6C11.98 10.4 11.93 10.23 11.86 10.08C11.78 9.93 11.18 8.46 10.93 7.86C10.68 7.28 10.44 7.35 10.25 7.34C10.08 7.34 9.88 7.34 9.53 7.34Z" />
      </svg>
    </a>
  );
};
