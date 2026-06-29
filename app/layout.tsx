import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Bricolage_Grotesque } from "next/font/google";
import { siteAssets } from "@/data/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const sans = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "El Bunker de la Tia Karlita | Sabor piurano en Lima Norte",
  description:
    "Restaurante peruano en Carabayllo con comida nortena, platos marinos y criollos. Reserva mesa, pide delivery o consulta buffet por WhatsApp.",
  openGraph: {
    title: "El Bunker de la Tia Karlita",
    description:
      "Sazon piurana, platos abundantes y atencion familiar en Lima Norte.",
    type: "website",
    locale: "es_PE",
    images: [
      {
        url: siteAssets.openGraph.src,
        width: siteAssets.openGraph.width,
        height: siteAssets.openGraph.height,
        alt: siteAssets.openGraph.alt
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
