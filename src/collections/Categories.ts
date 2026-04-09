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
        { label: "Droplets (Huiles)", value: "droplets" },
        { label: "Flower (Fleurs)", value: "flower" },
        { label: "Leaf (Cosmetiques)", value: "leaf" },
        { label: "Coffee (Infusions)", value: "coffee" },
        { label: "Gift (Coffrets)", value: "gift" },
        { label: "CircleDot (Resines)", value: "circle-dot" },
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
  ],
};
