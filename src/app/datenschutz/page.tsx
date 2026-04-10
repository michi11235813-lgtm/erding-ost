import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Reihenhaussiedlung Erding-Ost e.V.",
  description:
    "Datenschutzerklärung gemäß Art. 13 DSGVO für die Website der Reihenhaussiedlung Erding-Ost e.V.",
};

export default function DatenschutzPage() {
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
            <h1 className="section__title">Datenschutzerklärung</h1>
            <p className="section__desc">Stand: 10.04.2026 · Informationen gemäß Art. 13 DSGVO</p>
          </div>

          {/* ── 1. Verantwortlicher ── */}
          <div className="info-card" style={{ maxWidth: 680, marginBottom: "1rem" }}>
            <h2>1. Verantwortlicher</h2>
            <p style={{ marginTop: ".75rem" }}>
              Reihenhaussiedlung Erding-Ost e.V.<br />
              c/o Christian Sack<br />
              Dr.-Lehmer-Str. 52<br />
              85435 Erding<br />
              E-Mail:{" "}
              <a href="mailto:webmaster@erding-ost.de">webmaster@erding-ost.de</a>
            </p>
          </div>

          {/* ── 2. Hosting (Vercel) ── */}
          <div className="info-card" style={{ maxWidth: 680, marginBottom: "1rem" }}>
            <h2>2. Hosting und Server-Logfiles</h2>
            <p style={{ marginTop: ".75rem" }}>
              Diese Website wird von <strong>Vercel Inc.</strong> (440 N Barranca Ave
              #4133, Covina, CA 91723, USA) gehostet. Beim Aufruf der Seite verarbeitet
              Vercel technisch notwendige Verbindungsdaten (IP-Adresse, Datum/Uhrzeit,
              aufgerufene URL, HTTP-Statuscode, User-Agent), um die Website bereitzustellen
              und die Sicherheit zu gewährleisten.
            </p>
            <p style={{ marginTop: ".5rem" }}>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse am sicheren Betrieb).
            </p>
            <p style={{ marginTop: ".5rem" }}>
              <strong>Speicherdauer:</strong> Vercel speichert Server-Logfiles in der
              Regel für maximal 30 Tage.
            </p>
            <p style={{ marginTop: ".5rem" }}>
              <strong>Drittlandtransfer:</strong> Vercel ist in den USA ansässig. Die
              Datenübermittlung erfolgt auf Grundlage des EU-US Data Privacy Framework
              (Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023, Art. 45 DSGVO)
              sowie zusätzlich auf Basis von Standardvertragsklauseln (Art. 46 Abs. 2
              lit. c DSGVO). Vercels Datenschutzhinweise:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </div>

          {/* ── 3. Kontakt per E-Mail ── */}
          <div className="info-card" style={{ maxWidth: 680, marginBottom: "1rem" }}>
            <h2>3. Kontaktaufnahme per E-Mail</h2>
            <p style={{ marginTop: ".75rem" }}>
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur
              Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen.
            </p>
            <p style={{ marginTop: ".5rem" }}>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
              (vorvertragliche/vertragliche Kommunikation) bzw. lit. f DSGVO (allgemeine
              Kommunikation).
            </p>
            <p style={{ marginTop: ".5rem" }}>
              <strong>Speicherdauer:</strong> E-Mails werden gelöscht, sobald die
              Anfrage abschließend bearbeitet ist, spätestens jedoch nach drei Jahren,
              sofern keine gesetzliche Aufbewahrungspflicht besteht.
            </p>
          </div>

          {/* ── 4. Cookies und Tracking ── */}
          <div className="info-card" style={{ maxWidth: 680, marginBottom: "1rem" }}>
            <h2>4. Cookies und Tracking</h2>
            <p style={{ marginTop: ".75rem" }}>
              Auf dieser Website werden keine nicht-essentiellen Cookies, keine
              Analyse-Tools und kein Marketing-Tracking eingesetzt. Es werden keine
              Cookie-Banner benötigt.
            </p>
          </div>

          {/* ── 5. Externe Links ── */}
          <div className="info-card" style={{ maxWidth: 680, marginBottom: "1rem" }}>
            <h2>5. Externe Links</h2>
            <p style={{ marginTop: ".75rem" }}>
              Diese Website enthält Links auf externe Seiten (z. B. PDF-Dokumente).
              Beim Anklicken dieser Links verlassen Sie unsere Website. Für die
              Datenverarbeitung auf den verlinkten Seiten sind deren Betreiber
              verantwortlich.
            </p>
          </div>

          {/* ── 6. Betroffenenrechte ── */}
          <div className="info-card" style={{ maxWidth: 680, marginBottom: "1rem" }}>
            <h2>6. Ihre Rechte als betroffene Person</h2>
            <p style={{ marginTop: ".75rem" }}>
              Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer
              personenbezogenen Daten:
            </p>
            <ul style={{ marginTop: ".5rem", paddingLeft: "1.25rem" }}>
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>
                Widerspruchsrecht gegen Verarbeitungen auf Basis berechtigter
                Interessen (Art. 21 DSGVO)
              </li>
            </ul>
            <p style={{ marginTop: ".75rem" }}>
              Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
              <a href="mailto:webmaster@erding-ost.de">webmaster@erding-ost.de</a>
            </p>
          </div>

          {/* ── 7. Beschwerderecht / Aufsichtsbehörde ── */}
          <div className="info-card" style={{ maxWidth: 680, marginBottom: "1rem" }}>
            <h2>7. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p style={{ marginTop: ".75rem" }}>
              Sie haben das Recht, sich bei der zuständigen
              Datenschutz-Aufsichtsbehörde zu beschweren:
            </p>
            <p style={{ marginTop: ".5rem" }}>
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 27<br />
              91522 Ansbach<br />
              <a href="https://www.lda.bayern.de/" target="_blank" rel="noreferrer">
                www.lda.bayern.de
              </a>
            </p>
          </div>

          {/* ── 8. Änderungen ── */}
          <div className="info-card" style={{ maxWidth: 680, marginBottom: "1rem" }}>
            <h2>8. Änderungen dieser Datenschutzerklärung</h2>
            <p style={{ marginTop: ".75rem" }}>
              Wir passen diese Datenschutzerklärung an, wenn sich rechtliche
              Anforderungen oder unsere Verarbeitungstätigkeiten ändern. Das Datum
              „Stand" am Seitenanfang gibt die letzte Aktualisierung an.
            </p>
          </div>

          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/impressum">Zum Impressum</Link>
            {" · "}
            <Link href="/">Zurück zur Startseite</Link>
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
