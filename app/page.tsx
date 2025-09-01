import QuoteForm from "./components/QuoteForm";

export default function Page() {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Zamów bezpłatną kalkulację</h1>
      <p className="mb-8 text-neutral-600">
        Podaj kilka podstawowych informacji – skontaktujemy się w ciągu 24h.
      </p>
      <QuoteForm />
    </main>
  );
}
