import authRoutes from "./routes/authRoutes.js";
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

app.use("/api/auth", authRoutes);

// Penangkap error sementara (Tahap 7 dirapikan jadi errorMiddleware.js)
app.use((err, req, res, next) => {
  const status = err.status || 500;
  if (status === 500) console.error(err);
  res.status(status).json({
    success: false,
    message: status === 500 ? "Terjadi kesalahan pada server" : err.message,
  });
});

export default app;