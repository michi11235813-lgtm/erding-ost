import type { MetadataRoute } from "next";

const BASE = "https://erding-ost.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const sommerfeste = [2000, 2001, 2002, 2003, 2004, 2005, 2008, 2009, 2010, 2011];

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...sommerfeste.map((year) => ({
      url: `${BASE}/sommerfest/${year}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
