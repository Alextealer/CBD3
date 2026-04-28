/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * One-off — add 2 missing categories via direct Postgres INSERT.
 * Avoids the Payload bootstrap (file-type ESM resolution bug).
 *
 * Run:  node scripts/add-missing-categories-sql.mjs
 */
import path from "node:path";
import dotenv from "dotenv";
import pg from "pg";

const envPath = path.resolve(process.cwd(), ".env.local");
const result = dotenv.config({ path: envPath, override: true });
if (result.error) {
  console.error("dotenv error:", result.error);
  process.exit(1);
}
const url = process.env.DATABASE_URL || "";
console.log("DATABASE_URL host:", url.match(/@([^:/]+)/)?.[1] || "(empty)");

if (!url) {
  console.error("DATABASE_URL missing after dotenv load");
  process.exit(1);
}

const TARGETS = [
  {
    name: "Pre-roll CBD",
    slug: "pre-roll-cbd",
    description:
      "Joints prets a fumer, pre-rolls premium en formats varies. Roulage propre, dosages constants, conformite EU/FR.",
    shortDescription: "Joints prets a fumer",
    icon: "cigarette",
    bgColor: "bg-stone-50",
    order: 3,
  },
  {
    name: "Bonbon CBD",
    slug: "bonbon-cbd",
    description:
      "Bonbons et gummies au CBD doses precisement, formats snacking pour usage quotidien.",
    shortDescription: "Gummies, bonbons doses",
    icon: "cookie",
    bgColor: "bg-rose-50",
    order: 7,
  },
];

const client = new pg.Client({ connectionString: process.env.DATABASE_URL });

async function run() {
  await client.connect();

  // Inspect schema first so we use the right column casing
  const cols = await client.query(
    `select column_name, data_type, is_nullable, column_default
     from information_schema.columns
     where table_schema='public' and table_name='categories'
     order by ordinal_position`,
  );
  console.log("categories table columns:");
  for (const r of cols.rows) {
    console.log(`  ${r.column_name} :: ${r.data_type}${r.is_nullable === "NO" ? " NOT NULL" : ""}${r.column_default ? ` default=${r.column_default}` : ""}`);
  }

  for (const cat of TARGETS) {
    const exists = await client.query(
      `select id, name from categories where slug = $1 limit 1`,
      [cat.slug],
    );
    if (exists.rowCount > 0) {
      console.log(`⏭  Skip "${cat.name}" — slug "${cat.slug}" already exists (id=${exists.rows[0].id})`);
      continue;
    }

    const insert = await client.query(
      `insert into categories
         (name, slug, description, short_description, icon, bg_color, "order", is_active, updated_at, created_at)
       values ($1, $2, $3, $4, $5, $6, $7, true, now(), now())
       returning id, name`,
      [
        cat.name,
        cat.slug,
        cat.description,
        cat.shortDescription,
        cat.icon,
        cat.bgColor,
        cat.order,
      ],
    );
    console.log(`✓ Created "${insert.rows[0].name}" (id=${insert.rows[0].id})`);
  }
}

run()
  .catch((e) => {
    console.error("✗ Failed:", e.message);
    process.exit(1);
  })
  .finally(() => client.end());
