
import React from 'react';
import { FileText, Briefcase, Search, Archive, CheckCircle, ArrowRight } from 'lucide-react';

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
        
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-figuro-dark-green max-w-xl">
            Precision That Powers Success
          </h2>
          
          <a href="#" className="hidden md:flex items-center text-figuro-dark-green hover:text-figuro-medium-green bg-white px-6 py-3 rounded-full border border-figuro-border-green/20 group">
            <span>Explore All</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-figuro-dark-green">{service.title}</h3>
              <p className="text-figuro-dark-green/80 mb-6">{service.description}</p>
              <a href="#" className="inline-flex items-center text-figuro-dark-green font-medium group">
                <span>Lean More</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 md:hidden">
          <a href="#" className="flex items-center text-figuro-dark-green hover:text-figuro-medium-green bg-white px-6 py-3 rounded-full border border-figuro-border-green/20 group">
            <span>Explore All</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
