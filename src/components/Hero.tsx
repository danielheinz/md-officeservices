
import React, { useEffect, useRef } from 'react';

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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-md-gray-100 opacity-70"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={heroRef}
            className="flex flex-col opacity-0 translate-y-10 transition-all duration-1000"
          >
            <span className="px-4 py-1 rounded-full bg-md-gray-200 text-md-gray-800 text-sm font-medium inline-block mb-6 self-start">
              M&D Office Services
            </span>
            
            <h1 className="heading-xl mb-6 text-balance">
              Mehr Freiraum, mehr Effizienz – Ihre Büroarbeit in besten Händen.
            </h1>
            
            <p className="text-lg text-md-gray-700 mb-8 max-w-lg">
              Fokussieren Sie sich auf Ihr Kerngeschäft – wir kümmern uns um den Rest. 
              Remote-Unterstützung für alle Ihre Büroarbeiten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage an M&D Office Services" 
                className="button-primary"
              >
                Kontakt aufnehmen
              </a>
              <a 
                href="#leistungen" 
                className="button-secondary"
              >
                Leistungen entdecken
              </a>
            </div>
          </div>
          
          <div className="relative h-[500px] lg:h-auto overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/lovable-uploads/3a254657-cdf5-46e5-a96c-88902470f4fa.png" 
              alt="M&D Office Services Team" 
              className="w-full h-full object-cover animate-fade-in" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-md-gray-900/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
