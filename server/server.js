import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

// Database Connection
connectDB();

// Parse JSON to all routes
app.use(express.json());

// GET request
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/", (req, res) => {
  res.send(req.body.name);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
