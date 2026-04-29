/**
 * 1) Rename "Bonbon CBD" → "Edible CBD" (and slug bonbon-cbd → edibles-cbd
 *    so it matches the hardcoded editorial fallback)
 * 2) Add a new "Extraction CBD" category (slug extractions-cbd, same reason)
 *
 * Idempotent. User-authorized prod write.
 */
import path from "node:path";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local"), override: false });

const url = process.env.DATABASE_URL || "";
if (!url) {
  console.error("DATABASE_URL missing");
  process.exit(1);
}

const client = new pg.Client({ connectionString: url });

async function run() {
  await client.connect();

  // 1 — Rename Bonbon CBD → Edible CBD
  const renameTarget = await client.query(
    `select id, name, slug from categories where slug in ('bonbon-cbd','edibles-cbd') limit 1`,
  );
  if (renameTarget.rowCount === 0) {
    console.log("⏭  No bonbon-cbd / edibles-cbd row found, skipping rename");
  } else {
    const row = renameTarget.rows[0];
    if (row.slug === "edibles-cbd" && row.name === "Edible CBD") {
      console.log(`⏭  Already renamed (id=${row.id})`);
    } else {
      const upd = await client.query(
        `update categories
           set name = $1,
               slug = $2,
               updated_at = now()
         where id = $3
         returning id, name, slug`,
        ["Edible CBD", "edibles-cbd", row.id],
      );
      const r = upd.rows[0];
      console.log(`✓ Renamed id=${r.id}: name="${r.name}", slug="${r.slug}"`);
    }
  }

  // 2 — Add Extraction CBD if missing
  const exists = await client.query(
    `select id from categories where slug = 'extractions-cbd' limit 1`,
  );
  if (exists.rowCount > 0) {
    console.log(`⏭  Extraction CBD already exists (id=${exists.rows[0].id})`);
  } else {
    const ins = await client.query(
      `insert into categories
         (name, slug, description, short_description, icon, bg_color, "order", is_active, updated_at, created_at)
       values ($1, $2, $3, $4, $5, $6, $7, true, now(), now())
       returning id, name, slug`,
      [
        "Extraction CBD",
        "extractions-cbd",
        "Extractions CBD : wax, shatter, live resin, rosin. Concentres premium pour amateurs avertis.",
        "Wax, shatter, live resin",
        "flask-conical",
        "bg-orange-50",
        5,
      ],
    );
    const r = ins.rows[0];
    console.log(`✓ Created id=${r.id} name="${r.name}" slug="${r.slug}"`);
  }

  // 3 — Snapshot of all active categories
  const all = await client.query(
    `select id, name, slug from categories where is_active = true order by "order", id`,
  );
  console.log("\nFinal active categories:");
  for (const r of all.rows) {
    console.log(`  id=${r.id}  ${r.name.padEnd(20)} ${r.slug}`);
  }
}

run()
  .catch((e) => {
    console.error("✗ Failed:", e.message);
    process.exit(1);
  })
  .finally(() => client.end());
