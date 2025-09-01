"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/quote", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Błąd serwera");
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Błąd");
      }
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-2xl">
      <label className="grid gap-1">
        <span>Imię *</span>
        <input name="name" required placeholder="np. Anna" className="border rounded p-3" />
      </label>
      <label className="grid gap-1">
        <span>E-mail *</span>
        <input type="email" name="email" required placeholder="twoj@mail.pl" className="border rounded p-3" />
      </label>
      <label className="grid gap-1">
        <span>Telefon *</span>
        <input name="phone" required placeholder="np. 500 600 700" className="border rounded p-3" />
      </label>
      <label className="grid gap-1">
        <span>Kod pocztowy *</span>
        <input name="postalCode" required placeholder="xx-xxx" className="border rounded p-3" />
      </label>

      <fieldset className="grid gap-2">
        <legend className="font-medium">Wybierz typ zabudowy *</legend>
        {[
          ["home_extension","Home Extension (ciepły, płaski dach)"],
          ["classic_warm","Ciepły klasyczny"],
          ["seasonal","Sezonowy (zimny)"],
          ["pergola","Pergola bioklimatyczna"],
          ["unknown","Nie wiem — doradźcie"]
        ].map(([value,label])=>(
          <label key={value} className="flex items-center gap-2 border rounded p-3">
            <input type="radio" name="type" value={value} required />
            <span>{label}</span>
          </label>
        ))}
      </fieldset>

      <label className="grid gap-1">
        <span>Dodaj zdjęcie miejsca montażu (opcjonalnie)</span>
        <input type="file" name="photo" accept="image/*" />
      </label>

      <label className="grid gap-1">
        <span>Komentarz (opcjonalnie)</span>
        <textarea name="comment" rows={5} placeholder="Wymiary, podłoże, czy jest taras…" className="border rounded p-3" />
      </label>

      <label className="flex items-start gap-2">
        <input type="checkbox" name="consent" required />
        <span>Wyrażam zgodę na kontakt telefoniczny i otrzymywanie informacji handlowych od Verandana sp. z o.o.</span>
      </label>

      <button type="submit" disabled={status==="sending"} className="bg-black text-white rounded p-3">
        {status==="sending" ? "Wysyłanie…" : "Wyślij – bezpłatna kalkulacja w 24h"}
      </button>

      {status==="ok" && <p className="text-green-600">Dziękujemy! Skontaktujemy się w 24h.</p>}
      {status==="error" && <p className="text-red-600">Ups — {error}</p>}
    </form>
  );
}
