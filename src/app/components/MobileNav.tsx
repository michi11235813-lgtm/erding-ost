"use client";

import { useState, useCallback, useEffect } from "react";

const links = [
  { href: "#aktuelles", label: "Aktuelles" },
  { href: "#siedlung", label: "Siedlung" },
  { href: "#verein", label: "Verein" },
  { href: "#vorstand", label: "Vorstand" },
  { href: "#kabel", label: "Kabelanlage" },
  { href: "#dokumente", label: "Dokumente" },
  { href: "#rueckblicke", label: "Rückblicke" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((o) => !o), []);
  const close = useCallback(() => setOpen(false), []);

  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <button
        className="burger"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
      >
        <span className={`burger__line ${open ? "burger__line--open" : ""}`} />
        <span className={`burger__line ${open ? "burger__line--open" : ""}`} />
        <span className={`burger__line ${open ? "burger__line--open" : ""}`} />
      </button>

      {open && <div className="mobile-overlay" onClick={close} />}

      <nav
        id="mobile-menu"
        className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}
        aria-label="Hauptnavigation"
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}
