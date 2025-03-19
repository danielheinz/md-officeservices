
import React from 'react';
import { FileText, Briefcase, Search, Archive, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="flex flex-col bg-white p-8 rounded-xl shadow-sm border border-md-gray-200 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-md-gray-100 flex items-center justify-center mb-6">
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
      description: "Komplette Abwicklung aller Remote-Büroarbeiten für Sie und Ihr Unternehmen.",
      delay: 100
    },
    {
      icon: <FileText className="w-6 h-6 text-md-black" />,
      title: "Einholung von Genehmigungen",
      description: "Beantragung von verkehrsrechtlichen Anordnungen, Grabegenehmigungen und Sondernutzungen.",
      delay: 200
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-md-black" />,
      title: "Verkehrszeichenpläne",
      description: "Erstellung gesetzeskonformer Verkehrszeichenpläne nach den aktuellen Vorgaben.",
      delay: 300
    },
    {
      icon: <Search className="w-6 h-6 text-md-black" />,
      title: "Planauskünfte",
      description: "Professionelle Beantragung von Planauskünften bei verschiedenen Behörden und Versorgern.",
      delay: 400
    },
    {
      icon: <Archive className="w-6 h-6 text-md-black" />,
      title: "Papierlose Archivierung",
      description: "Effiziente digitale Archivierung in Ihr vorhandenes Archivierungssystem.",
      delay: 500
    },
  ];

  return (
    <section id="leistungen" className="section-padding bg-md-gray-100">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-md-gray-200 text-md-gray-800 rounded-full text-sm font-medium mb-4">
            Unsere Leistungen
          </span>
          <h2 className="heading-lg mb-6">Was wir für Sie erledigen können</h2>
          <p className="text-md-gray-600">
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
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
