'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function RoadmapTestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Données de la roadmap
  const roadmapPhases = [
    {
      period: '2020-2024',
      title: 'R&D & Pilote',
      status: 'completed',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: ['Conception', 'Pilote MTN', 'Autorisations'],
      badge: 'Complété',
      badgeColor: 'bg-green-500',
    },
    {
      period: '2020-2026',
      title: 'En cours',
      status: 'in-progress',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      items: ['Réseau franchisés', 'Multi-opérateurs', 'Cert. ANTIC'],
      badge: 'En cours',
      badgeColor: 'bg-[#F9A825]',
    },
    {
      period: '2025-2026',
      title: 'Lancement Cameroun',
      status: 'in-progress',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      items: ['Réseau franchisés', 'Multi-opérateurs', 'Cert. ANTIC'],
      badge: 'En cours',
      badgeColor: 'bg-[#F9A825]',
    },
    {
      period: '2027+',
      title: 'Expansion Afrique',
      status: 'upcoming',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      ),
      items: ['Côte d\'Ivoire', 'RDC, Ghana', 'Sénégal'],
      badge: 'À venir',
      badgeColor: 'bg-gray-500',
    },
  ];

  // Données des témoignages
  const testimonials = [
    {
      quote: 'La solution Mobile Wallet nous a permis d\'étendre notre réseau de distribution physique de manière exceptionnelle au Cameroun. La fiabilité du software et la rentabilité du modèle sont sans précédent.',
      author: 'Directeur Innovation',
      company: 'MTN Cameroun',
      logo: '/images/partners/mtn.png', // Placeholder
      logoColor: 'bg-yellow-400',
      logoText: 'MTN',
    },
    {
      quote: 'Intégrer MobileWallet à notre réseau d\'agences a transformé notre capacité à servir les clients non-bancarisés. Une solution robuste, sécurisée et parfaitement adaptée aux réalités du marché africain.',
      author: 'Directeur des Opérations',
      company: 'UBA Cameroun',
      logo: '/images/partners/uba.png', // Placeholder
      logoColor: 'bg-red-600',
      logoText: 'UBA',
    },
    {
      quote: 'En moins de 18 mois, mon investissement était rentabilisé. Le support de l\'équipe MobileWallet, la qualité du matériel et la puissance du dashboard m\'ont permis de scaler rapidement sur 3 points de service.',
      author: 'Franchisé Indépendant',
      company: 'Réseau MobileWallet - Douala',
      logo: '/images/team/franchise.jpg', // Placeholder
      logoColor: 'bg-gray-400',
      logoText: 'MW',
      isFranchise: true,
    },
  ];

  // Composant SVG pour la carte de l'Afrique stylisée
  const AfricaMap = () => (
    <svg
      viewBox="0 0 800 600"
      className="w-full h-full opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Forme simplifiée de l'Afrique */}
      <path
        d="M 200 100 Q 300 80 400 100 T 600 120 Q 700 140 750 130 L 750 200 Q 700 220 600 210 T 400 200 Q 300 210 200 200 T 100 180 Q 120 150 150 130 Z"
        fill="#F9A825"
        stroke="#F57C00"
        strokeWidth="2"
      />
      {/* Points de connexion lumineux */}
      <circle cx="300" cy="150" r="8" fill="#F9A825" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="450" cy="180" r="8" fill="#F9A825" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="550" cy="200" r="8" fill="#F9A825" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* ========== BLOC 1 : ROADMAP ========== */}
      <section className="w-full bg-[#0A0E1A] py-16 md:py-20 relative overflow-hidden">
        {/* Carte de l'Afrique en arrière-plan */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <AfricaMap />
        </div>

        <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20 relative z-10">
          {/* En-tête */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
              NOTRE ROADMAP
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Notre Roadmap
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
              De la R&D au déploiement continental - une vision structurée sur 7 ans
            </p>
          </div>

          {/* Timeline horizontale */}
          <div className="relative py-8 md:py-12">
            {/* Ligne de timeline (absolue derrière les cartes) */}
            <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-700 transform -translate-y-1/2 hidden md:block z-0">
              <div className="h-full bg-[#F9A825] w-3/4 transition-all duration-1000"></div>
            </div>

            {/* Cartes de phases */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-4 relative z-10">
              {roadmapPhases.map((phase, index) => (
                <div
                  key={index}
                  className={`flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-5 md:p-6 border-2 ${
                    phase.status === 'completed'
                      ? 'border-green-500'
                      : phase.status === 'in-progress'
                      ? 'border-[#F9A825]'
                      : 'border-gray-500 border-dashed'
                  } relative`}
                >
                  {/* Icône */}
                  <div
                    className={`mb-4 ${
                      phase.status === 'completed'
                        ? 'text-green-500'
                        : phase.status === 'in-progress'
                        ? 'text-[#F9A825]'
                        : 'text-gray-400'
                    }`}
                  >
                    {phase.icon}
                  </div>

                  {/* Période */}
                  <p className="text-white font-bold text-lg md:text-xl mb-2">{phase.period}</p>

                  {/* Titre */}
                  <h3 className="text-white font-semibold text-base md:text-lg mb-4">{phase.title}</h3>

                  {/* Points clés */}
                  <ul className="space-y-2 mb-4">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 text-sm md:text-base flex items-start gap-2">
                        <span className="text-[#F9A825] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badge de statut */}
                  <div className={`${phase.badgeColor} text-white px-3 py-1.5 rounded-full text-xs font-bold inline-block`}>
                    {phase.badge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== BLOC 2 : TÉMOIGNAGES ========== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20">
          {/* En-tête */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
              TÉMOIGNAGES
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A237E] mb-4">
              Ce que disent <span className="text-[#F9A825]">nos partenaires</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Ils nous font confiance et témoignent de leur expérience
            </p>
          </div>

          {/* Grille de témoignages (3 colonnes) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative hover:translate-y-2 transition-transform duration-300"
              >
                {/* Guillemets orange en haut à gauche */}
                <div className="absolute top-4 left-4 text-[#F9A825] text-4xl font-bold opacity-20">
                  &quot;
                </div>

                {/* Contenu */}
                <div className="relative z-10">
                  {/* Citation */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>

                  {/* Note de 5 étoiles */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#F9A825]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Profil du signataire */}
                  <div className="flex items-center gap-4">
                    {testimonial.isFranchise ? (
                      <>
                        {/* Photo de profil circulaire */}
                        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#F9A825] relative">
                          <Image
                            src={testimonial.logo}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                            unoptimized
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-[#1A237E] text-sm md:text-base">
                            {testimonial.author}
                          </p>
                          <p className="text-gray-600 text-xs md:text-sm">{testimonial.company}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Logo du partenaire */}
                        <div
                          className={`${testimonial.logoColor} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm`}
                        >
                          {testimonial.logoText}
                        </div>
                        <div>
                          <p className="font-semibold text-[#1A237E] text-sm md:text-base">
                            {testimonial.author}
                          </p>
                          <p className="text-gray-600 text-xs md:text-sm">{testimonial.company}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation avec flèches */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-[#1A237E] text-white rounded-full flex items-center justify-center hover:bg-[#0D1B2A] transition-colors duration-200"
              aria-label="Témoignage précédent"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-[#1A237E] text-white rounded-full flex items-center justify-center hover:bg-[#0D1B2A] transition-colors duration-200"
              aria-label="Témoignage suivant"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
