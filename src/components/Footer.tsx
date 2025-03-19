
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-md-gray-900 py-16 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <img 
              src="/lovable-uploads/30d94300-bd45-4027-a4e5-5a0bef11bdb4.png" 
              alt="M&D Office Services Logo" 
              className="h-10 mb-6" 
            />
            <p className="text-md-gray-300 mb-6 text-lg">
              Mehr Freiraum, mehr Effizienz – Ihre Büroarbeit in besten Händen.
            </p>
            <a 
              href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage an M&D Office Services" 
              className="inline-flex items-center group text-white hover:text-md-gray-300 transition-colors font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              max@md-officeservices.com
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="md:ml-auto">
            <h3 className="font-semibold text-xl mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-md-gray-300 hover:text-white transition-colors text-lg">Home</a>
              </li>
              <li>
                <a href="#leistungen" className="text-md-gray-300 hover:text-white transition-colors text-lg">Leistungen</a>
              </li>
              <li>
                <a href="#vorteile" className="text-md-gray-300 hover:text-white transition-colors text-lg">Vorteile</a>
              </li>
              <li>
                <a href="#ueber-uns" className="text-md-gray-300 hover:text-white transition-colors text-lg">Über uns</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6">Rechtliches</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/impressum" className="text-md-gray-300 hover:text-white transition-colors text-lg">Impressum</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-md-gray-800">
          <p className="text-md-gray-400 text-center">
            &copy; {currentYear} M&D Office Services FZCO. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
