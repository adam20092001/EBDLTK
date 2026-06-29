import { Camera, MessageCircle, Users } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/elbunkerdelatiakarlita/?hl=es-la",
    icon: Camera
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/El-b%C3%BAnker-de-la-t%C3%ADa-Karlita-100077011973097/",
    icon: Users
  },
  {
    label: "WhatsApp",
    href: createWhatsAppUrl("Hola, deseo consultar en El Bunker de la Tia Karlita."),
    icon: MessageCircle
  }
];

export function SocialLinks() {
  return (
    <section id="contacto" className="py-16 md:py-20">
      <div className="section-shell rounded-2xl bg-primary p-6 text-white md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-black md:text-4xl">
              Siguenos y consulta tu pedido
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/88">
              Reservas, delivery y buffet para eventos se coordinan directo por nuestros canales.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-primary transition hover:bg-maize hover:text-ink"
              >
                <link.icon size={20} aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
