import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteAssets } from "@/data/site";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28">
      <div className="section-shell grid min-h-[calc(100vh-72px)] items-center gap-10 pb-14 lg:grid-cols-[1fr_0.92fr]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-maize px-4 py-2 text-sm font-bold text-ink">
            <MapPin size={17} aria-hidden="true" />
            Lima Norte / Carabayllo
          </div>
          <h1 className="balanced font-display text-[clamp(2.7rem,8vw,5.8rem)] font-black leading-[0.95] tracking-[-0.03em] text-primary">
            Sabor piurano en el corazon de Lima Norte
          </h1>
          <p className="pretty mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            Disfruta platos nortenos, marinos y criollos con la sazon de la Tia Karlita.
            Comida abundante, atencion cercana y reservas directas por WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              label="Reservar ahora"
              message="Hola, deseo reservar una mesa en El Bunker de la Tia Karlita."
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-white transition hover:bg-chili"
            />
            <a
              href="#platos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-7 py-4 text-base font-bold text-primary transition hover:bg-primary hover:text-white"
            >
              <ArrowDown size={20} aria-hidden="true" />
              Ver platos
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-ink/80">
            <span className="rounded-full bg-white px-4 py-2">Lun a dom, 10 a.m. a 5 p.m.</span>
            <span className="rounded-full bg-white px-4 py-2">Delivery y buffet</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-maize" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl bg-primary shadow-warm">
            <Image
              src={siteAssets.hero.src}
              alt={siteAssets.hero.alt}
              width={900}
              height={1100}
              priority
              className="h-[440px] w-full object-cover sm:h-[560px]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <p className="font-display text-2xl font-black">Huarique familiar</p>
              <p className="mt-1 max-w-sm text-sm leading-6 text-white/90">
                Platos para venir con hambre y salir contento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
