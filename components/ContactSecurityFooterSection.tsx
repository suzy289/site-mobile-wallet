'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactSecurityFooterSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'Cameroun',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  // Validation en temps réel
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrors((prev) => ({ ...prev, email: '' }));
      return true;
    }
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: 'Email invalide' }));
      return false;
    }
    setErrors((prev) => ({ ...prev, email: '' }));
    return true;
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
      return true;
    }
    if (!phoneRegex.test(phone) || phone.length < 8) {
      setErrors((prev) => ({ ...prev, phone: 'Numéro de téléphone invalide' }));
      return false;
    }
    setErrors((prev) => ({ ...prev, phone: '' }));
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      validateEmail(value);
    }
    if (name === 'phone') {
      validatePhone(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(formData.email) && validatePhone(formData.phone)) {
      // Ici vous pouvez ajouter la logique d'envoi du formulaire
      console.log('Formulaire soumis:', formData);
      alert('Votre message a été envoyé avec succès !');
    }
  };

  // Pays disponibles
  const countries = [
    'Cameroun',
    'Côte d\'Ivoire',
    'RDC',
    'Ghana',
    'Sénégal',
    'Nigeria',
    'Kenya',
    'Tanzanie',
    'Autre',
  ];

  // Fonctionnalités de sécurité
  const securityFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Données Chiffrées',
      description: 'Chiffrement de bout en bout sur toutes les transactions',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Accès Sécurisé',
      description: 'Authentification multi-facteurs pour tous les accès admin',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Traçabilité Totale',
      description: 'Logs complets et traçabilité de toutes les transactions',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Certifications',
      description: 'Standards bancaires internationaux et conformité réglementaire',
    },
  ];

  return (
    <>
      {/* ========== BANDEAU ORANGE SUPÉRIEUR ========== */}
      <section className="w-full bg-gradient-to-r from-[#F9A825] to-[#F57C00] py-6 md:py-8">
        <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Ne manquez pas cette opportunité</h3>
                <p className="text-white/90 text-sm md:text-base">
                  Les territoires exclusifs sont limités. Réservez votre zone dès aujourd&apos;hui.
                </p>
              </div>
            </div>
            <button className="bg-white text-[#F9A825] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
              Prendre un RDV →
            </button>
          </div>
        </div>
      </section>

      {/* ========== SECTION CONTACT & SÉCURITÉ ========== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col xl:flex-row gap-8 md:gap-12">
            {/* ========== BLOC GAUCHE : FORMULAIRE DE RDV ========== */}
            <div className="flex-1">
              {/* Carte blanche surélevée */}
              <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Partie Info (Sombre) */}
                  <div className="bg-[#0A0E1A] rounded-lg p-6 md:p-8 text-white">
                    <p className="text-white/70 text-xs md:text-sm uppercase tracking-wide mb-4">CONTACT</p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Réservez votre rendez-vous stratégique
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-8">
                      Prenez un rendez-vous avec l&apos;un de nos experts et discutons de votre projet.
                    </p>

                    {/* Garanties */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm md:text-base">Réponse sous 24h ouvrées</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-sm md:text-base">Échange 100% confidentiel</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span className="text-sm md:text-base">Disponible pour toute l&apos;Afrique</span>
                      </div>
                    </div>
                  </div>

                  {/* Formulaire */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1A237E] mb-2">
                      Réservez votre rendez-vous stratégique
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mb-6">
                      Remplissez le formulaire, notre équipe vous contacte rapidement.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Nom Complet */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom Complet
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9A825] focus:border-transparent outline-none"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F9A825] focus:border-transparent outline-none ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      {/* Pays */}
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                          Pays
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9A825] focus:border-transparent outline-none"
                        >
                          {countries.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Téléphone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-l-lg bg-gray-50">
                            <span>🇨🇲</span>
                            <span className="text-gray-600">+237</span>
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className={`flex-1 px-4 py-3 border rounded-r-lg focus:ring-2 focus:ring-[#F9A825] focus:border-transparent outline-none ${
                              errors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Votre Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Décrivez votre projet en quelques lignes..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9A825] focus:border-transparent outline-none resize-none"
                        />
                      </div>

                      {/* Confidentialité */}
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#F9A825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Vos données sont protégées et ne seront jamais partagées.</span>
                      </div>

                      {/* Bouton Submit */}
                      <button
                        type="submit"
                        className="w-full bg-[#F9A825] text-white font-semibold py-4 px-6 rounded-lg text-base md:text-lg hover:bg-[#F57C00] transition-colors duration-200 shadow-lg hover:shadow-xl"
                      >
                        Envoyez votre message →
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== BLOC DROITE : SÉCURITÉ BANCAIRE ========== */}
            <div className="flex-1">
              <p className="text-[#F9A825] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                CONFIANCE & SÉCURITÉ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">
                Sécurité de niveau bancaire
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-8">
                Nos systèmes sont audités régulièrement et répondent aux normes les plus strictes de l&apos;industrie bancaire.
              </p>

              {/* Badges de Certification */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  Chiffrement AES-256
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  Audits réguliers
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Conformité PCI-DSS
                </span>
              </div>

              {/* Grille de Fonctionnalités Sécurité */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {securityFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-[#F9A825] mb-4">{feature.icon}</div>
                    <h3 className="font-bold text-[#1A237E] text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="w-full bg-[#070B14] text-white py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Colonne 1 : Branding */}
            <div>
              <div className="mb-4">
                <Image
                  src="/images/logo_mw.png"
                  alt="MobileWallet Incorporated"
                  width={180}
                  height={60}
                  className="h-8 md:h-12 lg:h-16 w-auto"
                />
              </div>
              <p className="text-white/70 text-sm mb-6">
                L&apos;infrastructure de cashin et cashout en Afrique
              </p>
              {/* Réseaux sociaux */}
              <div className="flex gap-3">
                {['LinkedIn', 'X', 'YouTube', 'WhatsApp'].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F9A825] transition-colors"
                    aria-label={social}
                  >
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Colonne 2 : Navigation */}
            <div>
              <h4 className="font-bold text-lg mb-4">Navigation</h4>
              <ul className="space-y-2">
                {['Le marché', 'Nos Solutions', 'À Propos', 'Nos formules', 'Notre équipe'].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-white/70 hover:text-[#F9A825] transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 3 : Nos Solutions */}
            <div>
              <h4 className="font-bold text-lg mb-4">Nos Solutions</h4>
              <ul className="space-y-2">
                {[
                  'Franchise Plan',
                  'Bring Your ATM',
                  'SaaS / White Label',
                  'Partenaire Pays Exclusif',
                  'Dashboard & Analytics',
                ].map((solution, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-[#F9A825] transition-colors text-sm"
                    >
                      {solution}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 4 : Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
                <svg className="w-5 h-5 text-[#F9A825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Douala, Cameroun & USA</span>
              </div>
              <button className="border-2 border-[#F9A825] text-white px-6 py-3 rounded-lg hover:bg-[#F9A825] transition-colors text-sm font-semibold">
                Prendre un RDV
              </button>
            </div>
          </div>

          {/* Barre de Copyright */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/70 text-sm">
                © 2025 Mobile Wallet Incorporated. Tous droits réservés.
              </p>
              <div className="flex items-center gap-6">
                <Link href="#" className="text-white/70 hover:text-[#F9A825] transition-colors text-sm">
                  Politique de confidentialité
                </Link>
                <Link href="#" className="text-white/70 hover:text-[#F9A825] transition-colors text-sm">
                  Mentions légales
                </Link>
                <Link href="#" className="text-white/70 hover:text-[#F9A825] transition-colors text-sm">
                  CGU
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
