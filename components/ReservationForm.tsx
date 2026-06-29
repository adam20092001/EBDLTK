"use client";

import { FormEvent, useState } from "react";
import { CalendarCheck, Send } from "lucide-react";
import {
  buildReservationMessage,
  createWhatsAppUrl,
  type ReservationMessage
} from "@/lib/whatsapp";
import { validateReservationInput } from "@/lib/reservations";

const initialForm: ReservationMessage = {
  name: "",
  phone: "",
  date: "",
  time: "",
  people: "",
  type: "Mesa",
  comments: ""
};

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/80 transition focus:border-patina";

export function ReservationForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedInSystem, setSavedInSystem] = useState(false);

  function updateField(name: keyof ReservationMessage, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
    setConfirmed(false);
    setSavedInSystem(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validateReservationInput(form);

    if (validationError) {
      setError(validationError);
      return;
    }

    setSaving(true);
    let reservationSaved = false;

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      reservationSaved = response.ok;
    } catch {
      reservationSaved = false;
    }

    if (!reservationSaved) {
      const storedReservations = JSON.parse(
        window.localStorage.getItem("tia-karlita-reservations") || "[]"
      ) as ReservationMessage[];
      window.localStorage.setItem(
        "tia-karlita-reservations",
        JSON.stringify([...storedReservations, form])
      );
    }

    const message = buildReservationMessage(form);
    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSavedInSystem(reservationSaved);
    setConfirmed(true);
    setForm(initialForm);
    setSaving(false);
  }

  return (
    <section id="reservas" className="py-20 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-maize text-primary">
            <CalendarCheck size={30} aria-hidden="true" />
          </div>
          <h2 className="balanced font-display text-[clamp(2.1rem,5vw,4rem)] font-black leading-none tracking-[-0.025em] text-primary">
            Reserva mesa o pide por WhatsApp
          </h2>
          <p className="pretty mt-5 text-lg leading-8 text-muted">
            Llena tus datos y se abrira WhatsApp con el mensaje listo. La solicitud tambien
            se guarda en el sistema de reservas cuando Supabase esta configurado.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-5 shadow-warm md:p-7">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="font-bold">
              Nombre
              <input
                className={fieldClass}
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Tu nombre"
                autoComplete="name"
                required
              />
            </label>
            <label className="font-bold">
              Telefono
              <input
                className={fieldClass}
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="Ej. 967718480"
                autoComplete="tel"
                inputMode="tel"
                required
              />
            </label>
            <label className="font-bold">
              Fecha
              <input
                className={fieldClass}
                type="date"
                value={form.date}
                onChange={(event) => updateField("date", event.target.value)}
                required
              />
            </label>
            <label className="font-bold">
              Hora
              <input
                className={fieldClass}
                type="time"
                value={form.time}
                onChange={(event) => updateField("time", event.target.value)}
                required
              />
            </label>
            <label className="font-bold">
              Cantidad de personas
              <input
                className={fieldClass}
                value={form.people}
                onChange={(event) => updateField("people", event.target.value)}
                placeholder="Ej. 4"
                inputMode="numeric"
                required
              />
            </label>
            <label className="font-bold">
              Tipo de reserva
              <select
                className={fieldClass}
                value={form.type}
                onChange={(event) => updateField("type", event.target.value)}
                required
              >
                <option>Mesa</option>
                <option>Delivery</option>
                <option>Buffet</option>
                <option>Consulta general</option>
              </select>
            </label>
          </div>

          <label className="mt-5 block font-bold">
            Comentarios adicionales
            <textarea
              className={`${fieldClass} min-h-32 resize-y`}
              value={form.comments}
              onChange={(event) => updateField("comments", event.target.value)}
              placeholder="Cuéntanos si vienes con niños, deseas delivery o consultas por buffet."
            />
          </label>

          {error ? (
            <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 font-bold text-red-800" role="alert">
              {error}
            </p>
          ) : null}

          {confirmed ? (
            <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 font-bold text-emerald-800" role="status">
              {savedInSystem
                ? "Reserva guardada en el sistema. Te esperamos en WhatsApp para confirmar."
                : "Reserva enviada por WhatsApp. Tambien dejamos un respaldo local en este navegador."}
            </p>
          ) : null}

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-white transition hover:bg-chili disabled:opacity-70"
            disabled={saving}
          >
            <Send size={20} aria-hidden="true" />
            {saving ? "Guardando reserva" : "Enviar y guardar reserva"}
          </button>
        </form>
      </div>
    </section>
  );
}
