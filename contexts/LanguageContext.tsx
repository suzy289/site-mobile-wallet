'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Language } from '@/lib/translations';
import { translations } from '@/lib/translations';

const STORAGE_KEY = 'mobilewallet-language';

type TranslationKeys = typeof translations.fr;

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && (stored === 'fr' || stored === 'en')) {
      setLanguageState(stored);
    }
    setMounted(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.title = translations[language].pageTitle;
    }
  }, [mounted, language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
