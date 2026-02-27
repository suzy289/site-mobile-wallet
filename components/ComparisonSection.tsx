'use client';

export default function ComparisonSection() {
  // Données de comparaison pour les Utilisateurs
  const userComparison = [
    {
      ourSystem: 'Service disponible 24H/7J',
      classicSystem: 'Service disponible 08H-19H seulement',
      classicStatus: 'cross',
    },
    {
      ourSystem: 'Transaction rapide',
      classicSystem: 'Transaction rapide',
      classicStatus: 'similar',
    },
    {
      ourSystem: 'Interface ergonomique',
      classicSystem: 'Très peu ergonomique',
      classicStatus: 'cross',
    },
    {
      ourSystem: 'Sécurité renforcée',
      classicSystem: 'Très peu sécurisé',
      classicStatus: 'cross',
    },
    {
      ourSystem: 'Cartographie Maps des Points',
      classicSystem: 'Aucune cartographie des PDV',
      classicStatus: 'cross',
    },
    {
      ourSystem: 'Frais de retraits et dépôts fixes',
      classicSystem: 'Limité en terme de choix',
      classicStatus: 'cross',
    },
    {
      ourSystem: 'Tous les services au même endroit',
      classicSystem: 'Non disponible',
      classicStatus: 'unavailable',
    },
  ];

  // Données de comparaison pour les Franchisés
  const franchiseeComparison = [
    {
      ourSystem: '100% Automatique',
      classicSystem: '100% Humains',
      classicStatus: 'cross',
    },
    {
      ourSystem: 'Scalable',
      classicSystem: 'Difficilement scalable',
      classicStatus: 'cross',
    },
    {
      ourSystem: 'Sécurisé',
      classicSystem: 'Moyennement sécurisé',
      classicStatus: 'similar',
    },
    {
      ourSystem: 'Contrôle à distance',
      classicSystem: 'Contrôle sur site uniquement',
      classicStatus: 'cross',
    },
    {
      ourSystem: 'ROI dès 1,5 ans',
      classicSystem: 'ROI dès 04 ans',
      classicStatus: 'cross',
    },
    {
      ourSystem: 'Déploiement complet rapide',
      classicSystem: 'Déploiement complet plus lent',
      classicStatus: 'cross',
    },
    {
      ourSystem: 'Multi opérateurs',
      classicSystem: 'Limité à certains',
      classicStatus: 'cross',
    },
    {
      ourSystem: 'Multi services',
      classicSystem: 'Limité au mobile money',
      classicStatus: 'cross',
    },
  ];

  // Données de comparaison pour les Institutions Financières
  const institutionComparison = [
    {
      ourSystem: 'Capte les flux Mobile Money via GAB existants',
      classicSystem: 'Système hermétique aux GAB Bancaires',
      classicStatus: 'cross',
    },
    {
      ourSystem: 'Multiplie les revenus du réseau de GAB',
      classicSystem: 'RAS',
      classicStatus: 'unavailable',
    },
    {
      ourSystem: 'Transforme les GAB existants en GAB tout-en-un',
      classicSystem: 'Non disponible',
      classicStatus: 'unavailable',
    },
  ];

  // Tags de services
  const serviceTags = [
    'MTN',
    'Orange',
    'Wave',
    'M-Pesa',
    'Airtel',
    'Eneo',
    'Camwater',
    'Canal+',
    'Factures',
    'Clé en main pour franchisés & institutions',
  ];

  // Fonction pour afficher l'icône selon le statut
  const renderStatusIcon = (status: string) => {
    switch (status) {
      case 'cross':
        return (
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'similar':
        return (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
          </svg>
        );
      case 'unavailable':
        return (
          <span className="text-gray-400 text-sm">-</span>
        );
      default:
        return null;
    }
  };

  // Composant pour un bloc de comparaison
  const ComparisonBlock = ({ 
    title, 
    data, 
    className = '' 
  }: { 
    title: string; 
    data: Array<{ ourSystem: string; classicSystem: string; classicStatus: string }>; 
    className?: string;
  }) => (
    <div className={`bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden ${className}`}>
      {/* En-tête avec bordure orange à gauche */}
      <div className="border-l-4 border-[#F9A825] bg-gray-50 px-4 py-3">
        <h3 className="text-lg md:text-xl font-bold text-[#1A237E]">{title}</h3>
      </div>
      
      {/* En-têtes des colonnes */}
      <div className="grid grid-cols-2 border-b-2 border-gray-300">
        <div className="bg-[#1A237E] p-3 md:p-4 relative">
          {/* Icône Sparkle orange en haut à gauche */}
          <div className="absolute top-2 left-2 md:top-3 md:left-3">
            <svg className="w-6 h-6 md:w-7 md:h-7 text-[#F9A825]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <p className="text-white font-semibold text-sm md:text-base ml-9 md:ml-11">Avec notre système</p>
        </div>
        <div className="bg-gray-200 p-3 md:p-4">
          <p className="text-gray-700 font-semibold text-sm md:text-base">Avec le système classique</p>
        </div>
      </div>
      
      {/* Tableau de comparaison */}
      <div className="divide-y divide-gray-300">
        {data.map((item, index) => (
          <div key={index} className="grid grid-cols-2 min-h-[60px]">
            {/* Colonne "Avec notre système" */}
            <div className="bg-[#1A237E] p-3 md:p-4 border-r border-gray-300 flex items-center">
              <div className="flex items-start gap-2 w-full">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white text-sm md:text-base leading-relaxed flex-1">{item.ourSystem}</p>
              </div>
            </div>
            
            {/* Colonne "Avec le système classique" */}
            <div className="bg-gray-100 p-3 md:p-4 flex items-center">
              <div className="flex items-start gap-2 w-full">
                <div className="flex-shrink-0 mt-0.5">
                  {renderStatusIcon(item.classicStatus)}
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">{item.classicSystem}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
            COMPARAISON
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A237E] mb-6">
            Ce que notre solution change
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Une rupture technologique face aux systèmes classiques — pour les utilisateurs, les franchisés et les institutions financières
          </p>
        </div>

        {/* Grille de comparaison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Bloc A : Pour les Utilisateurs (Haut Gauche) */}
          <ComparisonBlock 
            title="Pour les Utilisateurs" 
            data={userComparison}
          />

          {/* Bloc B : Pour les Franchisés (Haut Droite) */}
          <ComparisonBlock 
            title="Pour les Franchisés" 
            data={franchiseeComparison}
          />
        </div>

        {/* Bloc C et Bloc de Synthèse */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Bloc C : Pour les Institutions Financières (Bas Gauche) */}
          <ComparisonBlock 
            title="Pour les Institutions Financières" 
            data={institutionComparison}
          />

          {/* Bloc de Synthèse & Citation (Bas Droite) */}
          <div className="bg-[#0D1B2A] rounded-lg shadow-xl p-6 md:p-10 relative overflow-hidden">
            {/* Icône de guillemets orange en haut à gauche (grande) */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <div className="text-[#F9A825] text-6xl md:text-7xl font-bold opacity-30 leading-none">&quot;</div>
            </div>

            {/* Contenu */}
            <div className="relative z-10">
              <p className="text-white text-base md:text-lg leading-relaxed mb-6 md:mb-8 pl-8 md:pl-12">
                Notre solution est pensée pour les réalités du marché en Afrique — plusieurs opérateurs mobiles money (MTN Mobile Money, Orange Money, Wave, M-Pesa, Airtel Money), les services Money des banques (M2U de UBA, Sara Money de Afriland), et plusieurs services (paiement de factures, Eneo, Camwater, Canal+, et bien d&apos;autres). Tout en un, une solution clé en main pour les franchisés, une mise à jour de valeur pour les institutions, et une expérience tout-en-un qui crée une habitude pour les utilisateurs.
              </p>

              {/* Tags de services */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {serviceTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-transparent border-2 border-[#F9A825] text-[#F9A825] rounded-full text-xs md:text-sm font-medium hover:bg-[#F9A825] hover:text-[#0D1B2A] transition-colors duration-200 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
