import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, Phone, Mail, User, ArrowUpRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'en' | 'fr';
  t?: Record<string, string>;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  lang = 'fr',
  t,
}) => {
  const isFr = lang === 'fr';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const greeting = isFr
      ? 'Bonjour Geneva Dental Clinic,\nJe souhaite vérifier les disponibilités et horaires pour une consultation.'
      : 'Hello Geneva Dental Clinic,\nI would like to check availability and schedule for a consultation.';

    const messageBody = encodeURIComponent(
      `${greeting}\n\n👤 *${isFr ? 'Nom & Prénom' : 'Full Name'}:* ${formData.name}\n📧 *Email:* ${formData.email}\n📞 *${isFr ? 'Téléphone' : 'Phone'}:* ${formData.phone}\n💬 *${isFr ? 'Motif / Message' : 'Reason / Message'}:* ${formData.message || (isFr ? 'Non spécifié' : 'Not specified')}`
    );

    // Optional direct WhatsApp link redirect in new tab
    window.open(`https://api.whatsapp.com/send?phone=+41788509393&text=${messageBody}`, '_blank');
  };

  return (
    <div
      id="modal-consultation"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-neutral-950 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white font-sans max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white/70 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 font-sans">
            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-white text-black">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {isFr ? 'Demande Envoyée !' : 'Request Submitted!'}
            </h3>
            <p className="text-sm text-zinc-300 max-w-sm mx-auto">
              {isFr
                ? `Merci ${formData.name || ''} ! Notre équipe va vérifier les disponibilités et vous contacter rapidement avec les créneaux disponibles.`
                : `Thank you, ${formData.name || ''}! Our team will check available times and contact you promptly.`}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-8 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors cursor-pointer shadow-lg"
            >
              {isFr ? 'Fermer' : 'Done'}
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-xs uppercase font-bold tracking-widest text-zinc-400">
                GENEVA DENTAL CLINIC
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 tracking-tight">
                {isFr ? 'Disponibilités & Consultation' : 'Check Availability'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                {isFr
                  ? 'Remplissez vos coordonnées pour vérifier les créneaux et horaires disponibles.'
                  : 'Fill in your details to check our available dates and consultation times.'}
              </p>
            </div>

            {/* Direct WhatsApp Quick Option */}
            <a
              href="https://api.whatsapp.com/send?phone=+41788509393"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-5 flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/90 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-zinc-850 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                  <svg className="w-5 h-5 fill-emerald-400" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9 7.42 8.73 7.71C8.45 8.01 7.69 8.72 7.69 10.19C7.69 11.66 8.76 13.07 8.91 13.27C9.06 13.47 11.02 16.5 14.05 17.8C14.77 18.11 15.33 18.3 15.77 18.44C16.49 18.67 17.15 18.64 17.67 18.56C18.25 18.47 19.46 17.82 19.71 17.11C19.96 16.41 19.96 15.81 19.89 15.69C19.82 15.56 19.62 15.48 19.32 15.33C19.02 15.18 17.55 14.45 17.27 14.35C17 14.25 16.8 14.2 16.6 14.5C16.4 14.8 15.84 15.5 15.67 15.7C15.5 15.9 15.32 15.92 15.02 15.77C14.72 15.62 13.77 15.31 12.64 14.3C11.76 13.51 11.16 12.54 10.99 12.24C10.82 11.94 10.97 11.78 11.12 11.63C11.26 11.5 11.43 11.27 11.58 11.1C11.73 10.93 11.78 10.8 11.88 10.6C11.98 10.4 11.93 10.23 11.86 10.08C11.78 9.93 11.18 8.46 10.93 7.86C10.68 7.28 10.44 7.35 10.25 7.34C10.08 7.34 9.88 7.34 9.53 7.34Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>{isFr ? 'WhatsApp Direct' : 'Direct WhatsApp'}</span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-[11px] text-emerald-400 font-mono">+41 78 850 93 93</div>
                </div>
              </div>
              <div className="text-xs font-semibold text-zinc-300 group-hover:text-white flex items-center gap-1">
                <span>{isFr ? 'Ouvrir Chat' : 'Open Chat'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </a>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nom & Prénom */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  {isFr ? 'Nom & Prénom' : 'Full Name (First & Last)'} <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    required
                    placeholder={isFr ? 'Ex: Jean Dupont' : 'e.g. John Doe'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                    {isFr ? 'Adresse Email' : 'Email Address'} <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
                    <input
                      type="email"
                      required
                      placeholder="nom@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                    {isFr ? 'Numéro de Téléphone' : 'Phone Number'} <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+41 78 850 93 93"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Message / Motif / Problème */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  {isFr ? 'Votre besoin ou problème dentaire' : 'Your concern or reason for visit'}
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
                  <textarea
                    rows={3}
                    placeholder={
                      isFr
                        ? 'Décrivez ce que vous souhaitez faire (ex: blanchiment, facettes, implant, bilan, douleur...)'
                        : 'Describe what you would like to do (e.g. veneers, implants, check-up, pain...)'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Action Button (Neutral Check Availability) */}
              <button
                type="submit"
                id="btn-submit-consultation"
                className="w-full mt-2 py-3.5 px-6 rounded-full bg-white text-black font-extrabold text-sm uppercase tracking-wider hover:bg-zinc-200 active:scale-[0.98] transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>{isFr ? 'Vérifier les disponibilités & horaires' : 'Check Available Dates & Times'}</span>
                <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
