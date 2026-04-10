import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Reihenhaussiedlung Erding-Ost e.V.",
  description: "Impressum der Reihenhaussiedlung Erding-Ost e.V. gemäß § 5 DDG",
};

export default function ImpressumPage() {
  return (
    <>
      <header className="header">
        <div className="header__inner container">
          <Link href="/" className="header__brand">
            <Image src="/logo.jpg" alt="Logo" width={36} height={36} />
            <span className="header__name">Erding-Ost e.V.</span>
          </Link>
          <nav className="header__nav">
            <Link href="/">Startseite</Link>
          </nav>
        </div>
      </header>

      <div className="container">
        <section className="section">
          <div className="section__header">
            <h1 className="section__title">Impressum</h1>
            <p className="section__desc">Angaben gemäß § 5 DDG</p>
          </div>

          {/* ── Diensteanbieter ── */}
          <div className="info-card" style={{ maxWidth: 640 }}>
            <h2>Diensteanbieter</h2>
            <p style={{ marginTop: ".75rem" }}>
              Reihenhaussiedlung Erding-Ost e.V.<br />
              c/o Christian Sack<br />
              Dr.-Lehmer-Str. 52<br />
              D-85435 Erding
            </p>
          </div>

          {/* ── Kontakt ── */}
          <div className="info-card" style={{ maxWidth: 640, marginTop: "1rem" }}>
            <h2>Kontakt</h2>
            <p style={{ marginTop: ".75rem" }}>
              E-Mail:{" "}
              <a href="mailto:webmaster@erding-ost.de">
                webmaster@erding-ost.de
              </a>
            </p>
          </div>

          {/* ── Vertretungsberechtigte ── */}
          <div className="info-card" style={{ maxWidth: 640, marginTop: "1rem" }}>
            <h2>Vertretungsberechtigte</h2>
            <p style={{ marginTop: ".75rem" }}>
              1. Vorsitzender: Thomas Feldt<br />
              2. Vorsitzender: Christoph Lotter
            </p>
          </div>

          {/* ── Vereinsregister ── */}
          <div className="info-card" style={{ maxWidth: 640, marginTop: "1rem" }}>
            <h2>Vereinsregister</h2>
            <p style={{ marginTop: ".75rem" }}>
              {/* TODO: Registergericht und Registernummer eintragen, z. B.: */}
              {/* Registergericht: Amtsgericht Erding<br /> */}
              {/* Registernummer: VR XXXX */}
              Registereintrag wird auf Anfrage mitgeteilt. Bitte wenden Sie sich
              an Thomas Feldt ({" "}
              <a href="mailto:vorstand@erding-ost.de">vorstand@erding-ost.de</a>).
            </p>
          </div>

          {/* ── Verantwortlicher nach § 18 Abs. 2 MStV ── */}
          <div className="info-card" style={{ maxWidth: 640, marginTop: "1rem" }}>
            <h2>Verantwortlicher für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p style={{ marginTop: ".75rem" }}>
              Thomas Feldt (1. Vorsitzender)<br />
              Dr.-Lehmer-Str. 27<br />
              D-85435 Erding
            </p>
          </div>

          {/* ── Streitschlichtung ── */}
          <div className="info-card" style={{ maxWidth: 640, marginTop: "1rem" }}>
            <h2>Streitschlichtung</h2>
            <p style={{ marginTop: ".75rem" }}>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
            <p style={{ marginTop: ".5rem" }}>
              Wir sind nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/datenschutz">Zur Datenschutzerklärung</Link>
          </p>
        </section>
      </div>

      <footer className="footer">
        <div className="footer__inner container">
          <p className="footer__copy" style={{ width: "100%", textAlign: "center" }}>
            &copy; {new Date().getFullYear()} Reihenhaussiedlung Erding-Ost e.V.
          </p>
        </div>
      </footer>
    </>
  );
}
