import React, { useState } from 'react';
import { useRoute, Link } from 'wouter';
import { useI18n } from '@/lib/i18n';
import { properties } from '@/data/mock-data';
import { useCurrency } from '@/lib/currency';
import { motion } from 'framer-motion';
import { 
  Bed, Bath, Square, MapPin, Calendar, Car, Layers, 
  ChevronLeft, ChevronRight, Phone, Mail, Heart, Share2, 
  Check, ArrowLeft, X
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function PropertyDetail() {
  const [, params] = useRoute('/properties/:id');
  const { t } = useI18n();
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { formatPrice } = useCurrency();

  const property = properties.find(p => p.id === params?.id);

  if (!property) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-background text-center">
        <h1 className="text-3xl font-display text-foreground mb-4">{t('detail.notFound')}</h1>
        <p className="text-muted-foreground font-sans mb-8">{t('detail.notFoundDesc')}</p>
        <Link href="/properties">
          <Button className="bg-[#C4A265] hover:bg-[#b89555] text-white border-[#C4A265]">
            {t('detail.backToPortfolio')}
          </Button>
        </Link>
      </div>
    );
  }

  const galleryImages = property.gallery.length > 0 ? property.gallery : [property.image];

  const nextImage = () => setActiveImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const similarProperties = properties
    .filter(p => p.id !== property.id && (p.location === property.location || p.type === property.type))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/properties" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
            <ArrowLeft className="w-4 h-4" />
            {t('detail.backToPortfolio')}
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 rounded-2xl overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-[4/3] cursor-pointer group"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={`/images/${galleryImages[0]}`}
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </motion.div>

            <div className="grid grid-cols-2 gap-2">
              {galleryImages.slice(1, 3).map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (idx + 1) }}
                  className="relative aspect-[4/3] cursor-pointer group"
                  onClick={() => { setActiveImage(idx + 1); setLightboxOpen(true); }}
                >
                  <img
                    src={`/images/${img}`}
                    alt={`${property.title} - ${idx + 2}`}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </motion.div>
              ))}
              {galleryImages.length <= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative aspect-[4/3] cursor-pointer group"
                  onClick={() => setLightboxOpen(true)}
                >
                  <img
                    src={`/images/${galleryImages[0]}`}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <div className="inline-block bg-[#C4A265]/10 text-[#C4A265] px-3 py-1 rounded-full text-xs uppercase tracking-widest font-sans mb-3 border border-[#C4A265]/20">
                      {property.type}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-display text-foreground">
                      {property.title}
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full border border-[#C4A265]/20 hover:bg-[#C4A265]/10 transition-colors">
                      <Heart className="w-5 h-5 text-[#C4A265]" />
                    </button>
                    <button className="p-2 rounded-full border border-[#C4A265]/20 hover:bg-[#C4A265]/10 transition-colors">
                      <Share2 className="w-5 h-5 text-[#C4A265]" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center text-muted-foreground font-sans mb-6">
                  <MapPin className="w-5 h-5 mr-2 text-[#C4A265]" />
                  {property.address}
                </div>

                <div className="text-4xl font-display text-[#C4A265] mb-8">
                  {formatPrice(property.price)}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
              >
                {[
                  { icon: Bed, value: property.bedrooms, label: t('property.beds') },
                  { icon: Bath, value: property.bathrooms, label: t('property.baths') },
                  { icon: Square, value: `${property.area}`, label: t('property.sqm') },
                  { icon: Calendar, value: property.yearBuilt, label: t('detail.yearBuilt') },
                  { icon: Car, value: property.parking, label: t('detail.parking') },
                  { icon: Layers, value: property.floors, label: t('detail.floors') },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white border border-[#C4A265]/15 rounded-xl p-4 text-center shadow-sm">
                    <stat.icon className="w-5 h-5 text-[#C4A265] mx-auto mb-2" />
                    <div className="text-lg font-display text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-sans uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-display text-foreground mb-4">{t('detail.description')}</h2>
                <p className="text-muted-foreground font-sans leading-relaxed text-[15px]">
                  {property.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-display text-foreground mb-6">{t('detail.features')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 font-sans text-[15px]">
                      <div className="w-6 h-6 rounded-full bg-[#C4A265]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#C4A265]" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-28 space-y-6">
                <div className="bg-white border border-[#C4A265]/15 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-display text-foreground mb-2">{t('detail.interested')}</h3>
                  <p className="text-sm text-muted-foreground font-sans mb-6">{t('detail.interestedDesc')}</p>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder={t('contact.form.name')}
                      className="w-full bg-[#f5f0e8] border border-[#C4A265]/15 rounded-lg px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C4A265]/40"
                    />
                    <input
                      type="email"
                      placeholder={t('contact.form.email')}
                      className="w-full bg-[#f5f0e8] border border-[#C4A265]/15 rounded-lg px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C4A265]/40"
                    />
                    <input
                      type="tel"
                      placeholder={t('contact.form.phone')}
                      className="w-full bg-[#f5f0e8] border border-[#C4A265]/15 rounded-lg px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C4A265]/40"
                    />
                    <textarea
                      rows={3}
                      placeholder={t('contact.form.message')}
                      className="w-full bg-[#f5f0e8] border border-[#C4A265]/15 rounded-lg px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C4A265]/40 resize-none"
                      defaultValue={`I am interested in ${property.title}`}
                    />
                    <Button className="w-full bg-[#C4A265] hover:bg-[#b89555] text-white border-[#C4A265]">
                      {t('detail.sendInquiry')}
                    </Button>
                  </form>
                </div>

                <div className="bg-white border border-[#C4A265]/15 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-lg font-display text-foreground mb-4">{t('detail.contactDirect')}</h3>
                  <div className="space-y-4 font-sans">
                    <a href="tel:+905550000000" className="flex items-center gap-3 text-muted-foreground hover:text-[#C4A265] transition-colors">
                      <Phone className="w-5 h-5 text-[#C4A265]" />
                      <span className="text-sm">+90 555 000 0000</span>
                    </a>
                    <a href="mailto:info@evrichmond.com" className="flex items-center gap-3 text-muted-foreground hover:text-[#C4A265] transition-colors">
                      <Mail className="w-5 h-5 text-[#C4A265]" />
                      <span className="text-sm">info@evrichmond.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {similarProperties.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <div className="border-t border-[#C4A265]/15 pt-16">
              <h2 className="text-3xl font-display text-foreground mb-10">{t('detail.similar')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {similarProperties.map((p) => (
                  <Link key={p.id} href={`/properties/${p.id}`}>
                    <motion.div 
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-xl overflow-hidden border border-[#C4A265]/15 hover:border-[#C4A265]/40 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={`/images/${p.image}`}
                          alt={p.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[#C4A265] font-display text-xs border border-[#C4A265]/20">
                          {p.type}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center text-muted-foreground text-xs mb-1.5 font-sans">
                          <MapPin className="w-3 h-3 mr-1 text-[#C4A265]" />
                          {p.location}
                        </div>
                        <h3 className="font-display text-foreground text-lg mb-2">{p.title}</h3>
                        <div className="text-xl font-display text-[#C4A265]">{formatPrice(p.price)}</div>
                        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-[#C4A265]/10 text-muted-foreground text-xs font-sans">
                          <span className="flex items-center gap-1"><Bed className="w-3 h-3" /> {p.bedrooms}</span>
                          <span className="flex items-center gap-1"><Bath className="w-3 h-3" /> {p.bathrooms}</span>
                          <span className="flex items-center gap-1"><Square className="w-3 h-3" /> {p.area} m²</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={`/images/${galleryImages[activeImage]}`}
            alt={property.title}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setActiveImage(idx); }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === activeImage ? 'bg-[#C4A265]' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
