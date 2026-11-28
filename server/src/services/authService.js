import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../config/database.js";

function createToken(user) {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );
}

export async function registerUser({ name, email, password, phone }) {
  const cleanEmail = email.trim().toLowerCase();

  const existing = await pool.query(
    "SELECT id FROM users WHERE email = $1",
    [cleanEmail]
  );
  if (existing.rows.length > 0) {
    const err = new Error("Email sudah terdaftar");
    err.status = 409;
    throw err;
  }

  const hash = await bcrypt.hash(password, 10);

  // role TIDAK diambil dari input: selalu 'siswa'
  const result = await pool.query(
    `INSERT INTO users (name, email, password_hash, phone, role)
     VALUES ($1, $2, $3, $4, 'siswa')
     RETURNING id, name, email, phone, role, created_at`,
    [name.trim(), cleanEmail, hash, phone || null]
  );

  return result.rows[0];
}

export async function loginUser({ email, password }) {
  const result = await pool.query(
    "SELECT id, name, email, phone, role, password_hash FROM users WHERE email = $1",
    [email.trim().toLowerCase()]
  );

  const user = result.rows[0];
  // Pesan sama untuk email salah dan password salah (tidak membocorkan info)
  const valid = user && (await bcrypt.compare(password, user.password_hash));

  if (!valid) {
    const err = new Error("Email atau password salah");
    err.status = 401;
    throw err;
  }

  const token = createToken(user);
  delete user.password_hash; // jangan kirim hash ke klien

  return { token, user };
}