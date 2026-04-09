import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "cbdRange", "price", "isActive"],
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
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      type: "row",
      fields: [
        {
          name: "cbdRange",
          type: "text",
          required: true,
          admin: { width: "33%", description: "Ex: 10%, 200mg" },
        },
        {
          name: "thc",
          type: "text",
          required: true,
          defaultValue: "< 0.3%",
          admin: { width: "33%" },
        },
        {
          name: "volume",
          type: "text",
          required: true,
          admin: { width: "33%", description: "Ex: 10 ml, 50g" },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "price",
          type: "number",
          required: true,
          admin: { width: "50%", description: "Prix HT en EUR" },
        },
        {
          name: "variants",
          type: "number",
          admin: { width: "50%", description: "Nombre de variantes (optionnel)" },
        },
      ],
    },
    {
      name: "badge",
      type: "select",
      options: [
        { label: "Aucun", value: "" },
        { label: "Nouveau", value: "Nouveau" },
        { label: "Bientot", value: "Bientot" },
      ],
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "coa",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Certificat d'analyse (PDF)",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};
