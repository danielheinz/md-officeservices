
import React from 'react';
import { DollarSign, Heart, Zap, Clock, Globe, Users, ArrowRight } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-figuro-dark-green" />,
      title: "Kosteneinsparung",
      description: "Weniger administrativer Aufwand durch effiziente Remote-Arbeit, ohne Festkosten für Personal oder Büroflächen."
    },
    {
      icon: <Heart className="w-6 h-6 text-figuro-dark-green" />,
      title: "Entlastung",
      description: "Konzentrieren Sie sich voll auf Ihr Kerngeschäft – wir übernehmen alle bürokratischen Aufgaben."
    },
    {
      icon: <Zap className="w-6 h-6 text-figuro-dark-green" />,
      title: "Effizienz",
      description: "Schnelle und reibungslose Bearbeitung aller Aufgaben durch ein eingespieltes, professionelles Team."
    },
    {
      icon: <Clock className="w-6 h-6 text-figuro-dark-green" />,
      title: "Individualität & Verfügbarkeit",
      description: "Flexible Arbeitszeiten und maßgeschneiderte Lösungen, angepasst an Ihre speziellen Anforderungen."
    },
    {
      icon: <Globe className="w-6 h-6 text-figuro-dark-green" />,
      title: "Vernetzung",
      description: "Unser erfahrenes Team verfügt über direkte Kontakte zu Behörden und relevanten Institutionen."
    },
    {
      icon: <Users className="w-6 h-6 text-figuro-dark-green" />,
      title: "Engagiertes Team",
      description: "Persönliche Betreuung durch ein kleines, deutschsprachiges Team für nachhaltige Zusammenarbeit."
    },
  ];

  return (
    <section id="vorteile" className="py-24 bg-white">
      <div className="container-custom">
        <div className="mb-4">
          <div className="inline-flex items-center bg-figuro-cream text-figuro-dark-green text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-figuro-border-green/20">
            <span className="mr-2">Vorteile</span>
          </div>
        </div>
        
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-figuro-dark-green max-w-xl">
            Warum Sie mit uns arbeiten sollten
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-5 mt-1">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-figuro-dark-green">{benefit.title}</h3>
                <p className="text-figuro-dark-green/80">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
