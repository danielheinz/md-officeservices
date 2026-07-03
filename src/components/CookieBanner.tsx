import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const STORAGE_KEY = 'md-cookie-consent';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // slight delay so it doesn't flash immediately
      const t = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(t);
    }
  }, []);

  const handleChoice = (choice: 'accepted' | 'declined') => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:right-auto md:left-6 md:bottom-6 md:max-w-md z-[60] bg-white border border-figuro-dark-green/15 rounded-2xl shadow-lg p-5 animate-fade-in"
      role="dialog"
      aria-label="Cookie-Hinweis"
    >
      <button
        onClick={() => handleChoice('declined')}
        aria-label="Schließen"
        className="absolute top-3 right-3 text-figuro-dark-green/60 hover:text-figuro-dark-green"
      >
        <X className="w-4 h-4" />
      </button>
      <h3 className="text-figuro-dark-green font-semibold mb-2 pr-6">Cookie-Hinweis</h3>
      <p className="text-figuro-dark-green/80 text-sm mb-4">
        Wir verwenden Cookies, um die Nutzung unserer Website benutzerfreundlicher zu gestalten. Weitere Informationen finden Sie in unserer{' '}
        <Link to="/datenschutz" className="underline hover:text-figuro-dark-green">Datenschutzerklärung</Link>.
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => handleChoice('accepted')}
          className="px-5 py-2.5 bg-figuro-dark-green text-white rounded-full text-sm font-medium hover:bg-figuro-medium-green transition-colors flex-1"
        >
          Akzeptieren
        </button>
        <button
          onClick={() => handleChoice('declined')}
          className="px-5 py-2.5 bg-transparent text-figuro-dark-green border border-figuro-dark-green/30 rounded-full text-sm font-medium hover:bg-figuro-cream transition-colors flex-1"
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
