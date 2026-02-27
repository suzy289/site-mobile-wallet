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
      badgeColor: 'bg-[#1A237E] text-white',
      title: 'Vous souhaitez démarrer',
      description: 'Solution clé en main pour lancer votre activité Mobile Money sans infrastructure préalable.',
      cta: 'Plus d\'informations →',
      ctaColor: 'text-[#1A237E]',
      target: 'Distributeurs, Entrepreneurs & Investisseurs',
      targetColor: 'bg-[#1A237E] text-white',
      highlighted: false,
    },
    {
      badge: 'BRING YOUR ATM',
      badgeColor: 'bg-[#F9A825] text-white',
      title: 'Vous avez déjà des GAB?',
      description: 'Configurez notre système dans votre réseau existant pour une compatibilité Mobile Money immédiate.',
      cta: 'Plus d\'informations →',
      ctaColor: 'text-[#F9A825]',
      target: 'Opérateur Existant ou Institutions',
      targetColor: 'bg-[#F9A825] text-white',
      highlighted: true,
    },
    {
      badge: 'SAAS / WHITE LABEL',
      badgeColor: 'bg-[#1A237E] text-white',
      title: 'Lancez votre réseau',
      description: 'Déployez l\'infrastructure serveur et logicielle pour créer votre propre réseau de GAB Mobile Money personnalisé.',
      cta: 'Plus d\'informations →',
      ctaColor: 'text-[#1A237E]',
      target: 'Banques, Télécoms & Fintechs',
      targetColor: 'bg-[#1A237E] text-white',
      highlighted: false,
    },
  ];

  // Composant SVG pour la carte du monde
  const WorldMap = () => (
    <svg
      viewBox="0 0 1000 500"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Fond gris clair */}
      <rect width="1000" height="500" fill="#F5F5F5" />
      
      {/* Continents simplifiés en gris clair */}
      {/* Amérique du Nord */}
      <path
        d="M 120 80 Q 200 60 280 80 T 440 100 Q 520 120 600 110 Q 680 100 760 120 T 920 130 Q 960 140 980 130 L 980 200 Q 920 210 860 200 T 700 190 Q 620 200 540 190 T 360 200 Q 280 210 200 200 T 120 180 Z"
        fill="#E0E0E0"
        stroke="#D0D0D0"
        strokeWidth="1.5"
      />
      
      {/* Amérique du Sud */}
      <path
        d="M 240 220 Q 320 240 400 260 T 560 280 Q 640 290 720 280 T 880 270 L 880 380 Q 820 390 760 380 T 640 370 Q 560 360 480 370 T 320 360 Q 280 350 240 340 Z"
        fill="#E0E0E0"
        stroke="#D0D0D0"
        strokeWidth="1.5"
      />
      
      {/* Europe */}
      <path
        d="M 420 40 Q 500 50 580 60 T 740 70 Q 820 80 900 75 L 900 130 Q 820 140 740 135 T 580 130 Q 500 120 420 110 Z"
        fill="#E0E0E0"
        stroke="#D0D0D0"
        strokeWidth="1.5"
      />
      
      {/* Afrique */}
      <path
        d="M 480 160 Q 560 170 640 180 T 800 190 Q 880 200 960 195 L 960 300 Q 880 310 800 305 T 640 300 Q 560 290 480 280 Z"
        fill="#E0E0E0"
        stroke="#D0D0D0"
        strokeWidth="1.5"
      />
      
      {/* Asie */}
      <path
        d="M 600 40 Q 680 50 760 60 T 920 70 L 920 160 Q 840 170 760 165 T 600 150 Q 520 140 600 130 Z"
        fill="#E0E0E0"
        stroke="#D0D0D0"
        strokeWidth="1.5"
      />
      
      {/* Océanie */}
      <path
        d="M 800 280 Q 840 290 880 300 T 960 310 L 960 350 Q 920 360 880 355 T 800 340 Q 760 330 800 320 Z"
        fill="#E0E0E0"
        stroke="#D0D0D0"
        strokeWidth="1.5"
      />
      
      {/* Point orange avec animation - États-Unis */}
      <g>
        <circle cx="250" cy="150" r="15" fill="#F9A825" stroke="#F57C00" strokeWidth="3" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="150" r="8" fill="#F57C00" />
      </g>
      
      {/* Point orange avec animation - Cameroun */}
      <g>
        <circle cx="560" cy="240" r="15" fill="#F9A825" stroke="#F57C00" strokeWidth="3" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="560" cy="240" r="8" fill="#F57C00" />
      </g>
    </svg>
  );

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* ========== BLOC DE GAUCHE : À PROPOS ========== */}
          <div className="flex-1">
            {/* En-tête */}
            <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
              À PROPOS
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A237E] mb-6">
              Qui sommes-nous ?
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Nous sommes une entreprise technologique basée aux États-Unis et au Cameroun, alliant l'innovation de la Silicon Valley aux réalités du marché africain.
            </p>

            {/* Logo et badges de localisation */}
            <div className="mb-8">
              {/* Carte logo */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/logo_mw.png"
                    alt="MobileWallet Incorporated"
                    width={210}
                    height={70}
                    className="h-12 md:h-16 lg:h-20 w-auto"
                  />
                </div>
              </div>

              {/* Badges de localisation */}
              <div className="flex gap-3">
                <div className="bg-[#1A237E] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <span>🇺🇸</span>
                  <span>États-Unis</span>
                </div>
                <div className="bg-[#F9A825] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <span>🇨🇲</span>
                  <span>Cameroun</span>
                </div>
              </div>
            </div>

            {/* Cartes de Vision */}
            <div className="space-y-4 mb-8">
              {visions.map((vision, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-5 md:p-6 border-l-4 border-[#F9A825] hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-[#F9A825] font-bold text-lg md:text-xl">
                      VISION {vision.number}
                    </div>
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed flex-1">
                      {vision.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carte du monde */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="h-48 md:h-64">
                <WorldMap />
              </div>
            </div>
          </div>

          {/* ========== BLOC DE DROITE : FORMULES DE PARTENARIAT ========== */}
          <div className="flex-1">
            {/* En-tête */}
            <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
              NOS FORMULES DE PARTENARIAT
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A237E] mb-4">
              Comment lancer votre projet ?
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Choisissez le modèle de partenariat adapté à votre situation et démarrez avec MobileWallet.
            </p>

            {/* Grille de cartes de partenariat */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {partnershipPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg p-5 md:p-6 ${
                    plan.highlighted
                      ? 'border-4 border-[#F9A825]'
                      : 'border-2 border-gray-200'
                  } hover:shadow-xl transition-all duration-300 flex flex-col`}
                >
                  {/* Badge */}
                  <div className={`${plan.badgeColor} px-3 py-1.5 rounded-full text-xs font-bold mb-4 inline-block w-fit`}>
                    {plan.badge}
                  </div>

                  {/* Titre */}
                  <h3 className="text-lg md:text-xl font-bold text-[#1A237E] mb-3">
                    {plan.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed flex-1">
                    {plan.description}
                  </p>

                  {/* CTA */}
                  <div className="mb-4">
                    <a
                      href="#"
                      className={`${plan.ctaColor} font-semibold text-sm md:text-base hover:underline inline-flex items-center gap-1`}
                    >
                      {plan.cta}
                    </a>
                  </div>

                  {/* Target audience */}
                  <div className={`${plan.targetColor} px-3 py-1.5 rounded-full text-xs font-medium inline-block w-fit`}>
                    {plan.target}
                  </div>
                </div>
              ))}
            </div>

            {/* Barre de Partage des Revenus */}
            <div className="bg-gray-100 rounded-lg p-4 md:p-5 mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-semibold text-sm md:text-base">
                  Partage des revenus
                </span>
                <span className="text-gray-600 text-sm md:text-base">
                  75% Clients | 25% MobileWallet
                </span>
              </div>
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Boutons d'Appel à l'Action Finaux */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-12 md:mt-16">
          <button className="bg-[#F9A825] text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#F57C00] transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto">
            Contactez l'équipe
          </button>
          <button className="bg-[#1A237E] text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#0D1B2A] transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto">
            Consultez le document de présentation
          </button>
        </div>
      </div>
    </section>
  );
}
