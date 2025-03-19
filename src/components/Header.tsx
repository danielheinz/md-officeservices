
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X, ArrowRight, Mail } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Calculate animations based on scroll position
  const isScrolled = scrollPosition > 10;
  const navbarOpacity = Math.min(0.98, 0.7 + (scrollPosition / 500));
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 backdrop-blur-md' 
          : 'py-5'
      }`}
      style={{
        backgroundColor: isScrolled ? `rgba(245, 245, 243, ${navbarOpacity})` : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(42, 89, 63, 0.15)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(42, 89, 63, 0.04)' : 'none'
      }}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center relative z-20">
          <img 
            src="/lovable-uploads/a537ff3d-3798-446e-b8d4-172b019ac5c9.png" 
            alt="M&D Office Services Logo" 
            className={`transition-all duration-500 ${isScrolled ? 'h-8 w-auto' : 'h-10 w-auto'}`}
          />
        </Link>

        <div 
          className={`hidden lg:flex items-center space-x-10 justify-center flex-grow transition-all duration-300`}
        >
          {/* Main Navigation Items */}
          <a 
            href="#leistungen" 
            className="text-figuro-dark-green hover:text-figuro-medium-green font-medium transition-colors duration-300 relative group"
          >
            <span className="relative z-10">Leistungen</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-figuro-medium-green origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a 
            href="#vorteile" 
            className="text-figuro-dark-green hover:text-figuro-medium-green font-medium transition-colors duration-300 relative group"
          >
            <span className="relative z-10">Vorteile</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-figuro-medium-green origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a 
            href="#ueber-uns" 
            className="text-figuro-dark-green hover:text-figuro-medium-green font-medium transition-colors duration-300 relative group"
          >
            <span className="relative z-10">Über uns</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-figuro-medium-green origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <a 
            href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage an M&D Office Services" 
            className={`px-6 py-2.5 text-figuro-dark-green rounded-full transition-all duration-300 border border-figuro-dark-green/30 hover:bg-figuro-dark-green hover:text-white inline-flex items-center group ${
              isScrolled ? 'scale-95' : ''
            }`}
          >
            <span className="font-medium">Kontakt</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 text-current" />
          </a>
        </div>

        <button 
          className="p-2 rounded-md focus:outline-none lg:hidden relative z-20"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-figuro-dark-green" />
          ) : (
            <MenuIcon className="h-6 w-6 text-figuro-dark-green" />
          )}
        </button>

        {/* Mobile Menu Modal - Fixed overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-10 lg:hidden animate-fade-in">
            <div className="container mx-auto py-6 px-4 h-full flex flex-col">
              {/* We're removing the duplicated header here */}
              <div className="mt-16 mb-8"></div>
              
              <div className="flex-1">
                {/* Main Navigation Links */}
                <nav className="flex flex-col space-y-6">
                  <a href="#leistungen" 
                    className="text-xl font-medium text-figuro-dark-green hover:text-figuro-medium-green transition-colors" 
                    onClick={closeMenu}
                  >
                    Leistungen
                  </a>
                  <a href="#vorteile" 
                    className="text-xl font-medium text-figuro-dark-green hover:text-figuro-medium-green transition-colors"
                    onClick={closeMenu}
                  >
                    Vorteile
                  </a>
                  <a href="#ueber-uns" 
                    className="text-xl font-medium text-figuro-dark-green hover:text-figuro-medium-green transition-colors"
                    onClick={closeMenu}
                  >
                    Über uns
                  </a>
                  <Link to="/impressum" 
                    className="text-xl font-medium text-figuro-dark-green/70 hover:text-figuro-medium-green transition-colors"
                    onClick={closeMenu}
                  >
                    Impressum
                  </Link>
                  <Link to="/datenschutz" 
                    className="text-xl font-medium text-figuro-dark-green/70 hover:text-figuro-medium-green transition-colors"
                    onClick={closeMenu}
                  >
                    Datenschutz
                  </Link>
                </nav>
              </div>
              
              {/* Contact Button at Bottom */}
              <div className="mt-auto pt-6">
                <a 
                  href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage an M&D Office Services" 
                  className="px-8 py-4 bg-transparent text-figuro-dark-green rounded-full transition-all duration-300 hover:bg-figuro-dark-green hover:text-white inline-flex items-center justify-center group w-full border border-figuro-dark-green/30"
                  onClick={closeMenu}
                >
                  <span className="font-medium">Kontakt</span>
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1 text-current" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
