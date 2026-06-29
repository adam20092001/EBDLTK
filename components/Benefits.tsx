import { Bike, HeartHandshake, Soup, Utensils } from "lucide-react";

const benefits = [
  {
    icon: Soup,
    title: "Sazon piurana autentica",
    text: "Recetas nortenas con sabor casero y presencia criolla."
  },
  {
    icon: Utensils,
    title: "Platos abundantes",
    text: "Porciones generosas para almorzar bien y compartir en familia."
  },
  {
    icon: Bike,
    title: "Delivery y buffet",
    text: "Pedidos, consultas y eventos atendidos directamente por WhatsApp."
  },
  {
    icon: HeartHandshake,
    title: "Ambiente familiar",
    text: "Atencion cercana, trato amable y mesa lista para volver."
  }
];

export function Benefits() {
  return (
    <section className="py-16 md:py-20" aria-label="Beneficios">
      <div className="section-shell">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl bg-white p-5 shadow-[0_6px_12px_oklch(0.24_0.06_35/0.08)]"
            >
              <benefit.icon className="mb-5 text-primary" size={30} aria-hidden="true" />
              <h2 className="font-display text-xl font-black text-ink">{benefit.title}</h2>
              <p className="pretty mt-3 leading-7 text-muted">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
