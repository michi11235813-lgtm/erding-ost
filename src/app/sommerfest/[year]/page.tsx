import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { sommerfestData, sommerfestYears, folderForYear } from "../data";

export function generateStaticParams() {
  return sommerfestYears.map((y) => ({ year: String(y) }));
}

export function generateMetadata({ params }: { params: Promise<{ year: string }> }) {
  return params.then((p) => ({
    title: `Sommerfest ${p.year} – Erding-Ost e.V.`,
  }));
}

export default async function SommerfestPage({ params }: { params: Promise<{ year: string }> }) {
  const { year: yearStr } = await params;
  const year = Number(yearStr);
  const data = sommerfestData[year];
  if (!data) notFound();

  const folder = folderForYear(year);
  const prevYear = sommerfestYears[sommerfestYears.indexOf(year) + 1];
  const nextYear = sommerfestYears[sommerfestYears.indexOf(year) - 1];

  return (
    <>
      <header className="header">
        <div className="header__inner container">
          <Link href="/" className="header__brand">
            <Image src="/logo.jpg" alt="Logo" width={36} height={36} />
            <span className="header__name">Erding-Ost e.V.</span>
          </Link>
          <nav className="header__nav">
            <Link href="/#aktuelles">Aktuelles</Link>
            <Link href="/#siedlung">Siedlung</Link>
            <Link href="/#verein">Verein</Link>
            <Link href="/#kabel">Kabelanlage</Link>
            <Link href="/#rueckblicke">Rückblicke</Link>
          </nav>
        </div>
      </header>

      <div className="container">
        <section className="section">
          <div className="section__header">
            <Link href="/#rueckblicke" className="back-link">&larr; Rückblicke</Link>
            <h1 className="section__title" style={{ marginTop: ".5rem" }}>
              Sommerfest {year}
            </h1>
          </div>

          {data.note && <p className="section__desc">{data.note}</p>}

          {data.images.length > 0 && (
            <div className="gallery-grid">
              {data.images.map((img) => (
                <div className="gallery-item" key={img}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/bilder/${folder}/${encodeURIComponent(img)}`}
                    alt={`Sommerfest ${year}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="gallery-nav">
            {prevYear != null && (
              <Link href={`/sommerfest/${prevYear}`} className="btn btn--ghost" style={{ color: "var(--c-gray-700)", borderColor: "var(--c-gray-300)" }}>
                &larr; {prevYear}
              </Link>
            )}
            {nextYear != null && (
              <Link href={`/sommerfest/${nextYear}`} className="btn btn--ghost" style={{ color: "var(--c-gray-700)", borderColor: "var(--c-gray-300)", marginLeft: "auto" }}>
                {nextYear} &rarr;
              </Link>
            )}
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
