import type { GlobalConfig } from "payload";

/**
 * Editable content for the incubator landing page (/incubateur).
 * Signed Label — one-page premium, editorial.
 */
export const IncubatorContent: GlobalConfig = {
  slug: "incubator-content",
  label: "Signed Label — Contenu",
  access: { read: () => true },
  admin: { group: "Pages" },
  fields: [
    // -------- HERO --------
    {
      name: "hero",
      type: "group",
      label: "Hero",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "Incubateur prive — sur invitation" },
        { name: "title", type: "text", defaultValue: "Signed Label" },
        { name: "lead", type: "textarea" },
        { name: "ctaLabel", type: "text", defaultValue: "Candidater" },
        { name: "ctaHref", type: "text", defaultValue: "#candidater" },
      ],
    },

    // -------- MANIFESTO --------
    {
      name: "manifesto",
      type: "group",
      label: "Manifeste",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "Notre vision" },
        { name: "lede", type: "textarea", label: "Phrase d'accroche" },
        {
          name: "paragraphs",
          type: "array",
          labels: { singular: "Paragraphe", plural: "Paragraphes" },
          fields: [{ name: "text", type: "textarea", required: true }],
        },
      ],
    },

    // -------- PROFILES --------
    {
      name: "profiles",
      type: "group",
      label: "Qui nous incubons",
      fields: [
        { name: "title", type: "text" },
        {
          name: "items",
          type: "array",
          labels: { singular: "Profil", plural: "Profils" },
          fields: [
            { name: "label", type: "text", required: true, admin: { description: "Ex: 01" } },
            { name: "title", type: "text", required: true },
            { name: "body", type: "textarea", required: true },
          ],
        },
      ],
    },

    // -------- SERVICES --------
    {
      name: "services",
      type: "group",
      label: "Ce que nous apportons",
      fields: [
        { name: "title", type: "text" },
        {
          name: "items",
          type: "array",
          labels: { singular: "Service", plural: "Services" },
          fields: [
            { name: "title", type: "text", required: true },
            { name: "body", type: "textarea", required: true },
          ],
        },
      ],
    },

    // -------- PROCESS --------
    {
      name: "process",
      type: "group",
      label: "Processus",
      fields: [
        { name: "title", type: "text" },
        {
          name: "steps",
          type: "array",
          labels: { singular: "Etape", plural: "Etapes" },
          fields: [
            { name: "n", type: "text", required: true, admin: { description: "Ex: 01" } },
            { name: "title", type: "text", required: true },
            { name: "body", type: "textarea", required: true },
          ],
        },
      ],
    },

    // -------- APPLICATION FORM INTRO --------
    {
      name: "applicationIntro",
      type: "group",
      label: "Intro formulaire candidature",
      fields: [
        { name: "title", type: "text" },
        { name: "body", type: "textarea" },
      ],
    },

    // -------- CLOSING --------
    {
      name: "closing",
      type: "group",
      label: "Closing",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "Saison en cours" },
        { name: "title", type: "text" },
        { name: "contactLabel", type: "text", defaultValue: "Pour toute demande institutionnelle ou partenariat presse" },
        { name: "contactEmail", type: "email", defaultValue: "contact@unsigned.fr" },
      ],
    },
  ],
};
