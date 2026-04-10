import type { CollectionConfig } from "payload";
import { allBlocks } from "../blocks";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "status"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "URL de la page (ex: home, marque-blanche, dropshipping)",
      },
    },
    {
      name: "metaDescription",
      type: "textarea",
      admin: {
        description: "Description SEO (max 160 caracteres)",
      },
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: allBlocks,
      admin: {
        description: "Construis ta page bloc par bloc — drag & drop pour reordonner",
      },
    },
    {
      name: "status",
      type: "select",
      defaultValue: "published",
      options: [
        { label: "Brouillon", value: "draft" },
        { label: "Publie", value: "published" },
      ],
    },
  ],
  versions: {
    drafts: true,
  },
};
