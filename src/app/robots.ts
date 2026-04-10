import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dokumente/"],
    },
    sitemap: "https://erding-ost.vercel.app/sitemap.xml",
  };
}
