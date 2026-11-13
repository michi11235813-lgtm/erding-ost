"use client";

import { useState } from "react";

/* 2-Klick-Lösung: YouTube wird erst nach aktiver Zustimmung geladen */
export default function YouTubeConsent({ videoId, title }: { videoId: string; title: string }) {
  const [consent, setConsent] = useState(false);

  return (
    <div className="video-embed">
      {consent ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className="map-consent-placeholder video-embed__placeholder">
          <div className="map-consent-placeholder__icon" aria-hidden="true">
            ▶️
          </div>
          <p className="map-consent-placeholder__text">
            Beim Abspielen des Videos werden Daten an YouTube (Google) übertragen
            (u. a. IP-Adresse). Mehr dazu in unserer{" "}
            <a href="/datenschutz">Datenschutzerklärung</a>.
          </p>
          <button className="map-consent-placeholder__btn" onClick={() => setConsent(true)}>
            Video laden
          </button>
        </div>
      )}
    </div>
  );
}
