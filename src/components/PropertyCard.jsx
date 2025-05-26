'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';
import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react';

export default function PropertyCard({ property }) {
  const { t } = useLanguage();
  
  const { 
    id, 
    title, 
    price, 
    location, 
    bedrooms, 
    bathrooms, 
    area, 
    type, 
    images 
  } = property;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Link href={`/properties/${id}`} className="block relative h-64 overflow-hidden">
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
            {type}
          </div>
        </Link>
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors">
          <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
            <Link href={`/properties/${id}`}>
              {title}
            </Link>
          </h3>
          <span className="text-blue-600 font-bold">{formatPrice(price)}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1 text-gray-400" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-700">
            <Bed size={18} className="mr-1 text-gray-400" />
            <span className="text-sm mr-3">{bedrooms} {t('bedroomsShort')}</span>
            
            <Bath size={18} className="mr-1 text-gray-400" />
            <span className="text-sm mr-3">{bathrooms} {t('bathroomsShort')}</span>
            
            <Square size={18} className="mr-1 text-gray-400" />
            <span className="text-sm">{area} {t('sqftShort')}</span>
          </div>
        </div>
      </div>
      
      <div className="px-5 pb-5">
        <Link 
          href={`/properties/${id}`}
          className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          {t('viewDetails')}
        </Link>
      </div>
    </div>
  );
}