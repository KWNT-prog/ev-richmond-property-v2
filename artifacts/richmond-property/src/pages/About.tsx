import React from 'react';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { CheckCircle2, Briefcase, FileCheck, GraduationCap, Gift, KeyRound, FileText, Receipt, Ban, Key, Plug, Stamp, Gavel } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/Button';

export default function About() {
  const { t } = useI18n();

  const team = [
    { photo: 'team-ceo.jpg', title: t('team.3.name'), name: 'Melena Vidina' },
    { photo: 'team-sales-manager.jpg', title: t('team.1.name'), name: 'Sofia Shulepova' },
    { photo: 'team-portfolio-manager.jpg', title: t('team.2.name'), name: 'Harun Makartay' },
    { photo: 'team-lawyer.jpg', title: t('team.4.name'), name: 'Berna Aksoy' },
  ];

  const services = [
    { icon: Briefcase, text: t('services.1') },
    { icon: FileCheck, text: t('services.2') },
    { icon: FileCheck, text: t('services.3') },
    { icon: GraduationCap, text: t('services.4') },
    { icon: Gift, text: t('services.5') },
    { icon: KeyRound, text: t('services.6') },
    { icon: FileText, text: t('services.7') },
    { icon: Stamp, text: t('services.8') },
    { icon: Gavel, text: t('services.9') },
  ];

  const propMgmt = [
    { icon: FileCheck, text: t('propMgmt.1') },
    { icon: Receipt, text: t('propMgmt.2') },
    { icon: FileText, text: t('propMgmt.3') },
    { icon: Ban, text: t('propMgmt.4') },
    { icon: Key, text: t('propMgmt.5') },
    { icon: Plug, text: t('propMgmt.6') },
  ];

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={`${import.meta.env.BASE_URL}images/about-team.jpg`}
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
              {t('about.hero.title')} <br/><span className="text-primary">{t('about.hero.titleAccent')}</span>
            </h1>
            <p className="text-lg text-foreground/80 font-sans leading-relaxed mb-8">
              {t('about.hero.subtitle')}
            </p>
            <div className="w-24 h-1 bg-primary" />
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">{t('about.story.title')}</h2>
              <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
                <p>{t('section.about.text1')}</p>
                <p>{t('section.about.text2')}</p>
                <p>{t('section.about.text3')}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {[t('about.values.1'), t('about.values.2'), t('about.values.3'), t('about.values.4')].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground font-sans">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
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
                src={`${import.meta.env.BASE_URL}images/team-ceo.jpg`}
                alt="Melena Vidina - CEO"
                className="w-full h-full object-cover object-top rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#2A2A2A]/80 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="font-display text-white text-lg">Melena Vidina</p>
                <p className="text-[#C4A265] text-xs uppercase tracking-[0.15em] font-sans">{t('team.3.name')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display text-foreground mb-4">{t('section.team.title')}</h2>
            <div className="w-24 h-1 bg-[#C4A265] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#C4A265]/15 group hover:border-[#C4A265]/40 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                    alt={member.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 text-center">
                  {member.name && (
                    <>
                      <p className="font-display text-foreground text-lg">{member.name}</p>
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

      {/* Services */}
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
            {services.map((service, i) => (
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

      {/* Property Management */}
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
            {propMgmt.map((item, i) => (
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

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/modern-villa.jpg`}
            alt="Villa"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#2A2A2A]/85" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
            {t('home.hero.cta.contact')}
          </h2>
          <p className="text-lg text-white/80 font-sans mb-10">
            {t('contact.subtitle')}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#C4A265] hover:bg-[#b89555] text-white border-[#C4A265]">
              {t('contact.form.submit')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
