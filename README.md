# OmniProjekt Website – Anleitung zum Online-Stellen

Die Website besteht nur aus fertigen Dateien (HTML, CSS, Bilder). Sie braucht keine Datenbank
und kein Kontaktformular – Anfragen laufen per E-Mail an info@omni-projekt.de.
Schriften sind lokal eingebunden. Es gibt kein Tracking und keine Cookies.

## Vor dem Online-Gehen noch ergänzen
- Impressum: Umsatzsteuer-Identifikationsnummer (USt-IdNr.)
- datenschutz.html: vollständige Datenschutzerklärung einfügen (z. B. eRecht24-Generator)

## Variante A: IONOS Webhosting (empfohlen)
1. IONOS-Kundenbereich → Hosting → Webspace öffnen.
2. Den gesamten Inhalt dieses Ordners (nicht den Ordner selbst) ins Hauptverzeichnis hochladen,
   per Webspace-Explorer oder SFTP (z. B. FileZilla, Zugangsdaten unter „SFTP & SSH“).
3. Domains & SSL → omni-projekt.de → „Verwendung“ auf diesen Webspace stellen.
4. SSL-Zertifikat für omni-projekt.de und www.omni-projekt.de aktivieren.
5. Seite im Browser aufrufen und einmal durchklicken.

## Variante B: Vercel + Domain bei IONOS
Hinweis: Für Firmenwebsites ist der Pro-Plan nötig (kommerzielle Nutzung).
1. Ordner in Vercel importieren (Framework Preset „Other“, kein Build-Befehl).
2. Vercel → Settings → Domains: omni-projekt.de und www.omni-projekt.de hinzufügen.
3. IONOS → Domains → omni-projekt.de → DNS: die von Vercel angezeigten Werte eintragen
   (A-Record für @, CNAME für www). MX-Einträge NICHT ändern, damit E-Mail weiter über IONOS läuft.
4. Datenschutzerklärung: Hosting durch Vercel Inc. (USA) nennen, DPA von Vercel abschließen.

## Neue Referenz hinzufügen
Fotos und Projektdaten an Claude schicken → neues Paket hochladen (alte Dateien überschreiben).
