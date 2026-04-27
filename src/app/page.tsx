import Image from "next/image";
import Link from "next/link";
import AmpMapWrapper from "./components/AmpMapWrapper";
import MobileNav from "./components/MobileNav";

/* ════════════════════════════════════════════
   DATA – extracted from all erding-ost.de pages
   ════════════════════════════════════════════ */

/* News: items younger than ~1 year appear in "Aktuelles", older ones in "Archiv" */
const currentNews = [
  {
    title: "Protokoll der JHV 2026",
    date: "2026",
    text: "Das Protokoll der letzten Jahreshauptversammlung steht als PDF zum Download bereit.",
    href: "/dokumente/jhv-2026-protokoll.pdf",
    cta: "Protokoll öffnen",
    color: "badge"
  },
  {
    title: "Einladung Jahreshauptversammlung 2026",
    date: "15. April 2026",
    text: "Am 15. April 2026 findet die nächste Jahreshauptversammlung statt. Alle Mitglieder sind herzlich eingeladen.",
    href: "/dokumente/Einladung_JHV_2026.pdf",
    cta: "Einladung herunterladen",
    color: "badge"
  },
  {
    title: "Grüngut-Container 2025",
    date: "24.–26. Okt. 2025",
    text: "Grünschnitt konnte an drei Tagen kostenlos entsorgt werden.",
    href: "/dokumente/Aushang_GruengutContainer-2025.pdf",
    cta: "Mehr erfahren",
    color: "badge"
  }
];

const archiveNews = [
  {
    title: "ARD nur noch in HD",
    date: "Seit Januar 2025",
    text: "Die Programme der ARD laufen nur noch in HDTV. Informationen zur SD-Abschaltung im Kabelnetz.",
    href: "/dokumente/Abschaltung_SD_OEFF_RECHTL.pdf",
    cta: "Hinweis lesen",
    color: "badge"
  },
  {
    title: "Garagenplatzzuordnungen",
    date: "Stand 12/2009",
    text: "Die Zuordnung der Garagen zu den Wohneinheiten ist aktualisiert. Bei Bedarf bitte den Vorstand kontaktieren.",
    href: "#verein",
    cta: "Zum Vorstand",
    color: "badge"
  }
];

const boardMembers = [
  { role: "1. Vorsitzender", name: "Thomas Feldt", addr: "Dr.-Lehmer-Str. 27" },
  { role: "2. Vorsitzender", name: "Christoph Lotter" },
  { role: "Kassiererin", name: "Viktoria Bartsch", addr: "Hans-Schmidmayer-Str. 52" },
  { role: "Schriftführerin", name: "Eva Döllel", addr: "Hans-Schmidmayer-Str. 17" }
];

const boardBeirate = [
  "Wolfgang Großer", "Ulrich Kaiser", "Mark Neubauer",
  "Florian Grasser", "Hedwig Prey-Schmuck", "Hendrik Wanger", "Elke Erdner"
];

const boardRevisoren = [
  { role: "Revisorin", name: "Magdalena Koschek", addr: "Hans-Schmidmayer-Str. 14" },
  { role: "Revisor", name: "Christian Speiseder", addr: "Dr.-Lehmer-Str. 15" }
];

const boardExtras = [
  { role: "Webadmin", name: "Christian Sack", addr: "Dr.-Lehmer-Str. 52" },
  { role: "Kabelverantwortlicher", name: "Christian Sack", addr: "Dr.-Lehmer-Str. 52" }
];

const formerChairs = [
  "Willibald Beitel (1976–198x)",
  "Lothar Sack",
  "Hans Döllel (–1998)",
  "Adly Whaba (1998–2005)",
  "Christian Sack (2005–2008)",
  "Bernd Nitzschmann (2008–)",
  "Hendrik Wanger",
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

const protokolle = [
  { year: 2026, href: "/dokumente/jhv-2026-protokoll.pdf" },
  { year: 2025, href: "/dokumente/jhv-2025-protokoll.pdf" },
  { year: 2024, href: "/dokumente/jhv-2024-protokoll.pdf" },
  { year: 2023, href: "/dokumente/jhv-2023-protokoll.pdf" },
  { year: 2022, href: "/dokumente/Protokoll_JHV_2022.pdf" },
  { year: 2021, href: "/dokumente/Protokoll_JHV_2021.pdf" },
  { year: 2020, href: "/dokumente/Protokoll_JHV_2020.pdf" },
  { year: 2019, href: "/dokumente/jhv-2019-protokoll.pdf" },
  { year: 2018, href: "/dokumente/jhv-2018-protokoll.pdf" },
  { year: 2017, href: "/dokumente/jhv-2017-protokoll.pdf" },
  { year: 2016, href: "/dokumente/jhv-2016-protokoll.pdf" },
  { year: 2015, href: "/dokumente/jhv-2015-protokoll.pdf" },
  { year: 2014, href: "/dokumente/jhv-2014-protokoll.pdf" },
  { year: 2013, href: "/dokumente/jhv-2013-protokoll.pdf" },
  { year: 2012, href: "/dokumente/jhv-2012-protokoll.pdf" },
  { year: 2011, href: "/dokumente/jhv-2011-protokoll.pdf" },
  { year: "2010 (a.o.)", label: "a.o. HV 2010", href: "/dokumente/a-hv-2010-protokoll.pdf" },
  { year: 2010, href: "/dokumente/jhv-2010-protokoll.pdf" },
  { year: 2009, href: "/dokumente/jhv-2009-protokoll.pdf" },
  { year: 2008, href: "/dokumente/jhv-2008-protokoll.pdf" },
  { year: 2007, href: "/dokumente/jhv-2007-protokoll.pdf" },
  { year: 2006, href: "/dokumente/jhv-2006-protokoll.pdf" },
  { year: "2005 (2.)", label: "JHV 2005 (2. Sitzung)", href: "/dokumente/jhv-2005-2-protokoll.pdf" },
  { year: 2005, href: "/dokumente/jhv-2005-protokoll.pdf" },
  { year: 2004, href: "/dokumente/jhv-2004-protokoll.pdf" },
  { year: 2003, href: "/dokumente/jhv-2003-protokoll.pdf" },
  { year: 2002, href: "/dokumente/jhv-2002-protokoll.pdf" },
  { year: 2001, href: "/dokumente/jhv-2001-protokoll.pdf" },
  { year: 2000, href: "/dokumente/jhv-2000-protokoll.pdf" },
];

/* ════════════════════════════════════════════
   PAGE COMPONENT
   ════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#aktuelles">Zum Inhalt springen</a>

      {/* ── Header ── */}
      <header className="header">
        <div className="header__inner container">
          <Link href="/" className="header__brand">
            <Image src="/logo.jpg" alt="Logo" width={36} height={36} />
            <span className="header__name">RHS Erding-Ost e.V.</span>
          </Link>
          <nav className="header__nav" aria-label="Hauptnavigation">
            <a href="#aktuelles">Aktuelles</a>
            <a href="#siedlung">Siedlung</a>
            <a href="#verein">Verein</a>
            <a href="#vorstand">Vorstand</a>
            <a href="#kabel">Kabelanlage</a>
            <a href="#dokumente">Dokumente</a>
            <a href="#rueckblicke">Rückblicke</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <MobileNav />
        </div>
      </header>

      <main>
      <div className="container">
        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__logo">
              <Image src="/logo.jpg" alt="Vereinslogo Reihenhaussiedlung Erding-Ost" width={120} height={120} priority />
            </div>
            <div className="hero__text">
              <span className="hero__badge">Seit 1974</span>
              <h1>Reihenhaussiedlung Erding-Ost e.V.</h1>
              <p className="hero__sub">
                134 Reihenhäuser, eine Gemeinschaft – seit über 50 Jahren verwalten
                wir unsere gemeinsame Kabelanlage und pflegen die Gemeinschaftsflächen
                und das Siedlungsbild zwischen B388 und Stadtpark im Osten von Erding.
              </p>
            </div>
          </div>
        </section>

        {/* ── Aktuelles ── */}
        <section id="aktuelles" className="section">
          <div className="section__header">
            <h2 className="section__title">Aktuelles</h2>
            <p className="section__desc">Termine, Beschlüsse und Hinweise für Vereinsmitglieder</p>
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
            <p className="section__desc">Reihenhaussiedlung zwischen B388 und Stadtpark</p>
          </div>
          <div className="siedlung-layout">
            <div className="siedlung-img">
              <Image src="/lageplan.gif" alt="Lageplan der Siedlung Erding-Ost" width={800} height={600} style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="siedlung-cards">
              <article className="info-card">
                <div className="info-card__icon" aria-hidden="true">🏘️</div>
                <h3>Lage &amp; Aufbau</h3>
                <p>
                  134 Reihenhäuser entlang der Hans-Schmidmayer-Straße,
                  Dr.-Lehmer-Straße, Dr.-Deißböck-Weg und Wilhelm-von-Diez-Straße.
                </p>
              </article>
              <article className="info-card">
                <div className="info-card__icon" aria-hidden="true">🅿️</div>
                <h3>Garagen</h3>
                <p>
                  Zuordnung der Garagenplätze zu den Wohneinheiten liegt beim
                  Vorstand vor (Stand 12/2009). Bei Fragen oder Reparaturbedarf
                  bitte direkt melden.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── Verein ── */}
        <section id="verein" className="section">
          <div className="section__header">
            <h2 className="section__title">Der Verein</h2>
            <p className="section__desc">Gegründet 1974 zur gemeinschaftlichen Selbstverwaltung der Siedlung</p>
          </div>
          <div className="info-grid">
            <article className="info-card">
              <div className="info-card__icon" aria-hidden="true">📌</div>
              <h3>Zweck des Vereins</h3>
              <p>
                Verwaltung der vereinseigenen Rundfunkkabelanlage, Wahrung des
                Gesamteindrucks der Wohnsiedlung sowie Verwaltung und Klärung von
                Fragen zu Eigentum und Nutzung der Gemeinschaftsflächen.
              </p>
            </article>
            <article className="info-card">
              <div className="info-card__icon" aria-hidden="true">💶</div>
              <h3>Beiträge</h3>
              <p>
                Vereinsbeitrag: 16 € / Jahr. Kabelanlage (Wartung + Rücklagen):
                24 € / Jahr. Beides wird regelmäßig im April abgebucht.
              </p>
            </article>
            <article className="info-card">
              <div className="info-card__icon" aria-hidden="true">📄</div>
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
            <p className="section__desc">Gewählt auf der jährlichen Hauptversammlung</p>
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
                <div className="board-card__role">{r.role}</div>
                <div className="board-card__name">{r.name}</div>
                <div className="board-card__addr">{r.addr}</div>
              </div>
            ))}
            {boardExtras.map((e, i) => (
              <div className="board-card" key={`${e.role}-${i}`}>
                <div className="board-card__role">{e.role}</div>
                <div className="board-card__name">{e.name}</div>
                <div className="board-card__addr">{e.addr}</div>
              </div>
            ))}
          </div>

        </section>

        {/* ── Kabelanlage ── */}
        <section id="kabel" className="section">
          <div className="kabel-hero">
            <div className="section__header">
              <h2 className="section__title">Kabelanlage</h2>
              <p className="section__desc">Vereinseigene SAT-Anlage · Kopfstelle Hans-Schmidmayer-Str. 52 · Wartungsbeitrag 24 €/Jahr</p>
            </div>
          </div>

          <div className="info-grid">
            <article className="info-card">
              <div className="info-card__icon" aria-hidden="true">📺</div>
              <h3>Digitales Fernsehen</h3>
              <p>
                Die ASTRA-Transponder werden auf unsere Kabelfrequenzen umgesetzt –
                ein normaler Sendersuchlauf reicht zur Einrichtung.
              </p>
              <a className="info-card__link" href="/dokumente/senderliste2025.pdf" target="_blank" rel="noreferrer">
                Transponderliste 2025
              </a>
            </article>
            <article className="info-card">
              <div className="info-card__icon" aria-hidden="true">🔧</div>
              <h3>Unser Servicepartner</h3>
              <p>
                Sempt-EW hat die SAT-Kabelanlage installiert und übernimmt weiterhin den technischen
                Service. Störungen werden – soweit möglich – auch an Wochenenden und Feiertagen behoben.
                Ein Wartungsvertrag wird jedoch nicht angeboten.
              </p>
            </article>
            <article className="info-card">
              <div className="info-card__icon" aria-hidden="true">📞</div>
              <h3>Bei Störungen der Kabelanlage</h3>
              <p><strong>Sempt-EW Hotline:</strong> (08122) 9827-21</p>
              <p style={{ marginTop: ".3rem", fontSize: ".85rem" }}>
                – Der Verein übernimmt Reparaturkosten der Kabelanlage.<br />
                – Für Reparaturen nach dem Übergabepunkt ist der Hausbewohner/Eigentümer zahlungspflichtig.
              </p>
              <p style={{ marginTop: ".6rem" }}><strong>Siedlungsintern:</strong> Christian Sack</p>
              <p style={{ marginTop: ".3rem", fontSize: ".85rem" }}>
                Tel: (08122) 90 00 36<br />
                E-Mail: <a href="mailto:kabelanlage@erding-ost.de" style={{ color: "var(--c-secondary)" }}>kabelanlage@erding-ost.de</a>
              </p>
              <p style={{ marginTop: ".3rem", fontSize: ".82rem", color: "var(--c-gray-600)" }}>
                Bitte alle Reparaturen an der Kabelanlage melden (ggf. nachträglich).
              </p>
            </article>
          </div>

          {/* Verstärkerstandorte */}
          <h3 className="subsection__title" style={{ marginTop: "2rem" }}>Verstärkerstandorte</h3>
          <p className="section__desc">Standorte der Kabelverstärker je Hauszeile</p>
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
          <h3 className="subsection__title" style={{ marginTop: "2rem" }}>UKW-Radioprogramme im Kabelnetz</h3>
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
            <p className="section__desc">Satzung, Formulare und weitere Unterlagen als PDF</p>
          </div>
          <div className="doc-grid">
            {documents.map((d) => (
              <a className="doc-item" key={d.title} href={d.href} target="_blank" rel="noreferrer">
                <div className="doc-icon" aria-hidden="true">📄</div>
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
            <p className="section__desc">Protokolle der Jahreshauptversammlungen 2000–2025</p>
          </div>
          <div className="retro-grid">
            {protokolle.map((p) => (
              <a className="retro-chip" key={p.year} href={p.href} target="_blank" rel="noreferrer">
                {p.label ?? `JHV ${p.year}`}
              </a>
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
            Seit über zwei Jahrzehnten setzen wir uns für Lärmschutz an der B388 ein.
            2011 wurde ein Flüsterbelag aufgebracht – das Engagement geht weiter.
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
        <section id="kontakt" className="section section--alt">
          <div className="section__header">
            <h2 className="section__title">Kontakt</h2>
            <p className="section__desc">Fragen, Anregungen oder Störungsmeldungen</p>
          </div>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:vorstand@erding-ost.de">
              <div className="contact-card__icon" aria-hidden="true">✉️</div>
              <div className="contact-card__role">1. Vorsitzender</div>
              <div className="contact-card__name">Thomas Feldt</div>
              <div className="contact-card__email">vorstand@erding-ost.de</div>
            </a>
            <a className="contact-card" href="mailto:webmaster@erding-ost.de">
              <div className="contact-card__icon" aria-hidden="true">💻</div>
              <div className="contact-card__role">Webmaster</div>
              <div className="contact-card__name">Christian Sack</div>
              <div className="contact-card__email">webmaster@erding-ost.de</div>
            </a>
            <a className="contact-card" href="https://chat.whatsapp.com/D4Z8zJNJzKR19uh0ZGAhsG" target="_blank" rel="noreferrer">
              <div className="contact-card__icon" aria-hidden="true">💬</div>
              <div className="contact-card__role">WhatsApp Gruppe</div>
              <div className="contact-card__name">RHS Erding-Ost e.V.</div>
              <div className="contact-card__email">Beitreten →</div>
            </a>
            <a className="contact-card" href="tel:0812298270">
              <div className="contact-card__icon" aria-hidden="true">🔧</div>
              <div className="contact-card__role">Kabelanlage – SEW Hotline</div>
              <div className="contact-card__name">Sempt-EW</div>
              <div className="contact-card__email">(08122) 9827-21</div>
            </a>
            <a className="contact-card" href="mailto:kabelanlage@erding-ost.de">
              <div className="contact-card__icon" aria-hidden="true">📡</div>
              <div className="contact-card__role">Kabelanlage – Siedlungsintern</div>
              <div className="contact-card__name">Christian &amp; Lothar Sack</div>
              <div className="contact-card__email">kabelanlage@erding-ost.de · (08122) 90 00 36</div>
            </a>
          </div>
        </section>
      </div>
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer__inner container">
          <div className="footer__brand">
            <Image src="/logo.jpg" alt="Logo" width={28} height={28} />
            <span>Reihenhaussiedlung Erding-Ost e.V.</span>
          </div>
          <div className="footer__links">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
          <p className="footer__copy">
            © {new Date().getFullYear()} Reihenhaussiedlung Erding-Ost e.V.
          </p>
        </div>
      </footer>
    </>
  );
}
