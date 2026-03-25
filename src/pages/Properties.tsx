import React, { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { properties, locations, propertyTypes } from '@/data/mock-data';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function Properties() {
  const { t } = useI18n();
  const [filterLocation, setFilterLocation] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [filterPrice, setFilterPrice] = useState('All');

  const filteredProperties = properties.filter(p => {
    const matchLocation = filterLocation === 'All' || p.location === filterLocation;
    const matchType = filterType === 'All' || p.type === filterType;
    let matchPrice = true;
    if (filterPrice === 'under2') matchPrice = p.price < 2000000;
    else if (filterPrice === '2to5') matchPrice = p.price >= 2000000 && p.price <= 5000000;
    else if (filterPrice === 'over5') matchPrice = p.price > 5000000;
    return matchLocation && matchType && matchPrice;
  });

  const clearFilters = () => {
    setFilterLocation('All');
    setFilterType('All');
    setFilterPrice('All');
  };

  const hasActiveFilters = filterLocation !== 'All' || filterType !== 'All' || filterPrice !== 'All';

  return (
    <div className="pt-24 min-h-screen bg-background pb-24">
      <div className="bg-secondary/30 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display text-foreground mb-6"
          >
            {t('properties.title')}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl border border-[#c9a96e]/15 max-w-4xl shadow-md"
          >
            <div className="flex-1">
              <select 
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full bg-[#f5f0e8] text-foreground border border-[#c9a96e]/15 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c9a96e]/40 appearance-none cursor-pointer font-sans text-sm"
              >
                <option value="All">{t('properties.filter.all')}</option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <select 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full bg-[#f5f0e8] text-foreground border border-[#c9a96e]/15 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c9a96e]/40 appearance-none cursor-pointer font-sans text-sm"
              >
                <option value="All">{t('properties.filter.type')}</option>
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <select 
                value={filterPrice}
                onChange={(e) => setFilterPrice(e.target.value)}
                className="w-full bg-[#f5f0e8] text-foreground border border-[#c9a96e]/15 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c9a96e]/40 appearance-none cursor-pointer font-sans text-sm"
              >
                <option value="All">{t('properties.filter.price')}</option>
                <option value="under2">{t('properties.filter.price.under2')}</option>
                <option value="2to5">{t('properties.filter.price.2to5')}</option>
                <option value="over5">{t('properties.filter.price.over5')}</option>
              </select>
            </div>
            <div className="flex items-center justify-center bg-[#c9a96e] hover:bg-[#b89555] text-white rounded-lg px-6 py-3 font-sans text-sm font-medium cursor-pointer transition-colors">
              <Search className="w-4 h-4 mr-2" />
              Search
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between mb-8">
          <p className="text-muted-foreground font-sans text-sm">
            <span className="text-foreground font-medium">{filteredProperties.length}</span> {t('properties.results')}
          </p>
          {hasActiveFilters && (
            <button 
              onClick={clearFilters}
              className="text-[#c9a96e] hover:text-[#b89555] text-sm font-sans flex items-center gap-1 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Clear Filters
            </button>
          )}
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-2xl font-display text-muted-foreground mb-4">No properties found</h3>
            <p className="text-muted-foreground font-sans">Try adjusting your filters to see more results.</p>
            <button 
              onClick={clearFilters}
              className="mt-6 text-[#c9a96e] hover:underline font-sans"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
