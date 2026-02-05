import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import User from "./models/User.js";

dotenv.config();
const app = express();

// Database Connection
connectDB();

// Parse JSON to all routes
app.use(express.json());

// GET
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Register User
app.post("/user", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });

  res.status(201).json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

// Delete User
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  const result = await User.findByIdAndDelete(id);

  if (result) {
    res.send("Deleted Succesfully");
  }

  return result;
});

app.post("/", (req, res) => {
  res.send(req.body.name);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
