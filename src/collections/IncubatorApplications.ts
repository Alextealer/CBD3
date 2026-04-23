import type { CollectionConfig } from "payload";

export const IncubatorApplications: CollectionConfig = {
  slug: "incubator-applications",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "entity", "email", "projectType", "status", "createdAt"],
    group: "Incubateur",
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "entity", type: "text", label: "Structure / Pseudo" },
    { name: "email", type: "email", required: true },
    { name: "socials", type: "text", label: "Reseaux sociaux" },
    {
      name: "projectType",
      type: "select",
      required: true,
      options: [
        { label: "Groupe etabli", value: "established-group" },
        { label: "Influenceur / Createur", value: "creator" },
        { label: "Marque emergente", value: "emerging-brand" },
        { label: "Expertise differenciante", value: "expert" },
        { label: "Autre", value: "other" },
      ],
    },
    { name: "pitch", type: "textarea", required: true, label: "Presentation du projet" },
    {
      name: "status",
      type: "select",
      defaultValue: "pending",
      options: [
        { label: "En attente", value: "pending" },
        { label: "En etude", value: "reviewing" },
        { label: "Entretien", value: "interview" },
        { label: "Accepte", value: "accepted" },
        { label: "Decline", value: "declined" },
      ],
    },
    { name: "notes", type: "textarea", admin: { description: "Notes internes" } },
  ],
  timestamps: true,
};
