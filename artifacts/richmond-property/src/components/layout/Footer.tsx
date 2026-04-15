import React from 'react';
import { Link } from 'wouter';
import { useI18n } from '@/lib/i18n';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A2A2A] border-t border-[#C4A265]/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="Richmond Property Group" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm font-sans mb-6 leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#C4A265] hover:border-[#C4A265] hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#C4A265] hover:border-[#C4A265] hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#C4A265] hover:border-[#C4A265] hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li><Link href="/" className="hover:text-[#C4A265] transition-colors">{t('nav.home')}</Link></li>
              <li><Link href="/properties" className="hover:text-[#C4A265] transition-colors">{t('nav.properties')}</Link></li>
              <li><Link href="/about" className="hover:text-[#C4A265] transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/contact" className="hover:text-[#C4A265] transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-6">{t('footer.locations')}</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li><Link href="/properties" className="hover:text-[#C4A265] transition-colors">Istanbul</Link></li>
              <li><Link href="/properties" className="hover:text-[#C4A265] transition-colors">Bodrum</Link></li>
              <li><Link href="/properties" className="hover:text-[#C4A265] transition-colors">Batumi</Link></li>
              <li><Link href="/properties" className="hover:text-[#C4A265] transition-colors">London</Link></li>
              <li><Link href="/properties" className="hover:text-[#C4A265] transition-colors">Monaco</Link></li>
              <li><Link href="/properties" className="hover:text-[#C4A265] transition-colors">Dubai</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-6">{t('footer.contactInfo')}</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C4A265] shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C4A265] shrink-0" />
                <div className="flex flex-col">
                  <span>+90 501 012 3999</span>
                  <span>+971 58 156 4659</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C4A265] shrink-0" />
                <span>info@richmond-propertygroup.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-white/40">
          <p>&copy; {currentYear} Richmond Property Group. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#C4A265] transition-colors">{t('footer.privacy')}</Link>
            <Link href="/terms" className="hover:text-[#C4A265] transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
