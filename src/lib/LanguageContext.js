'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en');
  
  const changeLanguage = (newLocale) => {
    if (['en', 'fr', 'sw', 'de'].includes(newLocale)) {
      setLocale(newLocale);
      localStorage.setItem('preferredLanguage', newLocale);
      
      // Change the URL to reflect the new language
      const currentPath = window.location.pathname;
      const pathWithoutLocale = currentPath.replace(/^\/(en|fr|sw|de)/, '');
      const newPath = `/${newLocale}${pathWithoutLocale || '/'}`;
      window.history.pushState({}, '', newPath);
    }
  };
  
  // Initialize locale from URL or localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const urlLocale = window.location.pathname.split('/')[1];
    
    if (['en', 'fr', 'sw', 'de'].includes(urlLocale)) {
      setLocale(urlLocale);
    } else if (savedLanguage && ['en', 'fr', 'sw', 'de'].includes(savedLanguage)) {
      setLocale(savedLanguage);
    }
  }, []);
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Fallback to key if translation not found
      }
    }
    
    return value;
  };
  
  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);