# Abmahnung Risk Database — German Websites

This reference lists the most common Abmahnung risks for German-facing websites, organized by category. Each entry includes the legal basis, typical penalty range, and what must be implemented to mitigate the risk.

Last updated: 2026-04-04

> **Hinweis:** Seit 14.05.2024 ersetzt das Digitale-Dienste-Gesetz (DDG) das Telemediengesetz (TMG). Die Impressumspflicht ergibt sich jetzt aus § 5 DDG (inhaltlich weitgehend identisch mit § 5 TMG). Ältere Urteile und Kommentare referenzieren noch TMG — die Pflichten gelten unter DDG fort.

---

## Category 1: Impressum (§ 5 DDG, ehem. § 5 TMG)

Severity: **Hoch** — one of the most frequent Abmahnung triggers.

### Risks

| ID | Risk | Legal Basis | Implementation Requirement |
|---|---|---|---|
| IMP-01 | Impressum fehlt komplett | § 5 DDG | Impressum-Seite erstellen, von jeder Seite aus erreichbar (max. 2 Klicks) |
| IMP-02 | Impressum nicht leicht auffindbar | BGH, Urteil v. 20.07.2006 – I ZR 228/03 | Link im Footer oder Header mit Beschriftung "Impressum" (nicht "Kontakt", nicht "Über uns") |
| IMP-03 | Fehlende Pflichtangaben | § 5 Abs. 1 DDG | Vollständiger Name, Anschrift (kein Postfach), E-Mail, Telefon oder schneller Kontaktweg |
| IMP-04 | Fehlende Handelsregister-Angaben | § 5 Abs. 1 Nr. 4 DDG | Registergericht + Registernummer, wenn eingetragen |
| IMP-05 | Fehlende USt-IdNr. | § 5 Abs. 1 Nr. 6 DDG | Umsatzsteuer-ID angeben, falls vorhanden (auch Kleinunternehmer mit USt-IdNr.) |
| IMP-06 | Fehlende Berufsangaben bei regul. Berufen | § 5 Abs. 1 Nr. 5 DDG | Kammer, Berufsbezeichnung, Staat der Verleihung, berufsrechtliche Regelungen |
| IMP-07 | Fehlender Verantwortlicher für redakt. Inhalte | § 18 Abs. 2 MStV | Name und Anschrift des inhaltlich Verantwortlichen |
| IMP-08 | Impressum nur als Bild | Allgemeine Rechtsprechung | Impressum als Text, nicht als Bilddatei (Maschinenlesbarkeit) |

---

## Category 2: Datenschutzerklärung (DSGVO Art. 13, 14)

Severity: **Hoch**

### Risks

| ID | Risk | Legal Basis | Implementation Requirement |
|---|---|---|---|
| DSE-01 | Datenschutzerklärung fehlt | Art. 13 DSGVO | Vollständige DSE erstellen, von jeder Seite erreichbar |
| DSE-02 | DSE nicht von jeder Seite erreichbar | Art. 12 DSGVO | Link im Footer auf jeder Seite, Label "Datenschutz" oder "Datenschutzerklärung" |
| DSE-03 | Fehlende Angaben zu eingesetzten Tools | Art. 13 Abs. 1 lit. d-f DSGVO | Jedes eingesetzte Tool/Service benennen: Analytics, Hoster, CDN, Fonts, Embeds, Newsletter |
| DSE-04 | Fehlende Rechtsgrundlage je Verarbeitung | Art. 13 Abs. 1 lit. c DSGVO | Pro Verarbeitungszweck die Rechtsgrundlage angeben (Art. 6 Abs. 1 lit. a/b/f DSGVO) |
| DSE-05 | Fehlende Angaben zu Betroffenenrechten | Art. 13 Abs. 2 lit. b-d DSGVO | Auskunft, Löschung, Berichtigung, Einschränkung, Datenportabilität, Widerspruch, Beschwerde bei Aufsichtsbehörde |
| DSE-06 | Keine Nennung des Verantwortlichen | Art. 13 Abs. 1 lit. a DSGVO | Name und Kontaktdaten des Verantwortlichen in der DSE |
| DSE-07 | Drittlandtransfer nicht benannt | Art. 13 Abs. 1 lit. f DSGVO | Bei US-Tools: Hinweis auf Drittlandübermittlung + Garantien (SCCs, Adequacy Decision) |

---

## Category 3: Cookies & Consent (TTDSG § 25, DSGVO Art. 6/7)

Severity: **Hoch**

### Risks

| ID | Risk | Legal Basis | Implementation Requirement |
|---|---|---|---|
| CON-01 | Tracking ohne Einwilligung | § 25 TTDSG, DSGVO Art. 6 Abs. 1 lit. a | Keine nicht-essentiellen Cookies/Tracking vor explizitem Opt-in |
| CON-02 | Ablehnen schwerer als Akzeptieren | BGH, Urteil v. 28.05.2020 – I ZR 7/16 (Cookie-Banner II) | Reject-Button gleich groß, gleiche Farbe/Prominenz wie Accept |
| CON-03 | Vorausgewählte Checkboxen | EuGH, Urteil v. 01.10.2019 – C-673/17 (Planet49) | Keine vorangekreuzten Checkboxen für optionale Cookie-Kategorien |
| CON-04 | Cookie-Wall | EDSA Leitlinien 05/2020 | Kein Sperren von Inhalten bis Consent erteilt wird |
| CON-05 | Kein Widerruf möglich | Art. 7 Abs. 3 DSGVO | Jederzeit widerrufbar, z.B. Footer-Link "Cookie-Einstellungen" |
| CON-06 | Consent nicht gespeichert | TTDSG § 25 | Consent-Entscheidung speichern, nicht bei jedem Seitenaufruf erneut fragen |
| CON-07 | Nudging / Dark Patterns im Banner | DSK-Orientierungshilfe Telemedien 2021 | Keine irreführende Farbgebung, Größe, oder Formulierung die eine Richtung bevorzugt |

---

## Category 4: Externe Ressourcen & IP-Leak (DSGVO Art. 44 ff.)

Severity: **Hoch** (nach LG München Google-Fonts-Urteil)

### Risks

| ID | Risk | Legal Basis | Implementation Requirement |
|---|---|---|---|
| EXT-01 | Google Fonts dynamisch geladen | LG München I, Urteil v. 20.01.2022 – 3 O 17493/20 | Self-hosting oder `next/font`. Kein `fonts.googleapis.com` |
| EXT-02 | YouTube/Vimeo direkt eingebettet | DSGVO Art. 44 ff. | 2-Click-Lösung oder youtube-nocookie.com + Consent |
| EXT-03 | Google Maps direkt eingebettet | DSGVO Art. 44 ff. | Consent-first Placeholder, dann laden |
| EXT-04 | Social Media Buttons mit Tracking | DSGVO Art. 44 ff. | Shariff-Muster oder einfache Share-Links (kein SDK-Load) |
| EXT-05 | CDN für JS-Libraries | DSGVO Art. 44 ff. | Self-hosten: kein cdnjs, unpkg, jsdelivr ohne Consent |
| EXT-06 | Externe Analytics ohne Consent | § 25 TTDSG | Kein Google Analytics, Hotjar etc. vor explizitem Consent |
| EXT-07 | Gravatar / externe Avatare | DSGVO Art. 44 ff. | IP-Übermittlung — self-hosten oder Consent |

---

## Category 5: Preisangaben (PAngV)

Severity: **Hoch** (bei Shops/E-Commerce)

### Risks

| ID | Risk | Legal Basis | Implementation Requirement |
|---|---|---|---|
| PRS-01 | Preise ohne MwSt.-Hinweis | § 1 PAngV | "inkl. MwSt." bei jedem Preis gegenüber Endverbrauchern |
| PRS-02 | Fehlende Versandkostenangabe | § 1 PAngV | "zzgl. Versandkosten" + Link zur Versandkostenübersicht |
| PRS-03 | Fehlender Grundpreis | § 4 PAngV | Preis pro Mengeneinheit bei gewichts-/volumenabhängigen Produkten |
| PRS-04 | Streichpreis nicht regelkonform | Art. 6a Omnibus-RL, § 11 PAngV | Streichpreis = niedrigster Preis der letzten 30 Tage |

---

## Category 6: Fernabsatz & Buttonlösung (§ 312j BGB)

Severity: **Hoch** (bei Bestellvorgängen)

### Risks

| ID | Risk | Legal Basis | Implementation Requirement |
|---|---|---|---|
| BTN-01 | Falscher Button-Text | § 312j Abs. 3 BGB | "zahlungspflichtig bestellen" oder eindeutig gleichwertig |
| BTN-02 | Fehlende Bestellzusammenfassung | § 312j Abs. 2 BGB | Wesentliche Eigenschaften, Gesamtpreis inkl. Steuern + Versand, Lieferzeit unmittelbar vor dem Button |
| BTN-03 | Widerrufsbelehrung fehlt | § 312d BGB, Art. 246a § 1 EGBGB | Widerrufsbelehrung + Muster-Widerrufsformular vor Vertragsschluss |
| BTN-04 | AGB nicht einbezogen | § 305 BGB | AGB müssen vor Vertragsschluss einsehbar + zustimmbar sein |

---

## Category 7: Newsletter & E-Mail-Marketing (UWG § 7)

Severity: **Mittel**

### Risks

| ID | Risk | Legal Basis | Implementation Requirement |
|---|---|---|---|
| NWS-01 | Kein Double Opt-in | BGH, Urteil v. 10.02.2011 – I ZR 164/09 | Bestätigungsmail senden, erst nach Klick auf Bestätigungslink eintragen |
| NWS-02 | Newsletter-Checkbox vorausgewählt | Art. 7 DSGVO, Planet49 | Checkbox leer als Default |
| NWS-03 | Kein Abmeldelink | § 7 Abs. 2 Nr. 4 UWG | Funktionierender Unsubscribe-Link in jeder Mail |
| NWS-04 | Kopplung an Hauptaktion | Art. 7 Abs. 4 DSGVO | Newsletter-Consent nicht als Bedingung für Formular-Absendung etc. |

---

## Category 8: Urheberrecht (UrhG)

Severity: **Hoch**

### Risks

| ID | Risk | Legal Basis | Implementation Requirement |
|---|---|---|---|
| URH-01 | Bilder ohne Lizenz | § 97 UrhG | Nur lizenzierte, eigene, oder korrekt lizenzierte Stock-Fotos |
| URH-02 | Screenshots fremder Websites | § 2 UrhG | Nur mit Erlaubnis oder unter Zitatrecht (§ 51 UrhG) mit Quellenangabe |
| URH-03 | Hotlinking fremder Bilder | § 19a UrhG, BGH | Nicht fremde Bilder per URL einbinden — lokale Kopie mit Lizenz |
| URH-04 | Fremde Texte übernommen | § 2 UrhG | Keine Kopie fremder Texte, nur eigene Formulierungen |
| URH-05 | Font-Lizenzen verletzt | Lizenzvertrag | Webfont-Lizenz prüfen — Desktop-Lizenz reicht nicht für Web |

---

## Category 9: Barrierefreiheit (BFSG, seit Juni 2025)

Severity: **Mittel-Hoch** (seit 28.06.2025 in Kraft, Marktüberwachung aktiv, Bußgelder bis 100.000 €)

### Risks

| ID | Risk | Legal Basis | Implementation Requirement |
|---|---|---|---|
| BFS-01 | Nicht WCAG 2.1 AA konform | BFSG, EN 301 549 | Kontrast, Tastaturnavigation, Screenreader-Kompatibilität, Alt-Texte |
| BFS-02 | Keine Erklärung zur Barrierefreiheit | BFSG § 4 | Barrierefreiheits-Statement wenn im Geltungsbereich |
| BFS-03 | Formulare nicht barrierefrei | EN 301 549 | Labels, Fehlermeldungen, Focus-Management, Input-Types |

---

## Category 10: Streitschlichtung (ODR-Verordnung)

Severity: **Niedrig-Mittel**

### Risks

| ID | Risk | Legal Basis | Implementation Requirement |
|---|---|---|---|
| ODR-01 | Fehlender OS-Plattform-Link | Art. 14 ODR-VO | Link zu `https://ec.europa.eu/consumers/odr/` bei B2C-Online-Verkauf |
| ODR-02 | Keine Aussage zur Streitbeilegung | § 36 VSBG | Angabe ob bereit/verpflichtet zur Teilnahme an Verbraucherschlichtung |

---

## Category 11: SSL/HTTPS (DSGVO Art. 32)

Severity: **Mittel**

### Risks

| ID | Risk | Legal Basis | Implementation Requirement |
|---|---|---|---|
| SSL-01 | Formulare über HTTP | Art. 32 DSGVO | Alle Seiten mit Formularen zwingend HTTPS |
| SSL-02 | Mixed Content | Best Practice | Keine HTTP-Ressourcen auf HTTPS-Seiten einbinden |

---

## Category 12: Wettbewerbsrecht / UWG

Severity: **Hoch**

### Risks

| ID | Risk | Legal Basis | Implementation Requirement |
|---|---|---|---|
| UWG-01 | Irreführende Werbung | § 5 UWG | Keine falschen/übertriebenen Leistungsversprechen |
| UWG-02 | Fehlende Werbekennzeichnung | § 5a Abs. 4 UWG | Bezahlte Inhalte als "Anzeige" oder "Werbung" kennzeichnen |
| UWG-03 | Fehlende Affiliate-Kennzeichnung | § 5a Abs. 4 UWG, BGH | "Affiliate-Link" oder "Werbung" direkt am Link/Block |
| UWG-04 | Alleinstellungsbehauptungen ohne Beleg | § 5 UWG | Superlative nur mit nachweisbarer Grundlage oder weicher Formulierung |
| UWG-05 | Lockvogelangebote | § 5 Abs. 5 UWG | Beworbene Produkte/Dienstleistungen müssen tatsächlich verfügbar sein |
