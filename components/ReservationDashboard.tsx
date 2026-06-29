"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Clock3, RefreshCw, Search, XCircle } from "lucide-react";
import type { ReservationRecord, ReservationStatus } from "@/lib/reservations";

const statusLabels: Record<ReservationStatus, string> = {
  pending: "Pendiente",
  confirmed: "Confirmada",
  cancelled: "Cancelada"
};

const statusClass: Record<ReservationStatus, string> = {
  pending: "bg-maize text-ink",
  confirmed: "bg-emerald-100 text-emerald-900",
  cancelled: "bg-red-100 text-red-900"
};

export function ReservationDashboard() {
  const [adminKey, setAdminKey] = useState("");
  const [reservations, setReservations] = useState<ReservationRecord[]>([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const filteredReservations = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return reservations;
    }

    return reservations.filter((reservation) =>
      [
        reservation.name,
        reservation.phone,
        reservation.reservation_type,
        reservation.comments || "",
        statusLabels[reservation.status]
      ]
        .join(" ")
        .toLowerCase()
        .includes(value)
    );
  }, [query, reservations]);

  async function loadReservations(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setError("");
    setLoading(true);

    const response = await fetch("/api/reservations", {
      headers: {
        "x-admin-key": adminKey
      }
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "No se pudieron cargar las reservas.");
      setLoading(false);
      return;
    }

    setReservations(data.reservations);
    setLoaded(true);
    setLoading(false);
  }

  async function updateStatus(id: string, status: ReservationStatus) {
    setError("");
    const response = await fetch("/api/reservations", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": adminKey
      },
      body: JSON.stringify({ id, status })
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "No se pudo actualizar la reserva.");
      return;
    }

    setReservations((current) =>
      current.map((reservation) =>
        reservation.id === id ? data.reservation : reservation
      )
    );
  }

  return (
    <div className="min-h-screen bg-surface py-8 text-ink md:py-12">
      <div className="section-shell">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" className="text-sm font-bold text-primary">
              Volver a la landing
            </Link>
            <h1 className="mt-4 font-display text-[clamp(2.1rem,5vw,4.5rem)] font-black leading-none tracking-[-0.025em] text-primary">
              Sistema de reservas
            </h1>
            <p className="pretty mt-4 max-w-2xl text-lg leading-8 text-muted">
              Revisa solicitudes de mesa, delivery, buffet y consultas. Cambia el estado
              cuando ya este coordinado por WhatsApp.
            </p>
          </div>
          <div className="rounded-xl bg-primary px-5 py-4 text-white">
            <p className="text-sm text-white/78">Reservas cargadas</p>
            <p className="font-display text-4xl font-black">{reservations.length}</p>
          </div>
        </div>

        <form
          onSubmit={loadReservations}
          className="mb-6 grid gap-3 rounded-2xl bg-white p-4 md:grid-cols-[1fr_auto_auto]"
        >
          <label className="font-bold">
            Clave administrativa
            <input
              type="password"
              value={adminKey}
              onChange={(event) => setAdminKey(event.target.value)}
              className="mt-2 w-full rounded-xl border border-line px-4 py-3 text-ink"
              placeholder="RESERVATIONS_ADMIN_KEY"
              required
            />
          </label>
          <label className="font-bold">
            Buscar
            <span className="mt-2 flex items-center gap-2 rounded-xl border border-line px-4 py-3">
              <Search size={18} aria-hidden="true" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full bg-transparent outline-none"
                placeholder="Nombre, telefono o tipo"
              />
            </span>
          </label>
          <button
            type="submit"
            className="self-end inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-bold text-white transition hover:bg-chili disabled:opacity-70"
            disabled={loading}
          >
            <RefreshCw size={19} aria-hidden="true" />
            {loading ? "Cargando" : "Cargar reservas"}
          </button>
        </form>

        {error ? (
          <p className="mb-6 rounded-xl bg-red-50 px-4 py-3 font-bold text-red-800" role="alert">
            {error}
          </p>
        ) : null}

        {!loaded ? (
          <div className="rounded-2xl bg-white p-8 text-center">
            <Clock3 className="mx-auto mb-4 text-primary" size={38} aria-hidden="true" />
            <p className="font-display text-2xl font-black">Ingresa tu clave para ver reservas</p>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-muted">
              Esta pantalla no usa login todavia. La clave se configura en Vercel como
              variable de entorno para proteger el listado.
            </p>
          </div>
        ) : filteredReservations.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center">
            <p className="font-display text-2xl font-black">No hay reservas para mostrar</p>
            <p className="mt-3 text-muted">
              Cuando un cliente complete el formulario, aparecera aqui.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl bg-white">
            <div className="hidden grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr_0.8fr] gap-4 border-b border-line px-5 py-4 text-sm font-bold text-muted md:grid">
              <span>Cliente</span>
              <span>Fecha y hora</span>
              <span>Tipo</span>
              <span>Estado</span>
              <span>Acciones</span>
            </div>
            <div className="divide-y divide-line">
              {filteredReservations.map((reservation) => (
                <article
                  key={reservation.id}
                  className="grid gap-4 p-5 md:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr_0.8fr] md:items-center"
                >
                  <div>
                    <p className="font-display text-xl font-black">{reservation.name}</p>
                    <a className="mt-1 block font-bold text-primary" href={`tel:${reservation.phone}`}>
                      {reservation.phone}
                    </a>
                    {reservation.comments ? (
                      <p className="pretty mt-2 text-sm leading-6 text-muted">
                        {reservation.comments}
                      </p>
                    ) : null}
                  </div>
                  <div className="font-bold">
                    <p>{reservation.reservation_date}</p>
                    <p className="text-muted">{reservation.reservation_time}</p>
                    <p className="mt-1 text-sm text-muted">{reservation.people} personas</p>
                  </div>
                  <p className="font-bold">{reservation.reservation_type}</p>
                  <span
                    className={`inline-flex w-fit rounded-full px-3 py-1 text-sm font-bold ${statusClass[reservation.status]}`}
                  >
                    {statusLabels[reservation.status]}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-2 text-sm font-bold text-emerald-900"
                      onClick={() => updateStatus(reservation.id, "confirmed")}
                    >
                      <CheckCircle2 size={16} aria-hidden="true" />
                      Confirmar
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-2 text-sm font-bold text-red-900"
                      onClick={() => updateStatus(reservation.id, "cancelled")}
                    >
                      <XCircle size={16} aria-hidden="true" />
                      Cancelar
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
