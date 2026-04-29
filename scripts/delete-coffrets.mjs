/**
 * One-off — delete the "Coffrets Decouverte" category (id=5) and its 3
 * orphan-blocking products. Idempotent: skips if already deleted.
 *
 * Authorized explicitly by the user — this performs hard deletes against
 * the production Supabase Postgres.
 */
import path from "node:path";
import dotenv from "dotenv";
import pg from "pg";

// Don't override env-set values — DATABASE_URL passed inline takes precedence
// over the empty placeholder Vercel CLI writes for "sensitive" vars.
dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
  override: false,
});

const url = process.env.DATABASE_URL || "";
if (!url) {
  console.error("DATABASE_URL missing — pull env or pass inline");
  process.exit(1);
}

const CATEGORY_ID = 5;
// Slugs of the 3 product docs to delete
const PRODUCT_SLUGS_TO_DELETE = [
  "coffret-premium-selection",
  "coffret-bien-etre-complet",
  "coffret-decouverte-huiles",
];

const client = new pg.Client({ connectionString: url });

async function run() {
  await client.connect();

  // 1 — Find products in this category (by id, in case slugs differ)
  const products = await client.query(
    `select id, name, slug from products where category_id = $1`,
    [CATEGORY_ID],
  );
  console.log(`Found ${products.rowCount} product(s) linked to category ${CATEGORY_ID}:`);
  for (const r of products.rows) {
    console.log(`  - id=${r.id} slug=${r.slug} name="${r.name}"`);
  }

  // 2 — Delete each product (cascades any product_tags, product_images, etc.)
  for (const p of products.rows) {
    const del = await client.query(
      `delete from products where id = $1 returning id, slug`,
      [p.id],
    );
    if (del.rowCount > 0) {
      console.log(`✓ Deleted product id=${del.rows[0].id} slug=${del.rows[0].slug}`);
    }
  }

  // 3 — Delete the category itself
  const cat = await client.query(
    `delete from categories where id = $1 returning id, name, slug`,
    [CATEGORY_ID],
  );
  if (cat.rowCount > 0) {
    console.log(
      `✓ Deleted category id=${cat.rows[0].id} name="${cat.rows[0].name}" slug=${cat.rows[0].slug}`,
    );
  } else {
    console.log(`⏭  Category ${CATEGORY_ID} already deleted.`);
  }

  console.log("Done.");
}

run()
  .catch((e) => {
    console.error("✗ Failed:", e.message);
    process.exit(1);
  })
  .finally(() => client.end());
