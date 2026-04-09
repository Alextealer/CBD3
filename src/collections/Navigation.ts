import type { CollectionConfig } from "payload";

export const Navigation: CollectionConfig = {
  slug: "navigation",
  admin: {
    useAsTitle: "label",
    defaultColumns: ["label", "menu", "href", "order"],
    description: "Liens du header et footer",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
    },
    {
      name: "href",
      type: "text",
      required: true,
    },
    {
      name: "menu",
      type: "select",
      required: true,
      options: [
        { label: "Header principal", value: "header" },
        { label: "Mega menu Produits", value: "header-products" },
        { label: "Mega menu Solutions", value: "header-solutions" },
        { label: "Mega menu Ressources", value: "header-resources" },
        { label: "Footer produits", value: "footer-products" },
        { label: "Footer solutions", value: "footer-solutions" },
        { label: "Footer ressources", value: "footer-resources" },
        { label: "Footer legal", value: "footer-legal" },
      ],
    },
    {
      name: "icon",
      type: "text",
      admin: { description: "Nom d'icone Lucide (optionnel)" },
    },
    {
      name: "description",
      type: "text",
      admin: { description: "Sous-titre dans le mega menu (optionnel)" },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
    },
  ],
};
