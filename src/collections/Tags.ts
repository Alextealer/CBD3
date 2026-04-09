import type { CollectionConfig } from "payload";

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "label",
    defaultColumns: ["label", "category", "color"],
    description: "Tags et filtres utilises sur les fiches produit",
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
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Tag general", value: "tag" },
        { label: "Concentration", value: "concentration" },
        { label: "Type", value: "type" },
        { label: "Bienfait", value: "concern" },
        { label: "Ingredient actif", value: "ingredient" },
        { label: "Packaging", value: "packaging" },
      ],
    },
    {
      name: "color",
      type: "select",
      defaultValue: "neutral",
      options: [
        { label: "Neutre", value: "neutral" },
        { label: "Vert", value: "green" },
        { label: "Ambre", value: "amber" },
        { label: "Rose", value: "pink" },
        { label: "Bleu", value: "blue" },
        { label: "Violet", value: "purple" },
      ],
    },
  ],
};
