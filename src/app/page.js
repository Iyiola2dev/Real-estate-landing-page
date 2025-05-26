"use client";


import FeaturedAgents from "@/components/FeaturedAgents";
import FeaturedProperties from "@/components/FeaturedProperties";
import Hero from "@/components/Hero";
import TestimonialSection from "@/components/TestimonialSection";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Hero />

      <FeaturedProperties />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg"
                alt="Luxury Home"
                width={800} // adjust to fit your layout
                height={500}
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("exploreProperties")}
              </h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                At Luxury Homes, we understand that finding the perfect property
                is about more than just a place to live—it's about discovering a
                space that complements your lifestyle and aspirations. Our
                curated collection of exceptional properties spans stunning
                waterfront estates, sleek urban penthouses, charming historic
                homes, and everything in between.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Our expert agents are dedicated to providing personalized
                service, market insights, and a seamless experience from initial
                search to closing. Whether you're seeking your dream home, a
                strategic investment, or selling a cherished property, we're
                here to guide you every step of the way.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Premium Locations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Quality Assurance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Expert Guidance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Global Network</span>
                </div>
              </div>
              <a
                href="/about"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <FeaturedAgents />
    </div>
  );
}
