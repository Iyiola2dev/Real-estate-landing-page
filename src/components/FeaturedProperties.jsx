'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { properties } from '@/lib/data';
import PropertyCard from './PropertyCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProperties() {
  const { t } = useLanguage();
  
  // Filter featured properties
  const featuredProperties = properties.filter(property => property.featured);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('featuredProperties')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of exceptional properties that represent the pinnacle of luxury and comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/properties" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            {t('viewAllProperties')}
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}