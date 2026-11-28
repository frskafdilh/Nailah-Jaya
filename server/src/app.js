import express from "express";
import cors from "cors";
import pool from "./config/database.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

app.get("/api/health", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW() AS waktu");
    res.json({
      success: true,
      message: "Server dan database aktif",
      data: { waktu: result.rows[0].waktu },
    });
  } catch (err) {
    console.error("Health check gagal:", err.message);
    res.status(500).json({ success: false, message: "Database tidak terhubung" });
  }
});

export default app;