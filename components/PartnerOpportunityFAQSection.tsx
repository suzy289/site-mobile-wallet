'use client';

import { useState } from 'react';

export default function PartnerOpportunityFAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // Première question ouverte par défaut

  // Données des pays cibles
  const targetCountries = [
    { name: 'Côte d\'Ivoire', flag: '🇨🇮' },
    { name: 'RDC', flag: '🇨🇩' },
    { name: 'Ghana', flag: '🇬🇭' },
    { name: 'Sénégal', flag: '🇸🇳' },
    { name: 'Et plus...', flag: '🌍' },
  ];

  // Données de la FAQ
  const faqItems = [
    {
      question: 'Quel est le délai de livraison et d\'installation d\'un GAB?',
      answer: 'Le délai moyen est de 4 à 8 semaines selon votre localisation, incluant la livraison, l\'installation et la formation initiale de votre équipe.',
    },
    {
      question: 'Dois-je avoir un agrément bancaire pour devenir franchisé ?',
      answer: 'Non, un agrément bancaire n\'est pas requis pour devenir franchisé MobileWallet. Nous gérons toutes les autorisations nécessaires et vous fournissons le support réglementaire.',
    },
    {
      question: 'Quels opérateurs Mobile Money sont compatibles ?',
      answer: 'Notre système est compatible avec tous les principaux opérateurs Mobile Money en Afrique : MTN Mobile Money, Orange Money, Wave, M-Pesa, Airtel Money, ainsi que les services Money des banques (M2U de UBA, Sara Money d\'Afriland).',
    },
    {
      question: 'Quel est le montant minimum d\'investissement pour démarrer ?',
      answer: 'L\'investissement initial varie selon le modèle choisi (Franchise Plan, Bring Your ATM, ou SaaS/White Label). Contactez notre équipe pour obtenir une proposition personnalisée adaptée à votre situation.',
    },
    {
      question: 'Comment est assurée la maintenance et le support technique ?',
      answer: 'Nous offrons un support technique 24/7, une maintenance préventive régulière, et un système de monitoring en temps réel. Notre équipe est disponible pour intervenir rapidement en cas de besoin.',
    },
    {
      question: 'Comment fonctionne le partage des revenus avec MobileWallet ?',
      answer: 'Le partage des revenus est de 75% pour le client (franchisé) et 25% pour MobileWallet. Ce modèle transparent vous permet de maximiser votre rentabilité tout en bénéficiant de notre infrastructure et support.',
    },
    {
      question: 'Est-il possible d\'intégrer le système à mes GAB existants ?',
      answer: 'Oui, notre formule "Bring Your ATM" permet d\'intégrer notre système à votre réseau de GAB existant, transformant vos machines en GAB Mobile Money compatibles sans investissement matériel supplémentaire.',
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* ========== BLOC SUPÉRIEUR : OPPORTUNITÉ PARTENAIRE PAYS ========== */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden">
        {/* Image de fond - Terre vue de l'espace */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
          }}
        >
          {/* Overlay sombre pour la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A]/95 via-[#0A0E1A]/90 to-[#0A0E1A]/80"></div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Contenu Gauche */}
            <div className="text-white">
              <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                OPPORTUNITÉ EXCLUSIVE
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Devenez Partenaire Pays Exclusif
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                Prenez la tête de l&apos;expansion dans votre pays. Représentation exclusive et revenus sur l&apos;ensemble du réseau national.
              </p>

              {/* Badges de pays */}
              <div className="flex flex-wrap gap-3">
                {targetCountries.map((country, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-white/20 transition-colors"
                  >
                    <span className="text-2xl">{country.flag}</span>
                    <span className="text-white font-medium text-sm md:text-base">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Carte Flottante Droite */}
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 relative z-20" style={{ boxShadow: '0 0 40px rgba(249, 168, 37, 0.3)' }}>
              {/* Icône orange de localisation */}
              <div className="text-[#F9A825] mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#1A237E] mb-4">
                Opportunité régionale
              </h3>
              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                Soyez le point de contact unique pour toutes les opérations Mobile Wallet dans votre pays.
              </p>

              {/* Liste à puces avec coches */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F9A825] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm md:text-base">Exclusivité territoriale nationale</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F9A825] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm md:text-base">Revenus sur tout le réseau de votre pays</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F9A825] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm md:text-base">Support dédié et formation complète</span>
                </li>
              </ul>

              {/* Bouton CTA avec effet pulse discret */}
              <button className="w-full bg-[#F9A825] text-white font-semibold py-4 px-6 rounded-lg text-base md:text-lg hover:bg-[#F57C00] transition-colors duration-200 shadow-lg hover:shadow-xl animate-pulse-subtle">
                Contactez l&apos;équipe →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BLOC INFÉRIEUR : FAQ ========== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20">
          {/* En-tête */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A237E] mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Tout ce que vous devez savoir avant de démarrer avec MobileWallet
            </p>
          </div>

          {/* Grille FAQ (2 colonnes sur desktop, 1 sur mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg border-l-4 ${
                  openIndex === index
                    ? 'border-[#F9A825] border-l-4 shadow-lg'
                    : 'border-gray-300 border'
                } transition-all duration-300 cursor-pointer hover:shadow-md`}
                onClick={() => toggleQuestion(index)}
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-[#1A237E] text-base md:text-lg flex-1">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <svg className="w-6 h-6 text-[#F9A825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Réponse (affichée si ouvert) */}
                  {openIndex === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Encadré de Contact Final */}
          <div className="bg-[#FFF7ED] rounded-xl p-6 md:p-8 max-w-2xl ml-auto">
            <h3 className="text-xl md:text-2xl font-bold text-[#1A237E] mb-3">
              Vous avez d&apos;autres questions ?
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Notre équipe est disponible pour vous accompagner dans votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#F9A825] text-white font-semibold py-3 px-6 rounded-lg text-base md:text-lg hover:bg-[#F57C00] transition-colors duration-200 shadow-md hover:shadow-lg">
                Contactez l&apos;équipe
              </button>
              <button className="bg-white border-2 border-[#F9A825] text-[#F9A825] font-semibold py-3 px-6 rounded-lg text-base md:text-lg hover:bg-[#F9A825] hover:text-white transition-colors duration-200">
                Consultez la documentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
