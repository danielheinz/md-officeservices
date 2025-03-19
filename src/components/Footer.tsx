
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, MapPin, Phone } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-figuro-dark-green py-12 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-5">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Lassen Sie uns zusammenarbeiten
                </h2>
                
                <a 
                  href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage" 
                  className="inline-flex items-center bg-white text-figuro-dark-green px-6 py-3 rounded-full transition-all duration-300 hover:bg-figuro-cream group mt-6"
                >
                  <span className="font-medium">Kontakt aufnehmen</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl mb-4">Menü</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
                  </li>
                  <li>
                    <a href="#leistungen" className="text-white/80 hover:text-white transition-colors">Leistungen</a>
                  </li>
                  <li>
                    <a href="#vorteile" className="text-white/80 hover:text-white transition-colors">Vorteile</a>
                  </li>
                  <li>
                    <a href="#ueber-uns" className="text-white/80 hover:text-white transition-colors">Über uns</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-4">Rechtliches</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/impressum" className="text-white/80 hover:text-white transition-colors">Impressum</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-8 border-t border-white/20 flex-wrap gap-4">
          <p className="text-white/60">
            &copy; {currentYear} M&D Office Services FZCO. Alle Rechte vorbehalten.
          </p>
          
          <img 
            src="/lovable-uploads/19e0cdf5-bb7e-4dab-bd7d-95690d22d1f6.png" 
            alt="M&D Office Services Logo" 
            className="h-12" 
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <div className="relative h-40">
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-10">
              <path fill="#ffffff" fillOpacity="1" d="M0,224L120,229.3C240,235,480,245,720,218.7C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
