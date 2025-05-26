'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { testimonials } from '@/lib/data';
import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TestimonialSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('testimonials')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 p-3 rounded-full text-white">
              <Quote size={28} />
            </div>
            
            <div className="pt-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`transition-opacity duration-500 ${index === activeIndex ? 'block opacity-100' : 'hidden opacity-0'}`}
                >
                  <blockquote className="text-lg text-gray-700 text-center mb-8">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}