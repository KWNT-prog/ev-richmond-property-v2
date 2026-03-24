import React, { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { t } = useI18n();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully",
        description: "One of our luxury property consultants will contact you shortly.",
      });
      (e.target as HTMLFormElement).reset();
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
            We are at your disposal to assist with any inquiries regarding our properties, investment opportunities, or citizenship programs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-card border border-border/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-display text-primary mb-8">Istanbul Headquarters</h3>
              
              <div className="space-y-6 font-sans">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-1">Address</p>
                    <p className="text-muted-foreground leading-relaxed">Zorlu Center, Levazım Mah. Koru Sok. No:2<br/>Beşiktaş, Istanbul, Turkey</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-1">Phone</p>
                    <p className="text-muted-foreground">+90 555 000 0000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-1">Email</p>
                    <p className="text-muted-foreground">info@evrichmond.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-1">Office Hours</p>
                    <p className="text-muted-foreground">Mon - Sat: 09:00 - 18:00<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border/50 p-8 md:p-10 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t('contact.form.name')}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t('contact.form.email')}</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t('contact.form.phone')}</label>
                  <input 
                    type="tel" 
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Preferred Language</label>
                  <select className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                    <option>English</option>
                    <option>Russian</option>
                    <option>Turkish</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t('contact.form.message')}</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full text-black font-bold"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
