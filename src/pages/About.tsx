import React from 'react';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const { t } = useI18n();

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={`/images/about-team.png`}
            alt="About Richmond" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-display text-foreground mb-6">
              Excellence in <br/><span className="text-primary">Real Estate</span>
            </h1>
            <p className="text-lg text-foreground/80 font-sans leading-relaxed mb-8">
              EV Richmond Property Group represents the pinnacle of luxury real estate in Turkey. 
              We curate the most exclusive properties for a discerning global clientele, 
              providing unparalleled service, discretion, and market expertise.
            </p>
            <div className="w-24 h-1 bg-primary" />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">Our Legacy</h2>
              <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
                <p>
                  Founded on the principles of integrity, exclusivity, and bespoke service, EV Richmond has grown to become the premier luxury real estate advisory in Turkey. We understand that acquiring a luxury property is more than a transaction; it is a lifestyle choice and a significant investment.
                </p>
                <p>
                  Our multi-lingual team of experts provides end-to-end guidance, specializing in high-end residential sales, commercial investments, and citizenship-by-investment programs. We leverage our extensive network to offer off-market opportunities that cannot be found elsewhere.
                </p>
              </div>
              
              <ul className="mt-8 space-y-4">
                {['10+ Years Market Experience', 'Specialized Legal & Investment Team', 'Exclusive Access to Off-Market Properties', 'Full Concierge Services'].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground font-sans">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border-2 border-primary/20 p-2"
            >
              <img 
                src={`/images/luxury-apartment.png`}
                alt="Luxury Interior" 
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
