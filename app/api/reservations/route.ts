import { NextRequest, NextResponse } from "next/server";
import {
  mapReservationForInsert,
  reservationStatuses,
  validateReservationInput,
  type ReservationInput,
  type ReservationStatus
} from "@/lib/reservations";
import { getSupabaseAdmin, hasSupabaseConfig, isValidAdminKey } from "@/lib/supabaseAdmin";

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as Partial<ReservationInput>;
  const validationError = validateReservationInput(payload);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  if (!hasSupabaseConfig()) {
    return NextResponse.json(
      { error: "El sistema de reservas todavia no esta conectado a Supabase." },
      { status: 503 }
    );
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("reservations")
    .insert(mapReservationForInsert(payload as ReservationInput))
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: "No se pudo guardar la reserva." }, { status: 500 });
  }

  return NextResponse.json({ reservation: data }, { status: 201 });
}

export async function GET(request: NextRequest) {
  const adminKey = request.headers.get("x-admin-key");

  if (!isValidAdminKey(adminKey)) {
    return NextResponse.json({ error: "Clave administrativa invalida." }, { status: 401 });
  }

  if (!hasSupabaseConfig()) {
    return NextResponse.json(
      { error: "Configura Supabase para listar reservas." },
      { status: 503 }
    );
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .order("reservation_date", { ascending: true })
    .order("reservation_time", { ascending: true });

  if (error) {
    return NextResponse.json({ error: "No se pudieron cargar las reservas." }, { status: 500 });
  }

  return NextResponse.json({ reservations: data });
}

export async function PATCH(request: NextRequest) {
  const adminKey = request.headers.get("x-admin-key");

  if (!isValidAdminKey(adminKey)) {
    return NextResponse.json({ error: "Clave administrativa invalida." }, { status: 401 });
  }

  if (!hasSupabaseConfig()) {
    return NextResponse.json(
      { error: "Configura Supabase para actualizar reservas." },
      { status: 503 }
    );
  }

  const payload = (await request.json()) as { id?: string; status?: ReservationStatus };

  if (!payload.id || !payload.status || !reservationStatuses.includes(payload.status)) {
    return NextResponse.json({ error: "Reserva o estado invalido." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("reservations")
    .update({ status: payload.status })
    .eq("id", payload.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: "No se pudo actualizar la reserva." }, { status: 500 });
  }

  return NextResponse.json({ reservation: data });
}
