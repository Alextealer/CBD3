import type { Block } from "payload";

export const HeroBlock: Block = {
  slug: "hero",
  labels: { singular: "Hero", plural: "Heros" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "subtitle", type: "textarea" },
    {
      name: "features",
      type: "array",
      fields: [{ name: "text", type: "text", required: true }],
    },
    { name: "ctaPrimaryLabel", type: "text", defaultValue: "Commencer" },
    { name: "ctaPrimaryHref", type: "text", defaultValue: "/profile" },
    { name: "ctaSecondaryLabel", type: "text", defaultValue: "En savoir plus" },
    { name: "ctaSecondaryHref", type: "text", defaultValue: "/how-it-works" },
    { name: "image", type: "upload", relationTo: "media" },
  ],
};

export const StatsBlock: Block = {
  slug: "stats",
  labels: { singular: "Statistiques", plural: "Statistiques" },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "items",
      type: "array",
      minRows: 1,
      maxRows: 4,
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
  ],
};

export const StepsBlock: Block = {
  slug: "steps",
  labels: { singular: "Etapes", plural: "Etapes" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "subtitle", type: "textarea" },
    {
      name: "steps",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "image", type: "upload", relationTo: "media" },
      ],
    },
  ],
};

export const CategoriesGridBlock: Block = {
  slug: "categoriesGrid",
  labels: { singular: "Grille categories", plural: "Grilles categories" },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
    },
  ],
};

export const FeaturesBlock: Block = {
  slug: "features",
  labels: { singular: "Features", plural: "Features" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "subtitle", type: "textarea" },
    {
      name: "items",
      type: "array",
      fields: [
        { name: "icon", type: "text", admin: { description: "Nom de l'icone Lucide" } },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};

export const TestimonialsBlock: Block = {
  slug: "testimonials",
  labels: { singular: "Temoignages", plural: "Temoignages" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "rating", type: "number", defaultValue: 4.8 },
    {
      name: "reviews",
      type: "array",
      fields: [
        { name: "quote", type: "textarea", required: true },
        { name: "author", type: "text", required: true },
        { name: "role", type: "text" },
      ],
    },
  ],
};

export const FaqBlock: Block = {
  slug: "faq",
  labels: { singular: "FAQ", plural: "FAQs" },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "items",
      type: "array",
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
      ],
    },
  ],
};

export const CtaBlock: Block = {
  slug: "cta",
  labels: { singular: "CTA", plural: "CTAs" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "subtitle", type: "textarea" },
    { name: "ctaPrimaryLabel", type: "text", required: true },
    { name: "ctaPrimaryHref", type: "text", required: true },
    { name: "ctaSecondaryLabel", type: "text" },
    { name: "ctaSecondaryHref", type: "text" },
    {
      name: "background",
      type: "select",
      defaultValue: "white",
      options: [
        { label: "Blanc", value: "white" },
        { label: "Beige", value: "beige" },
        { label: "Gris clair", value: "gray" },
      ],
    },
  ],
};

export const RichTextBlock: Block = {
  slug: "richText",
  labels: { singular: "Texte riche", plural: "Textes riches" },
  fields: [
    { name: "content", type: "richText", required: true },
  ],
};

export const allBlocks = [
  HeroBlock,
  StatsBlock,
  StepsBlock,
  CategoriesGridBlock,
  FeaturesBlock,
  TestimonialsBlock,
  FaqBlock,
  CtaBlock,
  RichTextBlock,
];
