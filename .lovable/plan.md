
## Ziel
Website auf neue deutsche Firmendaten (Reußwig & Brown GbR, Wertheim) umstellen, alte Dubai/FZCO-Bezüge entfernen, Impressum und Datenschutzerklärung ergänzen, DSGVO-Cookie-Banner einbauen.

## Änderungen

### 1. Firmendaten global ersetzen
- `src/components/Footer.tsx` — Copyright: `© 2026 Reußwig & Brown GbR | Alle Rechte vorbehalten`; Telefon `+49 173 2571637` als `tel:`-Link ergänzen.
- `src/pages/Impressum.tsx` — kompletter Inhalt neu (Dubai/FZCO raus, deutsche GbR mit § 5 TMG, § 27a UStG „Wird nachgereicht", § 18 Abs. 2 MStV, Haftung, Urheberrecht).
- `index.html` — `author`-Meta und `og:site_name` auf „Reußwig & Brown GbR".

Markenname/Logo „M&D Office Services" bleibt visuell erhalten, nur der Rechtsträger wechselt.

### 2. Neue Seite `/datenschutz`
- `src/pages/Datenschutz.tsx` mit den 7 gelieferten Abschnitten (Allgemeine Hinweise, Verantwortlicher, Datenerfassung, Kontaktaufnahme, Cookies, Rechte, Beschwerderecht).
- Layout im gleichen Stil wie Impressum (Header mit Logo + „Zur Startseite"-Button, Footer).
- Route in `src/App.tsx` registrieren.

### 3. Footer erweitern (`src/components/Footer.tsx`)
Rechtliches-Spalte: **Impressum** + **Datenschutz** (React-Router `Link`).

### 4. Cookie Consent Banner
`src/components/CookieBanner.tsx` — dezentes Banner mit „Akzeptieren" / „Ablehnen", Entscheidung in `localStorage`, verlinkt auf `/datenschutz`. Erscheint einmalig unten am Bildschirm. Erfüllt DSGVO-Hinweispflicht.

### 5. Founders-Namen
„Max Reusswig" bleibt in der „Über uns"-Sektion als informelle Markendarstellung (in rechtlichen Kontexten „Maximilian Reußwig").

## Nicht enthalten
Keine `/kontakt`-Seite (auf Wunsch entfernt) — Kontakt läuft weiterhin über die bestehenden CTA-Buttons (mailto + Footer-Telefonlink).
