import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
const Hero: React.FC = () => {
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-figuro-cream">
      <div className="container-custom relative z-10 py-20">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-figuro-dark-green">
            <span className="block mb-2">Mehr Freiraum,</span>
            <span className="block mb-2">mehr Effizienz</span>
            <span className="text-figuro-medium-green">– Ihre Büroarbeit in besten Händen.</span>
          </h1>
          
          <p className="text-xl text-figuro-dark-green/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fokussieren Sie sich auf Ihr Kerngeschäft – wir kümmern uns um den Rest. 
            Remote-Unterstützung für alle Ihre Büroarbeiten.
          </p>
          
          <div className="flex justify-center">
            <a href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage" className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-4 bg-figuro-dark-green text-white rounded-full transition-all duration-300 hover:bg-figuro-medium-green group">
              <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">Kontakt aufnehmen</span>
              <ArrowRight className="w-5 h-5 ml-3 flex-shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        
        <div className="relative mt-16 max-w-2xl mx-auto">
          <img alt="M&D Office Services Team" className="w-full h-auto rounded-xl shadow-xl mx-auto" src="/lovable-uploads/d6b85e42-d8c7-4ab7-95a1-acf9022a3f70.jpg" />
        </div>
      </div>
    </section>;
};
export default Hero;