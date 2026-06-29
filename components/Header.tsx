"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { siteAssets } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#platos", label: "Platos" },
  { href: "#reservas", label: "Reservas" },
  { href: "#ubicacion", label: "Ubicacion" },
  { href: "#contacto", label: "Contacto" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = createWhatsAppUrl(
    "Hola, deseo reservar en El Bunker de la Tia Karlita."
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-bg/92 backdrop-blur-md">
      <div className="section-shell flex min-h-[72px] items-center justify-between gap-4">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir al inicio">
          {siteAssets.logo.src ? (
            <Image
              src={siteAssets.logo.src}
              alt={siteAssets.logo.alt}
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
              priority
            />
          ) : (
            <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-lg font-black text-white">
              {siteAssets.logo.initials}
            </span>
          )}
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-ink">
              El Bunker
            </span>
            <span className="block text-sm font-bold text-primary">
              de la Tia Karlita
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-ink/85 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-chili lg:flex"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Reservar por WhatsApp
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-bg md:hidden">
          <nav className="section-shell flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-line/70 py-4 font-bold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 font-bold text-white"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Reservar por WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
