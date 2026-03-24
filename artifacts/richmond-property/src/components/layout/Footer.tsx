import React from 'react';
import { Link } from 'wouter';
import { useI18n } from '@/lib/i18n';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a2e] border-t border-[#c9a96e]/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}logo.jpeg`} 
                alt="EV Richmond Property Group" 
                className="w-12 h-12 rounded-full border border-primary/50"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-widest text-white leading-tight">EV RICHMOND</span>
                <span className="font-sans text-[0.65rem] tracking-[0.2em] text-[#c9a96e] uppercase">Property Group</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm font-sans mb-6 leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#c9a96e] hover:border-[#c9a96e] hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#c9a96e] hover:border-[#c9a96e] hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#c9a96e] hover:border-[#c9a96e] hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li><Link href="/" className="hover:text-[#c9a96e] transition-colors">{t('nav.home')}</Link></li>
              <li><Link href="/properties" className="hover:text-[#c9a96e] transition-colors">{t('nav.properties')}</Link></li>
              <li><Link href="/about" className="hover:text-[#c9a96e] transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/contact" className="hover:text-[#c9a96e] transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Locations</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li><Link href="/properties" className="hover:text-[#c9a96e] transition-colors">Istanbul</Link></li>
              <li><Link href="/properties" className="hover:text-[#c9a96e] transition-colors">Bodrum</Link></li>
              <li><Link href="/properties" className="hover:text-[#c9a96e] transition-colors">Antalya</Link></li>
              <li><Link href="/properties" className="hover:text-[#c9a96e] transition-colors">Göktürk</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Contact Info</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c9a96e] shrink-0 mt-0.5" />
                <span>Zorlu Center, Istanbul<br/>Turkey</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c9a96e] shrink-0" />
                <span>+90 555 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c9a96e] shrink-0" />
                <span>info@evrichmond.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-white/40">
          <p>&copy; {currentYear} EV Richmond Property Group. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c9a96e]">Privacy Policy</a>
            <a href="#" className="hover:text-[#c9a96e]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
