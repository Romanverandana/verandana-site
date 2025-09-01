import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "");
  const phone = String(form.get("phone") || "");
  const postalCode = String(form.get("postalCode") || "");
  const type = String(form.get("type") || "");
  const consent = form.get("consent");
  const comment = String(form.get("comment") || "");
  const photo = form.get("photo") as File | null;

  if (!name || !email || !phone || !postalCode || !type || !consent) {
    return NextResponse.json({ ok: false, error: "Brak wymaganych pól." }, { status: 400 });
  }

  // Tymczasowo log (zobaczysz w Vercel Logs)
  console.log("[QUOTE]", { name, email, phone, postalCode, type, comment, photo: photo?.name });

  return NextResponse.json({ ok: true });
}
