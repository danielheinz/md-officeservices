
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

const Impressum = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Impressum - M&D Office Services';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-figuro-cream py-4 border-b border-figuro-border-green/20 sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/73eb37d3-08e5-462e-9083-b1fc1b595403.png" 
                alt="M&D Office Services Logo" 
                className="h-12 w-auto" 
              />
            </Link>
            
            <Link to="/" className="inline-flex items-center px-5 py-2 bg-white text-figuro-dark-green rounded-full border border-figuro-border-green/30 transition-all duration-300 hover:bg-figuro-cream group">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="font-medium">Zurück zur Startseite</span>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-grow py-16 bg-figuro-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-figuro-dark-green">
              Impressum
            </h1>
            
            <div className="prose prose-lg max-w-none text-figuro-dark-green/80">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">Angaben gemäß § 5 TMG</h2>
              <p>
                M&D OFFICE SERVICES FZCO<br />
                Dubai Silicon Oasis, DDP, Building A1<br />
                Dubai, United Arab Emirates
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">Vertreten durch</h2>
              <p>Max Reusswig & Darlyn Brown</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">Kontakt</h2>
              <p>
                E-Mail: <a href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage an M&D Office Services" className="text-figuro-medium-green hover:text-figuro-dark-green underline">max@md-officeservices.com</a>
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">Redaktionell verantwortlich</h2>
              <p>Max Reusswig</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;
