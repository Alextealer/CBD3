"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitApplication, type ApplicationState } from "./actions";

const initial: ApplicationState = { status: "idle" };

const projectTypes = [
  { value: "established-group", label: "Groupe etabli (cannabis / CBD)" },
  { value: "creator", label: "Influenceur / Createur de contenu" },
  { value: "emerging-brand", label: "Marque emergente" },
  { value: "expert", label: "Expertise differenciante (R&D, agro, extraction)" },
  { value: "other", label: "Autre" },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full px-7 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] bg-foreground text-white hover:bg-foreground/85 transition-colors disabled:opacity-60"
    >
      {pending ? "Envoi en cours…" : "Envoyer la candidature"}
    </button>
  );
}

export function ApplicationForm() {
  const [state, formAction] = useActionState(submitApplication, initial);

  if (state.status === "success") {
    return (
      <div className="border border-foreground/15 rounded-2xl p-10 bg-white text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-foreground/60 mb-4">
          Candidature recue
        </p>
        <h3 className="text-[28px] font-medium tracking-[-0.03em] leading-[1.2] mb-4">
          Merci.
        </h3>
        <p className="text-[15px] text-[#4d4f56] leading-[1.7] max-w-md mx-auto">
          Votre dossier a bien ete enregistre. Si votre projet correspond a
          notre selection, nous reviendrons vers vous personnellement sous
          quelques semaines.
        </p>
      </div>
    );
  }

  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Nom"
          name="name"
          required
          placeholder="Prenom Nom"
          error={errors.name}
        />
        <Field
          label="Structure / Pseudo"
          name="entity"
          placeholder="Marque, societe ou pseudo"
          error={errors.entity}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="vous@domaine.com"
          error={errors.email}
        />
        <Field
          label="Reseaux sociaux"
          name="socials"
          placeholder="@compte / lien (optionnel)"
          error={errors.socials}
        />
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="block text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/60 mb-2"
        >
          Type de projet
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className="w-full bg-white border border-foreground/15 rounded-xl px-4 h-[52px] text-[15px] focus:outline-none focus:border-foreground transition-colors"
        >
          <option value="" disabled>
            Selectionnez…
          </option>
          {projectTypes.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p className="text-[12px] text-red-600 mt-2">{errors.projectType}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="pitch"
          className="block text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/60 mb-2"
        >
          Presentation du projet
        </label>
        <textarea
          id="pitch"
          name="pitch"
          required
          rows={6}
          placeholder="Vision, etat actuel, pourquoi vous candidatez."
          className="w-full bg-white border border-foreground/15 rounded-xl px-4 py-3 text-[15px] leading-[1.6] focus:outline-none focus:border-foreground transition-colors resize-y"
        />
        {errors.pitch && (
          <p className="text-[12px] text-red-600 mt-2">{errors.pitch}</p>
        )}
      </div>

      {state.status === "error" && !Object.keys(errors).length && (
        <p className="text-[13px] text-red-600">{state.message}</p>
      )}

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <SubmitButton />
        <p className="text-[12px] text-[#4d4f56]">
          Candidatures etudiees au cas par cas. Reponse uniquement si retenue.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/60 mb-2"
      >
        {label}
        {required && <span className="text-foreground/40"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white border border-foreground/15 rounded-xl px-4 h-[52px] text-[15px] focus:outline-none focus:border-foreground transition-colors"
      />
      {error && <p className="text-[12px] text-red-600 mt-2">{error}</p>}
    </div>
  );
}
