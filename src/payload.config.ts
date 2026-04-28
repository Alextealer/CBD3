import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import sharp from "sharp";

import { Users } from "./collections/Users.ts";
import { Media } from "./collections/Media.ts";
import { Categories } from "./collections/Categories.ts";
import { Products } from "./collections/Products.ts";
import { Tags } from "./collections/Tags.ts";
import { Pages } from "./collections/Pages.ts";
import { Navigation } from "./collections/Navigation.ts";
import { IncubatorApplications } from "./collections/IncubatorApplications.ts";
import { SiteSettings } from "./globals/SiteSettings.ts";
import { HomeContent } from "./globals/HomeContent.ts";
import { IncubatorContent } from "./globals/IncubatorContent.ts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: "— Unsigned Admin",
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
    IncubatorApplications,
  ],
  globals: [SiteSettings, HomeContent, IncubatorContent],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "dev-secret-change-me",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  plugins: [
    s3Storage({
      // Route the `media` collection through Supabase Storage (S3-compatible)
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET || "media",
      config: {
        endpoint: process.env.S3_ENDPOINT || "",
        region: process.env.S3_REGION || "eu-central-1",
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
        },
        // Supabase requires path-style URLs (bucket-name in path, not subdomain)
        forcePathStyle: true,
      },
    }),
  ],
  sharp,
});
