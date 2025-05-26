'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const { t } = useLanguage();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log({ location, propertyType, priceRange });
    // Redirect to properties page with search params
  };
  
  return (
    <div className="relative h-screen ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center py-[20rem] ">
        <div className="max-w-3xl py-[20rem]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            {t('findYourDreamHome')}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
            Discover exceptional properties tailored to your lifestyle and aspirations.
          </p>
          
          {/* Search Box */}
          <div className="backdrop-blur-lg rounded-lg p-4 shadow-lg animate-fade-in-up animation-delay-300">
            <h2 className="text-xl font-semibold mb-4 text-white">
              {t('search.title')}
            </h2>
            <form onSubmit={handleSearch}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-white mb-1">
                    {t('search.location')}
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, neighborhood..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="property-type" className="block text-sm font-medium text-white mb-1">
                    {t('search.propertyType')}
                  </label>
                  <select
                    id="property-type"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{t('search.all')}</option>
                    <option value="house">{t('search.house')}</option>
                    <option value="apartment">{t('search.apartment')}</option>
                    <option value="condo">{t('search.condo')}</option>
                    <option value="villa">{t('search.villa')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="price-range" className="block text-sm font-medium text-white mb-1">
                    {t('search.priceRange')}
                  </label>
                  <select
                    id="price-range"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Any Price</option>
                    <option value="0-500000">$0 - $500,000</option>
                    <option value="500000-1000000">$500,000 - $1,000,000</option>
                    <option value="1000000-2000000">$1,000,000 - $2,000,000</option>
                    <option value="2000000+">$2,000,000+</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                  {t('search.advanced')}
                </a>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium flex items-center transition-colors"
                >
                  <Search size={18} className="mr-2" />
                  {t('search.search')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}