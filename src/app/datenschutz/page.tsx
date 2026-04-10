import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz | Siedlungsverein Erding-Ost e.V.",
  description: "Informationen zur Verarbeitung personenbezogener Daten auf der Website des Siedlungsverein Erding-Ost e.V."
};

export default function DatenschutzPage() {
  return (
    <main className="container section" style={{ maxWidth: "860px" }}>
      <header className="section__header">
        <h1 className="section__title">Datenschutzerklärung</h1>
        <p className="section__desc">Stand: 10.04.2026</p>
      </header>

      <section className="info-card" style={{ marginBottom: "1rem" }}>
        <h2>1. Verantwortlicher</h2>
        <p>
          Siedlungsverein Erding-Ost e.V.<br />
          c/o Christian Sack<br />
          Dr.-Lehmer-Str. 52<br />
          85435 Erding
        </p>
        <p>
          E-Mail: <a href="mailto:webmaster@erding-ost.de">webmaster@erding-ost.de</a>
        </p>
      </section>

      <section className="info-card" style={{ marginBottom: "1rem" }}>
        <h2>2. Hosting und Server-Logfiles</h2>
        <p>
          Diese Website wird bei Vercel gehostet. Beim Aufruf der Seite verarbeitet der Hoster technisch notwendige
          Verbindungsdaten (z. B. IP-Adresse, Datum/Uhrzeit, aufgerufene URL, User-Agent), um die Website bereitzustellen
          und die Sicherheit zu gewährleisten.
        </p>
        <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb).</p>
      </section>

      <section className="info-card" style={{ marginBottom: "1rem" }}>
        <h2>3. Kontaktaufnahme per E-Mail</h2>
        <p>
          Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage und für
          mögliche Anschlussfragen.
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche/vertragliche Kommunikation) bzw. lit. f DSGVO
          (allgemeine Kommunikation).
        </p>
      </section>

      <section className="info-card" style={{ marginBottom: "1rem" }}>
        <h2>4. Cookies und Tracking</h2>
        <p>
          Auf dieser Website werden derzeit keine nicht-essentiellen Cookies, keine Analyse-Tools und kein Marketing-Tracking
          eingesetzt.
        </p>
      </section>

      <section className="info-card" style={{ marginBottom: "1rem" }}>
        <h2>5. Externe Links</h2>
        <p>
          Diese Website enthält externe Links (z. B. auf Dokumente unter erding-ost.de). Beim Anklicken dieser Links verlassen
          Sie unsere Website. Für die Datenverarbeitung auf den verlinkten Seiten sind deren Betreiber verantwortlich.
        </p>
      </section>

      <section className="info-card" style={{ marginBottom: "1rem" }}>
        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben nach der DSGVO insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen.
        </p>
        <p>
          Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
        </p>
      </section>

      <section className="info-card">
        <h2>7. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir passen diese Datenschutzerklärung an, wenn sich rechtliche Anforderungen oder unsere Verarbeitungstätigkeiten ändern.
        </p>
        <p>
          <Link href="/">Zurück zur Startseite</Link>
        </p>
      </section>
    </main>
  );
}
