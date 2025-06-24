import express from "express";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import setupAssociations from "./models/associations.js";

const app = express();

dotenv.config();

setupAssociations();

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://34.122.125.3",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(noteRoutes);
app.use(UserRoutes);

const PORT = 3000;
app.get("/", (req, res) => {
  res.json({
    message: "Laporin API is running",
    time: new Date().toString(),
  });
});
app
  .listen(PORT, () => {
    console.log(`Server running on port http://34.122.125.3:${PORT}/`);
  })
  .on("error", (err) => {
    console.error("Server failed to start:", err);
  });
