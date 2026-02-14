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

// Get all Users
app.get("/user/all", async (req, res) => {
  try {
    const users = await User.find();

    // TODO if no user do something

    res.status(201).json({
      success: true,
      message: "Successfully fetched Users.",
      users: users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// Register User
app.post("/user/create", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      res.status(422).json({
        success: false,
        message: "Name field is required.",
      });
    }

    // create user
    const user = await User.create({
      name,
      email,
      password,
    });

    // if user creation fails
    if (!user) {
      throw new Error("Error creating user.");
    }

    // return success message with user id
    res.status(201).json({
      success: true,
      message: "User created successfully.",
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

// login user
app.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      throw new Error("User not found.");
    }

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: "Login Successfull.",
      token: token,
      user: {
        _id: user.id,
      },
    });
  } catch (error) {
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
