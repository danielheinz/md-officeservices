
import React from 'react';

const Founders: React.FC = () => {
  return (
    <section id="ueber-uns" className="py-24 bg-figuro-cream">
      <div className="container-custom">
        <div className="mb-4">
          <div className="inline-flex items-center bg-white text-figuro-dark-green text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-figuro-border-green/20">
            <span className="mr-2">Über uns</span>
          </div>
        </div>
        
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-figuro-dark-green max-w-xl">
            Unser Unternehmen
          </h2>
        </div>

        <p className="text-figuro-dark-green/80 text-lg mb-16 max-w-3xl">
          M&D Office Services wurde 2023 gegründet und bietet deutschsprachige Remote-Unterstützung 
          für Büroarbeiten an. Wir helfen unseren Kunden, sich auf ihr Kerngeschäft zu konzentrieren.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/4dded550-2d22-48e9-87d5-5ce80542a071.png" 
                alt="Max Reusswig - Gründer" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-1 text-figuro-dark-green">Max Reusswig</h3>
              <p className="text-figuro-dark-green/70 mb-4">Mitgründer & Geschäftsführer</p>
              <p className="text-figuro-dark-green/80">
                Experte für behördliche Genehmigungen und administrative Prozesse mit umfangreicher Erfahrung
                in der Optimierung von Büroarbeiten und Geschäftsabläufen.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/63a51fbc-214f-4856-9753-2f60bf3179ee.png" 
                alt="Darlyn Brown - Gründerin" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-1 text-figuro-dark-green">Darlyn Brown</h3>
              <p className="text-figuro-dark-green/70 mb-4">Mitgründerin & Geschäftsführerin</p>
              <p className="text-figuro-dark-green/80">
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
