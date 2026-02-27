'use client';

export default function SoftwareUXSection() {
  // Fonctionnalités du logiciel
  const softwareFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Intégration IPI universelle',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'Compatible tous opérateurs',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'UX ergonomique & rapide',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Certifications & Conformité Obtenues',
      status: 'Obtenues',
      color: 'text-[#F9A825]',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Certification ANTIC',
      status: 'En cours',
      color: 'text-gray-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Autorisations Cameroun Obtenues',
      status: 'Obtenues',
      color: 'text-[#F9A825]',
    },
  ];

  return (
    <section className="w-full bg-white pt-8 md:pt-10 pb-16 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Section NOTRE LOGICIEL en haut */}
        <div className="bg-white pt-4 md:pt-6 pb-8 md:pb-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* En-tête */}
            <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
              NOTRE LOGICIEL
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A237E] mb-6 leading-tight">
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
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="text-[#F9A825] mb-2">{feature.icon}</div>
                <p className="text-sm md:text-base font-semibold text-gray-800">
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
          <div className="bg-[#0D1B2A] p-8 md:p-12 relative overflow-hidden">
              <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                VUE DASHBOARD
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Mobile Wallet ATM & Transaction Control
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-8">
                Pilotez l'ensemble de votre réseau de GAB depuis un seul tableau de bord centralisé
              </p>

              {/* Mockup MacBook avec Dashboard */}
              <div className="relative mb-8">
                <div className="bg-gray-900 rounded-lg p-3 md:p-4 shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
                  {/* Barre supérieure MacBook */}
                  <div className="bg-gray-800 rounded-t-lg h-6 md:h-8 flex items-center justify-center mb-2">
                    <div className="flex gap-1.5 md:gap-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  {/* Écran Dashboard */}
                  <div className="bg-[#1A1F2E] rounded-lg p-3 md:p-4 min-h-[350px] md:min-h-[400px]">
                    {/* Sidebar */}
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                      <div className="w-full md:w-1/4">
                        <div className="text-[#F9A825] font-bold text-base md:text-lg mb-3 md:mb-4">MobileWallet</div>
                        <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                          <div className="text-white font-medium">Overview</div>
                          <div className="hover:text-white transition-colors cursor-pointer">ATM Network</div>
                          <div className="hover:text-white transition-colors cursor-pointer">Live Transactions</div>
                          <div className="hover:text-white transition-colors cursor-pointer">Reports</div>
                          <div className="hover:text-white transition-colors cursor-pointer">Settings</div>
                        </div>
                      </div>
                      
                      {/* Contenu principal */}
                      <div className="w-full md:w-3/4 space-y-3 md:space-y-4">
                        {/* Carte de l'Afrique avec points */}
                        <div className="bg-[#0F1419] rounded-lg p-3 md:p-4 h-28 md:h-32 relative overflow-hidden border border-gray-800">
                          <div className="text-white text-xs md:text-sm mb-2 font-semibold">ATM Network Status</div>
                          <div className="relative h-full">
                            {/* Points orange sur la carte */}
                            <div className="absolute top-3 left-6 md:top-4 md:left-8 w-2 h-2 bg-[#F9A825] rounded-full shadow-lg"></div>
                            <div className="absolute top-6 left-12 md:top-8 md:left-16 w-2 h-2 bg-[#F9A825] rounded-full shadow-lg"></div>
                            <div className="absolute top-9 left-18 md:top-12 md:left-24 w-2 h-2 bg-[#F9A825] rounded-full shadow-lg"></div>
                            <div className="absolute top-6 left-24 md:top-8 md:left-32 w-2 h-2 bg-[#F9A825] rounded-full shadow-lg"></div>
                            <div className="absolute top-4 left-20 md:top-5 md:left-28 w-2 h-2 bg-[#F9A825] rounded-full shadow-lg"></div>
                          </div>
                        </div>
                        
                        {/* Widget KPI */}
                        <div className="bg-gradient-to-r from-[#F9A825] to-[#F57C00] rounded-lg p-4 md:p-6 shadow-lg">
                          <div className="text-white text-xs md:text-sm mb-1 md:mb-2 opacity-90">Total Cash Processed</div>
                          <div className="text-white text-xl md:text-2xl font-bold">150,000,000 XAF</div>
                        </div>
                        
                        {/* Graphique */}
                        <div className="bg-[#0F1419] rounded-lg p-3 md:p-4 border border-gray-800">
                          <div className="text-white text-xs md:text-sm mb-2 font-semibold">Daily Transaction Volume (XAF)</div>
                          <div className="h-20 md:h-24 flex items-end gap-2">
                            <div className="flex-1 bg-gradient-to-t from-[#F57C00] to-[#F9A825] rounded-t" style={{ height: '60%' }}></div>
                            <div className="flex-1 bg-gradient-to-t from-[#F57C00] to-[#F9A825] rounded-t" style={{ height: '80%' }}></div>
                            <div className="flex-1 bg-gradient-to-t from-[#F57C00] to-[#F9A825] rounded-t" style={{ height: '45%' }}></div>
                            <div className="flex-1 bg-gradient-to-t from-[#F57C00] to-[#F9A825] rounded-t" style={{ height: '90%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-400 mt-2">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                          </div>
                        </div>
                        
                        {/* Table des transactions */}
                        <div className="bg-[#0F1419] rounded-lg p-3 md:p-4 border border-gray-800">
                          <div className="text-white text-xs md:text-sm mb-2 font-semibold">Live Transaction Feed</div>
                          <div className="space-y-1.5 md:space-y-2 text-xs">
                            <div className="flex justify-between text-gray-400 hover:text-white transition-colors">
                              <span>ATM-001</span>
                              <span>50,000 XAF</span>
                              <span className="text-green-400 font-medium">Success</span>
                            </div>
                            <div className="flex justify-between text-gray-400 hover:text-white transition-colors">
                              <span>ATM-002</span>
                              <span>25,000 XAF</span>
                              <span className="text-yellow-400 font-medium">Pending</span>
                            </div>
                            <div className="flex justify-between text-gray-400 hover:text-white transition-colors">
                              <span>ATM-003</span>
                              <span>75,000 XAF</span>
                              <span className="text-green-400 font-medium">Success</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fonctionnalités Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {dashboardFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                  >
                    <div className="text-[#F9A825] mb-2">{feature.icon}</div>
                    <p className="text-white font-semibold text-sm mb-1">{feature.title}</p>
                    <p className="text-gray-300 text-xs">{feature.description}</p>
                  </div>
                ))}
              </div>
          </div>

          {/* ========== BLOC DE DROITE : VUE GAB ========== */}
          <div className="bg-gray-50 p-8 md:p-12 relative">
            {/* En-tête */}
            <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
              VUE GAB
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A237E] mb-4 leading-tight">
              Une expérience utilisateur pensée pour l'Afrique
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Interface intuitive, multilingue, multi-opérateurs — certifiée aux normes internationales
            </p>

            {/* Visuel Central : GAB jaune avec écrans UI flottants */}
            <div className="relative min-h-[500px] md:min-h-[600px] mb-8">
              {/* GAB jaune 3D au centre */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  {/* Corps du GAB */}
                  <div className="w-48 md:w-64 h-80 md:h-96 bg-gradient-to-b from-[#F9A825] to-[#F57C00] rounded-2xl shadow-2xl transform rotate-[-2deg] relative">
                    {/* Écran du GAB */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 md:w-52 h-32 md:h-40 bg-[#1A237E] rounded-lg shadow-inner border-2 border-[#0D1B2A]">
                      <div className="p-3 md:p-4 h-full flex flex-col justify-center items-center">
                        <div className="text-[#F9A825] font-bold text-xs md:text-sm mb-2 md:mb-4">MobileWallet</div>
                        <div className="text-white text-xs text-center mb-2 md:mb-4">Welcome to the Mobile Wallet ATM</div>
                        <div className="flex gap-2">
                          <button className="bg-[#1A237E] text-white px-2 md:px-3 py-1 rounded text-xs hover:opacity-90 transition-opacity">English</button>
                          <button className="bg-[#0D1B2A] text-white px-2 md:px-3 py-1 rounded text-xs hover:opacity-90 transition-opacity">French</button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Lecteur de carte */}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 md:w-40 h-4 bg-[#0D1B2A] rounded"></div>
                    
                    {/* Fente de billets */}
                    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-6 bg-[#0D1B2A] rounded"></div>
                  </div>
                </div>
              </div>

              {/* Écrans UI flottants avec animations */}
              {/* Écran 1 : Bienvenue (Haut gauche) */}
              <div className="absolute top-4 md:top-8 left-4 md:left-8 bg-white rounded-xl shadow-2xl p-3 md:p-4 w-36 md:w-48 animate-float-1 border border-gray-100">
                <div className="text-[#F9A825] font-bold text-xs mb-2">MobileWallet</div>
                <div className="text-gray-800 text-xs mb-3 leading-tight">Welcome to the Mobile Wallet ATM</div>
                <div className="flex gap-2">
                  <button className="bg-[#1A237E] text-white px-2 py-1 rounded text-xs flex-1 hover:opacity-90 transition-opacity">English</button>
                  <button className="bg-[#0D1B2A] text-white px-2 py-1 rounded text-xs flex-1 hover:opacity-90 transition-opacity">French</button>
                </div>
              </div>

              {/* Écran 2 : Type de service (Haut droite) */}
              <div className="absolute top-4 md:top-8 right-4 md:right-8 bg-white rounded-xl shadow-2xl p-3 md:p-4 w-36 md:w-48 animate-float-2 border border-gray-100">
                <div className="text-[#F9A825] font-bold text-xs mb-2">MobileWallet</div>
                <div className="text-gray-800 text-xs mb-3">Service Type</div>
                <div className="space-y-1.5">
                  <button className="bg-[#F9A825] text-white px-2 py-1.5 rounded text-xs w-full hover:opacity-90 transition-opacity font-medium">MTN MOMO</button>
                  <button className="bg-[#FF6600] text-white px-2 py-1.5 rounded text-xs w-full hover:opacity-90 transition-opacity font-medium">Orange TM</button>
                  <button className="bg-[#F9A825] text-white px-2 py-1.5 rounded text-xs w-full hover:opacity-90 transition-opacity font-medium">UBA MZU</button>
                </div>
              </div>

              {/* Écran 3 : Type de transaction (Bas gauche) */}
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-white rounded-xl shadow-2xl p-3 md:p-4 w-36 md:w-48 animate-float-3 border border-gray-100">
                <div className="text-[#F9A825] font-bold text-xs mb-2">MobileWallet</div>
                <div className="text-gray-800 text-xs mb-3">Transaction Type</div>
                <div className="space-y-1.5">
                  <button className="bg-[#F9A825] text-white px-2 py-1.5 rounded text-xs w-full hover:opacity-90 transition-opacity font-medium">Deposit</button>
                  <button className="bg-[#1A237E] text-white px-2 py-1.5 rounded text-xs w-full hover:opacity-90 transition-opacity font-medium">Withdrawal</button>
                </div>
              </div>

              {/* Écran 4 : Confirmation (Bas droite) */}
              <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 bg-white rounded-xl shadow-2xl p-3 md:p-4 w-36 md:w-48 animate-float-4 border border-gray-100">
                <div className="text-[#F9A825] font-bold text-xs mb-2">MobileWallet</div>
                <div className="text-gray-800 text-xs mb-3">Confirmation</div>
                <div className="flex gap-2">
                  <button className="bg-[#F9A825] text-white px-2 py-1.5 rounded text-xs flex-1 hover:opacity-90 transition-opacity font-medium">Yes</button>
                  <button className="bg-white border-2 border-gray-300 text-gray-800 px-2 py-1.5 rounded text-xs flex-1 hover:bg-gray-50 transition-colors font-medium">No</button>
                </div>
              </div>

              {/* Lignes pointillées reliant les écrans au GAB (visuellement) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15 hidden md:block">
                <line x1="15%" y1="15%" x2="50%" y2="50%" stroke="#F9A825" strokeWidth="1.5" strokeDasharray="4,4" />
                <line x1="85%" y1="15%" x2="50%" y2="50%" stroke="#F9A825" strokeWidth="1.5" strokeDasharray="4,4" />
                <line x1="15%" y1="85%" x2="50%" y2="50%" stroke="#F9A825" strokeWidth="1.5" strokeDasharray="4,4" />
                <line x1="85%" y1="85%" x2="50%" y2="50%" stroke="#F9A825" strokeWidth="1.5" strokeDasharray="4,4" />
              </svg>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
                >
                  <div className={`${cert.color} mb-2`}>{cert.icon}</div>
                  <p className="text-gray-800 font-semibold text-sm mb-1">{cert.title}</p>
                  <p className={`text-xs ${cert.color} font-medium`}>{cert.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
