import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

const app = express();

// Built-in Middleware
// parse JSON to all routes
app.use(express.json());

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());

// Routes
app.use("/users", userRoutes);

export default app;
