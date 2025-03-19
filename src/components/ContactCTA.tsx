
import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="bg-md-gray-100 rounded-2xl p-12 sm:p-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white text-md-gray-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="mr-2">Bereit für Effizienz?</span>
              <div className="w-1.5 h-1.5 rounded-full bg-md-black"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-md-gray-900">
              Nehmen Sie Kontakt mit uns auf
            </h2>
            
            <p className="text-md-gray-700 text-xl mb-10 leading-relaxed">
              Wir freuen uns darauf, Sie bei Ihren administrativen Aufgaben zu unterstützen und Ihnen 
              zu helfen, sich auf Ihr Kerngeschäft zu konzentrieren.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage an M&D Office Services" 
                className="inline-flex items-center px-8 py-4 bg-md-black text-white rounded-xl transition-all duration-300 hover:bg-md-gray-800 group"
              >
                <Mail className="w-5 h-5 mr-3" />
                <span className="font-medium">E-Mail senden</span>
                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
