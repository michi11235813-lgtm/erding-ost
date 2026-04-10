import Image from "next/image";
import Link from "next/link";

const news = [
  {
    title: "Einladung Jahreshauptversammlung 2026",
    date: "15. April 2026",
    text: "Am 15.04.2026 findet die nächste Jahreshauptversammlung statt. Alle Mitglieder sind herzlich eingeladen.",
    href: "http://erding-ost.de/dokumente/Einladung_JHV_2026.pdf",
    cta: "Einladung lesen"
  },
  {
    title: "Protokoll der JHV 2025",
    date: "2025",
    text: "Das Protokoll der letzten Jahreshauptversammlung steht zum Download bereit.",
    href: "http://erding-ost.de/dokumente/jhv-2025-protokoll.pdf",
    cta: "Protokoll öffnen"
  },
  {
    title: "ARD nur noch in HD",
    date: "Seit Januar 2025",
    text: "Die Programme der ARD laufen nur noch in hochauflösender Qualität (HDTV). Hier finden Sie weitere Informationen.",
    href: "http://erding-ost.de/dokumente/Abschaltung_SD_OEFF_RECHTL.pdf",
    cta: "Hinweis lesen"
  },
  {
    title: "Grüngut-Container 2025",
    date: "24.–26. Okt. 2025",
    text: "Rückblick auf die Grüncontainer-Aktion vom Oktober 2025.",
    href: "http://erding-ost.de/aktuell.htm",
    cta: "Mehr erfahren"
  }
];

const vereinInfo = [
  {
    icon: "🏘️",
    iconClass: "info-icon-green",
    title: "Die Siedlung",
    text: "Informationen rund um die Reihenhaussiedlung Erding-Ost – Garagenzuordnungen, Gemeinschaftsflächen und mehr.",
    href: "http://erding-ost.de/siedlung.htm"
  },
  {
    icon: "📡",
    iconClass: "info-icon-orange",
    title: "Kabelanlage",
    text: "Alles zur vereinseigenen Rundfunkkabelanlage: Senderliste, technische Informationen und aktuelle Hinweise.",
    href: "http://erding-ost.de/kabelanlage.htm"
  },
  {
    icon: "📋",
    iconClass: "info-icon-gray",
    title: "Verein & Satzung",
    text: "Gegründet 1974. Satzung, Geschäftsordnung und Informationen zum Vereinsbeitrag (16 € jährlich).",
    href: "http://erding-ost.de/verein.htm"
  }
];

const quickLinks = [
  { label: "Vorstand", href: "http://erding-ost.de/vorstand.htm" },
  { label: "Satzung & Geschäftsordnung", href: "http://erding-ost.de/satzung.htm" },
  { label: "Protokolle", href: "http://erding-ost.de/protokolle.htm" },
  { label: "Rückblicke", href: "http://erding-ost.de/rueckblicke.htm" },
  { label: "Lärmschutzwall", href: "http://erding-ost.de/laermschutzwall.htm" },
  { label: "Impressum", href: "http://erding-ost.de/impressum.htm" }
];

export default function HomePage() {
  return (
    <>
      {/* ── Header ── */}
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="logo-group">
            <Image src="/logo.jpg" alt="Logo Siedlungsverein Erding-Ost" width={40} height={40} />
            <div className="logo-text">
              Erding-Ost <span>e.V.</span>
            </div>
          </Link>
          <nav>
            <a href="#aktuelles">Aktuelles</a>
            <a href="#verein">Verein</a>
            <a href="#links">Dokumente</a>
            <a href="mailto:webmaster@erding-ost.de">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="page-shell">
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Siedlungsverein Erding-Ost e.V.</p>
            <h1>Willkommen in der Reihenhaussiedlung Erding-Ost</h1>
            <p>
              Seit 1974 kümmern wir uns um die Belange unserer Siedlung – von der
              Kabelanlage bis zu den Gemeinschaftsflächen. Hier finden Sie alle
              aktuellen Informationen, Termine und Dokumente.
            </p>
            <div className="hero-actions">
              <a href="#aktuelles" className="btn btn-white">Aktuelle Meldungen</a>
              <a href="mailto:webmaster@erding-ost.de" className="btn btn-outline">
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>

        {/* Aktuelles */}
        <div id="aktuelles" className="section-heading">
          <h2>Aktuelles</h2>
          <p>Neuigkeiten und Termine aus dem Vereinsleben</p>
        </div>

        <section className="card-grid">
          {news.map((item) => (
            <article className="news-card" key={item.title}>
              <span className="chip">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="card-link" href={item.href} target="_blank" rel="noreferrer">
                {item.cta}
              </a>
            </article>
          ))}
        </section>

        {/* Verein & Siedlung */}
        <div id="verein" className="section-heading">
          <h2>Über uns</h2>
          <p>Der Verein, die Siedlung und unsere Einrichtungen</p>
        </div>

        <section className="info-grid">
          {vereinInfo.map((item) => (
            <article className="info-card" key={item.title}>
              <div className={`info-icon ${item.iconClass}`}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={item.href} target="_blank" rel="noreferrer">Mehr erfahren</a>
            </article>
          ))}
        </section>

        {/* Quick Links */}
        <section id="links" className="quick-bar">
          <h2>Dokumente &amp; weiterführende Links</h2>
          <div className="quick-bar-links">
            {quickLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-brand">
            <Image src="/logo.jpg" alt="Logo" width={32} height={32} />
            <span>Siedlungsverein Erding-Ost e.V.</span>
          </div>
          <div className="footer-links">
            <a href="http://erding-ost.de/impressum.htm" target="_blank" rel="noreferrer">
              Impressum
            </a>
            <a href="http://erding-ost.de/satzung.htm" target="_blank" rel="noreferrer">
              Satzung
            </a>
            <a href="mailto:webmaster@erding-ost.de">Kontakt</a>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Siedlungsverein Erding-Ost e.V. · Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </>
  );
}
