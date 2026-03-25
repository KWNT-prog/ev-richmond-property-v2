import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useI18n } from '@/lib/i18n';
import { useCurrency, Currency } from '@/lib/currency';
import { Menu, X, Phone, Globe, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const currencies: { code: Currency; label: string; symbol: string }[] = [
  { code: 'USD', label: 'USD ($)', symbol: '$' },
  { code: 'EUR', label: 'EUR (€)', symbol: '€' },
  { code: 'TRY', label: 'TRY (₺)', symbol: '₺' },
  { code: 'GBP', label: 'GBP (£)', symbol: '£' },
  { code: 'AED', label: 'AED (د.إ)', symbol: 'د.إ' },
];

export function Navbar() {
  const [location] = useLocation();
  const { t, lang, setLang } = useI18n();
  const { currency, setCurrency } = useCurrency();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currencyMenuOpen, setCurrencyMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setLangMenuOpen(false);
      setCurrencyMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/properties', label: t('nav.properties') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'tr', label: 'Türkçe' },
  ];

  const isHome = location === '/';
  const isOverDark = isHome && !scrolled;

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
          scrolled 
            ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/5 py-3" 
            : isHome 
              ? "bg-gradient-to-b from-black/40 to-transparent" 
              : "bg-background/95 backdrop-blur-md shadow-lg shadow-black/5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            <Link href="/" className="flex items-center gap-3 z-50">
              <img 
                src={`/logo.jpeg`} 
                alt="EV Richmond Property Group" 
                className="w-12 h-12 rounded-full border border-[#c9a96e]/50 shadow-sm"
              />
              <div className="hidden md:flex flex-col">
                <span className={cn("font-display font-bold text-lg tracking-widest leading-tight", isOverDark ? "text-white" : "text-foreground")}>EV RICHMOND</span>
                <span className={cn("font-sans text-[0.65rem] tracking-[0.2em] uppercase", isOverDark ? "text-[#c9a96e]" : "text-primary")}>Property Group</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={cn(
                    "font-display text-sm uppercase tracking-wider transition-colors hover:text-primary",
                    location === link.href 
                      ? "text-primary border-b border-primary pb-1" 
                      : isOverDark ? "text-white/90" : "text-foreground/90"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+905550000000" className={cn("flex items-center gap-2 hover:text-primary transition-colors", isOverDark ? "text-white" : "text-foreground")}>
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-sans text-sm">+90 555 000 0000</span>
              </a>

              <div className="w-px h-5 bg-current opacity-20" />

              <div className="relative">
                <button 
                  onClick={(e) => { e.stopPropagation(); setCurrencyMenuOpen(!currencyMenuOpen); setLangMenuOpen(false); }}
                  className={cn("flex items-center gap-1.5 text-sm font-display tracking-wider hover:text-primary transition-colors uppercase", isOverDark ? "text-white" : "text-foreground")}
                >
                  <DollarSign className="w-3.5 h-3.5" />
                  {currency}
                </button>
                
                <AnimatePresence>
                  {currencyMenuOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-4 w-36 bg-white border border-[#c9a96e]/15 rounded-lg shadow-xl overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {currencies.map((c) => (
                        <button
                          key={c.code}
                          onClick={() => {
                            setCurrency(c.code);
                            setCurrencyMenuOpen(false);
                          }}
                          className={cn(
                            "w-full text-left px-4 py-2 text-sm font-sans hover:bg-primary/10 hover:text-primary transition-colors",
                            currency === c.code ? "text-primary bg-primary/5" : "text-foreground"
                          )}
                        >
                          {c.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative">
                <button 
                  onClick={(e) => { e.stopPropagation(); setLangMenuOpen(!langMenuOpen); setCurrencyMenuOpen(false); }}
                  className={cn("flex items-center gap-1.5 text-sm font-display tracking-wider hover:text-primary transition-colors uppercase", isOverDark ? "text-white" : "text-foreground")}
                >
                  <Globe className="w-3.5 h-3.5" />
                  {lang}
                </button>
                
                <AnimatePresence>
                  {langMenuOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-4 w-32 bg-white border border-[#c9a96e]/15 rounded-lg shadow-xl overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            setLang(l.code as 'en'|'ru'|'tr');
                            setLangMenuOpen(false);
                          }}
                          className={cn(
                            "w-full text-left px-4 py-2 text-sm font-sans hover:bg-primary/10 hover:text-primary transition-colors",
                            lang === l.code ? "text-primary bg-primary/5" : "text-foreground"
                          )}
                        >
                          {l.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <button 
              className={cn("lg:hidden hover:text-primary z-50", isOverDark ? "text-white" : "text-foreground")}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col pt-24 px-6 lg:hidden shadow-xl"
          >
            <nav className="flex flex-col gap-6 text-center mt-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "font-display text-2xl uppercase tracking-wider transition-colors",
                    location === link.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-16 flex flex-col items-center gap-6">
              <div className="flex gap-3">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code as 'en'|'ru'|'tr');
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "px-3 py-1 border rounded font-display text-sm uppercase",
                      lang === l.code ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground"
                    )}
                  >
                    {l.code}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap justify-center">
                {currencies.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setCurrency(c.code)}
                    className={cn(
                      "px-3 py-1 border rounded font-display text-sm uppercase",
                      currency === c.code ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground"
                    )}
                  >
                    {c.code}
                  </button>
                ))}
              </div>
              
              <a href="tel:+905550000000" className="flex items-center gap-2 text-primary mt-4">
                <Phone className="w-5 h-5" />
                <span className="font-sans text-lg">+90 555 000 0000</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
