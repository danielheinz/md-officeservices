
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-md-gray-100">
      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center bg-white text-md-gray-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6 self-start">
              <span className="mr-2">M&D Office Services</span>
              <div className="w-1.5 h-1.5 rounded-full bg-md-black"></div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="block mb-2">Mehr Freiraum,</span>
              <span className="block mb-2">mehr Effizienz</span>
              <span className="text-md-gray-700">– Ihre Büroarbeit in besten Händen.</span>
            </h1>
            
            <p className="text-xl text-md-gray-700 mb-10 max-w-2xl leading-relaxed">
              Fokussieren Sie sich auf Ihr Kerngeschäft – wir kümmern uns um den Rest. 
              Remote-Unterstützung für alle Ihre Büroarbeiten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage an M&D Office Services" 
                className="px-8 py-4 bg-md-black text-white rounded-xl transition-all duration-300 hover:bg-md-gray-800 inline-flex items-center justify-center group"
              >
                <span className="font-medium">Kontakt aufnehmen</span>
                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#leistungen" 
                className="px-8 py-4 bg-white border border-md-gray-200 text-md-gray-800 rounded-xl transition-all duration-300 hover:bg-md-gray-50 inline-flex items-center justify-center"
              >
                <span className="font-medium">Leistungen entdecken</span>
              </a>
            </div>
          </div>
          
          <div className="relative lg:col-span-6">
            <img 
              src="/lovable-uploads/3a254657-cdf5-46e5-a96c-88902470f4fa.png" 
              alt="M&D Office Services Team" 
              className="w-full h-auto rounded-2xl shadow-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
