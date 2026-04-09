import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Parametres du site",
  admin: {
    description: "Reglages generaux du site (logo, banner, couleurs, SEO)",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "siteName",
      type: "text",
      required: true,
      defaultValue: "CBD3",
    },
    {
      name: "tagline",
      type: "text",
      defaultValue: "Lancez votre marque CBD en marque blanche",
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      type: "group",
      name: "topBanner",
      label: "Banner en haut du site",
      fields: [
        { name: "enabled", type: "checkbox", defaultValue: true },
        { name: "text", type: "text", defaultValue: "Livraison offerte des 200EUR de commande" },
        { name: "linkLabel", type: "text", defaultValue: "Voir le catalogue" },
        { name: "linkHref", type: "text", defaultValue: "/catalog" },
      ],
    },
    {
      type: "group",
      name: "footer",
      label: "Footer",
      fields: [
        { name: "description", type: "textarea" },
        { name: "legalNotice", type: "textarea" },
        { name: "instagramUrl", type: "text" },
        { name: "linkedinUrl", type: "text" },
      ],
    },
    {
      type: "group",
      name: "seo",
      label: "SEO par defaut",
      fields: [
        { name: "defaultTitle", type: "text" },
        { name: "defaultDescription", type: "textarea" },
        { name: "ogImage", type: "upload", relationTo: "media" },
      ],
    },
  ],
};
