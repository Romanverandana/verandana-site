// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const siteName = "Verandana";
const title = "Verandana — Nowoczesne ogrody zimowe z aluminium";
const description =
  "Home Extension, klasyczne i sezonowe ogrody zimowe. Smukłe profile Allure 69, dachy Variant. Darmowa kalkulacja w 24h.";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://verandana.pl"
    : "http://localhost:3000";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(baseUrl),
  icons: {
    shortcut: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",
  applicationName: siteName,
  themeColor: "#090123",
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName,
    title,
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: siteName }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="mask-icon" href="/mask-icon.svg" color="#090123" />
      </head>
      <body>{children}</body>
    </html>
  );
}
