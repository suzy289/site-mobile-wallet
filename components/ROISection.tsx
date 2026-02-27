'use client';

export default function ROISection() {
  // Données de comparaison ROI
  const roiComparison = [
    {
      title: '1 GAB / 1 Opérateur',
      icon: '🏧',
      roi: '3.7 Années',
      roiProgress: 25,
      revenue: '7.4 M XAF',
      type: 'mono',
    },
    {
      title: '1 GAB / Multi Opérateur',
      icon: '⚡',
      roi: '1.25 Années',
      roiProgress: 95,
      revenue: '22.2 M XAF',
      type: 'multi',
      badge: 'RECOMMANDÉ',
      speedBadge: '3X plus rapide',
    },
    {
      title: 'Pack 3 GAB (01 opérateur)',
      icon: '🏧',
      iconCount: 3,
      roi: '3.2 Années',
      roiProgress: 30,
      revenue: '22.15 M XAF',
      type: 'mono',
    },
    {
      title: 'Pack 3 GAB (Multi-opérateurs)',
      icon: '⚡',
      iconCount: 3,
      roi: '1.1 Années',
      roiProgress: 95,
      revenue: '66.45 M XAF',
      type: 'multi',
      badge: 'MEILLEUR ROI',
      speedBadge: '3X plus rapide',
    },
  ];

  // Avantages clés
  const advantages = [
    {
      title: 'ROI Rapide',
      description: '1 à 1,6 an en multi-opérateurs, supérieur aux franchisés traditionnelles',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Modèle Scalable',
      description: 'Franchise clé en main, expansion rapide, support complet',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Marché Structurel',
      description: 'Croissance +25%/an du Mobile Money, besoin essentiel en Afrique',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Standards Bancaires',
      description: 'Sécurité, fiabilité et qualité équivalentes au secteur bancaire',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  // Composant pour une carte ROI
  const ROICard = ({ data, isMulti = false }: { data: any; isMulti?: boolean }) => (
    <div
      className={`rounded-lg p-6 md:p-8 relative ${
        isMulti
          ? 'bg-gradient-to-br from-[#F9A825] to-[#F57C00] shadow-[0_0_40px_rgba(249,168,37,0.6)]'
          : 'bg-gray-700'
      }`}
    >
      {/* Badge recommandé/meilleur ROI */}
      {data.badge && (
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1.5 flex items-center gap-2">
          {data.badge === 'RECOMMANDÉ' ? (
            <svg className="w-4 h-4 text-[#F9A825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-[#F9A825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          )}
          <span className="text-[#F9A825] font-bold text-xs">{data.badge}</span>
        </div>
      )}

      {/* Titre avec icônes */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-1">
          {Array.from({ length: data.iconCount || 1 }).map((_, i) => (
            <span key={i} className="text-2xl md:text-3xl">
              {data.icon}
            </span>
          ))}
        </div>
        <h3 className={`text-lg md:text-xl font-bold ${isMulti ? 'text-white' : 'text-gray-200'}`}>
          {data.title}
        </h3>
      </div>

      {/* ROI */}
      <div className="mb-4">
        <p className={`text-sm md:text-base mb-2 ${isMulti ? 'text-white/90' : 'text-gray-300'}`}>
          Retour sur investissement (ROI)
        </p>
        <p className={`text-3xl md:text-4xl font-bold mb-3 ${isMulti ? 'text-white' : 'text-white'}`}>
          {data.roi}
        </p>
        
        {/* Barre de progression personnalisée (6px) */}
        <div className="w-full bg-white/20 rounded-full mb-2" style={{ height: '6px' }}>
          <div
            className={`h-full rounded-full ${
              isMulti ? 'bg-white' : 'bg-[#F9A825]'
            } transition-all duration-1000`}
            style={{ width: `${data.roiProgress}%` }}
          ></div>
        </div>

        {/* Badge "3X plus rapide" */}
        {data.speedBadge && (
          <div className="inline-flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold mt-2">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {data.speedBadge}
          </div>
        )}
      </div>

      {/* Revenu annuel */}
      <div>
        <p className={`text-sm md:text-base mb-2 ${isMulti ? 'text-white/90' : 'text-gray-300'}`}>
          {data.title.includes('Pack') ? 'Revenu annuel projeté' : 'Revenu annuel estimé'}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl">⭐</span>
          <p className={`text-2xl md:text-3xl font-bold ${isMulti ? 'text-white' : 'text-white'}`}>
            {data.revenue}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#0A0E1A] py-16 md:py-20 relative overflow-hidden">
      {/* Motif de circuit imprimé en arrière-plan (très subtil) */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20h40M20 0v40" stroke="#3B82F6" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="1" fill="#3B82F6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
            QUELQUES CHIFFRES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Découvrez la puissance du modèle multi-opérateurs
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            Projections basées sur les données réelles du marché camerounais
          </p>
        </div>

        {/* Grille de comparaison ROI */}
        <div className="relative mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Colonne gauche : Mono-opérateur */}
            <div className="space-y-6">
              <div className="text-center mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-300">Mono-opérateur</h3>
              </div>
              <ROICard data={roiComparison[0]} isMulti={false} />
              <ROICard data={roiComparison[2]} isMulti={false} />
            </div>

            {/* Colonne droite : Multi-opérateurs */}
            <div className="space-y-6">
              <div className="text-center mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">Multi-opérateurs</h3>
              </div>
              <ROICard data={roiComparison[1]} isMulti={true} />
              <ROICard data={roiComparison[3]} isMulti={true} />
            </div>
          </div>

          {/* Badge VS central (desktop) */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="bg-black border-4 border-[#F9A825] rounded-full w-20 h-20 flex items-center justify-center shadow-2xl">
              <span className="text-[#F9A825] font-bold text-2xl md:text-3xl">VS</span>
            </div>
          </div>

          {/* Badge VS pour mobile */}
          <div className="md:hidden flex items-center justify-center my-8">
            <div className="bg-black border-4 border-[#F9A825] rounded-full w-16 h-16 flex items-center justify-center shadow-2xl">
              <span className="text-[#F9A825] font-bold text-xl">VS</span>
            </div>
          </div>
        </div>

        {/* Note de réassurance */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-green-400 text-sm md:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Basé sur les données réelles au CMR</span>
          </div>
        </div>

        {/* Barre de Réassurance Blanche */}
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-[#F9A825] mb-3 flex justify-center md:justify-start">
                  {advantage.icon}
                </div>
                <h4 className="text-[#F9A825] font-bold text-lg md:text-xl mb-2">
                  {advantage.title}
                </h4>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
