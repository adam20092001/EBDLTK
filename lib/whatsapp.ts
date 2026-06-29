export const WHATSAPP_NUMBER = "51967718480";

export type ReservationMessage = {
  name: string;
  phone: string;
  date: string;
  time: string;
  people: string;
  type: string;
  comments?: string;
};

export function createWhatsAppUrl(message: string, phone = WHATSAPP_NUMBER) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildReservationMessage(data: ReservationMessage) {
  return [
    "Hola, deseo hacer una reserva en El Bunker de la Tia Karlita.",
    `Nombre: ${data.name}`,
    `Telefono: ${data.phone}`,
    `Fecha: ${data.date}`,
    `Hora: ${data.time}`,
    `Personas: ${data.people}`,
    `Tipo de reserva: ${data.type}`,
    `Comentarios: ${data.comments?.trim() || "Sin comentarios"}`
  ].join("\n");
}
