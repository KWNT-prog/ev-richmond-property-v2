import React from 'react';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { properties } from '@/data/mock-data';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Shield, Building2, Crown, ChevronRight, Star } from 'lucide-react';

export default function Home() {
  const { t } = useI18n();
  const featuredProperties = properties.filter(p => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary text-xs uppercase tracking-[0.2em] font-sans mb-6">
              <Crown className="w-3 h-3" />
              EV Richmond Property Group
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[1.1] mb-6">
              {t('home.hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 font-sans max-w-2xl mb-10 leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/properties">
                <Button size="lg" className="w-full sm:w-auto text-black">
                  {t('home.hero.cta.view')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background/50 backdrop-blur-sm">
                  {t('home.hero.cta.contact')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="glass-panel rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {[
              { num: "500+", label: t('stats.properties') },
              { num: "10+", label: t('stats.years') },
              { num: "1000+", label: t('stats.clients') },
              { num: "5", label: t('stats.cities') }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-3xl md:text-4xl font-display text-primary mb-2">{stat.num}</div>
                <div className="text-sm font-sans text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display text-foreground mb-4">
                {t('section.featured.title')}
              </h2>
              <p className="text-muted-foreground font-sans max-w-xl">
                {t('section.featured.subtitle')}
              </p>
            </motion.div>
            
            <Link href="/properties">
              <Button variant="ghost" className="group">
                View All Portfolio 
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/50 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <img src={`${import.meta.env.BASE_URL}images/about-team.png`} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-secondary/50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display text-foreground mb-4">
              {t('section.why.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: t('why.1.title'), desc: t('why.1.desc') },
              { icon: Building2, title: t('why.2.title'), desc: t('why.2.desc') },
              { icon: Crown, title: t('why.3.title'), desc: t('why.3.desc') },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-card border border-border/50 p-8 rounded-2xl text-center group hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/modern-villa.png`}
            alt="Villa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg text-foreground/80 font-sans mb-10">
            Our luxury real estate experts are ready to assist you in finding the perfect investment or home in Turkey.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-black bg-primary hover:bg-[#e6c14a]">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
