export default function QuoteFormClean() {
  if (process.env.NODE_ENV !== "production") {
    console.warn(
      "QuoteFormClean a été retiré. Utilisez désormais la page /contact pour les demandes."
    );
  }

  return null;
}