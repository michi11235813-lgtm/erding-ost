"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ── Verstärker-Standorte mit Koordinaten ── */
const ampLocations: { street: string; nr: string; lat: number; lng: number }[] = [
  // Hans-Schmidmayer-Str. (runs N→S, lon ≈ 11.9144)
  { street: "Hans-Schmidmayer-Str.", nr: "6",  lat: 48.30045, lng: 11.91445 },
  { street: "Hans-Schmidmayer-Str.", nr: "7",  lat: 48.30050, lng: 11.91435 },
  { street: "Hans-Schmidmayer-Str.", nr: "17", lat: 48.30065, lng: 11.91435 },
  { street: "Hans-Schmidmayer-Str.", nr: "22", lat: 48.30075, lng: 11.91445 },
  { street: "Hans-Schmidmayer-Str.", nr: "38", lat: 48.30100, lng: 11.91445 },
  { street: "Hans-Schmidmayer-Str.", nr: "52", lat: 48.30130, lng: 11.91445 },
  { street: "Hans-Schmidmayer-Str.", nr: "58", lat: 48.30140, lng: 11.91445 },
  { street: "Hans-Schmidmayer-Str.", nr: "84", lat: 48.30185, lng: 11.91445 },
  { street: "Hans-Schmidmayer-Str.", nr: "96", lat: 48.30210, lng: 11.91445 },

  // Dr.-Lehmer-Str. (runs N→S, lon ≈ 11.9130)
  { street: "Dr.-Lehmer-Str.", nr: "15", lat: 48.30060, lng: 11.91300 },
  { street: "Dr.-Lehmer-Str.", nr: "26", lat: 48.30075, lng: 11.91310 },
  { street: "Dr.-Lehmer-Str.", nr: "31", lat: 48.30080, lng: 11.91300 },
  { street: "Dr.-Lehmer-Str.", nr: "32", lat: 48.30085, lng: 11.91310 },
  { street: "Dr.-Lehmer-Str.", nr: "40", lat: 48.30095, lng: 11.91310 },
  { street: "Dr.-Lehmer-Str.", nr: "60", lat: 48.30125, lng: 11.91310 },
  { street: "Dr.-Lehmer-Str.", nr: "76", lat: 48.30150, lng: 11.91300 },

  // Dr.-Deißböck-Weg (E-W, lat ≈ 48.3019)
  { street: "Dr.-Deißböck-Weg", nr: "13", lat: 48.30190, lng: 11.91370 },

  // Wilhelm-von-Diez-Str. (E-W, lat ≈ 48.3005)
  { street: "Wilhelm-von-Diez-Str.", nr: "24", lat: 48.30050, lng: 11.91100 },
];

/* red circle marker icon */
function createAmpIcon() {
  return L.divIcon({
    className: "amp-marker",
    html: `<svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" fill="#c92a2a" stroke="#fff" stroke-width="2.5"/></svg>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -12],
  });
}

export default function AmpLeafletMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [48.3012, 11.9130],
      zoom: 17,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    const icon = createAmpIcon();
    for (const loc of ampLocations) {
      L.marker([loc.lat, loc.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong>${loc.street} ${loc.nr}</strong><br/>Kabelverstärker`);
    }

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: 420, borderRadius: 8, overflow: "hidden" }}
    />
  );
}
