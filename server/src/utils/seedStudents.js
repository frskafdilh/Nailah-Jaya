import "dotenv/config";
import bcrypt from "bcryptjs";
import pool from "../config/database.js";

const { DUMMY_PASSWORD } = process.env;

if (!DUMMY_PASSWORD || DUMMY_PASSWORD.length < 8) {
  console.error("Isi DUMMY_PASSWORD di .env (minimal 8 karakter)");
  process.exit(1);
}

const students = [
  { name: "Andi Pratama",   email: "andi.pratama@siswa.test",   phone: "081200000001" },
  { name: "Siti Rahma",     email: "siti.rahma@siswa.test",     phone: "081200000002" },
  { name: "Budi Santoso",   email: "budi.santoso@siswa.test",   phone: "081200000003" },
  { name: "Dewi Lestari",   email: "dewi.lestari@siswa.test",   phone: "081200000004" },
  { name: "Rizky Hidayat",  email: "rizky.hidayat@siswa.test",  phone: "081200000005" },
  { name: "Putri Ayu",      email: "putri.ayu@siswa.test",      phone: "081200000006" },
  { name: "Fajar Nugroho",  email: "fajar.nugroho@siswa.test",  phone: "081200000007" },
  { name: "Nadia Safitri",  email: "nadia.safitri@siswa.test",  phone: "081200000008" },
  { name: "Hendra Gunawan", email: "hendra.gunawan@siswa.test", phone: "081200000009" },
  { name: "Maya Anggraini", email: "maya.anggraini@siswa.test", phone: "081200000010" },
];

const hash = await bcrypt.hash(DUMMY_PASSWORD, 10);

for (const s of students) {
  await pool.query(
    `INSERT INTO users (name, email, password_hash, phone, role)
     VALUES ($1, $2, $3, $4, 'siswa')
     ON CONFLICT (email) DO NOTHING`,
    [s.name, s.email, hash, s.phone]
  );
}

console.log(`${students.length} siswa dummy siap`);
await pool.end();