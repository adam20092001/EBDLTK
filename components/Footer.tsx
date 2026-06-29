import { Camera, MessageCircle, Users } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-10 text-white">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-2xl font-black">El Bunker de la Tia Karlita</p>
          <p className="mt-3 max-w-lg leading-7 text-white/78">
            Comida piurana, nortena, criolla y marina en Lima Norte / Carabayllo.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-white/82">
          <p>Horario: lunes a domingo de 10:00 a.m. a 5:00 p.m.</p>
          <p>WhatsApp: 967718480</p>
          <a href="/reservas" className="font-bold text-maize">
            Sistema de reservas
          </a>
          <div className="flex gap-3 pt-2">
            <a
              href="https://www.instagram.com/elbunkerdelatiakarlita/?hl=es-la"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <Camera size={19} aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/p/El-b%C3%BAnker-de-la-t%C3%ADa-Karlita-100077011973097/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <Users size={19} aria-hidden="true" />
            </a>
            <a
              href={createWhatsAppUrl("Hola, deseo consultar en El Bunker de la Tia Karlita.")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <MessageCircle size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell mt-8 border-t border-white/15 pt-6 text-sm text-white/65">
        © 2026 El Bunker de la Tia Karlita. Todos los derechos reservados.
      </div>
    </footer>
  );
}
