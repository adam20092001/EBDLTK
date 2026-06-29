import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { dishes } from "@/data/dishes";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function FeaturedDishes() {
  return (
    <section id="platos" className="bg-primary py-20 text-white md:py-24">
      <div className="section-shell">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-lg font-bold text-maize">Platos destacados</p>
          <h2 className="balanced font-display text-[clamp(2.1rem,5vw,4.2rem)] font-black leading-none tracking-[-0.025em]">
            Norte, mar y criollo en una carta para consultar al toque
          </h2>
        </div>

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {dishes.map((dish) => (
            <article key={dish.name} className="overflow-hidden rounded-xl bg-bg text-ink">
              <Image
                src={dish.image}
                alt={dish.imageAlt}
                width={700}
                height={520}
                className="h-56 w-full object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl font-black">{dish.name}</h3>
                  <span className="rounded-full bg-maize px-3 py-1 text-sm font-bold text-ink">
                    Consultar
                  </span>
                </div>
                <p className="pretty min-h-[84px] leading-7 text-muted">{dish.description}</p>
                <a
                  href={createWhatsAppUrl(
                    `Hola, deseo consultar por ${dish.name} en El Bunker de la Tia Karlita.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-white transition hover:bg-chili"
                >
                  <MessageCircle size={19} aria-hidden="true" />
                  Pedir / consultar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
