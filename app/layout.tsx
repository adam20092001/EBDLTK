import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Bricolage_Grotesque } from "next/font/google";
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
        url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 1067,
        alt: "Mesa con platos abundantes de comida casera"
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
