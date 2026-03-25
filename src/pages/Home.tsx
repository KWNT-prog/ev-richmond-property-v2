import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { properties } from '@/data/mock-data';
import { Link } from 'wouter';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Shield, Building2, Crown, ChevronRight, ChevronLeft, Star, Quote } from 'lucide-react';

function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(eased * target);
      setCount(current);

      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-display text-primary mb-2">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Home() {
  const { t } = useI18n();
  const featuredProperties = properties;

  const reviews = [
    { name: 'Aleksandr Petrov', location: t('review.1.location'), text: t('review.1.text'), rating: 5 },
    { name: 'Mehmet Yılmaz', location: t('review.2.location'), text: t('review.2.text'), rating: 5 },
    { name: 'Elena Sokolova', location: t('review.3.location'), text: t('review.3.text'), rating: 5 },
    { name: 'Fatih Demir', location: t('review.4.location'), text: t('review.4.text'), rating: 5 },
    { name: 'Olga Ivanova', location: t('review.5.location'), text: t('review.5.text'), rating: 4 },
    { name: 'Ahmed Al-Rashid', location: t('review.6.location'), text: t('review.6.text'), rating: 5 },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / cardsPerPage);

  const goToPage = useCallback((page: number, dir?: number) => {
    setDirection(dir ?? (page > currentPage ? 1 : -1));
    setCurrentPage(page);
  }, [currentPage]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToPage((currentPage + 1) % totalPages, 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentPage, totalPages, goToPage]);

  const visibleReviews = reviews.slice(currentPage * cardsPerPage, currentPage * cardsPerPage + cardsPerPage);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`/images/hero-bg.png`}
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E]/85 via-[#1E1E1E]/60 to-[#1E1E1E]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/70 via-transparent to-[#1E1E1E]/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A96A]/50 bg-[#C9A96A]/15 backdrop-blur-sm text-[#C9A96A] text-xs uppercase tracking-[0.2em] font-sans mb-6">
              <Crown className="w-3 h-3" />
              EV Richmond Property Group
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-white leading-[1.1] mb-6">
              {t('home.hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 font-sans max-w-2xl mb-10 leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/properties">
                <Button size="lg" className="w-full sm:w-auto bg-[#C9A96A] hover:bg-[#b89555] text-white border-[#C9A96A]">
                  {t('home.hero.cta.view')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 backdrop-blur-sm">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#C9A96A]/20">
            {[
              { target: 500, suffix: '+', label: t('stats.properties') },
              { target: 10, suffix: '+', label: t('stats.years') },
              { target: 1000, suffix: '+', label: t('stats.clients') },
              { target: 5, suffix: '', label: t('stats.cities') }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center px-4"
              >
                <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2000} />
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

      {/* Client Reviews */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display text-foreground mb-4">
              {t('section.reviews.title')}
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              {t('section.reviews.subtitle')}
            </p>
          </motion.div>

          <div className="relative">
            <button
              onClick={() => goToPage((currentPage - 1 + totalPages) % totalPages, -1)}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#C9A96A]/20 shadow-md flex items-center justify-center hover:bg-[#C9A96A]/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#C9A96A]" />
            </button>

            <button
              onClick={() => goToPage((currentPage + 1) % totalPages, 1)}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#C9A96A]/20 shadow-md flex items-center justify-center hover:bg-[#C9A96A]/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#C9A96A]" />
            </button>

            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentPage}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {visibleReviews.map((review, i) => (
                    <div
                      key={`${currentPage}-${i}`}
                      className="bg-white border border-[#C9A96A]/15 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                    >
                      <Quote className="w-8 h-8 text-[#C9A96A]/30 mb-4" />
                      <p className="text-foreground/80 font-sans leading-relaxed text-[15px] flex-grow mb-6">
                        "{review.text}"
                      </p>
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-4 h-4 ${idx < review.rating ? 'text-[#C9A96A] fill-[#C9A96A]' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <div className="border-t border-[#C9A96A]/10 pt-4">
                        <p className="font-display text-foreground text-sm">{review.name}</p>
                        <p className="text-muted-foreground text-xs font-sans">{review.location}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToPage(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentPage ? 'w-8 bg-[#C9A96A]' : 'w-2.5 bg-[#C9A96A]/25 hover:bg-[#C9A96A]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/50 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <img src={`/images/about-team.png`} alt="" className="w-full h-full object-cover" />
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
                className="bg-white border border-[#C9A96A]/15 p-8 rounded-2xl text-center group hover:border-[#C9A96A]/40 shadow-sm hover:shadow-md transition-all duration-300"
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
            src={`/images/modern-villa.png`}
            alt="Villa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1E1E1E]/85" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg text-white/80 font-sans mb-10">
            Our luxury real estate experts are ready to assist you in finding the perfect investment or home in Turkey.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#C9A96A] hover:bg-[#b89555] text-white border-[#C9A96A]">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
