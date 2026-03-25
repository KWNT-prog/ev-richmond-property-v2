import React from 'react';
import { Link } from 'wouter';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '@/data/mock-data';
import { useI18n } from '@/lib/i18n';
import { useCurrency } from '@/lib/currency';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const { t } = useI18n();
  const { formatPrice } = useCurrency();

  return (
    <Link href={`/properties/${property.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-white rounded-xl overflow-hidden border border-[#c9a96e]/15 hover:border-[#c9a96e]/40 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col h-full cursor-pointer"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={`/images/${property.image}`} 
            alt={property.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1 rounded border border-primary/30 text-primary font-display text-sm font-semibold">
            {property.type}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-muted-foreground text-sm mb-2 font-sans">
            <MapPin className="w-4 h-4 mr-1 text-primary" />
            {property.location}
          </div>
          
          <h3 className="text-xl font-display text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          
          <div className="mt-auto">
            <div className="text-2xl font-display text-primary mb-4">
              {formatPrice(property.price)}
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-border/50 text-muted-foreground text-sm font-sans">
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-2" />
                <span>{property.bedrooms} {t('property.beds')}</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-2" />
                <span>{property.bathrooms} {t('property.baths')}</span>
              </div>
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-2" />
                <span>{property.area} {t('property.sqm')}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
