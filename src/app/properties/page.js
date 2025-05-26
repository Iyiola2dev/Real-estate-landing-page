'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { properties } from '@/lib/data';
import PropertyCard from '@/components/PropertyCard';
import { useState, useEffect } from 'react';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function Properties() {
  const { t } = useLanguage();
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    status: ''
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Apply filters
  useEffect(() => {
    let result = [...properties];
    
    if (filters.location) {
      result = result.filter(p => 
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    if (filters.type) {
      result = result.filter(p => p.type === filters.type);
    }
    
    if (filters.minPrice) {
      result = result.filter(p => p.price >= parseInt(filters.minPrice));
    }
    
    if (filters.maxPrice) {
      result = result.filter(p => p.price <= parseInt(filters.maxPrice));
    }
    
    if (filters.bedrooms) {
      result = result.filter(p => p.bedrooms >= parseInt(filters.bedrooms));
    }
    
    if (filters.status) {
      result = result.filter(p => p.status === filters.status);
    }
    
    setFilteredProperties(result);
  }, [filters]);
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const clearFilters = () => {
    setFilters({
      location: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      status: ''
    });
  };
  
  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('properties')}
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Explore our comprehensive listings of exceptional properties, each one selected for its quality, location, and unique features.
          </p>
        </div>
        
        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Filter size={20} className="mr-2 text-gray-500" />
              <h2 className="text-xl font-semibold">{t('search.title')}</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={clearFilters}
                className="text-gray-500 hover:text-gray-700 flex items-center text-sm"
              >
                <X size={16} className="mr-1" />
                Clear Filters
              </button>
              <button 
                onClick={toggleFilters}
                className="md:hidden text-gray-500 hover:text-gray-700"
              >
                {isFilterOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 ${isFilterOpen || window.innerWidth >= 768 ? 'block' : 'hidden md:block'}`}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('location')}
              </label>
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                placeholder="Any location"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('propertyType')}
              </label>
              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any Type</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
                <option value="Villa">Villa</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Loft">Loft</option>
                <option value="Cabin">Cabin</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min Price
              </label>
              <select
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">No Min</option>
                <option value="100000">$100,000</option>
                <option value="300000">$300,000</option>
                <option value="500000">$500,000</option>
                <option value="750000">$750,000</option>
                <option value="1000000">$1,000,000</option>
                <option value="2000000">$2,000,000</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Price
              </label>
              <select
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">No Max</option>
                <option value="500000">$500,000</option>
                <option value="750000">$750,000</option>
                <option value="1000000">$1,000,000</option>
                <option value="2000000">$2,000,000</option>
                <option value="5000000">$5,000,000</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('bedrooms')}
              </label>
              <select
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
                <option value="Sold">Sold</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              {filteredProperties.length} Properties Found
            </h2>
            <div className="flex items-center">
              <label className="mr-2 text-sm text-gray-700">Sort by:</label>
              <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                <option>Featured</option>
                <option>Price (Low to High)</option>
                <option>Price (High to Low)</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <p className="text-gray-500 text-lg">No properties match your search criteria.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Previous
            </a>
            <a href="#" className="py-2 px-4 border border-gray-300 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700">
              1
            </a>
            <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              2
            </a>
            <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              3
            </a>
            <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Next
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}