'use client';

import ATMMachine from './ATMMachine';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[500px] bg-gradient-to-r from-[#0D0D0D] via-[#1A1A1A] to-[#2D1B0E] overflow-hidden pt-10 md:pt-12 lg:pt-14">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Colonne gauche - Texte et actions */}
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 z-10 justify-center">
            {/* Titre principal */}
            <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-[1.2] md:leading-[1.3] lg:leading-[1.4] mb-2 md:mb-3">
              Automatisez vos PDV avec Mobile Money et Accélérez votre ROI
            </h1>

            {/* Description */}
            <p className="text-[#F9A825] text-base md:text-lg leading-relaxed mb-2 md:mb-3">
              Banques, institutions financières, distributeurs partenaires, super agents et entrepreneurs, notre technologie vous donne accès à la puissance du mobile money.
            </p>

            {/* Badges de caractéristiques */}
            <div className="flex gap-2 flex-wrap mb-2 md:mb-3">
              <span className="bg-[#1A1A1A] border-2 border-[#F9A825] text-white px-3 py-1 rounded-full text-xs md:text-sm">
                Multiopérateurs
              </span>
              <span className="bg-[#1A1A1A] border-2 border-[#F9A825] text-white px-3 py-1 rounded-full text-xs md:text-sm">
                ROI rapide (Dès 1.1 an)
              </span>
              <span className="bg-[#1A1A1A] border-2 border-[#F9A825] text-white px-3 py-1 rounded-full text-xs md:text-sm">
                Multiservices
              </span>
            </div>

            {/* Boutons d'action */}
            <div className="flex items-center gap-4 mt-2 md:mt-3">
              <button className="bg-[#F9A825] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#F9A825]/90 transition-colors whitespace-nowrap">
                Découvrir nos 3 modèles d&apos;investissement
              </button>
              <button className="flex items-center gap-2 text-white hover:text-[#F9A825] transition-colors group">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-[#F9A825] group-hover:text-[#FFD54F]"
                >
                  <path d="M8 0L6.59 1.41L12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z" />
                </svg>
                <span>Découvrir la technologie</span>
              </button>
            </div>
          </div>

          {/* Colonne droite - Image GAB avec badges flottants */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Image du GAB */}
              <div className="relative w-full max-w-[400px] h-full max-h-[600px] flex items-center justify-center">
                <ATMMachine />
              </div>

              {/* Badges flottants au-dessus de l'image */}
              {/* Badge "Dashboard en ligne" - haut gauche */}
              <div className="hidden lg:block absolute left-[10%] top-[15%] animate-float-gentle z-20">
                <div className="bg-[#F9A825]/90 backdrop-blur-sm text-black font-semibold text-sm px-4 py-2 rounded-lg border-2 border-[#F9A825] shadow-lg whitespace-nowrap">
                  Dashboard en ligne
                </div>
              </div>

              {/* Badge "100% Automatisé" - haut droite */}
              <div className="hidden lg:block absolute right-[10%] top-[10%] animate-float-gentle-2 z-20" style={{ animationDelay: '0.5s' }}>
                <div className="bg-[#F9A825]/90 backdrop-blur-sm text-black font-semibold text-sm px-4 py-2 rounded-lg border-2 border-[#F9A825] shadow-lg whitespace-nowrap">
                  100% Automatisé
                </div>
              </div>

              {/* Badge "Sécurité poussée" - bas droite */}
              <div className="hidden lg:block absolute right-[10%] bottom-[20%] animate-float-gentle-3 z-20" style={{ animationDelay: '1s' }}>
                <div className="bg-[#F9A825]/90 backdrop-blur-sm text-black font-semibold text-sm px-4 py-2 rounded-lg border-2 border-[#F9A825] shadow-lg whitespace-nowrap">
                  Sécurité poussée
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
