import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verandana — Nowoczesne ogrody zimowe z aluminium",
  description:
    "Home Extension, klasyczne i sezonowe ogrody zimowe. Smukłe profile Allure 69, dachy Variant. Darmowa kalkulacja w 24h.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
