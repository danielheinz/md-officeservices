
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X, ArrowRight } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { NavigationMenu } from '../components/ui/navigation-menu';

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useIsMobile();
  const [sheetOpen, setSheetOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // For mobile: hide/show based on scroll direction
      if (isMobile) {
        setIsVisible(prevScrollPosition > currentScrollPos || currentScrollPos < 10);
      }
      
      setPrevScrollPosition(currentScrollPos);
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPosition, isMobile]);

  // Calculate animations based on scroll position - only for desktop
  const isScrolled = scrollPosition > 10;
  const navbarOpacity = Math.min(0.98, 0.7 + (scrollPosition / 500));
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobile 
          ? 'py-3 bg-white border-b border-figuro-dark-green/15' 
          : isScrolled 
            ? 'py-2 backdrop-blur-md' 
            : 'py-5'
      } ${isMobile && !isVisible && !sheetOpen ? '-translate-y-full' : 'translate-y-0'}`}
      style={{
        backgroundColor: isMobile 
          ? 'white' // Solid background for mobile always
          : isScrolled ? `rgba(245, 245, 243, ${navbarOpacity})` : 'transparent',
        borderBottom: isMobile 
          ? '1px solid rgba(42, 89, 63, 0.15)' 
          : isScrolled ? '1px solid rgba(42, 89, 63, 0.15)' : 'none',
        boxShadow: isMobile
          ? '0 2px 10px rgba(42, 89, 63, 0.04)'
          : isScrolled ? '0 4px 20px rgba(42, 89, 63, 0.04)' : 'none'
      }}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center relative z-20">
          <img 
            src="/lovable-uploads/a537ff3d-3798-446e-b8d4-172b019ac5c9.png" 
            alt="M&D Office Services Logo" 
            className={`transition-all duration-300 ${isMobile || isScrolled ? 'h-8 w-auto' : 'h-10 w-auto'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-10 justify-center flex-grow transition-all duration-300">
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
        )}

        {/* Desktop Contact Button */}
        {!isMobile && (
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage" 
              className={`px-6 py-2.5 text-figuro-dark-green rounded-full transition-all duration-300 border border-figuro-dark-green/30 hover:bg-figuro-dark-green hover:text-white inline-flex items-center group ${
                isScrolled ? 'scale-95' : ''
              }`}
            >
              <span className="font-medium">Kontakt</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 text-current" />
            </a>
          </div>
        )}

        {/* Mobile Navigation - Using Sheet Component */}
        {isMobile && (
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button 
                className="p-2 rounded-md focus:outline-none relative z-20"
                aria-label={sheetOpen ? "Menü schließen" : "Menü öffnen"}
                type="button"
              >
                {sheetOpen ? (
                  <X className="h-6 w-6 text-figuro-dark-green" />
                ) : (
                  <MenuIcon className="h-6 w-6 text-figuro-dark-green" />
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-16 pb-8 h-[95vh] rounded-b-xl">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <nav className="flex flex-col space-y-6 pt-6">
                    <a href="#leistungen" 
                      className="text-xl font-medium text-figuro-dark-green hover:text-figuro-medium-green transition-colors"
                      onClick={() => setSheetOpen(false)}
                    >
                      Leistungen
                    </a>
                    <a href="#vorteile" 
                      className="text-xl font-medium text-figuro-dark-green hover:text-figuro-medium-green transition-colors"
                      onClick={() => setSheetOpen(false)}
                    >
                      Vorteile
                    </a>
                    <a href="#ueber-uns" 
                      className="text-xl font-medium text-figuro-dark-green hover:text-figuro-medium-green transition-colors"
                      onClick={() => setSheetOpen(false)}
                    >
                      Über uns
                    </a>
                    <Link to="/impressum" 
                      className="text-xl font-medium text-figuro-dark-green/70 hover:text-figuro-medium-green transition-colors"
                      onClick={() => setSheetOpen(false)}
                    >
                      Impressum
                    </Link>
                  </nav>
                </div>
                
                {/* Contact Button at Bottom */}
                <div className="mt-auto pt-10">
                  <a 
                    href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage" 
                    className="px-8 py-4 bg-transparent text-figuro-dark-green rounded-full transition-all duration-300 hover:bg-figuro-dark-green hover:text-white inline-flex items-center justify-center group w-full border border-figuro-dark-green/30"
                    onClick={() => setSheetOpen(false)}
                  >
                    <span className="font-medium">Kontakt</span>
                    <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1 text-current" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Header;
