
import React from 'react';
import { DollarSign, Heart, Zap, Clock, Globe, Users } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-md-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="flex items-start">
        <div className="mr-6 flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-md-gray-200 to-md-gray-100 rounded-xl flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-md-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-5 h-5 text-md-black" />,
      title: "Kosteneinsparung",
      description: "Weniger administrativer Aufwand durch effiziente Remote-Arbeit, ohne Festkosten für Personal oder Büroflächen."
    },
    {
      icon: <Heart className="w-5 h-5 text-md-black" />,
      title: "Entlastung",
      description: "Konzentrieren Sie sich voll auf Ihr Kerngeschäft – wir übernehmen alle bürokratischen Aufgaben."
    },
    {
      icon: <Zap className="w-5 h-5 text-md-black" />,
      title: "Effizienz",
      description: "Schnelle und reibungslose Bearbeitung aller Aufgaben durch ein eingespieltes, professionelles Team."
    },
    {
      icon: <Clock className="w-5 h-5 text-md-black" />,
      title: "Individualität & Verfügbarkeit",
      description: "Flexible Arbeitszeiten und maßgeschneiderte Lösungen, angepasst an Ihre speziellen Anforderungen."
    },
    {
      icon: <Globe className="w-5 h-5 text-md-black" />,
      title: "Vernetzung",
      description: "Unser erfahrenes Team verfügt über direkte Kontakte zu Behörden und relevanten Institutionen."
    },
    {
      icon: <Users className="w-5 h-5 text-md-black" />,
      title: "Engagiertes Team",
      description: "Persönliche Betreuung durch ein kleines, deutschsprachiges Team für nachhaltige Zusammenarbeit."
    },
  ];

  return (
    <section id="vorteile" className="section-padding bg-gradient-to-b from-white to-md-gray-100">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-md-gray-200 text-md-gray-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="mr-2">Ihre Vorteile</span>
            <div className="w-1.5 h-1.5 rounded-full bg-md-black"></div>
          </div>
          
          <h2 className="heading-lg mb-6">
            <span className="bg-gradient-to-r from-md-black via-md-gray-800 to-md-gray-700 bg-clip-text text-transparent">
              Warum Sie mit uns arbeiten sollten
            </span>
          </h2>
          
          <p className="text-md-gray-600 text-lg">
            Wir bieten Ihnen zahlreiche Vorteile, die Ihre Arbeit erleichtern und Ihnen mehr Zeit für Ihr Kerngeschäft verschaffen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
