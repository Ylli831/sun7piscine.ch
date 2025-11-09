"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const inquiryTopics = [
  { value: "construction", label: "Construction de piscine" },
  { value: "renovation", label: "Rénovation complète" },
  { value: "maintenance", label: "Entretien régulier" },
  { value: "spa", label: "Projet spa / bien-être" },
  { value: "autre", label: "Autre demande" }
] as const;

const contactPreferences = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Téléphone" },
  { value: "visio", label: "Visio / Appel vidéo" }
] as const;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    topic: "construction",
    name: "",
    email: "",
    phone: "",
    company: "",
    contactPreference: "email",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitted(true);
      // Reset form after successful submission
      setFormData({
        topic: "construction",
        name: "",
        email: "",
        phone: "",
        company: "",
        contactPreference: "email",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      id="form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
  className="relative w-full overflow-hidden rounded-3xl border border-brand-navy/10 bg-white/95 p-8 shadow-xl backdrop-blur lg:p-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-sky/5 via-transparent to-brand-gold/5" />
      <div className="relative z-10 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-brand-navy">Contact rapide</h2>
          <p className="text-sm text-brand-navy/70">
            Détaillez-nous votre projet, nous vous recontactons sous 24 h ouvrées.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <label htmlFor="topic" className="mb-2 block text-sm font-semibold text-brand-navy">
              Sujet principal
            </label>
            <div className="relative">
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full appearance-none rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 pr-10 text-brand-navy shadow-sm transition focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
              >
                {inquiryTopics.map((topic) => (
                  <option key={topic.value} value={topic.value}>
                    {topic.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-brand-navy/40">
                ▾
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-brand-navy">
              Nom complet *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 text-brand-navy shadow-sm transition focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-brand-navy">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 text-brand-navy shadow-sm transition focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
              placeholder="vous@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-brand-navy">
              Téléphone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 text-brand-navy shadow-sm transition focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
              placeholder="+41 XX XXX XX XX"
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-semibold text-brand-navy">
              Société (optionnel)
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 text-brand-navy shadow-sm transition focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
              placeholder="Nom de votre entreprise"
            />
          </div>

          <div>
            <span className="mb-2 block text-sm font-semibold text-brand-navy">
              Préférence de contact
            </span>
            <div className="flex flex-wrap gap-3">
              {contactPreferences.map((preference) => {
                const isActive = formData.contactPreference === preference.value;
                return (
                  <button
                    key={preference.value}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        contactPreference: preference.value
                      }))
                    }
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 ${
                      isActive
                        ? "border-brand-gold bg-brand-gold/15 text-brand-navy"
                        : "border-brand-navy/15 text-brand-navy/70 hover:border-brand-gold/40 hover:text-brand-navy"
                    }`}
                    aria-pressed={isActive}
                  >
                    {preference.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-brand-navy">
              Description de votre projet *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 text-brand-navy shadow-sm transition focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
              placeholder="Dites-nous tout : type de piscine, emplacement, timing souhaité..."
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-brand-navy/60">
            * Champs obligatoires. Nous ne partageons jamais vos données.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-semibold text-brand-navy transition-all duration-200 hover:bg-brand-gold-dark hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Envoyer la demande
              </>
            )}
          </button>
        </div>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 rounded-2xl border border-brand-gold/30 bg-brand-gold/15 px-4 py-3 text-sm text-brand-navy"
            role="status"
          >
            <CheckCircle className="h-4 w-4 text-brand-gold-dark" />
            Merci ! Votre demande a bien été envoyée. Un expert SUN7 vous recontacte rapidement.
          </motion.div>
        )}
      </div>
    </motion.form>
  );
}
