import type { Metadata } from "next";
import { ReservationDashboard } from "@/components/ReservationDashboard";

export const metadata: Metadata = {
  title: "Sistema de reservas | El Bunker de la Tia Karlita",
  description: "Panel interno para revisar y actualizar reservas del restaurante."
};

export default function ReservationsPage() {
  return <ReservationDashboard />;
}
