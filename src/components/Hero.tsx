
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-figuro-cream">
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
            <a 
              href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage an M&D Office Services" 
              className="px-8 py-4 bg-figuro-dark-green text-white rounded-full transition-all duration-300 hover:bg-figuro-medium-green inline-flex items-center justify-center group"
            >
              <span className="font-medium">Jetzt starten</span>
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        
        <div className="relative mt-16 max-w-3xl mx-auto">
          <img 
            src="/lovable-uploads/3a254657-cdf5-46e5-a96c-88902470f4fa.png" 
            alt="M&D Office Services Team" 
            className="w-full h-auto rounded-xl shadow-xl mx-auto" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
