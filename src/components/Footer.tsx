
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-md-gray-100 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="/lovable-uploads/15d842e2-c34f-4e57-87a5-66975a65f028.png" 
              alt="M&D Office Services Logo" 
              className="h-10 mb-4" 
            />
            <p className="text-md-gray-600 mb-4">
              Mehr Freiraum, mehr Effizienz – Ihre Büroarbeit in besten Händen.
            </p>
            <a 
              href="mailto:max@md-officeservices.com" 
              className="inline-flex items-center text-md-gray-800 hover:text-md-black transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              max@md-officeservices.com
            </a>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-md-gray-600 hover:text-md-black transition-colors">Home</a>
              </li>
              <li>
                <a href="#leistungen" className="text-md-gray-600 hover:text-md-black transition-colors">Leistungen</a>
              </li>
              <li>
                <a href="#vorteile" className="text-md-gray-600 hover:text-md-black transition-colors">Vorteile</a>
              </li>
              <li>
                <a href="#ueber-uns" className="text-md-gray-600 hover:text-md-black transition-colors">Über uns</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/impressum" className="text-md-gray-600 hover:text-md-black transition-colors">Impressum</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-md-gray-200">
          <p className="text-md-gray-500 text-sm text-center">
            &copy; {currentYear} M&D Office Services FZCO. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
