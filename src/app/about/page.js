'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { CheckCircle, Users, Home, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('about')}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Luxury Homes is a premier real estate agency specializing in high-end properties and exceptional client service.
          </p>
        </div>
        
        {/* Hero Section */}
        <div className="relative h-96 mb-16 rounded-xl overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" 
            alt="Luxury Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="text-white p-8 md:p-16 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We Help You Find Your Dream Home</h2>
              <p className="text-gray-200 mb-6">
                With over 20 years of experience in luxury real estate, we have developed a reputation for exceptional service and expertise.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Founded in 2000, Luxury Homes began with a simple mission: to provide a personalized and exceptional real estate experience for discerning clients. What started as a small team of passionate real estate professionals has grown into one of the most respected agencies in the industry.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Over the past two decades, we have cultivated an extensive network of clients, partners, and properties across the globe. Our team's deep market knowledge, attention to detail, and commitment to client satisfaction has allowed us to consistently deliver outstanding results.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, Luxury Homes represents some of the world's most extraordinary properties and serves a distinguished clientele who expect nothing but the best. We continue to uphold the values that have defined us from the beginning: integrity, expertise, and personalized service.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg" 
                alt="Luxury Property" 
                className="rounded-lg shadow-md h-64 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg" 
                alt="Luxury Interior" 
                className="rounded-lg shadow-md h-64 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg" 
                alt="Modern Home" 
                className="rounded-lg shadow-md h-64 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg" 
                alt="Luxury Pool" 
                className="rounded-lg shadow-md h-64 object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-16 bg-white rounded-xl shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
              <p className="text-gray-600">
                We place our clients' needs and goals at the center of everything we do, providing personalized service and solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with the highest standards of transparency, honesty, and ethical practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our business, from the properties we represent to the service we provide.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Home size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We maintain rigorous standards for the properties we represent, ensuring they meet our clients' expectations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <img 
              src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg" 
              alt="Team Meeting" 
              className="rounded-lg shadow-xl h-auto"
            />
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                    <TrendingUp size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Market Expertise</h3>
                  <p className="text-gray-600">
                    Our team's deep knowledge of local and global markets enables us to provide valuable insights and guidance for your real estate decisions.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                    <Users size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
                  <p className="text-gray-600">
                    We take the time to understand your unique needs and preferences, tailoring our approach to achieve your specific goals.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                    <Award size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Exceptional Service</h3>
                  <p className="text-gray-600">
                    Our commitment to client satisfaction has earned us numerous industry awards and a loyal clientele who return to us for all their real estate needs.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                    <Home size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Curated Properties</h3>
                  <p className="text-gray-600">
                    We carefully select each property in our portfolio, ensuring that we represent only the finest homes and investment opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing, our team is here to help you achieve your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/properties"
              className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition-colors"
            >
              Browse Properties
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}