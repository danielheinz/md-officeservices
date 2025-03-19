
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-md-gray-100 to-white">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-md-gray-200 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div 
            ref={heroRef}
            className="flex flex-col lg:col-span-6 opacity-0 translate-y-10 transition-all duration-1000"
          >
            <div className="inline-flex items-center bg-md-gray-200 text-md-gray-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6 self-start">
              <span className="mr-2">M&D Office Services</span>
              <div className="w-1.5 h-1.5 rounded-full bg-md-black"></div>
            </div>
            
            <h1 className="heading-xl font-bold text-balance leading-tight mb-8">
              <span className="bg-gradient-to-r from-md-black via-md-gray-800 to-md-gray-700 bg-clip-text text-transparent">
                Mehr Freiraum, mehr Effizienz
              </span>
              <br />
              <span className="text-md-gray-700">– Ihre Büroarbeit in besten Händen.</span>
            </h1>
            
            <p className="text-xl text-md-gray-700 mb-10 max-w-2xl leading-relaxed">
              Fokussieren Sie sich auf Ihr Kerngeschäft – wir kümmern uns um den Rest. 
              Remote-Unterstützung für alle Ihre Büroarbeiten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage an M&D Office Services" 
                className="button-primary group flex items-center justify-center"
              >
                <span>Kontakt aufnehmen</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#leistungen" 
                className="button-secondary"
              >
                Leistungen entdecken
              </a>
            </div>
          </div>
          
          <div className="relative lg:col-span-6 overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="/lovable-uploads/3a254657-cdf5-46e5-a96c-88902470f4fa.png" 
              alt="M&D Office Services Team" 
              className="w-full h-auto object-cover animate-fade-in" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-md-gray-900/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
