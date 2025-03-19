
import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-md-gray-100 to-md-gray-200 rounded-3xl p-10 sm:p-16 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-md-gray-300 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center bg-white text-md-gray-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="mr-2">Bereit für Effizienz?</span>
              <div className="w-1.5 h-1.5 rounded-full bg-md-black"></div>
            </div>
            
            <h2 className="heading-lg mb-6">
              <span className="bg-gradient-to-r from-md-black via-md-gray-800 to-md-gray-700 bg-clip-text text-transparent">
                Nehmen Sie Kontakt mit uns auf
              </span>
            </h2>
            
            <p className="text-md-gray-700 text-xl mb-10 leading-relaxed">
              Wir freuen uns darauf, Sie bei Ihren administrativen Aufgaben zu unterstützen und Ihnen 
              zu helfen, sich auf Ihr Kerngeschäft zu konzentrieren.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage an M&D Office Services" 
                className="button-primary group flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>E-Mail senden</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
