
import React from 'react';

const Founders: React.FC = () => {
  return (
    <section id="ueber-uns" className="py-24 bg-md-gray-100">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-white text-md-gray-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="mr-2">Über uns</span>
            <div className="w-1.5 h-1.5 rounded-full bg-md-black"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-md-gray-900">
            Unser Unternehmen
          </h2>
          
          <p className="text-md-gray-600 text-lg">
            M&D Office Services wurde 2023 gegründet und bietet deutschsprachige Remote-Unterstützung 
            für Büroarbeiten an. Wir helfen unseren Kunden, sich auf ihr Kerngeschäft zu konzentrieren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div>
            <div className="overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/4dded550-2d22-48e9-87d5-5ce80542a071.png" 
                alt="Max Reusswig - Gründer" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-1">Max Reusswig</h3>
              <p className="text-md-gray-500 mb-4">Mitgründer & Geschäftsführer</p>
              <p className="text-md-gray-600">
                Experte für behördliche Genehmigungen und administrative Prozesse mit umfangreicher Erfahrung
                in der Optimierung von Büroarbeiten und Geschäftsabläufen.
              </p>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/63a51fbc-214f-4856-9753-2f60bf3179ee.png" 
                alt="Darlyn Brown - Gründerin" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-1">Darlyn Brown</h3>
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
