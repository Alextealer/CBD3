import path from "path";
import dns from "dns";
import net from "net";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

// Force IPv4 DNS resolution globally
dns.setDefaultResultOrder("ipv4first");

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Categories } from "./collections/Categories";
import { Products } from "./collections/Products";
import { Tags } from "./collections/Tags";
import { Pages } from "./collections/Pages";
import { Navigation } from "./collections/Navigation";
import { SiteSettings } from "./globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: "— CBD3 Admin",
    },
  },
  collections: [
    Users,
    Media,
    Categories,
    Products,
    Tags,
    Pages,
    Navigation,
  ],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "dev-secret-change-me",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
      // Force IPv4 resolution — Supabase only returns AAAA (IPv6) records
      // and Vercel serverless doesn't support IPv6.
      lookup: ((hostname: string, opts: any, cb: any) => {
        dns.lookup(hostname, { family: 4 }, cb);
      }) as any,
    },
  }),
  sharp,
});
