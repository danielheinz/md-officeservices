
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/15d842e2-c34f-4e57-87a5-66975a65f028.png" 
            alt="M&D Office Services Logo" 
            className="h-10 w-auto" 
          />
        </Link>

        <button 
          className="p-2 rounded-md focus:outline-none lg:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-md-gray-800" />
          ) : (
            <MenuIcon className="h-6 w-6 text-md-gray-800" />
          )}
        </button>

        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#leistungen" className="text-md-gray-800 hover:text-md-black font-medium transition-colors">Leistungen</a>
          <a href="#vorteile" className="text-md-gray-800 hover:text-md-black font-medium transition-colors">Vorteile</a>
          <a href="#ueber-uns" className="text-md-gray-800 hover:text-md-black font-medium transition-colors">Über uns</a>
          <a 
            href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage an M&D Office Services" 
            className="button-primary group flex items-center justify-center"
          >
            <span>Kontakt</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </nav>
      </div>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden animate-fade-in">
          <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
              <img 
                src="/lovable-uploads/15d842e2-c34f-4e57-87a5-66975a65f028.png" 
                alt="M&D Office Services Logo" 
                className="h-10 w-auto" 
              />
              <button 
                className="p-2 rounded-md focus:outline-none"
                onClick={closeMenu}
                aria-label="Menü schließen"
              >
                <X className="h-6 w-6 text-md-gray-800" />
              </button>
            </div>
            <nav className="flex flex-col space-y-8">
              <a href="#leistungen" 
                className="text-2xl font-medium text-md-gray-800 hover:text-md-black transition-colors" 
                onClick={closeMenu}
              >
                Leistungen
              </a>
              <a href="#vorteile" 
                className="text-2xl font-medium text-md-gray-800 hover:text-md-black transition-colors"
                onClick={closeMenu}
              >
                Vorteile
              </a>
              <a href="#ueber-uns" 
                className="text-2xl font-medium text-md-gray-800 hover:text-md-black transition-colors"
                onClick={closeMenu}
              >
                Über uns
              </a>
              <a 
                href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage an M&D Office Services" 
                className="button-primary group flex items-center justify-center mt-6"
                onClick={closeMenu}
              >
                <span>Kontakt</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
