'use client';

import Image from 'next/image';

export default function SoftwareUXSection() {
  // Fonctionnalités du logiciel
  const softwareFeatures = [
    {
      icon: (
        <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: 'Intégration IPI universelle',
    },
    {
      icon: (
        <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'Compatible tous opérateurs',
    },
    {
      icon: (
        <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: 'UX ergonomique & rapide',
    },
    {
      icon: (
        <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Contrôle admin temps réel',
    },
  ];

  // Fonctionnalités du Dashboard
  const dashboardFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Dashboard accessible partout',
      description: 'Web & mobile, 24/7, depuis n\'importe quel appareil',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Vue de Transaction en temps réel',
      description: 'Chaque opération tracée instantanément',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Transparence des revenus',
      description: 'Rapports détaillés pour chaque partenaire',
    },
  ];

  // Certifications
  const certifications = [
    {
      icon: 'check',
      title: 'Certifications & Conformité',
      status: 'Obtenues',
      color: 'text-[#F9A825]',
    },
    {
      icon: 'hourglass',
      title: 'Certification ANTIC',
      status: 'En cours',
      color: 'text-gray-500',
    },
    {
      icon: 'check',
      title: 'Autorisations Cameroun',
      status: 'Obtenues',
      color: 'text-[#F9A825]',
    },
  ];

  return (
    <section className="w-full bg-white pt-8 md:pt-10 pb-16 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 min-w-0">
        {/* Section NOTRE LOGICIEL en haut */}
        <div className="bg-white pt-4 md:pt-6 pb-8 md:pb-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* En-tête */}
            <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
              NOTRE LOGICIEL
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
              Une infrastructure logicielle pensée pour la performance et le contrôle en temps réel
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Nous avons développé une infrastructure logicielle pensée pour être compatible avec toutes les technologies Mobile Money, intégrations IPI, structures serveurs, types de GAB et partenaires mobiles. Une expérience utilisateur ergonomique et rapide, avec un contrôle administratif en temps réel pour les partenaires.
            </p>

            {/* Badges de fonctionnalités */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            {softwareFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white border-l-4 border-[#F9A825] rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-[#FFF8ED] text-[#E65100]">
                  {feature.icon}
                </div>
                <p className="text-sm md:text-base font-bold text-gray-900 leading-tight">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* Grille avec VUE DASHBOARD à gauche et VUE GAB à droite */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-stretch">
          {/* ========== BLOC DE GAUCHE : VUE DASHBOARD ========== */}
          <div className="bg-[#0D1B2A] p-5 md:p-6 relative overflow-hidden">
              <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4 text-center">
                VUE DASHBOARD
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
                Mobile Wallet ATM & Transaction Control
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-8">
                Pilotez l&apos;ensemble de votre réseau de GAB depuis un seul tableau de bord centralisé
              </p>

              <div className="w-full max-h-[200px] md:max-h-[240px] mb-6 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/images/vue-dashboard.png"
                  alt="Dashboard MobileWallet - tableau de bord centralisé"
                  width={480}
                  height={240}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Fonctionnalités Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {dashboardFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
                  >
                    <div className="text-[#F9A825] mb-2">{feature.icon}</div>
                    <p className="text-black font-semibold text-sm mb-1">{feature.title}</p>
                    <p className="text-gray-800 text-xs">{feature.description}</p>
                  </div>
                ))}
              </div>
          </div>

          {/* ========== BLOC DE DROITE : VUE GAB ========== */}
          <div className="bg-gray-50 p-5 md:p-6 relative">
            {/* En-tête */}
            <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4 text-center">
              VUE GAB
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight text-center">
              Une expérience utilisateur pensée pour l&apos;Afrique
            </h2>
            <p className="text-black text-base md:text-lg mb-8 leading-relaxed">
              Interface intuitive, multilingue, multi-opérateurs — certifiée aux normes internationales
            </p>

            <div className="w-full max-h-[200px] md:max-h-[240px] mb-6 flex items-center justify-center overflow-hidden rounded-lg">
              <Image
                src="/images/vue-gab.png"
                alt="GAB MobileWallet - expérience utilisateur"
                width={480}
                height={240}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mt-8 min-h-[160px]">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 min-h-[160px] items-stretch">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`p-4 flex flex-col items-center text-center justify-center min-h-[130px] md:min-h-[160px] ${index < 2 ? 'md:border-r border-gray-200' : ''}`}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                      cert.icon === 'check' ? 'bg-[#F9A825] text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {cert.icon === 'check' ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-black font-semibold text-sm mb-0.5">{cert.title}</p>
                    <p className={`text-xs font-medium ${cert.color}`}>{cert.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
