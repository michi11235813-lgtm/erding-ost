import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Siedlungsverein Erding-Ost e.V.",
  description: "Impressum des Siedlungsverein Erding-Ost e.V. gemaess § 5 DDG"
};

export default function ImpressumPage() {
  return (
    <main className="container section" style={{ maxWidth: "860px" }}>
      <header className="section__header">
        <h1 className="section__title">Impressum</h1>
        <p className="section__desc">Angaben gemaess § 5 DDG und § 18 Abs. 2 MStV</p>
      </header>

      <section className="info-card" style={{ marginBottom: "1rem" }}>
        <h2>Diensteanbieter</h2>
        <p>
          Siedlungsverein Erding-Ost e.V.<br />
          c/o Christian Sack<br />
          Dr.-Lehmer-Str. 52<br />
          85435 Erding<br />
          Deutschland
        </p>
      </section>

      <section className="info-card" style={{ marginBottom: "1rem" }}>
        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:webmaster@erding-ost.de">webmaster@erding-ost.de</a>
        </p>
      </section>

      <section className="info-card" style={{ marginBottom: "1rem" }}>
        <h2>Vertretungsberechtigte</h2>
        <p>
          1. Vorsitzender: Thomas Feldt<br />
          2. Vorsitzender: Christoph Lotter
        </p>
      </section>

      <section className="info-card" style={{ marginBottom: "1rem" }}>
        <h2>Verantwortlich fuer den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          Christian Sack<br />
          Dr.-Lehmer-Str. 52<br />
          85435 Erding
        </p>
      </section>

      <section className="info-card" style={{ marginBottom: "1rem" }}>
        <h2>Registereintrag und Umsatzsteuer-ID</h2>
        <p>
          Vereinsregister: Keine Eintragung angegeben.<br />
          Umsatzsteuer-Identifikationsnummer gemaess § 27a UStG: Keine angegeben.
        </p>
      </section>

      <section className="info-card" style={{ marginBottom: "1rem" }}>
        <h2>Streitschlichtung</h2>
        <p>
          Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          {" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
          .
        </p>
        <p>
          Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section className="info-card">
        <h2>Navigation</h2>
        <p>
          <Link href="/datenschutz">Zur Datenschutzerklaerung</Link>
          <br />
          <Link href="/">Zur Startseite</Link>
        </p>
      </section>
    </main>
  );
}
