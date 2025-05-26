'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { agents } from '@/lib/data';
import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function Agents() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('ourAgents')}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet our team of experienced professionals dedicated to providing exceptional service and finding the perfect property for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {agents.map((agent) => (
            <div 
              key={agent.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="h-72 overflow-hidden">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{agent.name}</h3>
                <p className="text-blue-600 mb-4">{agent.title}</p>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{agent.bio}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Phone size={16} className="mr-2 text-blue-600" />
                    <a href={`tel:${agent.phone}`} className="hover:text-blue-600 transition-colors">
                      {agent.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail size={16} className="mr-2 text-blue-600" />
                    <a href={`mailto:${agent.email}`} className="hover:text-blue-600 transition-colors">
                      {agent.email}
                    </a>
                  </div>
                </div>
                
                <Link 
                  href={`/agents/${agent.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  View Full Profile
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-600 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Join Our Team of Professionals
              </h2>
              <p className="text-blue-100 mb-6">
                Are you a passionate real estate professional looking to advance your career? We're always looking for talented individuals to join our team.
              </p>
              <a
                href="/careers"
                className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition-colors"
              >
                View Opportunities
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
                alt="Team meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}