# Erding-Ost Frontend (Next.js + Vercel)

Diese Repository ist als reine Frontend-Web-App mit Next.js aufgebaut.

## Zielbild

- Bestehende Inhalte von erding-ost.de wurden als Basis uebernommen.
- Technische Umstellung auf modernes Next.js App Router Setup.
- Deployment ueber Vercel.
- Einfaches Aendern und Pushen: Git push auf `main` triggert Build in Vercel.

## Lokale Entwicklung

Voraussetzungen:

- Node.js 20+
- npm 10+

Befehle:

```bash
npm install
npm run dev
```

## Build Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment mit Vercel

1. Repository bei Vercel importieren.
2. Framework Preset: Next.js (automatisch erkannt).
3. Branch `main` fuer Production Deployments nutzen.
4. Domain in Vercel hinterlegen, danach DNS in Strato umstellen.

Details siehe [docs/deployment.md](docs/deployment.md).
