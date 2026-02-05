import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";
import User from "./models/User.js";
import { generateToken } from "./utils/helpers.js";

dotenv.config();
const app = express();

// Database Connection
connectDB();

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());

// Built-in Middleware
// parse JSON to all routes
app.use(express.json());

// GET
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Register User
app.post("/user", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // create user
    const user = await User.create({
      name,
      email,
      password,
    });

    // Generate token
    const token = generateToken(user._id);

    // return success message with user id
    res.status(201).json({
      success: true,
      message: "User created successfully.",
      token: token,
      user: {
        _id: user.id,
      },
    });
  } catch (error) {
    // auto validation by mongoose
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// Delete User
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  const result = await User.findByIdAndDelete(id);

  if (result) {
    res.send("Deleted Succesfully.");
  }

  return result;
});

// serve
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
