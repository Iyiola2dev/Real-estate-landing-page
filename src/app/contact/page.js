'use client';

import { useLanguage } from '@/lib/LanguageContext';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contactUs')}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're here to help you with all your real estate needs. Contact our team of experts for personalized assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">
              1234 Luxury Lane<br />
              Beverly Hills, CA 90210<br />
              United States
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">
              Main Office: +1 (555) 123-4567<br />
              Support: +1 (555) 765-4321<br />
              Fax: +1 (555) 987-6543
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">
              General: info@luxuryhomes.com<br />
              Sales: sales@luxuryhomes.com<br />
              Support: support@luxuryhomes.com
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          
          {/* Office Hours & Map */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Office Hours</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock size={20} className="mr-3 text-blue-600 mt-1" />
                  <div>
                    <span className="block font-medium">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="mr-3 text-blue-600 mt-1" />
                  <div>
                    <span className="block font-medium">Saturday</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="mr-3 text-blue-600 mt-1" />
                  <div>
                    <span className="block font-medium">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Office Location</h2>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center shadow-md">
              <p className="text-gray-600">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}