
import React from 'react';
import { DollarSign, Heart, Zap, Clock, Globe, Users } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-md-black" />,
      title: "Kosteneinsparung",
      description: "Weniger administrativer Aufwand durch effiziente Remote-Arbeit, ohne Festkosten für Personal oder Büroflächen."
    },
    {
      icon: <Heart className="w-6 h-6 text-md-black" />,
      title: "Entlastung",
      description: "Konzentrieren Sie sich voll auf Ihr Kerngeschäft – wir übernehmen alle bürokratischen Aufgaben."
    },
    {
      icon: <Zap className="w-6 h-6 text-md-black" />,
      title: "Effizienz",
      description: "Schnelle und reibungslose Bearbeitung aller Aufgaben durch ein eingespieltes, professionelles Team."
    },
    {
      icon: <Clock className="w-6 h-6 text-md-black" />,
      title: "Individualität & Verfügbarkeit",
      description: "Flexible Arbeitszeiten und maßgeschneiderte Lösungen, angepasst an Ihre speziellen Anforderungen."
    },
    {
      icon: <Globe className="w-6 h-6 text-md-black" />,
      title: "Vernetzung",
      description: "Unser erfahrenes Team verfügt über direkte Kontakte zu Behörden und relevanten Institutionen."
    },
    {
      icon: <Users className="w-6 h-6 text-md-black" />,
      title: "Engagiertes Team",
      description: "Persönliche Betreuung durch ein kleines, deutschsprachiges Team für nachhaltige Zusammenarbeit."
    },
  ];

  return (
    <section id="vorteile" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-md-gray-100 text-md-gray-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="mr-2">Ihre Vorteile</span>
            <div className="w-1.5 h-1.5 rounded-full bg-md-black"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-md-gray-900">
            Warum Sie mit uns arbeiten sollten
          </h2>
          
          <p className="text-md-gray-600 text-lg">
            Wir bieten Ihnen zahlreiche Vorteile, die Ihre Arbeit erleichtern und Ihnen mehr Zeit für Ihr Kerngeschäft verschaffen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-5 mt-1">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-md-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
