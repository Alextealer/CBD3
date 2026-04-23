/**
 * One-off: reset a user's password directly in Postgres using the same
 * pbkdf2-sha256 / 25000 iter / 512 bytes / random 32-byte salt format
 * as Payload v3.
 * Usage: node scripts/reset-password.mjs <email> <new-password>
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { Client } from "pg";

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

const [, , email, newPassword] = process.argv;
if (!email || !newPassword) {
  console.error("Usage: node scripts/reset-password.mjs <email> <new-password>");
  process.exit(1);
}

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL missing");
  process.exit(1);
}

const salt = crypto.randomBytes(32).toString("hex");
const hash = crypto
  .pbkdf2Sync(newPassword, salt, 25000, 512, "sha256")
  .toString("hex");

const client = new Client({ connectionString: url, ssl: { rejectUnauthorized: false } });

try {
  await client.connect();
  const before = await client.query(
    "SELECT id, email, role FROM users WHERE email = $1",
    [email],
  );
  if (before.rowCount === 0) {
    console.error(`No user with email "${email}"`);
    process.exit(2);
  }
  console.log("User:", before.rows[0]);

  await client.query(
    "UPDATE users SET hash = $1, salt = $2, login_attempts = 0, lock_until = NULL WHERE email = $3",
    [hash, salt, email],
  );
  console.log("✓ Password reset. Login at /admin");
} catch (err) {
  console.error("Failed:", err.message);
  process.exit(3);
} finally {
  await client.end();
}
