import Image from "next/image";
import Link from "next/link";
import AmpMapWrapper from "./components/AmpMapWrapper";

/* ════════════════════════════════════════════
   DATA – extracted from all erding-ost.de pages
   ════════════════════════════════════════════ */

/* News: items younger than ~1 year appear in "Aktuelles", older ones in "Archiv" */
const currentNews = [
  {
    title: "Einladung Jahreshauptversammlung 2026",
    date: "15. April 2026",
    text: "Am 15.04.2026 findet die nächste JHV statt. Alle Mitglieder sind herzlich eingeladen.",
    href: "/dokumente/Einladung_JHV_2026.pdf",
    cta: "Einladung herunterladen",
    color: "badge--red"
  },
  {
    title: "Protokoll der JHV 2025",
    date: "2025",
    text: "Das Protokoll der letzten Jahreshauptversammlung steht als PDF zum Download bereit.",
    href: "/dokumente/jhv-2025-protokoll.pdf",
    cta: "Protokoll öffnen",
    color: "badge--blue"
  },
  {
    title: "Grüngut-Container 2025",
    date: "24.–26. Okt. 2025",
    text: "Rückblick auf die diesjährige Grüncontainer-Aktion.",
    href: "#",
    cta: "Mehr erfahren",
    color: "badge--teal"
  }
];

const archiveNews = [
  {
    title: "ARD nur noch in HD",
    date: "Seit Januar 2025",
    text: "Die Programme der ARD laufen nur noch in HDTV. Informationen zur SD-Abschaltung im Kabelnetz.",
    href: "/dokumente/Abschaltung_SD_OEFF_RECHTL.pdf",
    cta: "Hinweis lesen",
    color: "badge--orange"
  },
  {
    title: "Garagenplatzzuordnungen",
    date: "Stand 12/2009",
    text: "Die Zuordnung der Garagen zu den Wohneinheiten ist aktualisiert. Bei Bedarf bitte den Vorstand kontaktieren.",
    href: "#verein",
    cta: "Zum Vorstand",
    color: "badge--red"
  }
];

const boardMembers = [
  { role: "1. Vorsitzender", name: "Thomas Feldt", addr: "Dr.-Lehmer-Str. 27" },
  { role: "2. Vorsitzender", name: "Christoph Lotter" },
  { role: "Kassier", name: "Viktoria Bartsch", addr: "Hans-Schmidmayer-Str. 52" },
  { role: "Schriftführer", name: "Eva Döllel", addr: "Hans-Schmidmayer-Str. 17" }
];

const boardBeirate = [
  "Wolfgang Großer", "Ulrich Kaiser", "Mark Neubauer",
  "Florian Grasser", "Hedwig Prey-Schmuck", "Hendrik Wanger", "Elke Erdner"
];

const boardRevisoren = [
  { name: "Magdalena Koschek", addr: "Hans-Schmidmayer-Str. 14" },
  { name: "Christian Speiseder", addr: "Dr.-Lehmer-Str. 15" }
];

const boardExtras = [
  { role: "Webadmin", name: "Christian Sack", addr: "Dr.-Lehmer-Str. 52" },
  { role: "Kabelverantwortlicher", name: "Christian Sack, Lothar Sack", addr: "Dr.-Lehmer-Str. 52" }
];

const formerChairs = [
  "Willibald Beitel (1976–198x)",
  "Lothar Sack",
  "Hans Döllel (–1998)",
  "Adly Whaba (1998–2005)",
  "Christian Sack (2005–2008)",
  "Bernd Nitzschmann (2008–)",
  "Gustav Schultz"
];

const documents = [
  { title: "Satzung", meta: "PDF, 18 KB", href: "/dokumente/satzung.pdf" },
  { title: "Geschäftsordnung", meta: "PDF, 9 KB", href: "/dokumente/geschaeftsordnung.pdf" },
  { title: "Beitrittserklärung", meta: "PDF, 45 KB", href: "/dokumente/Beitrittserklärung Verein.pdf" },
  { title: "Hauslärmverordnung Erding", meta: "PDF, 78 KB", href: "/dokumente/hauslaermverordnung.pdf" },
  { title: "Einzugsermächtigung Kabel", meta: "PDF, 60 KB", href: "/dokumente/einzug-kabel.pdf" },
  { title: "Einzugsermächtigung Vereinsbeitrag", meta: "PDF, 60 KB", href: "/dokumente/einzug-vereinsbeitrag.pdf" },
  { title: "Änderung der Bankverbindung", meta: "PDF, 45 KB", href: "/dokumente/Änderung der Bankverbindung.pdf" },
  { title: "Erstattung von Sachauslagen", meta: "PDF, 5 KB", href: "/dokumente/erstattung-sachauslagen.pdf" },
  { title: "Transponderliste (Senderliste 2025)", meta: "PDF", href: "/dokumente/senderliste2025.pdf" }
];

const radioStations = [
  { name: "Hitwelle Lokalradio", freq: "87,9", loc: "Erding" },
  { name: "Hitwelle Lokalradio", freq: "99,4", loc: "Moosinning" },
  { name: "Radio Arabella", freq: "105,2", loc: "München" },
  { name: "Bayern 1 Oberbayern", freq: "93,7", loc: "Wendelstein" },
  { name: "Bayern 1 München", freq: "91,3", loc: "Ismaning" },
  { name: "Bayern 2 Oberbayern", freq: "89,5", loc: "Wendelstein" },
  { name: "Bayern 3", freq: "98,5", loc: "Wendelstein" },
  { name: "BR-Klassik", freq: "102,3", loc: "Wendelstein" },
  { name: "B5 Aktuell", freq: "105,7", loc: "Wendelstein" },
  { name: "Antenne Bayern", freq: "101,3", loc: "München" },
  { name: "Klassik Radio", freq: "107,2", loc: "München" },
  { name: "Charivari", freq: "95,5", loc: "München" },
  { name: "Radio Gong", freq: "96,3", loc: "München" },
  { name: "Radio Energy", freq: "93,3", loc: "München" },
  { name: "DLF", freq: "101,7", loc: "" },
  { name: "DKultur", freq: "103,5", loc: "" }
];

const amplifiers = {
  "Hans-Schmidmayer-Str.": ["Nr. 6","Nr. 7","Nr. 17","Nr. 22","Nr. 38","Nr. 52","Nr. 58","Nr. 84","Nr. 96"],
  "Dr.-Lehmer-Str.": ["Nr. 15","Nr. 26","Nr. 31","Nr. 32","Nr. 40","Nr. 60","Nr. 76"],
  "Dr.-Deißböck-Weg": ["Nr. 13"],
  "Wilhelm-von-Diez-Str.": ["Nr. 24"]
};

const pressArticles = [
  { title: 'Protest der B388 Anwohner: \u201EWir wollen endlich gesch\u00FCtzt werden\u201C', source: "Erdinger Anzeiger, 28.02.2009", href: "/dokumente/mm-2009-02-09.pdf" },
  { title: "Lärmschutzwall für Siedlung Erding-Ost gefordert", source: "Erdinger Nachrichten, 28.02.2009", href: "/dokumente/sz-2009-02-28.pdf" },
  { title: "Lärm \u2013 Bürger im Osten haben die Nase voll", source: "Hallo, 04.03.2009", href: "/dokumente/hallo-2009-03-04-teil1.pdf" },
  { title: "Stellungnahme / Ablehnung Bayer. Landtag", source: "05.02.2009", href: "/dokumente/2009-02-05-Ablehnung.pdf" },
  { title: "Schurer kämpft weiter", source: "Erdinger Anzeiger, 08.05.2009", href: "/dokumente/08-05-2009-mm.pdf" },
  { title: "Landtag verweigert Unterstützung für Lärmschutzwand", source: "Erdinger Nachrichten, 14.05.2009", href: "/dokumente/2009-05-14-sz.pdf" }
];

const sommerfeste = [2000,2001,2002,2003,2004,2005,2008,2009,2010,2011];

const protokolle = [2024,2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000];

/* ════════════════════════════════════════════
   PAGE COMPONENT
   ════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      {/* ── Header ── */}
      <header className="header">
        <div className="header__inner container">
          <Link href="/" className="header__brand">
            <Image src="/logo.jpg" alt="Logo" width={36} height={36} />
            <span className="header__name">Erding-Ost e.V.</span>
          </Link>
          <nav className="header__nav">
            <a href="#aktuelles">Aktuelles</a>
            <a href="#siedlung">Siedlung</a>
            <a href="#verein">Verein</a>
            <a href="#vorstand">Vorstand</a>
            <a href="#kabel">Kabelanlage</a>
            <a href="#dokumente">Dokumente</a>
            <a href="#rueckblicke">Rückblicke</a>
            <a href="#laermschutz">Lärm</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <div className="container">
        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__logo">
              <Image src="/logo.jpg" alt="Vereinslogo Siedlungsverein Erding-Ost" width={160} height={160} priority />
            </div>
            <div className="hero__text">
              <span className="hero__badge">Seit 1974</span>
              <h1>Siedlungsverein Erding-Ost e.V.</h1>
              <p className="hero__sub">
                134 Einfamilienhäuser, eine Gemeinschaft. Wir kümmern uns um
                Kabelanlage, Gemeinschaftsflächen und das Erscheinungsbild unserer
                Siedlung.
              </p>
              <div className="hero__actions">
                <a href="#aktuelles" className="btn btn--white">Aktuelle Meldungen</a>
                <a href="#kontakt" className="btn btn--ghost">Kontakt aufnehmen</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Aktuelles ── */}
        <section id="aktuelles" className="section">
          <div className="section__header">
            <h2 className="section__title">Aktuelles</h2>
            <p className="section__desc">Neuigkeiten, Termine und Informationen aus dem Vereinsleben</p>
          </div>
          <div className="news-grid">
            {currentNews.map((n) => (
              <article className="news-card" key={n.title}>
                <span className={`badge ${n.color}`}>{n.date}</span>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
                <a className="card-cta" href={n.href} target="_blank" rel="noreferrer">{n.cta}</a>
              </article>
            ))}
          </div>

          {/* Ältere Meldungen */}
          <details className="archive-section">
            <summary className="archive-section__summary">Ältere Meldungen anzeigen</summary>
            <div className="news-grid" style={{ marginTop: "1rem" }}>
              {archiveNews.map((n) => (
                <article className="news-card news-card--archive" key={n.title}>
                  <span className={`badge ${n.color}`}>{n.date}</span>
                  <h3>{n.title}</h3>
                  <p>{n.text}</p>
                  <a className="card-cta" href={n.href} target="_blank" rel="noreferrer">{n.cta}</a>
                </article>
              ))}
            </div>
          </details>
        </section>

        {/* ── Siedlung ── */}
        <section id="siedlung" className="section section--alt">
          <div className="section__header">
            <h2 className="section__title">Die Siedlung</h2>
            <p className="section__desc">134 Einfamilienhäuser in Erding-Ost</p>
          </div>
          <div className="siedlung-layout">
            <div className="siedlung-img">
              <Image src="/lageplan.gif" alt="Lageplan der Siedlung Erding-Ost" width={800} height={600} style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="siedlung-cards">
              <article className="info-card">
                <div className="info-card__icon info-card__icon--red">🏘️</div>
                <h3>Lage &amp; Aufbau</h3>
                <p>
                  Die Reihenhaussiedlung liegt im Osten von Erding entlang der
                  Hans-Schmidmayer-Straße, Dr.-Lehmer-Straße, Dr.-Deißböck-Weg
                  und Wilhelm-von-Diez-Straße.
                </p>
              </article>
              <article className="info-card">
                <div className="info-card__icon info-card__icon--teal">🅿️</div>
                <h3>Garagen</h3>
                <p>
                  Die Garagenplatzzuordnungen zu den einzelnen Wohneinheiten liegen
                  im Stand 12/2009 vor. Bei Reparaturfällen kann der
                  Eigentümer ermittelt werden – Anfragen an den Vorstand.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── Verein ── */}
        <section id="verein" className="section">
          <div className="section__header">
            <h2 className="section__title">Der Verein</h2>
            <p className="section__desc">Gegründet 1974 – um sich eine professionelle Hausverwaltung zu (er-)sparen</p>
          </div>
          <div className="info-grid">
            <article className="info-card">
              <div className="info-card__icon info-card__icon--red">📌</div>
              <h3>Zweck des Vereins</h3>
              <p>
                Verwaltung der vereinseigenen Rundfunkkabelanlage, Wahrung des
                Gesamteindrucks der Wohnsiedlung sowie Verwaltung und Klärung von
                Fragen zu Eigentum und Nutzung der Gemeinschaftsflächen.
              </p>
            </article>
            <article className="info-card">
              <div className="info-card__icon info-card__icon--teal">💶</div>
              <h3>Beiträge</h3>
              <p>
                Vereinsbeitrag: 16 € / Jahr. Kabelanlage (Wartung + Rücklagen):
                24 € / Jahr. Beides wird regelmäßig im April abgebucht.
              </p>
            </article>
            <article className="info-card">
              <div className="info-card__icon info-card__icon--gray">📄</div>
              <h3>Satzung &amp; Geschäftsordnung</h3>
              <p>
                Details sind in der Satzung und der Geschäftsordnung festgelegt.
                Beide Dokumente stehen im Bereich &bdquo;Dokumente&ldquo; zum Download.
              </p>
              <a className="info-card__link" href="#dokumente">Zu den Dokumenten</a>
            </article>
          </div>
        </section>

        {/* ── Vorstand ── */}
        <section id="vorstand" className="section section--alt">
          <div className="section__header">
            <h2 className="section__title">Vorstand</h2>
            <p className="section__desc">Gewählt auf der Jahreshauptversammlung</p>
          </div>
          <div className="board-grid">
            {boardMembers.map((m) => (
              <div className="board-card" key={m.name}>
                <div className="board-card__role">{m.role}</div>
                <div className="board-card__name">{m.name}</div>
                {m.addr && <div className="board-card__addr">{m.addr}</div>}
              </div>
            ))}
          </div>

          {/* Beiräte – zusammengefasst */}
          <div className="board-grid" style={{ marginTop: ".75rem" }}>
            <div className="board-card board-card--group">
              <div className="board-card__role">Verwaltungsbeiräte</div>
              <div className="board-card__names">
                {boardBeirate.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </div>
            {boardRevisoren.map((r) => (
              <div className="board-card" key={r.name}>
                <div className="board-card__role">Revisor</div>
                <div className="board-card__name">{r.name}</div>
                <div className="board-card__addr">{r.addr}</div>
              </div>
            ))}
            {boardExtras.map((e) => (
              <div className="board-card" key={e.role}>
                <div className="board-card__role">{e.role}</div>
                <div className="board-card__name">{e.name}</div>
                <div className="board-card__addr">{e.addr}</div>
              </div>
            ))}
          </div>

        </section>

        {/* ── Kabelanlage ── */}
        <section id="kabel" className="section kabel-section">
          <div className="kabel-hero">
            <div className="section__header">
              <h2 className="section__title">📡 Kabelanlage</h2>
              <p className="section__desc">Vereinseigene SAT-Kabelanlage mit Kopfstelle in der Hans-Schmidmayer-Str. 52 · Wartungsbeitrag 24 € / Jahr</p>
            </div>
          </div>

          <div className="info-grid">
            <article className="info-card">
              <div className="info-card__icon info-card__icon--red">📺</div>
              <h3>Digitales Fernsehen</h3>
              <p>
                Der übliche Sendersuchlauf sollte für die Sendereinstellungen ausreichen.
                Die ASTRA Transponder werden auf unsere Kabelkanäle umgesetzt.
              </p>
              <a className="info-card__link" href="/dokumente/senderliste2025.pdf" target="_blank" rel="noreferrer">
                Transponderliste 2025
              </a>
            </article>
            <article className="info-card">
              <div className="info-card__icon info-card__icon--blue">🔧</div>
              <h3>Service &amp; Störungen</h3>
              <p>
                Service-Partner: Sempt-EW. Im Störungsfall bitte erst prüfen, ob das
                Problem am eigenen Gerät liegt, und ggf. Nachbarn fragen. Bei
                allgemeinen Störungen:
              </p>
              <p style={{ marginTop: ".4rem", fontWeight: 600, color: "var(--c-gray-900)" }}>
                Tel: (08122) 9827-21<br />
                E-Mail: installation@sew-erding.de
              </p>
              <p style={{ marginTop: ".3rem", fontSize: ".82rem" }}>
                Mo–Do: 07:00–16:00 · Fr: 07:00–12:00<br />
                Notfall-Bereitschaft: (08122) 9827-0
              </p>
            </article>
          </div>

          {/* Verstärkerstandorte */}
          <div className="section__header" style={{ marginTop: "2rem" }}>
            <h2 className="section__title">Verstärkerstandorte</h2>
            <p className="section__desc">In diesen Häusern befinden sich die Kabelverstärker für die jeweilige Hauszeile</p>
          </div>
          <div className="amp-map-wrap">
            <AmpMapWrapper />
          </div>
          <div className="amp-groups-compact">
            {Object.entries(amplifiers).map(([street, houses]) => (
              <p className="amp-compact" key={street}>
                <strong>{street}:</strong> {houses.join(", ")}
              </p>
            ))}
          </div>

          {/* UKW Radiosender */}
          <div className="section__header" style={{ marginTop: "2rem" }}>
            <h2 className="section__title">UKW-Radioprogramme im Kabelnetz</h2>
          </div>
          <div className="radio-table-wrap">
            <table className="radio-table">
              <thead>
                <tr><th>Sender</th><th>MHz</th><th>Standort</th></tr>
              </thead>
              <tbody>
                {radioStations.map((s) => (
                  <tr key={s.name + s.freq}>
                    <td>{s.name}</td><td>{s.freq}</td><td>{s.loc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Dokumente ── */}
        <section id="dokumente" className="section section--alt">
          <div className="section__header">
            <h2 className="section__title">Dokumente &amp; Formulare</h2>
            <p className="section__desc">Alle wichtigen Unterlagen zum Herunterladen</p>
          </div>
          <div className="doc-grid">
            {documents.map((d) => (
              <a className="doc-item" key={d.title} href={d.href} target="_blank" rel="noreferrer">
                <div className="doc-icon">📄</div>
                <div className="doc-item__text">
                  <div className="doc-item__title">{d.title}</div>
                  <div className="doc-item__meta">{d.meta}</div>
                </div>
              </a>
            ))}
          </div>

          {/* JHV-Protokolle */}
          <div className="section__header" style={{ marginTop: "2rem" }}>
            <h2 className="section__title">JHV-Protokolle</h2>
            <p className="section__desc">Protokolle der Jahreshauptversammlungen 2000–2024</p>
          </div>
          <div className="retro-grid">
            {protokolle.map((year) => (
              <span className="retro-chip" key={year}>
                JHV {year}
              </span>
            ))}
          </div>
        </section>

        {/* ── Rückblicke ── */}
        <section id="rueckblicke" className="section">
          <div className="section__header">
            <h2 className="section__title">Rückblicke</h2>
            <p className="section__desc">Sommerfeste, Lärmschutz und Vereinsgeschichte</p>
          </div>

          {/* Sommerfeste */}
          <h3 className="subsection__title">Sommerfeste</h3>
          <div className="retro-grid">
            {sommerfeste.map((year) => (
              <Link className="retro-chip" key={year} href={`/sommerfest/${year}`}>
                Sommerfest {year}
              </Link>
            ))}
          </div>

          {/* Lärmschutzwall B388 */}
          <h3 className="subsection__title" style={{ marginTop: "2rem" }}>Lärmschutzwall B388</h3>
          <p className="section__desc">
            Seit über 2 Jahrzehnten setzen wir uns für Lärmschutz an der B388 ein.
            2011 wurde ein Flüsterbelag aufgetragen – weiter halten wir an aktivem Lärmschutz fest.
          </p>
          <div className="timeline">
            {pressArticles.map((a) => (
              <a className="timeline-item" key={a.title} href={a.href} target="_blank" rel="noreferrer">
                <div className="timeline-dot" />
                <div className="timeline-item__content">
                  <div className="timeline-item__title">{a.title}</div>
                  <div className="timeline-item__sub">{a.source}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Ehemalige Vorstände */}
          <h3 className="subsection__title" style={{ marginTop: "2rem" }}>Ehemalige Vorstände</h3>
          <p className="section__desc">Ein besonderer Dank für die geleistete Arbeit</p>
          <div className="retro-grid">
            {formerChairs.map((c) => (
              <span className="retro-chip" key={c}>{c}</span>
            ))}
          </div>
        </section>

        {/* ── Kontakt ── */}
        <section id="kontakt" className="section">
          <div className="section__header">
            <h2 className="section__title">Kontakt</h2>
            <p className="section__desc">So erreichen Sie uns</p>
          </div>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:vorstand@erding-ost.de">
              <div className="contact-card__icon">👤</div>
              <div className="contact-card__role">1. Vorsitzender</div>
              <div className="contact-card__name">Thomas Feldt</div>
              <div className="contact-card__email">vorstand@erding-ost.de</div>
            </a>
            <a className="contact-card" href="mailto:webmaster@erding-ost.de">
              <div className="contact-card__icon">🌐</div>
              <div className="contact-card__role">Webmaster</div>
              <div className="contact-card__name">Christian Sack</div>
              <div className="contact-card__email">webmaster@erding-ost.de</div>
            </a>
          </div>
        </section>
      </div>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer__inner container">
          <div className="footer__brand">
            <Image src="/logo.jpg" alt="Logo" width={28} height={28} />
            <span>Siedlungsverein Erding-Ost e.V.</span>
          </div>
          <div className="footer__links">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
          <p className="footer__copy">
            © {new Date().getFullYear()} Siedlungsverein Erding-Ost e.V.
          </p>
        </div>
      </footer>
    </>
  );
}
