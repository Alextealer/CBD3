import type { GlobalConfig } from "payload";

/**
 * Editable content for the homepage (/).
 * Sections that change often. Layout stays code-driven for visual consistency.
 */
export const HomeContent: GlobalConfig = {
  slug: "home-content",
  label: "Home — Contenu",
  access: { read: () => true },
  admin: { group: "Pages" },
  fields: [
    // -------- HERO --------
    {
      name: "hero",
      type: "group",
      label: "Hero",
      fields: [
        { name: "title", type: "text" },
        { name: "subtitle", type: "textarea" },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Image hero",
          admin: {
            description:
              "Image principale du hero. Si vide, utilise l'image par defaut /products/pouches-bg.avif.",
          },
        },
        {
          name: "features",
          type: "array",
          labels: { singular: "Feature", plural: "Features" },
          fields: [{ name: "text", type: "text", required: true }],
        },
        { name: "ctaPrimaryLabel", type: "text", defaultValue: "Commencer" },
        { name: "ctaPrimaryHref", type: "text", defaultValue: "/profile" },
        { name: "ctaSecondaryLabel", type: "text", defaultValue: "En savoir plus" },
        { name: "ctaSecondaryHref", type: "text", defaultValue: "/how-it-works" },
      ],
    },

    // -------- PRODUIT & DESIGN SECTION --------
    {
      name: "productDesign",
      type: "group",
      label: "Section Produit & Design",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "Produit & design" },
        { name: "title", type: "text" },
        { name: "subtitle", type: "textarea" },
        {
          name: "cards",
          type: "array",
          labels: { singular: "Card", plural: "Cards" },
          minRows: 3,
          maxRows: 3,
          fields: [
            { name: "badge", type: "text" },
            { name: "title", type: "text", required: true },
            { name: "body", type: "textarea", required: true },
          ],
        },
      ],
    },

    // -------- LOGISTICS SECTION --------
    {
      name: "logistics",
      type: "group",
      label: "Section Logistique",
      fields: [
        { name: "title", type: "text" },
        {
          name: "cards",
          type: "array",
          labels: { singular: "Feature", plural: "Features" },
          fields: [
            { name: "title", type: "text", required: true },
            { name: "body", type: "textarea", required: true },
          ],
        },
        {
          name: "usefulLinks",
          type: "array",
          labels: { singular: "Lien", plural: "Liens utiles" },
          fields: [
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
          ],
        },
      ],
    },

    // -------- SIGNED LABEL TEASER --------
    {
      name: "signedLabelTeaser",
      type: "group",
      label: "Teaser Signed Label",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "Sur invitation" },
        { name: "quote", type: "textarea" },
        { name: "attributionName", type: "text", defaultValue: "Signed Label" },
        { name: "attributionRole", type: "text", defaultValue: "Incubateur prive d'Unsigned" },
        { name: "ctaLabel", type: "text", defaultValue: "Read more" },
        { name: "ctaHref", type: "text", defaultValue: "/incubateur" },
      ],
    },

    // -------- FAQ --------
    {
      name: "faqs",
      type: "array",
      label: "FAQ (home)",
      labels: { singular: "FAQ", plural: "FAQ" },
      fields: [
        { name: "q", type: "text", required: true, label: "Question" },
        { name: "a", type: "textarea", required: true, label: "Reponse" },
      ],
    },

    // -------- FINAL CTA --------
    {
      name: "finalCta",
      type: "group",
      label: "CTA final",
      fields: [
        { name: "title", type: "text" },
        { name: "subtitle", type: "textarea" },
        { name: "primaryLabel", type: "text", defaultValue: "Commencer gratuitement" },
        { name: "primaryHref", type: "text", defaultValue: "/profile" },
        { name: "secondaryLabel", type: "text", defaultValue: "Voir le catalogue" },
        { name: "secondaryHref", type: "text", defaultValue: "/catalog" },
      ],
    },
  ],
};
