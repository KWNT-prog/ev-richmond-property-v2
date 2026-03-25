import React, { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Building2, Globe, BadgeDollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const inputClass = "w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans";
const selectClass = "w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none font-sans";
const labelClass = "text-sm font-medium text-foreground font-sans";

export default function Contact() {
  const { t } = useI18n();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [interestType, setInterestType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('contact.toast.title'),
        description: t('contact.toast.desc'),
      });
      (e.target as HTMLFormElement).reset();
      setInterestType('');
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-background pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-muted-foreground font-sans text-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white border border-[#C4A265]/15 p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-display text-primary mb-8">{t('contact.office.title')}</h3>
              
              <div className="space-y-6 font-sans">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-1">{t('contact.office.address')}</p>
                    <p className="text-muted-foreground leading-relaxed">Zorlu Center, Levazım Mah. Koru Sok. No:2<br/>Beşiktaş, Istanbul, Turkey</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-1">{t('contact.office.phone')}</p>
                    <p className="text-muted-foreground">+90 555 000 0000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-1">{t('contact.office.email')}</p>
                    <p className="text-muted-foreground">info@evrichmond.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-1">{t('contact.office.hours')}</p>
                    <p className="text-muted-foreground">Mon - Sat: 09:00 - 18:00<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#C4A265]/15 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-display text-primary mb-4">{t('contact.services.title')}</h3>
              <div className="space-y-3 font-sans text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{t('contact.services.1')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-primary shrink-0" />
                  <span>{t('contact.services.2')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <BadgeDollarSign className="w-4 h-4 text-primary shrink-0" />
                  <span>{t('contact.services.3')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-[#C4A265]/15 p-8 md:p-10 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-display text-foreground mb-2">{t('contact.form.heading')}</h3>
              <p className="text-muted-foreground font-sans text-sm mb-8">{t('contact.form.subheading')}</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className={labelClass}>{t('contact.form.name')}</label>
                    <input required type="text" className={inputClass} placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className={labelClass}>{t('contact.form.email')}</label>
                    <input required type="email" className={inputClass} placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className={labelClass}>{t('contact.form.phone')}</label>
                    <input type="tel" className={inputClass} placeholder="+1 234 567 8900" />
                  </div>
                  <div className="space-y-2">
                    <label className={labelClass}>{t('contact.form.language')}</label>
                    <select className={selectClass}>
                      <option value="en">English</option>
                      <option value="ru">Русский</option>
                      <option value="tr">Türkçe</option>
                      <option value="ar">العربية</option>
                    </select>
                  </div>
                </div>

                <div className="border-t border-[#C4A265]/10 pt-5">
                  <p className="text-xs text-primary font-display uppercase tracking-wider mb-4">{t('contact.form.interestSection')}</p>
                  
                  <div className="space-y-2 mb-5">
                    <label className={labelClass}>{t('contact.form.interest')}</label>
                    <select className={selectClass} value={interestType} onChange={(e) => setInterestType(e.target.value)}>
                      <option value="">{t('contact.form.interest.placeholder')}</option>
                      <option value="purchase">{t('contact.form.interest.purchase')}</option>
                      <option value="citizenship">{t('contact.form.interest.citizenship')}</option>
                      <option value="investment">{t('contact.form.interest.investment')}</option>
                      <option value="rental">{t('contact.form.interest.rental')}</option>
                      <option value="management">{t('contact.form.interest.management')}</option>
                    </select>
                  </div>

                  {(interestType === 'purchase' || interestType === 'rental' || interestType === 'investment') && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div className="space-y-2">
                        <label className={labelClass}>{t('contact.form.propertyType')}</label>
                        <select className={selectClass}>
                          <option value="">{t('contact.form.propertyType.any')}</option>
                          <option value="villa">{t('contact.form.propertyType.villa')}</option>
                          <option value="penthouse">{t('contact.form.propertyType.penthouse')}</option>
                          <option value="apartment">{t('contact.form.propertyType.apartment')}</option>
                          <option value="residence">{t('contact.form.propertyType.residence')}</option>
                          <option value="commercial">{t('contact.form.propertyType.commercial')}</option>
                          <option value="land">{t('contact.form.propertyType.land')}</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>{t('contact.form.location')}</label>
                        <select className={selectClass}>
                          <option value="">{t('contact.form.location.any')}</option>
                          <option value="istanbul">Istanbul</option>
                          <option value="antalya">Antalya</option>
                          <option value="bodrum">Bodrum</option>
                          <option value="alanya">Alanya</option>
                          <option value="fethiye">Fethiye</option>
                          <option value="kalkan">Kalkan</option>
                          <option value="other">{t('contact.form.location.other')}</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {interestType === 'citizenship' && (
                    <div className="space-y-2 mb-5">
                      <label className={labelClass}>{t('contact.form.citizenshipProgram')}</label>
                      <select className={selectClass}>
                        <option value="">{t('contact.form.citizenshipProgram.placeholder')}</option>
                        <option value="turkey-400k">{t('contact.form.citizenshipProgram.turkey400')}</option>
                        <option value="turkey-investment">{t('contact.form.citizenshipProgram.turkeyInvestment')}</option>
                        <option value="residency">{t('contact.form.citizenshipProgram.residency')}</option>
                        <option value="consultation">{t('contact.form.citizenshipProgram.consultation')}</option>
                      </select>
                    </div>
                  )}

                  <div className="space-y-2 mb-5">
                    <label className={labelClass}>{t('contact.form.budget')}</label>
                    <select className={selectClass}>
                      <option value="">{t('contact.form.budget.placeholder')}</option>
                      <option value="under-500k">{t('contact.form.budget.under500')}</option>
                      <option value="500k-1m">{t('contact.form.budget.500to1m')}</option>
                      <option value="1m-3m">{t('contact.form.budget.1to3m')}</option>
                      <option value="3m-5m">{t('contact.form.budget.3to5m')}</option>
                      <option value="5m-10m">{t('contact.form.budget.5to10m')}</option>
                      <option value="over-10m">{t('contact.form.budget.over10m')}</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className={labelClass}>{t('contact.form.message')}</label>
                  <textarea 
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder={t('contact.form.message.placeholder')}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full text-black font-bold"
                  size="lg"
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
