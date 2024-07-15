import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import productsRouter from "./routes/productRoute.js";

const app = express();
dotenv.config();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/products", productsRouter);

// Database connection
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Base de données connectée avec succès.");
  })
  .catch((error) =>
    console.error("Connexion à la base de données échouée", error)
  );

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port : ${PORT}`);
});
