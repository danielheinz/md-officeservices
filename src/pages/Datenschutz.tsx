import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

const Datenschutz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Datenschutzerklärung - Reußwig & Brown GbR';
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
                className="h-8 w-auto"
              />
            </Link>

            <Link to="/" className="inline-flex items-center px-5 py-2 bg-white text-figuro-dark-green rounded-full border border-figuro-border-green/30 transition-all duration-300 hover:bg-figuro-cream group">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="font-medium">Zur Startseite</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow py-16 bg-figuro-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-figuro-dark-green">
              Datenschutzerklärung
            </h1>

            <div className="prose prose-lg max-w-none text-figuro-dark-green/80">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">1. Allgemeine Hinweise</h2>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln personenbezogene Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">2. Verantwortlicher</h2>
              <p>
                Reußwig &amp; Brown GbR<br />
                Würzburger Str. 83<br />
                97877 Wertheim<br />
                Deutschland<br />
                <br />
                Vertreten durch: <br />
                Maximilian Reußwig<br />
                Darlyn Brown<br />
                <br />
                Telefon: <a href="tel:+491732571637" className="text-figuro-medium-green hover:text-figuro-dark-green underline">+49 173 2571637</a><br />
                E-Mail: <a href="mailto:max@md-officeservices.com?subject=Geschäftsanfrage" className="text-figuro-medium-green hover:text-figuro-dark-green underline">max@md-officeservices.com</a>
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">3. Datenerfassung beim Besuch der Website</h2>
              <p className="mb-2">
                Beim Besuch dieser Website werden automatisch Informationen durch den Hosting-Anbieter erfasst: <br />
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP-Adresse</li>
                <li>Browsertyp</li>
                <li>Betriebssystem</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Referrer URL</li>
              </ul>
              <p className="mt-4">
                Diese Daten dienen der technischen Sicherheit und Stabilität.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">4. Kontaktaufnahme</h2>
              <p>
                Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden Ihre Angaben zwecks Bearbeitung Ihrer Anfrage gespeichert.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">5. Cookies</h2>
              <p>
                Diese Website kann Cookies verwenden. Cookies dienen dazu, die Nutzung der Website benutzerfreundlicher zu gestalten.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">6. Rechte betroffener Personen</h2>
              <p className="mb-2">Sie haben jederzeit das Recht auf: <br /></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Auskunft</li>
                <li>Berichtigung</li>
                <li>Löschung</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerspruch</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-figuro-dark-green">7. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;
