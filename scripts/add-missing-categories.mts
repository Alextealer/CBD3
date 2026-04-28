/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * One-off script — add the two missing categories (Pre-roll CBD, Bonbon CBD)
 * to the live Payload database without going through the admin UI.
 *
 * Run from the project root:
 *   node --import tsx scripts/add-missing-categories.mts
 *
 * Idempotent: skips a category if its slug already exists.
 */
import fs from "fs";
import path from "path";

// --- Manual .env.local loader (must run before payload import) ---------
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim().replace(/^"(.*)"$/, "$1");
    if (!process.env[key]) process.env[key] = value;
  }
  console.log(`✓ Loaded ${envPath}`);
} else {
  console.warn(`⚠ ${envPath} not found — make sure DATABASE_URL is exported`);
}

// --- Payload bootstrap ---------------------------------------------------
const { getPayload } = await import("payload");
const config = (await import("../src/payload.config.ts")).default;

const TARGETS = [
  {
    name: "Pre-roll CBD",
    slug: "pre-roll-cbd",
    description:
      "Joints prets a fumer, pre-rolls premium en formats varies. Roulage propre, dosages constants, conformite EU/FR.",
    shortDescription: "Joints prets a fumer",
    icon: "cigarette" as const,
    bgColor: "bg-stone-50" as const,
    order: 3,
  },
  {
    name: "Bonbon CBD",
    slug: "bonbon-cbd",
    description:
      "Bonbons et gummies au CBD doses precisement, formats snacking pour usage quotidien. Saveurs fruitees et chocolat.",
    shortDescription: "Gummies, bonbons doses",
    icon: "cookie" as const,
    bgColor: "bg-rose-50" as const,
    order: 7,
  },
];

async function run() {
  const payload = await getPayload({ config });

  for (const cat of TARGETS) {
    const existing = await payload.find({
      collection: "categories",
      where: { slug: { equals: cat.slug } },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      console.log(`⏭  Skip "${cat.name}" — slug "${cat.slug}" already exists`);
      continue;
    }

    const created = await payload.create({
      collection: "categories",
      data: { ...cat, isActive: true },
    });
    console.log(`✓ Created "${created.name}" (id=${created.id})`);
  }

  console.log("Done.");
  process.exit(0);
}

run().catch((err) => {
  console.error("✗ Failed:", err);
  process.exit(1);
});
