
import React, { useEffect, useRef } from 'react';

const Founders: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.founder-item');
          elements.forEach((el, index) => {
            setTimeout(() => {
              (el as HTMLElement).classList.add('opacity-100', 'translate-y-0');
              (el as HTMLElement).classList.remove('opacity-0', 'translate-y-10');
            }, index * 200);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="ueber-uns" className="section-padding bg-md-gray-100" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-md-gray-200 text-md-gray-800 rounded-full text-sm font-medium mb-4">
            Über uns
          </span>
          <h2 className="heading-lg mb-6">Unser Unternehmen</h2>
          <p className="text-md-gray-600">
            M&D Office Services wurde 2023 gegründet und bietet deutschsprachige Remote-Unterstützung 
            für Büroarbeiten an. Wir helfen unseren Kunden, sich auf ihr Kerngeschäft zu konzentrieren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="founder-item opacity-0 translate-y-10 transition-all duration-700 bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative aspect-square">
              <img 
                src="/lovable-uploads/90e843f1-d01d-4e63-a625-dec0dbb3dd3d.png" 
                alt="Max Reusswig - Gründer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Max Reusswig</h3>
              <p className="text-md-gray-500 mb-4">Mitgründer & Geschäftsführer</p>
              <p className="text-md-gray-600">
                Experte für behördliche Genehmigungen und administrative Prozesse mit umfangreicher Erfahrung
                in der Optimierung von Büroarbeiten und Geschäftsabläufen.
              </p>
            </div>
          </div>

          <div className="founder-item opacity-0 translate-y-10 transition-all duration-700 bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative aspect-square">
              <img 
                src="/lovable-uploads/63a51fbc-214f-4856-9753-2f60bf3179ee.png" 
                alt="Darlyn Brown - Gründerin" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Darlyn Brown</h3>
              <p className="text-md-gray-500 mb-4">Mitgründerin & Geschäftsführerin</p>
              <p className="text-md-gray-600">
                Spezialistin für digitale Arbeitsprozesse und papierlose Archivierung mit langjähriger
                Erfahrung in der effizienten Bearbeitung administrativer Aufgaben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
