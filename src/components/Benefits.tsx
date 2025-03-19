
import React, { useEffect, useRef } from 'react';
import { DollarSign, Clock, Zap, Users, Globe, Heart } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitProps> = ({ icon, title, description }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className="flex items-start opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="w-10 h-10 rounded-lg bg-md-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-md-gray-600">{description}</p>
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
    <section id="vorteile" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block px-3 py-1 bg-md-gray-200 text-md-gray-800 rounded-full text-sm font-medium mb-4">
              Ihre Vorteile
            </span>
            <h2 className="heading-lg mb-8">Warum Sie mit uns arbeiten sollten</h2>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-8 lg:mb-0">
              <img 
                src="/lovable-uploads/4c795e55-a739-4863-b76f-4694b4d54510.png" 
                alt="Büroarbeiten" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-md-gray-900/30 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-10">
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
