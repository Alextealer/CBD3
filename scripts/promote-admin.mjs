/**
 * One-off: promote a user to admin role in the Postgres `users` table.
 * Usage: node scripts/promote-admin.mjs <email>
 */
import fs from "node:fs";
import path from "node:path";
import { Client } from "pg";

// Load .env.local manually (no dotenv dep needed)
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i === -1) continue;
    const k = t.slice(0, i).trim();
    const v = t.slice(i + 1).trim();
    if (!process.env[k]) process.env[k] = v;
  }
}

const email = process.argv[2];
if (!email) {
  console.error("Usage: node scripts/promote-admin.mjs <email>");
  process.exit(1);
}

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL missing in .env.local");
  process.exit(1);
}

const client = new Client({ connectionString: url, ssl: { rejectUnauthorized: false } });

try {
  await client.connect();

  const before = await client.query("SELECT id, email, role FROM users WHERE email = $1", [email]);
  if (before.rowCount === 0) {
    console.error(`No user found with email "${email}". Existing users:`);
    const all = await client.query("SELECT id, email, role FROM users LIMIT 20");
    for (const r of all.rows) console.error(`  · ${r.email} (${r.role})`);
    process.exit(2);
  }

  console.log("Before:", before.rows[0]);

  await client.query("UPDATE users SET role = 'admin' WHERE email = $1", [email]);

  const after = await client.query("SELECT id, email, role FROM users WHERE email = $1", [email]);
  console.log("After: ", after.rows[0]);
  console.log("✓ Promotion done.");
} catch (err) {
  console.error("Failed:", err.message);
  process.exit(3);
} finally {
  await client.end();
}
