import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Phone, Mail, User } from 'lucide-react';

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
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: 'Comprehensive Smile Restoration',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // reset after delay
    }, 4000);
  };

  return (
    <div
      id="modal-consultation"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-neutral-950 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white font-['Montserrat']"
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
          <div className="py-8 text-center space-y-4 font-['Montserrat']">
            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-white text-black">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Consultation Requested!</h3>
            <p className="text-sm text-white/80 max-w-sm mx-auto">
              Thank you, {formData.name || 'there'}! Our Geneva Clinic team will contact you shortly to confirm your appointment.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-white/60">
                Geneva Dental Clinic
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Book Your Consultation
              </h2>
              <p className="text-sm text-white/80 mt-1">
                Experience precision dental restoration tailored for your confident smile.
              </p>
            </div>

            {/* Direct WhatsApp Quick Option */}
            <a
              href="https://api.whatsapp.com/send?phone=+41788509393"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-5 flex items-center justify-between p-3.5 rounded-2xl bg-neutral-900 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-neutral-850 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                  <svg className="w-5 h-5 fill-emerald-400" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9 7.42 8.73 7.71C8.45 8.01 7.69 8.72 7.69 10.19C7.69 11.66 8.76 13.07 8.91 13.27C9.06 13.47 11.02 16.5 14.05 17.8C14.77 18.11 15.33 18.3 15.77 18.44C16.49 18.67 17.15 18.64 17.67 18.56C18.25 18.47 19.46 17.82 19.71 17.11C19.96 16.41 19.96 15.81 19.89 15.69C19.82 15.56 19.62 15.48 19.32 15.33C19.02 15.18 17.55 14.45 17.27 14.35C17 14.25 16.8 14.2 16.6 14.5C16.4 14.8 15.84 15.5 15.67 15.7C15.5 15.9 15.32 15.92 15.02 15.77C14.72 15.62 13.77 15.31 12.64 14.3C11.76 13.51 11.16 12.54 10.99 12.24C10.82 11.94 10.97 11.78 11.12 11.63C11.26 11.5 11.43 11.27 11.58 11.1C11.73 10.93 11.78 10.8 11.88 10.6C11.98 10.4 11.93 10.23 11.86 10.08C11.78 9.93 11.18 8.46 10.93 7.86C10.68 7.28 10.44 7.35 10.25 7.34C10.08 7.34 9.88 7.34 9.53 7.34Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Chat on WhatsApp</span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-[11px] text-emerald-400 font-mono">+41 78 850 93 93</div>
                </div>
              </div>
              <div className="text-xs font-semibold text-white/80 group-hover:text-white flex items-center gap-1">
                <span>Open Chat</span>
                <span className="text-emerald-400 font-bold">→</span>
              </div>
            </a>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1.5 uppercase tracking-wider">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-white/40" />
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-white/40" />
                    <input
                      type="tel"
                      placeholder="+41 78 850 93 93"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1.5 uppercase tracking-wider">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-white/40" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                id="btn-submit-consultation"
                className="w-full mt-2 py-3 px-6 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:bg-neutral-200 active:scale-[0.99] transition-all cursor-pointer shadow-lg"
              >
                Confirm Consultation Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
