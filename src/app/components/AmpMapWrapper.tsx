"use client";

import dynamic from "next/dynamic";

const AmpLeafletMap = dynamic(() => import("./AmpLeafletMap"), { ssr: false });

export default function AmpMapWrapper() {
  return <AmpLeafletMap />;
}
