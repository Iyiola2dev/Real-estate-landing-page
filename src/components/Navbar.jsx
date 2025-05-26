'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const { t, locale, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };
  
  const selectLanguage = (lang) => {
    changeLanguage(lang);
    setLanguageMenuOpen(false);
  };
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'sw', name: 'Kiswahili' },
    { code: 'de', name: 'Deutsch' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        scrolled 
          ? 'bg-white dark:bg-gray-100 shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-primary transition-colors"
            onClick={closeMenu}
          >
            <span className={scrolled ? 'text-primary' : 'text-white'}>Luxury</span>
            <span className={cn(
              scrolled ? 'text-blue-600' : 'text-blue-400',
              'ml-1'
            )}>Homes</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-8">
              <Link
                href="/"
                className={cn(
                  'hover:text-blue-500 transition-colors',
                  scrolled ? 'text-gray-800' : 'text-white'
                )}
              >
                {t('home')}
              </Link>
              <Link
                href="/properties"
                className={cn(
                  'hover:text-blue-500 transition-colors',
                  scrolled ? 'text-gray-800' : 'text-white'
                )}
              >
                {t('properties')}
              </Link>
              <Link
                href="/agents"
                className={cn(
                  'hover:text-blue-500 transition-colors',
                  scrolled ? 'text-gray-800' : 'text-white'
                )}
              >
                {t('agents')}
              </Link>
              <Link
                href="/about"
                className={cn(
                  'hover:text-blue-500 transition-colors',
                  scrolled ? 'text-gray-800' : 'text-white'
                )}
              >
                {t('about')}
              </Link>
              <Link
                href="/contact"
                className={cn(
                  'hover:text-blue-500 transition-colors',
                  scrolled ? 'text-gray-800' : 'text-white'
                )}
              >
                {t('contact')}
              </Link>
            </div>
            
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className={cn(
                  'flex items-center space-x-1 transition-colors',
                  scrolled ? 'text-gray-800' : 'text-white',
                  'hover:text-blue-500'
                )}
              >
                <Globe size={20} />
                <span className="uppercase">{locale}</span>
                <ChevronDown size={16} />
              </button>
              
              {languageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => selectLanguage(lang.code)}
                      className={cn(
                        'block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700',
                        locale === lang.code ? 'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-200'
                      )}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleLanguageMenu}
              className={cn(
                'mr-4',
                scrolled ? 'text-gray-800' : 'text-white'
              )}
            >
              <Globe size={20} />
            </button>
            <button
              onClick={toggleMenu}
              className={scrolled ? 'text-gray-800' : 'text-white'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Language Menu */}
          {languageMenuOpen && (
            <div className="md:hidden absolute top-16 right-4 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden py-1 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={cn(
                    'block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700',
                    locale === lang.code ? 'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-200'
                  )}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </nav>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-md mt-2 py-4 px-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
                onClick={closeMenu}
              >
                {t('home')}
              </Link>
              <Link
                href="/properties"
                className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
                onClick={closeMenu}
              >
                {t('properties')}
              </Link>
              <Link
                href="/agents"
                className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
                onClick={closeMenu}
              >
                {t('agents')}
              </Link>
              <Link
                href="/about"
                className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
                onClick={closeMenu}
              >
                {t('about')}
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
                onClick={closeMenu}
              >
                {t('contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}