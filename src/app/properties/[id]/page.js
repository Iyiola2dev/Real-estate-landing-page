'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { properties, agents } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  CalendarDays, 
  Share2, 
  Heart, 
  Printer,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function PropertyDetail({ params }) {
  const { t } = useLanguage();
  const router = useRouter();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    if (params.id) {
      const propertyId = parseInt(params.id);
      const foundProperty = properties.find(p => p.id === propertyId);
      
      if (foundProperty) {
        setProperty(foundProperty);
      } else {
        router.push('/properties');
      }
    }
    setLoading(false);
  }, [params.id, router]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
        <p className="text-gray-600 mb-8">The property you're looking for does not exist or has been removed.</p>
        <Link 
          href="/properties"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Browse Properties
        </Link>
      </div>
    );
  }
  
  // Random agent for the property
  const propertyAgent = agents[Math.floor(Math.random() * agents.length)];
  
  // Image gallery navigation
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % property.images.length);
  };
  
  const prevImage = () => {
    setCurrentImage((currentImage - 1 + property.images.length) % property.images.length);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Property Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
              <div className="flex items-center mt-2">
                <MapPin size={18} className="text-gray-500 mr-1" />
                <span className="text-gray-700">{property.address}</span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {formatPrice(property.price)}
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                {property.status}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center">
              <Bed size={20} className="text-gray-500 mr-2" />
              <span className="text-gray-700">
                {property.bedrooms} {t('bedrooms')}
              </span>
            </div>
            <div className="flex items-center">
              <Bath size={20} className="text-gray-500 mr-2" />
              <span className="text-gray-700">
                {property.bathrooms} {t('bathrooms')}
              </span>
            </div>
            <div className="flex items-center">
              <Square size={20} className="text-gray-500 mr-2" />
              <span className="text-gray-700">
                {property.area} {t('sqftShort')}
              </span>
            </div>
            <div className="flex items-center">
              <CalendarDays size={20} className="text-gray-500 mr-2" />
              <span className="text-gray-700">
                Built {property.yearBuilt}
              </span>
            </div>
          </div>
          
          <div className="flex space-x-4 mt-6">
            <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Heart size={20} className="mr-1" />
              <span>Save</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Share2 size={20} className="mr-1" />
              <span>Share</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Printer size={20} className="mr-1" />
              <span>Print</span>
            </button>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="mb-8">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img 
              src={property.images[currentImage]} 
              alt={`${property.title} - Image ${currentImage + 1}`}
              className="w-full h-full object-cover"
            />
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-3 py-1 rounded-full text-sm">
              {currentImage + 1} / {property.images.length}
            </div>
          </div>
          
          <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
            {property.images.map((image, index) => (
              <button 
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                  currentImage === index ? 'border-blue-600' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Property Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {property.description}
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold mb-4">Property Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-600">Map will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Contact and Agent */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={propertyAgent.image} 
                    alt={propertyAgent.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{propertyAgent.name}</h3>
                  <p className="text-gray-600 text-sm">{propertyAgent.title}</p>
                  <p className="text-blue-600 text-sm mt-1">{propertyAgent.phone}</p>
                </div>
              </div>
              
              <ContactForm />
            </div>
            
            <div className="bg-blue-50 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Similar Properties</h3>
              <div className="space-y-4">
                {properties
                  .filter(p => p.type === property.type && p.id !== property.id)
                  .slice(0, 2)
                  .map(similarProp => (
                    <Link 
                      key={similarProp.id}
                      href={`/properties/${similarProp.id}`}
                      className="block bg-white rounded-md overflow-hidden shadow hover:shadow-md transition-shadow"
                    >
                      <div className="flex">
                        <div className="w-24 h-24">
                          <img 
                            src={similarProp.images[0]} 
                            alt={similarProp.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3 flex-1">
                          <h4 className="font-medium text-gray-900 text-sm mb-1 line-clamp-1">{similarProp.title}</h4>
                          <p className="text-blue-600 text-sm font-semibold">{formatPrice(similarProp.price)}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}