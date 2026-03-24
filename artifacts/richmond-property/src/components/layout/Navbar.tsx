import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useI18n } from '@/lib/i18n';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [location] = useLocation();
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
          scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/50 py-3" : "bg-gradient-to-b from-black/80 to-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 z-50">
              <img 
                src={`${import.meta.env.BASE_URL}logo.jpeg`} 
                alt="EV Richmond Property Group" 
                className="w-12 h-12 rounded-full border border-primary/50"
              />
              <div className="hidden md:flex flex-col">
                <span className="font-display font-bold text-lg tracking-widest text-foreground leading-tight">EV RICHMOND</span>
                <span className="font-sans text-[0.65rem] tracking-[0.2em] text-primary uppercase">Property Group</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={cn(
                    "font-display text-sm uppercase tracking-wider transition-colors hover:text-primary",
                    location === link.href ? "text-primary border-b border-primary pb-1" : "text-foreground/90"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="tel:+905550000000" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-sans text-sm">+90 555 000 0000</span>
              </a>

              {/* Language Switcher */}
              <div className="relative">
                <button 
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-2 text-sm font-display tracking-wider hover:text-primary transition-colors uppercase"
                >
                  <Globe className="w-4 h-4" />
                  {lang}
                </button>
                
                <AnimatePresence>
                  {langMenuOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-4 w-32 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
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

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-foreground hover:text-primary z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col pt-24 px-6 lg:hidden"
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
              <div className="flex gap-4">
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
