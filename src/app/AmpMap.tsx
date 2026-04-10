/* Schematic SVG map of amplifier locations in the settlement */
export default function AmpMap() {
  return (
    <svg
      viewBox="0 0 600 420"
      className="amp-map"
      role="img"
      aria-label="Übersichtskarte der Verstärkerstandorte in der Siedlung Erding-Ost"
    >
      {/* Background */}
      <rect x="0" y="0" width="600" height="420" rx="12" fill="#f1f3f5" />

      {/* Streets */}
      {/* Dr.-Lehmer-Str. (left, vertical) */}
      <line x1="80" y1="30" x2="80" y2="370" stroke="#ced4da" strokeWidth="8" strokeLinecap="round" />
      <text x="30" y="200" fill="#495057" fontSize="10" fontWeight="600" textAnchor="middle" transform="rotate(-90,30,200)">Dr.-Lehmer-Str.</text>

      {/* Hans-Schmidmayer-Str. (right, vertical) */}
      <line x1="520" y1="30" x2="520" y2="370" stroke="#ced4da" strokeWidth="8" strokeLinecap="round" />
      <text x="570" y="200" fill="#495057" fontSize="10" fontWeight="600" textAnchor="middle" transform="rotate(90,570,200)">Hans-Schmidmayer-Str.</text>

      {/* Dr.-Deißböck-Weg (top, horizontal) */}
      <line x1="60" y1="40" x2="540" y2="40" stroke="#ced4da" strokeWidth="8" strokeLinecap="round" />
      <text x="300" y="22" fill="#495057" fontSize="10" fontWeight="600" textAnchor="middle">Dr.-Deißböck-Weg</text>

      {/* Wilhelm-von-Diez-Str. (bottom, horizontal) */}
      <line x1="60" y1="360" x2="540" y2="360" stroke="#ced4da" strokeWidth="8" strokeLinecap="round" />
      <text x="300" y="395" fill="#495057" fontSize="10" fontWeight="600" textAnchor="middle">Wilhelm-von-Diez-Str.</text>

      {/* Row streets (internal, horizontal) */}
      {[100, 145, 190, 235, 280, 315].map(y => (
        <line key={y} x1="90" y1={y} x2="510" y2={y} stroke="#e9ecef" strokeWidth="3" strokeLinecap="round" />
      ))}

      {/* House rows (light blocks) */}
      {[75, 120, 165, 210, 255, 295, 335].map(y => (
        <rect key={y} x="100" y={y} width="400" height="18" rx="3" fill="#e9ecef" opacity=".5" />
      ))}

      {/* ── Amplifier markers ── */}
      {/* Dr.-Lehmer-Str.: 15, 26, 31, 32, 40, 60, 76 */}
      <AmpDot x={80} y={100} label="15" />
      <AmpDot x={80} y={145} label="26" />
      <AmpDot x={80} y={178} label="31" />
      <AmpDot x={80} y={195} label="32" />
      <AmpDot x={80} y={230} label="40" />
      <AmpDot x={80} y={285} label="60" />
      <AmpDot x={80} y={340} label="76" />

      {/* Hans-Schmidmayer-Str.: 6, 7, 17, 22, 38, 52, 58, 84, 96 */}
      <AmpDot x={520} y={350} label="6" />
      <AmpDot x={520} y={340} label="7" />
      <AmpDot x={520} y={310} label="17" />
      <AmpDot x={520} y={285} label="22" />
      <AmpDot x={520} y={245} label="38" />
      <AmpDot x={520} y={200} label="52" />
      <AmpDot x={520} y={175} label="58" />
      <AmpDot x={520} y={110} label="84" />
      <AmpDot x={520} y={70} label="96" />

      {/* Dr.-Deißböck-Weg: 13 */}
      <AmpDot x={180} y={40} label="13" />

      {/* Wilhelm-von-Diez-Str.: 24 */}
      <AmpDot x={300} y={360} label="24" />

      {/* Legend */}
      <rect x="395" y="398" width="8" height="8" rx="4" fill="#c92a2a" />
      <text x="408" y="406" fill="#495057" fontSize="9" fontWeight="500">= Verstärkerstandort</text>
    </svg>
  );
}

function AmpDot({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="6" fill="#c92a2a" opacity=".9" />
      <circle cx={x} cy={y} r="10" fill="#c92a2a" opacity=".15" />
      <text x={x + 14} y={y + 3.5} fill="#c92a2a" fontSize="9" fontWeight="700">{label}</text>
    </g>
  );
}
