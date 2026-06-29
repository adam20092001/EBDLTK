import { MapPinned, Navigation } from "lucide-react";

const mapsUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.2113856553638!2d-77.04137063595658!3d-11.890363932787439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d1ba062edca1%3A0x8ffda4007831d863!2sEl%20Bunker%20de%20la%20t%C3%ADa%20Karlita%20Carabayllo!5e0!3m2!1ses-419!2spe!4v1782713948606!5m2!1ses-419!2spe";

export function Location() {
  return (
    <section id="ubicacion" className="bg-surface py-20 md:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
            <MapPinned size={30} aria-hidden="true" />
          </div>
          <h2 className="balanced font-display text-[clamp(2rem,4vw,3.6rem)] font-black leading-none text-primary">
            Encuentranos frente a la puerta 7 del Mercado Qatuna
          </h2>
          <p className="pretty mt-5 text-lg leading-8 text-muted">
            Direccion referencial: Av. Chimpuocllo 1157, Lima Norte / Carabayllo.
            Horario referencial: lunes a domingo de 10:00 a.m. a 5:00 p.m.
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-white transition hover:bg-chili"
          >
            <Navigation size={20} aria-hidden="true" />
            Como llegar
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_6px_12px_oklch(0.24_0.06_35/0.08)]">
          <iframe
            title="Mapa referencial de El Bunker de la Tia Karlita"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.2113856553638!2d-77.04137063595658!3d-11.890363932787439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d1ba062edca1%3A0x8ffda4007831d863!2sEl%20Bunker%20de%20la%20t%C3%ADa%20Karlita%20Carabayllo!5e0!3m2!1ses-419!2spe!4v1782713948606!5m2!1ses-419!2spe"
            className="h-[360px] w-full border-0 md:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
