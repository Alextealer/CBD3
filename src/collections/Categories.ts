import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug", "order"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "URL de la categorie (ex: huiles-cbd)",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "shortDescription",
      type: "text",
      admin: {
        description: "Description courte pour le header de la page",
      },
    },
    {
      name: "icon",
      type: "select",
      options: [
        { label: "Flower (Fleur)", value: "flower" },
        { label: "CircleDot (Hash)", value: "circle-dot" },
        { label: "Cigarette (Pre roll)", value: "cigarette" },
        { label: "Droplets (Huiles)", value: "droplets" },
        { label: "FlaskConical (Extractions)", value: "flask-conical" },
        { label: "Battery (Cartridges)", value: "battery" },
        { label: "Cookie (Edibles)", value: "cookie" },
        { label: "Leaf (Cosmetique)", value: "leaf" },
      ],
    },
    {
      name: "bgColor",
      type: "select",
      defaultValue: "bg-stone-50",
      options: [
        { label: "Ambre", value: "bg-amber-50" },
        { label: "Vert", value: "bg-green-50" },
        { label: "Rose", value: "bg-pink-50" },
        { label: "Rose vif", value: "bg-rose-50" },
        { label: "Orange", value: "bg-orange-50" },
        { label: "Violet", value: "bg-purple-50" },
        { label: "Bleu", value: "bg-blue-50" },
        { label: "Stone", value: "bg-stone-50" },
      ],
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        description: "Ordre d'affichage (plus petit = premier)",
      },
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
    },
    // ------------------------------------------------------------------
    // Editorial content for the category landing page (/catalog/[slug]).
    // Mirrors src/data/category-content.ts as fallback.
    // ------------------------------------------------------------------
    {
      name: "tagline",
      type: "textarea",
      admin: {
        description: "Phrase d'accroche affichee sous le titre dans le hero.",
      },
    },
    {
      name: "intro",
      type: "array",
      labels: { singular: "Paragraphe", plural: "Paragraphes" },
      admin: { description: "Texte editorial (2-3 paragraphes)." },
      fields: [{ name: "text", type: "textarea", required: true }],
    },
    {
      name: "highlights",
      type: "array",
      labels: { singular: "Point fort", plural: "Points forts" },
      admin: { description: "4 points forts de la categorie." },
      fields: [
        { name: "title", type: "text", required: true },
        { name: "body", type: "textarea", required: true },
      ],
    },
    {
      name: "formats",
      type: "array",
      labels: { singular: "Format", plural: "Formats" },
      admin: { description: "Formats disponibles (label + description)." },
      fields: [
        { name: "label", type: "text", required: true },
        { name: "body", type: "textarea", required: true },
      ],
    },
    {
      name: "customization",
      type: "array",
      labels: { singular: "Option", plural: "Options de personnalisation" },
      fields: [{ name: "text", type: "text", required: true }],
    },
    {
      name: "audience",
      type: "array",
      labels: { singular: "Cible", plural: "Pour qui" },
      fields: [
        { name: "title", type: "text", required: true },
        { name: "body", type: "textarea", required: true },
      ],
    },
    {
      name: "faqs",
      type: "array",
      labels: { singular: "FAQ", plural: "FAQ" },
      fields: [
        { name: "q", type: "text", required: true, label: "Question" },
        { name: "a", type: "textarea", required: true, label: "Reponse" },
      ],
    },
  ],
};
