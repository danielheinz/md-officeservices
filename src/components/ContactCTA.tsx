import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
const ContactCTA: React.FC = () => {
  return <section className="py-20 bg-figuro-cream">
      <div className="container-custom">
        <div className="bg-white rounded-2xl p-8 md:p-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-figuro-cream text-figuro-dark-green text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="mr-2">Bereit für Effizienz?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-figuro-dark-green">Wir freuen uns darauf, Sie bei Ihren administrativen Aufgaben zu unterstützen!</h2>
            
            <p className="text-figuro-dark-green/80 text-xl mb-10 leading-relaxed">
              Wir freuen uns darauf, Sie bei Ihren administrativen Aufgaben zu unterstützen und Ihnen 
              zu helfen, sich auf Ihr Kerngeschäft zu konzentrieren.
            </p>
            
            <div className="flex justify-center">
              <a href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage" className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-4 bg-figuro-dark-green text-white rounded-full transition-all duration-300 hover:bg-figuro-medium-green group">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="font-medium whitespace-nowrap">Kontakt aufnehmen</span>
                <ArrowRight className="w-5 h-5 ml-3 flex-shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactCTA;