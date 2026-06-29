export const reservationStatuses = ["pending", "confirmed", "cancelled"] as const;

export type ReservationStatus = (typeof reservationStatuses)[number];

export type ReservationInput = {
  name: string;
  phone: string;
  date: string;
  time: string;
  people: string;
  type: string;
  comments?: string;
};

export type ReservationRecord = {
  id: string;
  name: string;
  phone: string;
  reservation_date: string;
  reservation_time: string;
  people: number;
  reservation_type: string;
  comments: string | null;
  status: ReservationStatus;
  source: string;
  created_at: string;
  updated_at: string;
};

export function validateReservationInput(input: Partial<ReservationInput>) {
  const required = [input.name, input.phone, input.date, input.time, input.people, input.type];

  if (required.some((value) => !String(value || "").trim())) {
    return "Completa nombre, telefono, fecha, hora, personas y tipo de reserva.";
  }

  const people = Number(input.people);

  if (!Number.isInteger(people) || people < 1 || people > 80) {
    return "Ingresa una cantidad de personas valida.";
  }

  return null;
}

export function mapReservationForInsert(input: ReservationInput) {
  return {
    name: input.name.trim(),
    phone: input.phone.trim(),
    reservation_date: input.date,
    reservation_time: input.time,
    people: Number(input.people),
    reservation_type: input.type,
    comments: input.comments?.trim() || null,
    status: "pending" as ReservationStatus,
    source: "website"
  };
}
