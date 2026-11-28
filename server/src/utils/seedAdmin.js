import "dotenv/config";
import bcrypt from "bcryptjs";
import pool from "../config/database.js";

const { ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

if (!ADMIN_NAME || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error("Isi ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD di .env");
  process.exit(1);
}

const hash = await bcrypt.hash(ADMIN_PASSWORD, 10);

await pool.query(
  `INSERT INTO users (name, email, password_hash, role)
   VALUES ($1, $2, $3, 'admin')
   ON CONFLICT (email) DO NOTHING`,
  [ADMIN_NAME, ADMIN_EMAIL, hash]
);

console.log("Admin siap:", ADMIN_EMAIL);
await pool.end();