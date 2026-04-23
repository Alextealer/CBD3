import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "role"],
  },
  auth: true,
  access: {
    // Anyone authenticated can read their own profile; admins read all.
    read: ({ req: { user } }) => Boolean(user),
    // Only admins can create/update/delete users from the panel.
    create: ({ req: { user } }) => user?.role === "admin",
    update: ({ req: { user } }) => user?.role === "admin",
    delete: ({ req: { user } }) => user?.role === "admin",
    // Admin panel access: admin OR brand. Customers stay on the public site.
    admin: ({ req: { user } }) => user?.role === "admin" || user?.role === "brand",
  },
  hooks: {
    beforeChange: [
      async ({ data, operation, req }) => {
        // Force the very first user created to be an admin so /admin is reachable.
        if (operation === "create") {
          const existing = await req.payload.count({ collection: "users" });
          if (existing.totalDocs === 0) {
            return { ...data, role: "admin" };
          }
        }
        return data;
      },
    ],
  },
  fields: [
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "admin",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Brand (Marque)", value: "brand" },
        { label: "Customer", value: "customer" },
      ],
    },
    { name: "firstName", type: "text" },
    { name: "lastName", type: "text" },
  ],
};
