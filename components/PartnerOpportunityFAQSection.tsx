'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PartnerOpportunityFAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // Première question ouverte par défaut

  // Données des pays cibles
  const targetCountries = [
    { name: 'Côte d\'Ivoire', flag: '🇨🇮', flagImage: '/images/flag-cote-ivoire.png' },
    { name: 'RDC', flag: '🇨🇩', flagImage: '/images/flag-rdc.png' },
    { name: 'Ghana', flag: '🇬🇭', flagImage: '/images/flag-ghana.png' },
    { name: 'Sénégal', flag: '🇸🇳', flagImage: '/images/flag-senegal.png' },
    { name: 'Et plus...', flag: '🌍' },
  ];

  // Données de la FAQ (8 questions)
  const faqItems = [
    {
      question: 'Quel est le montant minimum d\'investissement pour démarrer ?',
      answer: 'L\'investissement de départ comprend le coût de la machine, l\'infrastructure du site (énergie solaire, satellite, sécurité, construction) et un capital de fonctionnement. À titre indicatif, démarrer avec 1 GAB nécessite environ 27,6 M XAF, incluant le capital de fonctionnement recommandé. Des formules Pack 3 GAB offrent des conditions préférentielles significatives.\n\nChaque projet est unique. Contactez notre équipe pour une simulation financière personnalisée selon votre configuration.',
    },
    {
      question: 'Comment fonctionne le partage des revenus ?',
      answer: 'La répartition s\'applique sur le résultat net après déduction de toutes les charges. Le franchisé perçoit la part majoritaire, MobileWallet retient une part pour la technologie et le support, et une part revient au super-franchisé pour la coordination locale. Le modèle est transparent et contractuellement défini dès le départ.\n\nLa structure exacte dépend du modèle de partenariat choisi. Contactez notre équipe pour une projection de revenus adaptée à votre situation.',
    },
    {
      question: 'Quels opérateurs Mobile Money sont compatibles ?',
      answer: 'La plateforme est multi-opérateurs et intègre MTN Mobile Money, UBA M2U, Orange Money, Wave, Sara Money, Afriland, etc. C\'est cette capacité multi-opérateurs qui maximise vos revenus : chaque opérateur supplémentaire connecté à votre GAB multiplie directement votre chiffre d\'affaires.\n\nLes opérateurs disponibles varient selon le pays. Contactez notre équipe pour les intégrations actives dans votre zone.',
    },
    {
      question: 'Comment est assurée la maintenance et le support technique ?',
      answer: 'MobileWallet prend en charge la maintenance logicielle, le monitoring 24h/7j, le support technique dédié, la logistique sécurisée des fonds et l\'assurance tous risques des machines. En tant que franchisé, vous suivez vos performances via votre dashboard — sans aucune compétence technique requise.\n\nLes conditions de maintenance varient selon le modèle de partenariat choisi. Notre équipe vous détaille les modalités selon votre projet.',
    },
    {
      question: 'Est-il possible d\'intégrer le système à nos GAB existants ?',
      answer: 'Oui. Si vous disposez déjà d\'un parc de GAB des marques NCR, Diebold Nixdorf, Hyosung ou Kiosk, MobileWallet peut les connecter à sa plateforme via intégration API. Vous bénéficiez alors du réseau d\'opérateurs, du dashboard et du support 24/7, sans changer vos machines.\n\nLa compatibilité dépend du modèle et de la configuration de vos machines. Contactez notre équipe pour un audit de votre parc existant.',
    },
    {
      question: 'Quel est le délai de livraison et d\'installation d\'un GAB ?',
      answer: 'De la commande à la mise en service, comptez généralement 6 à 12 semaines. Ce délai inclut l\'expédition, le dédouanement, l\'aménagement du site, l\'installation des équipements (énergie solaire, satellite, caméra) et la configuration logicielle. Une formation complète est assurée à la mise en service.\n\nChaque projet étant unique, contactez notre équipe pour un planning personnalisé.',
    },
    {
      question: 'Le logiciel est-il certifié aux standards de sécurité bancaire ?',
      answer: 'Oui. La plateforme est développée selon les standards de l\'industrie bancaire : chiffrement de bout en bout, conformité KYC/AML, audits réguliers et certification ANTIC au Cameroun. Les machines sont physiquement sécurisées avec surveillance 24/7 et transport blindé des fonds.\n\nLes certifications varient selon les pays. Notre équipe vous accompagne dans les démarches réglementaires locales.',
    },
    {
      question: 'Dois-je avoir un agrément bancaire pour devenir franchisé ?',
      answer: 'Non. MobileWallet gère l\'ensemble de la conformité réglementaire, les connexions aux opérateurs Mobile Money et les protocoles de sécurité. Votre rôle se concentre sur les emplacements et le capital. Aucune expertise technique ou bancaire n\'est requise.\n\nPour un déploiement dans un nouveau pays, notre équipe vous accompagne dans les démarches réglementaires locales.',
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* ========== BLOC SUPÉRIEUR : OPPORTUNITÉ PARTENAIRE PAYS (design maquette) ========== */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-[#0A0E1A]">
        {/* Globe en fond - image Terre agrandie avec lueur autour */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible" aria-hidden>
          <div
            className="absolute w-[140vw] max-w-[1200px] h-[140vw] max-h-[1200px] flex items-center justify-center md:translate-x-[12%]"
            style={{
              boxShadow: '0 0 120px 60px rgba(249, 168, 37, 0.15), 0 0 200px 80px rgba(59, 130, 246, 0.08), 0 0 300px 100px rgba(249, 168, 37, 0.06)',
              filter: 'brightness(1.1)',
            }}
          >
            <Image
              src="/images/team/terre_121mpx-removebg-preview.png"
              alt=""
              width={1200}
              height={1200}
              className="w-full h-full object-contain opacity-35 md:opacity-40"
            />
          </div>
        </div>
        {/* Overlay gradient pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A] via-[#0A0E1A]/82 to-[#0A0E1A]/35 pointer-events-none" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20 flex justify-center min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center w-full max-w-5xl mt-8 md:mt-12">
            {/* Contenu Gauche */}
            <div>
              <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                OPPORTUNITÉ EXCLUSIVE
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Devenez Partenaire Pays Exclusif
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                Prenez la tête de l&apos;expansion dans votre pays. Représentation exclusive et revenus sur l&apos;ensemble du réseau national.
              </p>

              {/* Badges pays : pilules frosted style image (drapeaux bien visibles) */}
              <div className="flex flex-wrap gap-3">
                {targetCountries.map((country, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/90 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 flex items-center gap-2.5 shadow-lg"
                  >
                    {(country as { flagImage?: string }).flagImage ? (
                      <span className="flex w-7 h-5 shrink-0 rounded overflow-hidden">
                        <Image
                          src={(country as { flagImage: string }).flagImage}
                          alt=""
                          width={28}
                          height={20}
                          className="w-full h-full object-cover"
                        />
                      </span>
                    ) : (
                      <span className="text-2xl leading-none">{country.flag}</span>
                    )}
                    <span className="text-white font-medium text-sm md:text-base">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Carte droite : fond blanc, bordure orange visible, lueur */}
            <div
              className="bg-white rounded-2xl p-6 md:p-8 relative z-20 shadow-xl border-2 border-[#F9A825] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 0 40px rgba(249, 168, 37, 0.25), 0 4px 24px rgba(0,0,0,0.12)' }}
            >
              {/* Ligne : icône circulaire orange + titre */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F9A825] flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12a2 2 0 104 0 2 2 0 00-4 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Opportunité régionale
                </h3>
              </div>

              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                Soyez le point de contact unique pour toutes les opérations Mobile Wallet dans votre pays.
              </p>

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

              <div className="flex justify-center">
                <Link
                  href="#contact"
                  className="bg-[#F9A825] text-black font-semibold py-3 px-8 rounded-lg text-base md:text-lg hover:bg-[#F57C00] hover:scale-105 transition-all duration-200 shadow-lg inline-block text-center"
                >
                  Contactez l&apos;équipe →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BLOC INFÉRIEUR : FAQ ========== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 min-w-0">
          {/* En-tête */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Tout ce que vous devez savoir avant de démarrer avec MobileWallet
            </p>
          </div>

          {/* Grille FAQ 2 colonnes : gauche 4 questions, droite 3 questions + encadré contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Colonne gauche */}
            <div className="flex flex-col gap-6 md:gap-8">
              {faqItems.slice(0, 4).map((item, i) => {
                const index = i;
                return (
                  <div
                    key={index}
                    className={`relative overflow-visible bg-white rounded-xl border transition-all duration-300 cursor-pointer hover:shadow-md hover:border-[#F9A825]/50 ${
                      openIndex === index
                        ? 'border-l-4 border-l-[#F9A825] border-t border-r border-b border-gray-200'
                        : 'border-gray-200'
                    }`}
                    onClick={() => toggleQuestion(index)}
                  >
                    <div className="p-5 md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg flex-1">
                          {item.question}
                        </h3>
                        <div className="flex-shrink-0 mt-0.5">
                          {openIndex === index ? (
                            <svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                    {openIndex === index && (
                      <div className="absolute top-full left-0 right-0 z-20 mt-0 rounded-b-xl border border-t-0 border-gray-200 bg-white p-5 md:p-6 shadow-lg max-h-[280px] overflow-y-auto animate-faq-answer-soft">
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed whitespace-pre-line">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* Colonne droite : 3 questions + encadré "Vous avez d'autres questions?" */}
            <div className="flex flex-col gap-6 md:gap-8">
              {faqItems.slice(4, 8).map((item, i) => {
                const index = i + 4;
                return (
                  <div
                    key={index}
                    className={`relative overflow-visible bg-white rounded-xl border transition-all duration-300 cursor-pointer hover:shadow-md hover:border-[#F9A825]/50 ${
                      openIndex === index
                        ? 'border-l-4 border-l-[#F9A825] border-t border-r border-b border-gray-200'
                        : 'border-gray-200'
                    }`}
                    onClick={() => toggleQuestion(index)}
                  >
                    <div className="p-5 md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg flex-1">
                          {item.question}
                        </h3>
                        <div className="flex-shrink-0 mt-0.5">
                          {openIndex === index ? (
                            <svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                    {openIndex === index && (
                      <div className="absolute top-full left-0 right-0 z-20 mt-0 rounded-b-xl border border-t-0 border-gray-200 bg-white p-5 md:p-6 shadow-lg max-h-[280px] overflow-y-auto animate-faq-answer-soft">
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed whitespace-pre-line">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Encadré contact : centré, agrandi, bien organisé */}
          <div className="flex justify-center mt-12 md:mt-16">
            <div className="bg-[#FFF7ED] rounded-xl p-8 md:p-10 max-w-3xl w-full hover:shadow-lg hover:border hover:border-[#F9A825]/30 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4">
                Une question spécifique ?
              </h3>
              <p className="text-gray-600 text-base md:text-lg text-center mb-8 max-w-2xl mx-auto leading-relaxed">
                Notre équipe est disponible pour analyser votre projet et vous proposer la solution la plus adaptée.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="#contact"
                  className="w-full sm:w-auto bg-[#F9A825] text-black font-semibold py-3 px-8 rounded-lg text-base md:text-lg hover:bg-[#F57C00] transition-colors duration-200 text-center inline-block"
                >
                  Contactez l&apos;équipe →
                </Link>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('openDocumentationModal'))}
                  className="w-full sm:w-auto bg-transparent border-2 border-black text-gray-900 font-semibold py-3 px-8 rounded-lg text-base md:text-lg hover:bg-black/5 hover:scale-[1.02] transition-all duration-200 text-center"
                >
                  Consulter la documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
