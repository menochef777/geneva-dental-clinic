import React, { useState } from 'react';
import { Banner } from './components/Banner';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ContactSection } from './components/ContactSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ExpertSection } from './components/ExpertSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConsultationModal } from './components/ConsultationModal';

const TRANSLATIONS = {
  en: {
    heroTitle: 'The Art of Precision. The Smile You Deserve.',
    heroSub: 'World-class aesthetic dentistry and implantology in the heart of Geneva. Experience flawless results in a completely stress-free, pain-free environment.',
    heroTagline: 'SWISS DENTAL EXCELLENCE',
    badgeTopRated: 'Top Rated on Google Maps',
    badgeReviewsSub: 'Based on real patient reviews',
    bookBtn: 'Book Consultation',
    resultsBtn: 'View Our Results',
    qualityCare: 'Quality Care',
    qualityCareSub: '15+ Years of excellence in dental surgery, implantology, and aesthetic dentistry in Geneva.',
    navAbout: 'About',
    navResults: 'Results',
    navPricing: 'Pricing',
    navReviews: 'Reviews',
    navContacts: 'Contacts',
    expertiseTitle: 'Dentistry, precisely considered.',
    statExperience: 'Years of Experience',
    statPatients: 'Treated Patients',
    statSuccess: 'Success Rate',
    contactTitle: 'Get in touch, let us know how we can help',
    chooseClinic: 'Choose your clinic',
    chooseClinicSub: 'Select a location to view on the map or tap the WhatsApp button to chat directly with our team.',
    testimonialsTag: 'OUR PATIENTS SHARE THEIR EXPERIENCE',
    testimonialsTitle: 'At Geneva Dental Clinic, we care for every smile'
  },
  fr: {
    heroTitle: "L'Art de la Précision. Le Sourire Que Vous Méritez.",
    heroSub: "Dentisterie esthétique et implantologie d'excellence au cœur de Genève. Des résultats parfaits dans un environnement serein et sans douleur.",
    heroTagline: 'EXCELLENCE DENTAIRE SUISSE',
    badgeTopRated: 'Mieux Noté sur Google Maps',
    badgeReviewsSub: 'Basé sur des avis vérifiés de patients',
    bookBtn: 'Réserver une Consultation',
    resultsBtn: 'Découvrir Nos Résultats',
    qualityCare: "Soins d'Excellence",
    qualityCareSub: "15+ Ans d'excellence en chirurgie dentaire, implantologie et dentisterie esthétique à Genève.",
    navAbout: 'À Propos',
    navResults: 'Résultats',
    navPricing: 'Tarifs',
    navReviews: 'Avis',
    navContacts: 'Contacts',
    expertiseTitle: 'La dentisterie, pensée avec précision.',
    statExperience: "Années d'Expérience",
    statPatients: 'Patients Accompagnés',
    statSuccess: 'Taux de Réussite',
    contactTitle: 'Prenez contact, dites-nous comment nous pouvons vous aider',
    chooseClinic: 'Choisissez votre clinique',
    chooseClinicSub: "Sélectionnez un lieu pour l'afficher sur la carte ou cliquez sur le bouton WhatsApp pour échanger directement avec notre équipe.",
    testimonialsTag: 'NOS PATIENTS TÉMOIGNENT',
    testimonialsTitle: 'À la Geneva Dental Clinic, nous prenons soin de chaque sourire'
  }
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'fr'>('fr');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* 1st Section: Hero Banner (100% Full-Screen Edge-to-Edge) */}
      <Banner
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenConsultation={() => setIsModalOpen(true)}
        onSelectNav={(item) => {
          setActiveTab(item);
          if (item === 'Contacts') {
            const el = document.getElementById('contact-section');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              setIsModalOpen(true);
            }
          } else if (item === 'Reviews') {
            const el = document.getElementById('testimonials-section');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          } else if (item === 'About' || item === 'Results') {
            const el = document.getElementById('expertise-section');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          } else if (item === 'Consultation') {
            setIsModalOpen(true);
          }
        }}
      />

      {/* Main Scrollable Content Container (Sections 2 to 6) */}
      <main className="relative z-10 flex flex-col items-center justify-start p-2 sm:p-4 md:p-6 lg:p-8 space-y-12 sm:space-y-16">
        {/* 2nd Section: OUR EXPERTISE */}
        <div className="w-full max-w-[1280px]">
          <ExpertiseSection
            lang={lang}
            t={t}
            onOpenConsultation={() => setIsModalOpen(true)}
          />
        </div>

      {/* 3rd Section: GET IN TOUCH / LOCATIONS */}
      <div className="w-full max-w-[1280px]">
        <ContactSection id="contact-section" lang={lang} t={t} />
      </div>

      {/* 4th Section: TESTIMONIALS */}
      <div className="w-full max-w-[1280px]">
        <TestimonialsSection id="testimonials-section" lang={lang} t={t} />
      </div>

      {/* 5th Section: MEET THE EXPERT (DR. THINARD) */}
      <div className="w-full max-w-[1280px]">
        <ExpertSection
          lang={lang}
          onOpenConsultation={() => setIsModalOpen(true)}
        />
      </div>

      {/* 6th Section: FAQ ACCORDION */}
      <div className="w-full max-w-[1280px]">
        <FAQSection lang={lang} />
      </div>

      {/* Institutional Footer */}
      <Footer lang={lang} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        lang={lang}
        t={t}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  </div>
);
}
