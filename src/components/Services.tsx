
import React from 'react';
import { FileText, Briefcase, Search, Archive, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col p-8">
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-md-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Briefcase className="w-7 h-7 text-md-black" />,
      title: "Rundum-Service",
      description: "Komplette Abwicklung aller Remote-Büroarbeiten für Sie und Ihr Unternehmen."
    },
    {
      icon: <FileText className="w-7 h-7 text-md-black" />,
      title: "Einholung von Genehmigungen",
      description: "Beantragung von verkehrsrechtlichen Anordnungen, Grabegenehmigungen und Sondernutzungen."
    },
    {
      icon: <CheckCircle className="w-7 h-7 text-md-black" />,
      title: "Verkehrszeichenpläne",
      description: "Erstellung gesetzeskonformer Verkehrszeichenpläne nach den aktuellen Vorgaben."
    },
    {
      icon: <Search className="w-7 h-7 text-md-black" />,
      title: "Planauskünfte",
      description: "Professionelle Beantragung von Planauskünften bei verschiedenen Behörden und Versorgern."
    },
    {
      icon: <Archive className="w-7 h-7 text-md-black" />,
      title: "Papierlose Archivierung",
      description: "Effiziente digitale Archivierung in Ihr vorhandenes Archivierungssystem."
    },
  ];

  return (
    <section id="leistungen" className="py-24 bg-md-gray-100">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-white text-md-gray-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="mr-2">Unsere Leistungen</span>
            <div className="w-1.5 h-1.5 rounded-full bg-md-black"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-md-gray-900">
            Was wir für Sie erledigen können
          </h2>
          
          <p className="text-md-gray-600 text-lg">
            Wir bieten umfassende Remote-Unterstützung für alle administrativen Aufgaben, 
            damit Sie sich voll auf Ihr Kerngeschäft konzentrieren können.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white rounded-xl overflow-hidden">
          {services.map((service, index) => (
            <div key={index} className={`${index % 3 !== 0 ? 'border-l border-md-gray-100' : ''} ${index > 2 ? 'border-t border-md-gray-100' : ''}`}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
