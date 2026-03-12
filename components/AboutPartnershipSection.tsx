'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function AboutPartnershipSection() {
  const openPresentationModal = () => window.dispatchEvent(new CustomEvent('openPresentationModal'));
  // Données mission et vision
  const missionsAndVisions = [
    {
      label: 'VISION',
      title: 'Rendre le business du mobile money accessible à tous, tout en apportant des innovations pour mieux le déployer.',
    },
    {
      label: 'MISSION',
      title: 'Devenir leader de l\'infrastructure cashin – cashout en Afrique',
    },
  ];

  // Données des formules de partenariat
  const partnershipPlans = [
    {
      badge: 'FRANCHISE PLAN',
      badgeColor: 'bg-[#0D1B2A] text-white',
      title: 'Vous souhaitez démarrer',
      description: 'Nous vous proposons une solution clé en main pour lancer votre activité Mobile Money sans infrastructure préalable.',
      cta: 'Plus d\'informations →',
      ctaColor: 'text-[#F9A825]',
      target: 'Distributeurs, Entrepreneurs & Investisseurs',
      targetColor: 'bg-[#0D1B2A] text-white',
      highlighted: false,
    },
    {
      badge: 'BRING YOUR ATM',
      badgeColor: 'bg-[#F9A825] text-white',
      title: 'Vous avez déjà des GAB ?',
      description: 'Nous configurons notre système dans votre réseau existant pour le rendre compatible Mobile Money immédiatement.',
      cta: 'Plus d\'informations →',
      ctaColor: 'text-[#F9A825]',
      target: 'Opérateur Existant ou Institutions',
      targetColor: 'bg-[#F9A825] text-white',
      highlighted: true,
    },
    {
      badge: 'SAAS / WHITE LABEL',
      badgeColor: 'bg-[#0D1B2A] text-white',
      title: 'Lancez votre réseau',
      description: 'Nous déployons toute votre infrastructure serveur et logicielle pour créer votre propre réseau de GAB Mobile Money.',
      cta: 'Plus d\'informations →',
      ctaColor: 'text-[#F9A825]',
      target: 'Banques, Télécoms & Fintechs',
      targetColor: 'bg-[#0D1B2A] text-white',
      highlighted: false,
    },
  ];

  return (
    <section id="apropos" className="w-full bg-white py-16 md:py-20 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 min-w-0">
        <div className="flex flex-col gap-8 md:gap-12">
          <AnimateOnScroll animation="fade-up">
          {/* ========== BLOC À PROPOS : 2 colonnes (texte + visions à gauche, logo + carte à droite) ========== */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Colonne gauche : en-tête, description, cartes Vision */}
            <div className="bg-[#F9A825]/10 rounded-lg p-5 md:p-6">
              <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                À PROPOS
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Qui sommes-nous ?
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                Nous sommes une entreprise technologique basée aux États-Unis et au Cameroun, à la croisée de l&apos;innovation Silicon Valley et des réalités du marché africain.
              </p>
              {/* Cartes Mission et Vision */}
              <div className="space-y-4">
                {missionsAndVisions.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-5 md:p-6 border-l-4 border-[#F9A825] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-[#F9A825] font-bold text-lg md:text-xl flex-shrink-0">
                        {item.label}
                      </div>
                      <p className="text-gray-800 font-bold text-sm md:text-base leading-relaxed flex-1">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne droite : logo, badges pays, carte du monde */}
            <div className="space-y-6">
              {/* Carte logo */}
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-[#FDE4C4] shadow-gray-200/50">
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src="/images/logo_mw.png"
                    alt="MobileWallet"
                    width={56}
                    height={56}
                    className="h-12 w-12 md:h-14 md:w-14 flex-shrink-0 object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-[#F9A825] font-bold text-lg md:text-xl">MobileWallet</span>
                    <span className="text-gray-500 text-sm font-medium">INCORPORATED</span>
                  </div>
                </div>
              </div>
              {/* Badges de localisation */}
              <div className="flex gap-3 flex-wrap">
                <div className="bg-[#0A0E1A] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                  <span>🇺🇸</span>
                  <span>États-Unis</span>
                </div>
                <div className="bg-[#F9A825] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                  <span>🇨🇲</span>
                  <span>Cameroun</span>
                </div>
              </div>
              {/* Carte du monde */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="h-48 md:h-64 relative w-full">
                  <Image
                    src="/images/Gemini_Generated_Image_iy0av8iy0av8iy0a-removebg-preview.png"
                    alt="Carte du monde - Présence MobileWallet États-Unis et Afrique"
                    fill
                    sizes="(max-width: 768px) 100vw, 256px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
          {/* ========== BLOC FORMULES DE PARTENARIAT (fond sombre, conforme capture) ========== */}
          <div id="formules" className="flex-1 bg-gray-50 rounded-lg p-6 md:p-10 border border-gray-200 scroll-mt-20">
            {/* En-tête centré */}
            <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-3 text-center">
              NOS FORMULES DE PARTENARIAT
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center">
              Comment lancer votre projet ?
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed text-center max-w-2xl mx-auto">
              Choisissez le modèle de partenariat adapté à votre situation et démarrez avec MobileWallet.
            </p>

            {/* Grille de cartes de partenariat */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" style={{ perspective: '1000px' }}>
              {partnershipPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg p-5 md:p-6 text-center border ${
                    plan.highlighted
                      ? 'border-[#F9A825] border-t-8 border-t-[#F9A825]'
                      : 'border-[#0D1B2A] border-t-8 border-t-[#0D1B2A]'
                  } hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center`}
                >
                  {/* Badge (centré) */}
                  <div className="flex justify-center mb-4">
                    <span className={`${plan.badgeColor} px-5 py-2.5 rounded-full text-xs font-bold`}>
                      {plan.badge}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3 w-full">
                    {plan.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black text-sm md:text-base mb-6 leading-relaxed flex-1 w-full">
                    {plan.description}
                  </p>

                  {/* CTA (centré) */}
                  <div className="mb-4 flex justify-center w-full">
                    <button
                      type="button"
                      onClick={openPresentationModal}
                      className={`${plan.ctaColor} font-semibold text-sm md:text-base hover:underline hover:scale-105 inline-flex items-center gap-1 bg-transparent border-none cursor-pointer p-0 transition-transform duration-200`}
                    >
                      {plan.cta}
                    </button>
                  </div>

                  {/* Target audience (centré) */}
                  <div className="flex justify-center w-full">
                    <span className={`${plan.targetColor} px-5 py-2.5 rounded-full text-xs font-medium`}>
                      {plan.target}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Link
                href="#contact"
                className="bg-[#F9A825] text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-[#F57C00] transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto text-center inline-block"
              >
                Contactez l&apos;équipe
              </Link>
              <button
                type="button"
                onClick={openPresentationModal}
                className="bg-[#0D1117] text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
              >
                Consultez le document de présentation
              </button>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
