import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verandana — Nowoczesne ogrody zimowe z aluminium",
  description: "Home Extension, klasyczne i sezonowe ogrody zimowe. Smukłe profile Allure 69, dachy Variant. Darmowa kalkulacja w 24h.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
