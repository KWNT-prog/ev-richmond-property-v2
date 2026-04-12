import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  const { t } = useI18n();

  const sections = [
    { title: t('terms.section1.title'), body: t('terms.section1.body') },
    { title: t('terms.section2.title'), body: t('terms.section2.body') },
    { title: t('terms.section3.title'), body: t('terms.section3.body') },
    { title: t('terms.section4.title'), body: t('terms.section4.body') },
    { title: t('terms.section5.title'), body: t('terms.section5.body') },
    { title: t('terms.section6.title'), body: t('terms.section6.body') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-[#2A2A2A] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display text-white">{t('terms.title')}</h1>
          <p className="text-white/50 text-sm font-sans mt-3">{t('legal.lastUpdated')}: April 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          <p className="text-muted-foreground font-sans leading-relaxed text-[15px]">
            {t('terms.intro')}
          </p>

          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-display text-foreground mb-3">
                {idx + 1}. {section.title}
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed text-[15px]">
                {section.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
