import Image from 'next/image';

// Composants SVG pour les différents modèles de GAB

const CompactATM = () => (
  <svg viewBox="0 0 300 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="compactGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2D3748" />
        <stop offset="100%" stopColor="#1A202C" />
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3"/>
      </filter>
    </defs>
    {/* Corps principal - Noir élégant */}
    <rect x="50" y="50" width="200" height="320" rx="12" fill="url(#compactGradient)" filter="url(#shadow)" />
    {/* Écran */}
    <rect x="70" y="80" width="160" height="120" rx="6" fill="#0A0E1A" />
    <rect x="75" y="85" width="150" height="110" rx="4" fill="#1E293B" />
    {/* Contenu écran */}
    <rect x="85" y="95" width="130" height="15" rx="2" fill="#374151" />
    <rect x="85" y="115" width="60" height="30" rx="2" fill="#4A5568" />
    <rect x="150" y="115" width="65" height="30" rx="2" fill="#4A5568" />
    <rect x="85" y="150" width="130" height="20" rx="2" fill="#374151" />
    {/* Clavier */}
    <rect x="90" y="220" width="120" height="80" rx="6" fill="#0F172A" />
    <circle cx="120" cy="250" r="6" fill="#4A5568" />
    <circle cx="150" cy="250" r="6" fill="#4A5568" />
    <circle cx="180" cy="250" r="6" fill="#4A5568" />
    <circle cx="120" cy="280" r="6" fill="#4A5568" />
    <circle cx="150" cy="280" r="6" fill="#4A5568" />
    <circle cx="180" cy="280" r="6" fill="#4A5568" />
    {/* Fente de carte */}
    <rect x="110" y="320" width="80" height="12" rx="2" fill="#0F172A" />
    {/* Fente de billets */}
    <rect x="120" y="340" width="60" height="20" rx="3" fill="#0F172A" />
  </svg>
);

const PremiumATM = () => (
  <svg viewBox="0 0 300 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F9A825" />
        <stop offset="100%" stopColor="#F57C00" />
      </linearGradient>
      <filter id="shadowPremium">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3"/>
      </filter>
    </defs>
    {/* Corps principal - Orange vif */}
    <rect x="50" y="50" width="200" height="320" rx="12" fill="url(#premiumGradient)" filter="url(#shadowPremium)" />
    {/* Écran avec interface graphique */}
    <rect x="70" y="80" width="160" height="140" rx="6" fill="#0A0E1A" />
    <rect x="75" y="85" width="150" height="130" rx="4" fill="#1E293B" />
    {/* Interface graphique sur l'écran */}
    <rect x="85" y="95" width="130" height="20" rx="2" fill="#F9A825" />
    <text x="150" y="108" fontSize="8" fill="#1A202C" fontWeight="bold" textAnchor="middle">MobileWallet</text>
    <circle cx="100" cy="130" r="8" fill="#F9A825" />
    <circle cx="130" cy="130" r="8" fill="#4A5568" />
    <circle cx="160" cy="130" r="8" fill="#F9A825" />
    <circle cx="190" cy="130" r="8" fill="#4A5568" />
    <rect x="85" y="145" width="60" height="30" rx="2" fill="#F9A825" />
    <rect x="150" y="145" width="65" height="30" rx="2" fill="#4A5568" />
    <rect x="85" y="180" width="130" height="25" rx="2" fill="#F9A825" />
    {/* Clavier */}
    <rect x="90" y="240" width="120" height="80" rx="6" fill="#1A202C" />
    <circle cx="120" cy="270" r="6" fill="#4A5568" />
    <circle cx="150" cy="270" r="6" fill="#4A5568" />
    <circle cx="180" cy="270" r="6" fill="#4A5568" />
    <circle cx="120" cy="300" r="6" fill="#4A5568" />
    <circle cx="150" cy="300" r="6" fill="#4A5568" />
    <circle cx="180" cy="300" r="6" fill="#4A5568" />
    {/* Fente de carte */}
    <rect x="110" y="340" width="80" height="12" rx="2" fill="#1A202C" />
    {/* Fente de billets */}
    <rect x="120" y="360" width="60" height="20" rx="3" fill="#1A202C" />
  </svg>
);

const MuralATM = () => (
  <svg viewBox="0 0 300 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="muralGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F7FAFC" />
        <stop offset="100%" stopColor="#EDF2F7" />
      </linearGradient>
      <filter id="shadowMural">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.2"/>
      </filter>
    </defs>
    {/* Corps principal - Blanc */}
    <rect x="50" y="50" width="200" height="280" rx="12" fill="url(#muralGradient)" stroke="#CBD5E0" strokeWidth="2" filter="url(#shadowMural)" />
    {/* Écran */}
    <rect x="70" y="80" width="160" height="120" rx="6" fill="#1A202C" />
    <rect x="75" y="85" width="150" height="110" rx="4" fill="#2D3748" />
    {/* Contenu écran */}
    <rect x="85" y="95" width="130" height="15" rx="2" fill="#4A5568" />
    <rect x="85" y="115" width="60" height="30" rx="2" fill="#718096" />
    <rect x="150" y="115" width="65" height="30" rx="2" fill="#718096" />
    <rect x="85" y="150" width="130" height="20" rx="2" fill="#4A5568" />
    {/* Panneau de contrôle */}
    <rect x="90" y="220" width="120" height="60" rx="6" fill="#E2E8F0" />
    <circle cx="120" cy="245" r="5" fill="#718096" />
    <circle cx="150" cy="245" r="5" fill="#718096" />
    <circle cx="180" cy="245" r="5" fill="#718096" />
    {/* Fente de carte */}
    <rect x="110" y="290" width="80" height="12" rx="2" fill="#CBD5E0" />
    {/* Indicateur LED */}
    <circle cx="250" cy="100" r="4" fill="#10B981" />
  </svg>
);

export default function SolutionsSection() {
  const statistics = [
    {
      value: '07 ans',
      label: "d'expérience terrain",
    },
    {
      value: '3 modèles',
      label: 'de GAB développés',
    },
    {
      value: '100%',
      label: 'adapté au marché africain',
    },
  ];

  const models = [
    {
      name: 'Modèle Compact',
      description: 'Idéal pour les petits points de service',
      badge: 'Coffre sécurisé certifié',
      badgeColor: 'bg-[#1A237E]',
      image: <CompactATM />,
      recommended: false,
    },
    {
      name: 'Modèle Premium',
      description: 'Notre bestseller - haute capacité',
      badge: 'Standards bancaires - Conformes',
      badgeColor: 'bg-gradient-to-r from-[#F9A825] to-[#F57C00]',
      image: <PremiumATM />,
      recommended: true,
    },
    {
      name: 'Modèle Mural',
      description: 'Compact, discret, haute disponibilité',
      badge: 'Déploiement rapide',
      badgeColor: 'bg-[#1A237E]',
      image: <MuralATM />,
      recommended: false,
    },
  ];

  const techPartners = [
    { name: 'NZ Hongzhou', logo: '/images/hongzhou-removebg-preview.png' },
    { name: 'NCR', logo: '/images/ncr.png' },
    { name: 'KIOSK', logo: '/images/kiosk-removebg-preview.png' },
    { name: 'DIEBOLD NIXDORF', logo: '/images/diebolt-removebg-preview.png' },
    { name: 'Chetu', logo: '/images/chetu.png' },
    { name: 'HYOSUNG', logo: '/images/hyosung-removebg-preview.png' },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* En-tête : Expertise & Statistiques */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
            NOS SOLUTIONS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A237E] mb-6">
            7 ans d'expertise au service des GAB Mobile Money en Afrique
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Nous avons pendant plus de 07 ans travaillé avec les meilleurs fournisseurs pour concevoir des GAB Mobile Money entièrement adaptés aux besoins des utilisateurs et pour la rentabilité des partenaires.
          </p>

          {/* Statistiques clés */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
            {statistics.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center ${index < statistics.length - 1 ? 'md:border-r border-gray-300' : ''}`}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9A825] mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grille de Produits : Les Modèles de GAB */}
      <div className="w-screen bg-gray-100 py-4 md:py-6 relative" style={{ left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
            <div className="mb-8">
              <p className="text-[#F9A825] text-base md:text-lg font-semibold mb-2">
                La solution hardware
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A237E] mb-2">
                Des GAB conçus pour l'Afrique, certifiés aux standards mondiaux
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Développé avec les meilleurs fournisseurs de guichets dans le monde
              </p>
            </div>

            {/* Grille de 3 modèles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {models.map((model, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg p-6 ${
                  model.recommended
                    ? 'border-4 border-[#F9A825] transform scale-105'
                    : 'border border-gray-200'
                } hover:shadow-xl transition-all duration-300`}
              >
                {/* Badge RECOMMANDÉ */}
                {model.recommended && (
                  <div className="absolute -top-3 -right-3 bg-[#F9A825] text-black text-xs font-bold px-3 py-1 rounded-full">
                    RECOMMANDÉ
                  </div>
                )}

                {/* Image du GAB */}
                <div className={`w-full h-[120px] md:h-[140px] mb-3 flex items-center justify-center rounded-lg ${
                  model.recommended ? 'bg-[#F9A825]' : 'bg-gray-200'
                }`}>
                  {model.image}
                </div>

                {/* Titre et description */}
                <h4 className="text-xl md:text-2xl font-bold text-[#1A237E] mb-2">
                  {model.name}
                </h4>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {model.description}
                </p>

                {/* Badge */}
                <button
                  className={`w-full ${model.badgeColor} text-white font-semibold py-2.5 px-4 rounded-lg text-sm md:text-base hover:opacity-90 transition-opacity`}
                >
                  {model.badge}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Partenaires Technologiques */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="mt-20 md:mt-24 pt-12 md:pt-16 border-t border-gray-200">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
              NOS PARTENAIRES TECHNOLOGIQUES
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A237E]">
              Les leaders mondiaux du hardware bancaire
            </h3>
          </div>

          {/* Grille de logos partenaires */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
            {techPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 w-full"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-auto w-auto max-h-[60px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
