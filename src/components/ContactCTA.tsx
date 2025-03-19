
import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="bg-md-gray-100 rounded-2xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-md-gray-300 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-white text-md-gray-800 rounded-full text-sm font-medium mb-4">
              Bereit für Effizienz?
            </span>
            <h2 className="heading-lg mb-6">Nehmen Sie Kontakt mit uns auf</h2>
            <p className="text-md-gray-700 text-lg mb-8">
              Wir freuen uns darauf, Sie bei Ihren administrativen Aufgaben zu unterstützen und Ihnen 
              zu helfen, sich auf Ihr Kerngeschäft zu konzentrieren.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage an M&D Office Services" 
                className="button-primary group"
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
