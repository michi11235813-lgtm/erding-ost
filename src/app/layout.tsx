import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

const SITE_URL = "https://erding-ost.vercel.app";

export const metadata: Metadata = {
  title: "Siedlungsverein Erding-Ost e.V.",
  description: "Aktuelle Informationen, Termine und Dokumente des Siedlungsvereins Erding-Ost e.V. – 134 Reihenhäuser in Erding.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Siedlungsverein Erding-Ost e.V.",
    description: "134 Reihenhäuser, eine Gemeinschaft – Termine, Protokolle, Dokumente und Vereinsinformationen.",
    url: SITE_URL,
    siteName: "Siedlungsverein Erding-Ost e.V.",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Siedlungsverein Erding-Ost e.V.",
    description: "134 Reihenhäuser, eine Gemeinschaft – Termine, Protokolle, Dokumente und Vereinsinformationen.",
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Siedlungsverein Erding-Ost e.V.",
              url: SITE_URL,
              description: "Siedlungsverein zur gemeinschaftlichen Selbstverwaltung von 134 Reihenhäusern in Erding.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Hans-Schmidmayer-Straße",
                addressLocality: "Erding",
                postalCode: "85435",
                addressCountry: "DE",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
