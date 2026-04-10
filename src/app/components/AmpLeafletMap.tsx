"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ── Verstärker-Standorte mit Koordinaten (OSM-Gebäudedaten) ── */
const ampLocations: { street: string; nr: string; lat: number; lng: number }[] = [
  // Hans-Schmidmayer-Str.
  { street: "Hans-Schmidmayer-Str.", nr: "6",  lat: 48.3004764, lng: 11.9146589 },
  { street: "Hans-Schmidmayer-Str.", nr: "7",  lat: 48.3005501, lng: 11.9139772 },
  { street: "Hans-Schmidmayer-Str.", nr: "17", lat: 48.3013575, lng: 11.9142491 },
  { street: "Hans-Schmidmayer-Str.", nr: "22", lat: 48.3007099, lng: 11.9147529 },
  { street: "Hans-Schmidmayer-Str.", nr: "38", lat: 48.3009558, lng: 11.9147160 },
  { street: "Hans-Schmidmayer-Str.", nr: "52", lat: 48.3012178, lng: 11.9145771 },
  { street: "Hans-Schmidmayer-Str.", nr: "58", lat: 48.3012118, lng: 11.9147914 },
  { street: "Hans-Schmidmayer-Str.", nr: "84", lat: 48.3014563, lng: 11.9148924 },
  { street: "Hans-Schmidmayer-Str.", nr: "96", lat: 48.3014268, lng: 11.9155137 },

  // Dr.-Lehmer-Str.
  { street: "Dr.-Lehmer-Str.", nr: "15", lat: 48.3011194, lng: 11.9128976 },
  { street: "Dr.-Lehmer-Str.", nr: "26", lat: 48.3008009, lng: 11.9136157 },
  { street: "Dr.-Lehmer-Str.", nr: "31", lat: 48.3018053, lng: 11.9128820 },
  { street: "Dr.-Lehmer-Str.", nr: "32", lat: 48.3007998, lng: 11.9138775 },
  { street: "Dr.-Lehmer-Str.", nr: "40", lat: 48.3010471, lng: 11.9136391 },
  { street: "Dr.-Lehmer-Str.", nr: "60", lat: 48.3012895, lng: 11.9137451 },
  { street: "Dr.-Lehmer-Str.", nr: "76", lat: 48.3015329, lng: 11.9139401 },

  // Dr.-Deißböck-Weg
  { street: "Dr.-Deißböck-Weg", nr: "13", lat: 48.3018316, lng: 11.9133896 },

  // Wilhelm-von-Diez-Str.
  { street: "Wilhelm-von-Diez-Str.", nr: "24", lat: 48.3001755, lng: 11.9140450 },
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
      center: [48.3010, 11.9140],
      zoom: 18,
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
