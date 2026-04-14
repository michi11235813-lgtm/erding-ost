"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const AmpLeafletMap = dynamic(() => import("./AmpLeafletMap"), { ssr: false });

export default function AmpMapWrapper() {
  const [consent, setConsent] = useState(false);

  if (!consent) {
    return (
      <div className="map-consent-placeholder">
        <div className="map-consent-placeholder__icon" aria-hidden="true">
          🗺️
        </div>
        <p className="map-consent-placeholder__text">
          Beim Laden der Karte werden Daten an OpenStreetMap-Server übertragen
          (IP-Adresse, Kartenkacheln). Mehr dazu in unserer{" "}
          <a href="/datenschutz">Datenschutzerklärung</a>.
        </p>
        <button
          className="map-consent-placeholder__btn"
          onClick={() => setConsent(true)}
        >
          Karte laden
        </button>
      </div>
    );
  }

  return <AmpLeafletMap />;
}
