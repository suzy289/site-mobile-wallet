'use client';

import Image from 'next/image';

export default function AboutPartnershipSection() {
  // Données des visions
  const visions = [
    {
      number: '01',
      title: 'Devenir leader de l\'infrastructure cashin – cashout en Afrique',
    },
    {
      number: '02',
      title: 'Rendre le business du mobile money accessible à tous, tout en apportant des innovations pour mieux le déployer.',
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
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col gap-8 md:gap-12">
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
              {/* Cartes de Vision */}
              <div className="space-y-4">
                {visions.map((vision, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-5 md:p-6 border-l-4 border-[#F9A825] hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-[#F9A825] font-bold text-lg md:text-xl flex-shrink-0">
                        VISION {vision.number}
                      </div>
                      <p className="text-gray-800 font-bold text-sm md:text-base leading-relaxed flex-1">
                        {vision.title}
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
                <div className="bg-[#1A237E] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
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
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ========== BLOC FORMULES DE PARTENARIAT (fond sombre, conforme capture) ========== */}
          <div className="flex-1 bg-gray-50 rounded-lg p-6 md:p-10 border border-gray-200">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {partnershipPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg p-5 md:p-6 text-center border ${
                    plan.highlighted
                      ? 'border-[#F9A825] border-t-8 border-t-[#F9A825]'
                      : 'border-[#0D1B2A] border-t-8 border-t-[#0D1B2A]'
                  } hover:shadow-xl transition-all duration-300 flex flex-col items-center`}
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
                    <a
                      href="#"
                      className={`${plan.ctaColor} font-semibold text-sm md:text-base hover:underline inline-flex items-center gap-1`}
                    >
                      {plan.cta}
                    </a>
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

            {/* Barre de Partage des Revenus */}
            <div className="bg-gray-200 rounded-full p-4 md:p-5 mb-8 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="bg-gray-200 rounded-full px-4 py-2 text-gray-500 text-sm md:text-base">
                  Partage des revenus
                </span>
                <span className="bg-gray-200 rounded-full px-4 py-2 text-black font-bold text-sm md:text-base text-center inline-block min-w-[6rem]">
                  75% Clients
                </span>
                <span className="bg-gray-200 rounded-full px-4 py-2 text-[#F9A825] font-semibold text-sm md:text-base text-center inline-block min-w-[6rem]">
                  25% MobileWallet
                </span>
              </div>
              <button type="button" className="text-[#F9A825] hover:text-[#F57C00] transition-colors flex-shrink-0" aria-label="Information">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <button type="button" className="bg-[#F9A825] text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-[#F57C00] transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto">
                Contactez l&apos;équipe
              </button>
              <button type="button" className="bg-[#0D1117] text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto">
                Consultez le document de présentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
