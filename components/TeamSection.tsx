'use client';

import Image from 'next/image';

export default function TeamSection() {
  // Direction générale
  const leadership = [
    {
      name: 'Gerald Chenyi',
      title: 'FONDATEUR',
      image: '/images/team/gerald-chenyi.jpg', // Placeholder - à remplacer par la vraie image
    },
    {
      name: 'Yvan Tadie',
      title: 'CTO',
      image: '/images/team/yvan-tadie.jpg', // Placeholder - à remplacer par la vraie image
    },
  ];

  // Management & Opérations
  const management = [
    {
      name: 'Barrister Milton',
      title: 'Responsable de la conformité',
      image: '/images/team/barrister-milton.jpg',
    },
    {
      name: 'Barrister Milton',
      title: 'Responsable technique',
      image: '/images/team/barrister-milton.jpg',
    },
    {
      name: 'Barrister Milton',
      title: 'Responsable de la conformité',
      image: '/images/team/barrister-milton.jpg',
    },
  ];

  const operations = [
    {
      name: 'Barrister Milton',
      title: 'Pdt du conseil d\'administration',
      image: '/images/team/barrister-milton.jpg',
    },
    {
      name: 'Barrister Milton',
      title: 'Chef comptable',
      image: '/images/team/barrister-milton.jpg',
    },
    {
      name: 'Barrister Milton',
      title: 'Chef des opérations',
      image: '/images/team/barrister-milton.jpg',
    },
  ];

  // Équipes de développement
  const devTeam = [
    {
      name: 'Amit Tiwa',
      title: 'DEVELOPMENT DIRECTOR',
      image: '/images/team/amit-tiwa.jpg',
      highlighted: false,
    },
    {
      name: 'Priyanshu Singh',
      title: 'DEVELOPMENT TECH LEAD',
      image: '/images/team/priyanshu-singh.jpg',
      highlighted: true, // Mise en avant avec bordure orange
    },
    {
      name: 'Suresh Release',
      title: 'TRAINING ENGINEER',
      image: '/images/team/suresh-release.jpg',
      highlighted: false,
    },
    {
      name: 'Dogo King',
      title: 'NETWORK ENGINEER',
      image: '/images/team/dogo-king.jpg',
      highlighted: false,
    },
  ];

  // Barre de réassurance
  const reassurance = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      text: 'Équipe internationale',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      text: 'Expertise certifiée',
      color: 'text-[#F9A825]',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: '7 ans d\'expérience terrain',
      color: 'text-[#F9A825]',
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
      <div className="flex flex-col items-center text-center">
        {/* Photo de profil circulaire avec bordure orange */}
        <div
          className={`${sizeClasses[size]} rounded-full overflow-hidden ring-2 ring-[#F9A825] ${
            highlighted ? 'ring-4' : ''
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

  // Composant pour une grande carte de direction
  const LeadershipCard = ({ name, title, image }: { name: string; title: string; image: string }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-t-4 border-[#F9A825]">
      <div className="flex flex-col items-center">
        {/* Photo de profil */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-[#F9A825] mb-6">
          <Image
            src={image}
            alt={name}
            width={160}
            height={160}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
        <h3 className="font-bold text-[#1A237E] text-xl md:text-2xl mb-2">{name}</h3>
        <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wide mb-4">
          {title}
        </p>
        {/* Icône d'enveloppe */}
        <button className="text-[#1A237E] hover:text-[#F9A825] transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A237E] mb-6">
            Les talents derrière MobileWallet
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Une équipe internationale alliant expertise africaine, technologie et vision globale.
          </p>
        </div>

        {/* Direction générale (Niveau 1) */}
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
            {leadership.map((leader, index) => (
              <LeadershipCard key={index} name={leader.name} title={leader.title} image={leader.image} />
            ))}
          </div>
        </div>

        {/* Gestion & Opérations (Niveau 2) */}
        <div className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Management */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-[#F9A825] text-lg md:text-xl font-semibold uppercase tracking-wide mb-6">
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
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-[#F9A825] text-lg md:text-xl font-semibold uppercase tracking-wide mb-6">
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
      <div className="bg-[#0A0E1A] py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20">
          {/* Badge DEV TEAMS */}
          <div className="bg-[#F9A825] text-white px-6 py-3 rounded-t-lg inline-block mb-6">
            <span className="font-bold text-sm md:text-base uppercase tracking-wide">DEV TEAMS</span>
          </div>

          {/* Description */}
          <p className="text-white text-base md:text-lg mb-12 max-w-3xl">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {reassurance.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`mb-4 ${item.color || 'text-[#1A237E]'}`}>{item.icon}</div>
                <p className="text-gray-700 font-semibold text-base md:text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
