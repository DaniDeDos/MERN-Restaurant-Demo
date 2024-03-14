// server
import express from "express";
import cors from "cors";
import conectarBD from "./config/conn.js";
import authRoutes from "./routes/auth.js";

const server = express();

conectarBD();

const PORT = process.env.PORT || 4000;

server.use(cors({ origin: "http://localhost:5173", credentials: true }));
server.use(express.json({ extended: true }));

server.use("/api/auth", authRoutes);

server.listen(PORT, () => {
  console.log(`Servidor funcionando en: http://localhost:${PORT}`);
});
