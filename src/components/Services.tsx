
import React from 'react';
import { FileText, Briefcase, Search, Archive, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-md-gray-200 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-md-gray-200 to-md-gray-100 flex items-center justify-center mb-6">
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
      icon: <Briefcase className="w-6 h-6 text-md-black" />,
      title: "Rundum-Service",
      description: "Komplette Abwicklung aller Remote-Büroarbeiten für Sie und Ihr Unternehmen."
    },
    {
      icon: <FileText className="w-6 h-6 text-md-black" />,
      title: "Einholung von Genehmigungen",
      description: "Beantragung von verkehrsrechtlichen Anordnungen, Grabegenehmigungen und Sondernutzungen."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-md-black" />,
      title: "Verkehrszeichenpläne",
      description: "Erstellung gesetzeskonformer Verkehrszeichenpläne nach den aktuellen Vorgaben."
    },
    {
      icon: <Search className="w-6 h-6 text-md-black" />,
      title: "Planauskünfte",
      description: "Professionelle Beantragung von Planauskünften bei verschiedenen Behörden und Versorgern."
    },
    {
      icon: <Archive className="w-6 h-6 text-md-black" />,
      title: "Papierlose Archivierung",
      description: "Effiziente digitale Archivierung in Ihr vorhandenes Archivierungssystem."
    },
  ];

  return (
    <section id="leistungen" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-md-gray-200 text-md-gray-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="mr-2">Unsere Leistungen</span>
            <div className="w-1.5 h-1.5 rounded-full bg-md-black"></div>
          </div>
          
          <h2 className="heading-lg mb-6">
            <span className="bg-gradient-to-r from-md-black via-md-gray-800 to-md-gray-700 bg-clip-text text-transparent">
              Was wir für Sie erledigen können
            </span>
          </h2>
          
          <p className="text-md-gray-600 text-lg">
            Wir bieten umfassende Remote-Unterstützung für alle administrativen Aufgaben, 
            damit Sie sich voll auf Ihr Kerngeschäft konzentrieren können.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
