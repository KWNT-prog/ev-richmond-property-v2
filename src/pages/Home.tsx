import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { properties } from '@/data/mock-data';
import { Link } from 'wouter';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Shield, Building2, Crown, ChevronRight, ChevronLeft, Star, Quote, CheckCircle, Briefcase, Scale, GraduationCap, Gift, KeyRound, FileText, Home as HomeIcon, Receipt, FileCheck, Ban, Key, Plug } from 'lucide-react';

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

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export default function Home() {
  const { t } = useI18n();
  const featuredProperties = properties;
  const isMobile = useIsMobile();

  const reviews = [
    { name: 'Aleksandr Petrov', location: t('review.1.location'), text: t('review.1.text'), rating: 5 },
    { name: 'Mehmet Yılmaz', location: t('review.2.location'), text: t('review.2.text'), rating: 5 },
    { name: 'Elena Sokolova', location: t('review.3.location'), text: t('review.3.text'), rating: 5 },
    { name: 'Fatih Demir', location: t('review.4.location'), text: t('review.4.text'), rating: 5 },
    { name: 'Olga Ivanova', location: t('review.5.location'), text: t('review.5.text'), rating: 4 },
    { name: 'Ahmed Al-Rashid', location: t('review.6.location'), text: t('review.6.text'), rating: 5 },
  ];

  const reviewCardsPerPage = isMobile ? 1 : 3;
  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const [reviewDirection, setReviewDirection] = useState(0);
  const totalReviewPages = Math.ceil(reviews.length / reviewCardsPerPage);

  const goToReviewPage = useCallback((page: number, dir?: number) => {
    setReviewDirection(dir ?? (page > currentReviewPage ? 1 : -1));
    setCurrentReviewPage(page);
  }, [currentReviewPage]);

  useEffect(() => {
    setCurrentReviewPage(0);
  }, [isMobile]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToReviewPage((currentReviewPage + 1) % totalReviewPages, 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentReviewPage, totalReviewPages, goToReviewPage]);

  const visibleReviews = reviews.slice(currentReviewPage * reviewCardsPerPage, currentReviewPage * reviewCardsPerPage + reviewCardsPerPage);

  const propCardsPerPage = 3;
  const [currentPropPage, setCurrentPropPage] = useState(0);
  const [propDirection, setPropDirection] = useState(0);
  const totalPropPages = Math.ceil(featuredProperties.length / propCardsPerPage);

  const goToPropPage = useCallback((page: number, dir?: number) => {
    setPropDirection(dir ?? (page > currentPropPage ? 1 : -1));
    setCurrentPropPage(page);
  }, [currentPropPage]);

  const visibleProperties = featuredProperties.slice(currentPropPage * propCardsPerPage, currentPropPage * propCardsPerPage + propCardsPerPage);

  const touchStartX = useRef(0);
  const touchStartPropX = useRef(0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`/images/hero-bg.jpg`}
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A2A2A]/85 via-[#2A2A2A]/60 to-[#2A2A2A]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/70 via-transparent to-[#2A2A2A]/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C4A265]/50 bg-[#C4A265]/15 backdrop-blur-sm text-[#C4A265] text-xs uppercase tracking-[0.2em] font-sans mb-6">
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
                <Button size="lg" className="w-full sm:w-auto bg-[#C4A265] hover:bg-[#b89555] text-white border-[#C4A265]">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#C4A265]/20">
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

          <div className="relative">
            <button
              onClick={() => goToPropPage((currentPropPage - 1 + totalPropPages) % totalPropPages, -1)}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#C4A265]/20 shadow-md flex items-center justify-center hover:bg-[#C4A265]/10 transition-colors hidden md:flex"
            >
              <ChevronLeft className="w-5 h-5 text-[#C4A265]" />
            </button>

            <button
              onClick={() => goToPropPage((currentPropPage + 1) % totalPropPages, 1)}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#C4A265]/20 shadow-md flex items-center justify-center hover:bg-[#C4A265]/10 transition-colors hidden md:flex"
            >
              <ChevronRight className="w-5 h-5 text-[#C4A265]" />
            </button>

            <div
              className="overflow-hidden"
              onTouchStart={(e) => { touchStartPropX.current = e.touches[0].clientX; }}
              onTouchEnd={(e) => {
                const diff = touchStartPropX.current - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) {
                  if (diff > 0) goToPropPage((currentPropPage + 1) % totalPropPages, 1);
                  else goToPropPage((currentPropPage - 1 + totalPropPages) % totalPropPages, -1);
                }
              }}
            >
              <AnimatePresence mode="wait" custom={propDirection}>
                <motion.div
                  key={currentPropPage}
                  custom={propDirection}
                  initial={{ opacity: 0, x: propDirection > 0 ? 80 : -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: propDirection > 0 ? -80 : 80 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {visibleProperties.map((property, index) => (
                    <PropertyCard key={property.id} property={property} index={index} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: totalPropPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToPropPage(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentPropPage ? 'w-8 bg-[#C4A265]' : 'w-2.5 bg-[#C4A265]/25 hover:bg-[#C4A265]/50'
                  }`}
                />
              ))}
            </div>
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
              onClick={() => goToReviewPage((currentReviewPage - 1 + totalReviewPages) % totalReviewPages, -1)}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#C4A265]/20 shadow-md flex items-center justify-center hover:bg-[#C4A265]/10 transition-colors hidden md:flex"
            >
              <ChevronLeft className="w-5 h-5 text-[#C4A265]" />
            </button>

            <button
              onClick={() => goToReviewPage((currentReviewPage + 1) % totalReviewPages, 1)}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#C4A265]/20 shadow-md flex items-center justify-center hover:bg-[#C4A265]/10 transition-colors hidden md:flex"
            >
              <ChevronRight className="w-5 h-5 text-[#C4A265]" />
            </button>

            <div
              className="overflow-hidden"
              onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
              onTouchEnd={(e) => {
                const diff = touchStartX.current - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) {
                  if (diff > 0) goToReviewPage((currentReviewPage + 1) % totalReviewPages, 1);
                  else goToReviewPage((currentReviewPage - 1 + totalReviewPages) % totalReviewPages, -1);
                }
              }}
            >
              <AnimatePresence mode="wait" custom={reviewDirection}>
                <motion.div
                  key={`${currentReviewPage}-${reviewCardsPerPage}`}
                  custom={reviewDirection}
                  initial={{ opacity: 0, x: reviewDirection > 0 ? 80 : -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reviewDirection > 0 ? -80 : 80 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className={isMobile ? "flex justify-center" : "grid grid-cols-3 gap-8"}
                >
                  {visibleReviews.map((review, i) => (
                    <div
                      key={`${currentReviewPage}-${i}`}
                      className="bg-white border border-[#C4A265]/15 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col w-full max-w-md"
                    >
                      <Quote className="w-8 h-8 text-[#C4A265]/30 mb-4" />
                      <p className="text-foreground/80 font-sans leading-relaxed text-[15px] flex-grow mb-6">
                        "{review.text}"
                      </p>
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-4 h-4 ${idx < review.rating ? 'text-[#C4A265] fill-[#C4A265]' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <div className="border-t border-[#C4A265]/10 pt-4">
                        <p className="font-display text-foreground text-sm">{review.name}</p>
                        <p className="text-muted-foreground text-xs font-sans">{review.location}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: totalReviewPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToReviewPage(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentReviewPage ? 'w-8 bg-[#C4A265]' : 'w-2.5 bg-[#C4A265]/25 hover:bg-[#C4A265]/50'
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
          <img src={`/images/about-team.jpg`} alt="" className="w-full h-full object-cover" loading="lazy" />
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
                className="bg-white border border-[#C4A265]/15 p-8 rounded-2xl text-center group hover:border-[#C4A265]/40 shadow-sm hover:shadow-md transition-all duration-300"
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

      {/* Team Section */}
      <section className="py-24 bg-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display text-white mb-4">{t('section.team.title')}</h2>
            <div className="w-24 h-1 bg-[#C4A265] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { photo: 'team-sales-manager.jpg', title: t('team.1.name'), name: '' },
              { photo: 'team-portfolio-manager.jpg', title: t('team.2.name'), name: '' },
              { photo: 'team-ceo.jpg', title: t('team.3.name'), name: 'Melena Vidina' },
              { photo: 'team-lawyer.jpg', title: t('team.4.name'), name: '' },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#1E1E1E] rounded-2xl overflow-hidden border border-[#C4A265]/15 group hover:border-[#C4A265]/40 transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={`/images/${member.photo}`}
                    alt={member.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 text-center">
                  {member.name && (
                    <>
                      <p className="font-display text-white text-lg">{member.name}</p>
                      <div className="w-12 h-0.5 bg-[#C4A265] mx-auto my-2" />
                    </>
                  )}
                  <p className="text-[#C4A265] text-xs uppercase tracking-[0.15em] font-sans">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display text-foreground mb-4">{t('section.about.title')}</h2>
            <div className="w-24 h-1 bg-[#C4A265] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="border-l-2 border-[#C4A265] pl-8">
                <p className="text-2xl md:text-3xl font-display italic text-foreground/80 leading-relaxed">
                  "{t('section.about.quote')}"
                </p>
              </div>
              <p className="mt-8 text-[#C4A265] font-display text-lg">— Melena Vidina, CEO</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-foreground/80 font-sans leading-relaxed">{t('section.about.text1')}</p>
              <div className="w-16 h-0.5 bg-[#C4A265]/40" />
              <p className="text-foreground/80 font-sans leading-relaxed">{t('section.about.text2')}</p>
              <div className="w-16 h-0.5 bg-[#C4A265]/40" />
              <p className="text-foreground/80 font-sans leading-relaxed">{t('section.about.text3')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display text-foreground mb-4">{t('section.services.title')}</h2>
            <div className="w-24 h-1 bg-[#C4A265] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Briefcase, text: t('services.1') },
              { icon: HomeIcon, text: t('services.2') },
              { icon: FileCheck, text: t('services.3') },
              { icon: GraduationCap, text: t('services.4') },
              { icon: Gift, text: t('services.5') },
              { icon: KeyRound, text: t('services.6') },
              { icon: FileText, text: t('services.7') },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#C4A265]/15 rounded-2xl p-6 flex items-start gap-4 group hover:border-[#C4A265]/40 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C4A265]/10 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-[#C4A265]" />
                </div>
                <p className="text-foreground/80 font-sans leading-relaxed text-sm pt-2">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Management Section */}
      <section className="py-24 bg-[#2A2A2A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display text-white mb-4">{t('section.propMgmt.title')}</h2>
            <div className="w-24 h-1 bg-[#C4A265] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { icon: FileCheck, text: t('propMgmt.1') },
              { icon: Receipt, text: t('propMgmt.2') },
              { icon: FileText, text: t('propMgmt.3') },
              { icon: Ban, text: t('propMgmt.4') },
              { icon: Key, text: t('propMgmt.5') },
              { icon: Plug, text: t('propMgmt.6') },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 border border-[#C4A265]/15 rounded-xl hover:border-[#C4A265]/40 transition-colors"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C4A265]" />
                <p className="text-white/80 font-sans text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-2xl font-display italic text-[#C4A265] mb-4">
              "{t('propMgmt.tagline')}"
            </p>
            <p className="text-white/50 font-sans text-sm uppercase tracking-widest">
              {t('propMgmt.footer')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Services Badge */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-[#2A2A2A] border-2 border-[#C4A265]/50 rounded-2xl p-10 md:p-14 text-center"
          >
            <div className="absolute inset-3 border border-[#C4A265]/20 rounded-xl pointer-events-none" />
            <p className="text-xl md:text-2xl font-display text-white leading-relaxed relative z-10">
              {t('section.additionalBadge')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={`/images/modern-villa.jpg`}
            alt="Villa" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#2A2A2A]/85" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg text-white/80 font-sans mb-10">
            Our luxury real estate experts are ready to assist you in finding the perfect investment or home in Turkey.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#C4A265] hover:bg-[#b89555] text-white border-[#C4A265]">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
