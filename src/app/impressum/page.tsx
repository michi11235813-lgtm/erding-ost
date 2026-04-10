import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Impressum – Erding-Ost e.V.",
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
          </div>

          <div className="info-card" style={{ maxWidth: 600 }}>
            <h3>Angaben gemäß § 5 TMG</h3>
            <p style={{ marginTop: ".75rem" }}>
              Reihenhaussiedlung Erding-Ost e.V.<br />
              c/o Christian Sack<br />
              Dr.-Lehmer-Str. 52<br />
              D-85435 Erding
            </p>
            <p style={{ marginTop: "1rem" }}>
              <strong>Kontakt:</strong>{" "}
              <a href="mailto:webmaster@erding-ost.de" style={{ color: "var(--c-secondary)" }}>
                webmaster@erding-ost.de
              </a>
            </p>
          </div>

          <div className="info-card" style={{ maxWidth: 600, marginTop: "1rem" }}>
            <h3>Haftungshinweis</h3>
            <p style={{ marginTop: ".75rem" }}>
              Mit Urteil vom 12. Mai 1998 hat das Landgericht Hamburg entschieden,
              dass man durch die Ausbringung eines Links die Inhalte der gelinkten
              Seite ggf. mit zu verantworten hat. Dies kann – so das LG – nur
              dadurch verhindert werden, dass man sich ausdrücklich von diesen
              Inhalten distanziert.
            </p>
            <p style={{ marginTop: ".5rem" }}>
              Wir möchten ausdrücklich betonen, dass wir keinerlei Einfluss auf die
              Gestaltung und die Inhalte der gelinkten Seiten haben. Deshalb
              distanzieren wir uns hiermit ausdrücklich von allen Inhalten aller
              gelinkten Seiten auf dieser Website und machen uns ihre Inhalte nicht
              zu eigen. Diese Erklärung gilt für alle auf dieser Website angebrachten
              Links.
            </p>
          </div>
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
