
import React from 'react';
import { FileText, Briefcase, Search, Archive, CheckCircle, FileSearch, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Briefcase className="w-7 h-7 text-figuro-dark-green" />,
      title: "Rundum-Service",
      description: "Komplette Abwicklung aller Remote-Büroarbeiten für Sie und Ihr Unternehmen."
    },
    {
      icon: <FileText className="w-7 h-7 text-figuro-dark-green" />,
      title: "Einholung von Genehmigungen",
      description: "Beantragung von verkehrsrechtlichen Anordnungen, Grabegenehmigungen und Sondernutzungen."
    },
    {
      icon: <CheckCircle className="w-7 h-7 text-figuro-dark-green" />,
      title: "Verkehrszeichenpläne",
      description: "Erstellung gesetzeskonformer Verkehrszeichenpläne nach den aktuellen Vorgaben."
    },
    {
      icon: <Search className="w-7 h-7 text-figuro-dark-green" />,
      title: "Planauskünfte",
      description: "Professionelle Beantragung von Planauskünften bei verschiedenen Behörden und Versorgern."
    },
    {
      icon: <Archive className="w-7 h-7 text-figuro-dark-green" />,
      title: "Papierlose Archivierung",
      description: "Effiziente digitale Archivierung in Ihr vorhandenes Archivierungssystem."
    },
    {
      icon: <FileSearch className="w-7 h-7 text-figuro-dark-green" />,
      title: "Dokumentenmanagement",
      description: "Strukturierte Organisation und Verwaltung Ihrer Dokumente für schnellen und sicheren Zugriff."
    }
  ];

  return (
    <section id="leistungen" className="py-24 bg-figuro-cream">
      <div className="container-custom">
        <div className="mb-4">
          <div className="inline-flex items-center bg-white text-figuro-dark-green text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-figuro-border-green/20">
            <span className="mr-2">Leistungen</span>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-figuro-dark-green max-w-xl">
            Unsere Büroservices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-figuro-dark-green/5 border border-figuro-dark-green/10 p-8 rounded-xl hover:bg-white transition-all duration-300">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-figuro-dark-green">{service.title}</h3>
              <p className="text-figuro-dark-green/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
