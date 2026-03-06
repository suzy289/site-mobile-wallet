'use client';

import Image from 'next/image';

export default function TeamSection() {
  // Direction générale
  const leadership = [
    {
      name: 'Yvan Tadie',
      title: 'CTO',
      image: '/images/team/yvan-tadie.jpg',
    },
  ];

  // Management & Opérations
  const management = [
    {
      name: 'Barrister Milton',
      title: 'Responsable de la conformité',
      image: '/images/team/barrister-milton-profile.png',
    },
    {
      name: 'Boris Tardezefe',
      title: 'Responsable technique des opérations sur le terrain',
      image: '/images/team/boris-tardezefe.png',
    },
    {
      name: 'Frank Merlin',
      title: 'Responsable de la conformité',
      image: '/images/team/frank-merlin.png',
    },
  ];

  const operations = [
    {
      name: 'Barrister Milton',
      title: 'Président du conseil d\'administration',
      image: '/images/team/barrister-milton-president.png',
    },
    {
      name: 'Blaise Valery Ndi',
      title: 'Chef des opérations',
      image: '/images/team/blaise-valery-ndi.png',
    },
    {
      name: 'Raymond Thinda',
      title: 'Chef comptable',
      image: '/images/team/raymond-thinda.png',
    },
  ];

  // Équipes de développement
  const devTeam = [
    {
      name: 'Amit Tiwary',
      title: 'Directeur du développement',
      image: '/images/team/Capture_d_écran_2026-03-06_141258-removebg-preview.png',
      highlighted: false,
    },
    {
      name: 'Priyanshu Singh',
      title: 'Responsable technique du développement',
      image: '/images/team/Capture_d_écran_2026-03-06_141729-removebg-preview.png',
      highlighted: true, // Mise en avant avec bordure orange
    },
    {
      name: 'Dogo Kingsley',
      title: 'Ingénieur réseau',
      image: '/images/team/Capture_d_écran_2026-03-06_141956-removebg-preview.png',
      highlighted: false,
    },
    {
      name: 'Suresh Release',
      title: 'Ingénieur de formation',
      image: '/images/team/Capture_d_écran_2026-03-06_142346-removebg-preview.png',
      highlighted: false,
    },
  ];

  // Barre de réassurance (pilules : icône + texte sur la même ligne)
  const reassurance = [
    {
      icon: (
        <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      text: 'Équipe internationale',
    },
    {
      icon: (
        <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      text: 'Expertise certifiée',
    },
    {
      icon: (
        <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: '7 ans d\'expérience terrain',
    },
  ];

  // Composant pour une carte de profil
  const ProfileCard = ({
    name,
    title,
    image,
    size = 'medium',
    highlighted = false,
  }: {
    name: string;
    title: string;
    image: string;
    size?: 'large' | 'medium' | 'small';
    highlighted?: boolean;
  }) => {
    const sizeClasses = {
      large: 'w-32 h-32 md:w-40 md:h-40',
      medium: 'w-24 h-24 md:w-28 md:h-28',
      small: 'w-16 h-16 md:w-20 md:h-20',
    };

    return (
      <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-5 md:p-6 w-full">
        {/* Photo de profil circulaire avec bordure orange */}
        <div
          className={`${sizeClasses[size]} rounded-full overflow-hidden ring-4 ring-[#F9A825] ${
            highlighted ? 'ring-8' : ''
          } mb-4`}
        >
          <Image
            src={image}
            alt={name}
            width={160}
            height={160}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
        <h3 className="font-bold text-[#1A237E] text-base md:text-lg mb-1">{name}</h3>
        <p className="text-[#F9A825] text-xs md:text-sm font-semibold uppercase tracking-wide">
          {title}
        </p>
      </div>
    );
  };

  // Composant pour une grande carte de direction (design conforme à la maquette)
  const LeadershipCard = ({ name, title, image }: { name: string; title: string; image: string }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-[#F9A825] flex flex-col items-center w-full max-w-[20rem] min-w-[20rem]">
      {/* Photo de profil : cercle bien centré sur la bordure orange (moitié au-dessus, moitié en dessous) */}
      <div className="relative -mt-[4rem] md:-mt-[4.25rem] mb-6 flex justify-center w-full">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full p-1 ring-8 ring-[#F9A825] bg-white shadow-md shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-white bg-white">
            <Image
              src={image}
              alt={name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
      {/* Nom */}
      <h3 className="font-bold text-[#1A237E] text-xl md:text-2xl text-center mb-3">{name}</h3>
      {/* Titre */}
      <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wide text-center mb-4">
        {title}
      </p>
      {/* Ligne de séparation fine, centrée, plus courte que la carte */}
      <div className="w-16 md:w-20 h-px bg-gray-200 mb-5" aria-hidden />
      {/* Bouton email : pilule bleu foncé, icône enveloppe blanche */}
      <button
        type="button"
        className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1A237E] text-white shadow-md hover:bg-[#0D1B2A] transition-colors"
        aria-label={`Contacter ${name} par email`}
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
  );

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20 py-16 md:py-20">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
            NOTRE ÉQUIPE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Les talents derrière MobileWallet
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Une équipe internationale alliant expertise africaine, technologie et vision globale.
          </p>
        </div>

        {/* Direction générale (Niveau 1) - au premier plan, une carte centrée */}
        <div className="flex flex-col items-center mb-0 relative z-10">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full max-w-4xl">
            {leadership.map((leader, index) => (
              <LeadershipCard key={leader.name} name={leader.name} title={leader.title} image={leader.image} />
            ))}
          </div>
        </div>

        {/* Gestion & Opérations (Niveau 2) - remontée, derrière les cartes Leadership */}
        <div className="mb-16 md:mb-20 -mt-6 md:-mt-8 relative z-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-gray-100 rounded-xl p-6 md:p-8 pt-10 md:pt-12">
            {/* Management */}
            <div className="flex flex-col items-center">
              <h3 className="text-[#F9A825] text-lg md:text-xl font-semibold uppercase tracking-wide mb-6 text-center w-full">
                MANAGEMENT
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {management.map((member, index) => (
                  <ProfileCard
                    key={index}
                    name={member.name}
                    title={member.title}
                    image={member.image}
                    size="small"
                  />
                ))}
              </div>
            </div>

            {/* Opérations */}
            <div className="flex flex-col items-center">
              <h3 className="text-[#F9A825] text-lg md:text-xl font-semibold uppercase tracking-wide mb-6 text-center w-full">
                OPÉRATIONS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {operations.map((member, index) => (
                  <ProfileCard
                    key={index}
                    name={member.name}
                    title={member.title}
                    image={member.image}
                    size="small"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Équipes de développement (Niveau 3 - Section Sombre) */}
      <div className="bg-[#0A0E1A] py-16 md:py-20 -mt-16 md:-mt-24">
        <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20">
          {/* Badge DEV TEAMS - centré comme la carte Leadership */}
          <div className="flex justify-center -mt-20 md:-mt-28 mb-6">
            <div className="bg-[#F9A825] text-white px-6 py-3 rounded-t-lg inline-block">
              <span className="font-bold text-sm md:text-base uppercase tracking-wide">DEV TEAMS</span>
            </div>
          </div>

          {/* Titre DEV TEAMS (même style que les cartes) + ligne verte + description */}
          <h3 className="text-[#F9A825] text-xs md:text-sm font-semibold uppercase tracking-wide text-center mb-2">
            DEV TEAMS
          </h3>
          <div className="w-12 h-0.5 bg-[#F9A825] mx-auto mb-4" aria-hidden />
          <p className="text-white text-base md:text-lg mb-12 max-w-3xl mx-auto text-center opacity-70">
            L&apos;équipe technique internationale qui fait tourner la plateforme
          </p>

          {/* Grille de 4 colonnes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {devTeam.map((member, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 border ${
                  member.highlighted
                    ? 'border-[#F9A825] border-2 shadow-lg shadow-[#F9A825]/20'
                    : 'border-white/10'
                } hover:bg-white/10 transition-all duration-300`}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Photo de profil */}
                  <div
                    className={`w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-[#F9A825] mb-4 ${
                      member.highlighted ? 'ring-4' : ''
                    }`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-2">{member.name}</h3>
                  <p className="text-[#F9A825] text-xs md:text-sm font-semibold uppercase tracking-wide">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Barre de Réassurance Bas de Page */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-2 justify-items-center">
            {reassurance.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gray-100 px-6 py-4 text-[#F9A825] [&>svg]:shrink-0"
              >
                {item.icon}
                <span className="text-gray-800 font-semibold text-sm md:text-base whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
