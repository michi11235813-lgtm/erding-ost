# Deployment und DNS (Strato -> Vercel)

## 1) Vercel Projekt anbinden

1. Bei Vercel anmelden.
2. "Add New Project" waehlen.
3. GitHub Repository `erding-ost` importieren.
4. Deployment starten (Standardwerte fuer Next.js).

## 2) Eigene Domain in Vercel

1. In Vercel Projekt -> Settings -> Domains.
2. Domain eintragen (z. B. `erding-ost.de` und `www.erding-ost.de`).
3. DNS Hinweise von Vercel kopieren.

## 3) DNS in Strato aendern

In der Strato DNS-Verwaltung:

- A-Record fuer Apex (`@`) auf die von Vercel angezeigte IP setzen.
- CNAME fuer `www` auf den von Vercel geforderten Zielhost setzen.

Hinweis: Die konkreten Werte koennen sich aendern. Immer die aktuellen Angaben aus Vercel nutzen.

## 4) Einfacher Aendern/Pushen Modus

- Aenderungen lokal machen.
- Commit und Push auf `main`.
- Vercel deployed automatisch.
- Optionaler GitHub CI-Check laeuft vorab (siehe Workflow).

Beispiel:

```bash
git add .
git commit -m "Update content"
git push origin main
```
