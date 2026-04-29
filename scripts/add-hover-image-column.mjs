/**
 * Hotfix — add categories.hover_image_id column.
 *
 * The Payload `hoverImage` upload field was added in code, but Drizzle's
 * schema push doesn't run on Vercel serverless cold starts, so the
 * migration never landed. Adding the column manually unblocks all
 * category page rendering and admin queries.
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

  // Check if column already exists
  const exists = await client.query(
    `select 1 from information_schema.columns
      where table_schema = 'public'
        and table_name = 'categories'
        and column_name = 'hover_image_id'
      limit 1`,
  );
  if (exists.rowCount > 0) {
    console.log("⏭  Column hover_image_id already exists.");
    return;
  }

  // Match the existing cover_image_id type and FK behavior
  const coverCol = await client.query(
    `select column_name, data_type, is_nullable
       from information_schema.columns
      where table_schema='public' and table_name='categories' and column_name='cover_image_id'`,
  );
  if (coverCol.rowCount === 0) {
    console.error("Reference column cover_image_id missing — aborting.");
    process.exit(1);
  }
  const dataType = coverCol.rows[0].data_type; // typically integer
  console.log(`Mirroring cover_image_id (${dataType}) for hover_image_id.`);

  await client.query(
    `alter table categories add column hover_image_id ${dataType}`,
  );
  // Add the same FK to media(id) with ON DELETE SET NULL
  await client.query(
    `alter table categories
       add constraint categories_hover_image_id_fkey
       foreign key (hover_image_id) references media(id) on delete set null`,
  );
  console.log("✓ Added column categories.hover_image_id with FK to media(id)");
}

run()
  .catch((e) => {
    console.error("✗ Failed:", e.message);
    process.exit(1);
  })
  .finally(() => client.end());
