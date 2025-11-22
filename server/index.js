import "dotenv/config";
import express from "express";
import cors from "cors";

import connectDB from "./src/config/db.js";
import logger from "./src/config/logger.js";
import morganMiddleware from "./src/middlewares/morgan.middleware.js";

import authRoutes from "./src/routes/auth.routes.js"

const app = express();
app.use(express.json());

// connect to MongoDb
connectDB();

// Test Routes
app.get("/", (req, res) => {
  res.send("API is Running.......");
});

// Start server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
