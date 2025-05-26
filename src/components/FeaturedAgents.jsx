'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { agents } from '@/lib/data';
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedAgents() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('ourAgents')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced professionals is committed to providing exceptional service and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{agent.name}</h3>
                <p className="text-blue-600 mb-3">{agent.title}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Phone size={16} className="mr-2 text-gray-400" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail size={16} className="mr-2 text-gray-400" />
                    <span>{agent.email}</span>
                  </div>
                </div>
                
                <Link 
                  href={`/agents/${agent.id}`}
                  className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors mt-3"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}