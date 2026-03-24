import React, { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { properties, locations, propertyTypes } from '@/data/mock-data';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function Properties() {
  const { t } = useI18n();
  const [filterLocation, setFilterLocation] = useState('All');
  const [filterType, setFilterType] = useState('All');

  const filteredProperties = properties.filter(p => {
    const matchLocation = filterLocation === 'All' || p.location === filterLocation;
    const matchType = filterType === 'All' || p.type === filterType;
    return matchLocation && matchType;
  });

  return (
    <div className="pt-24 min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display text-foreground mb-6"
          >
            {t('properties.title')}
          </motion.h1>
          
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl border border-[#c9a96e]/15 max-w-3xl shadow-md"
          >
            <div className="flex-1">
              <select 
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full bg-input text-foreground border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary appearance-none cursor-pointer font-sans"
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
                className="w-full bg-input text-foreground border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary appearance-none cursor-pointer font-sans"
              >
                <option value="All">{t('properties.filter.type')}</option>
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-center bg-primary text-black rounded-lg px-6 py-3 font-medium cursor-default">
              <Search className="w-5 h-5 mr-2" />
              Search
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
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
              onClick={() => { setFilterLocation('All'); setFilterType('All'); }}
              className="mt-6 text-primary hover:underline font-sans"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
