import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
// import { generateToken } from "./src/utils/helpers.js";
import app from "./src/app.js";

dotenv.config();

// Database Connection
connectDB();

// GET
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// Get all Users
// app.get("/user/all", async (req, res) => {
//   try {
//     const users = await User.find();

//     // TODO if no user do something

//     res.status(201).json({
//       success: true,
//       message: "Successfully fetched Users.",
//       users: users,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // Register User
// app.post("/user/create", async (req, res) => {
//   try {

//   } catch (error) {}
// });

// login user
// app.post("/user/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email, password });

//     if (!user) {
//       throw new Error("User not found.");
//     }

//     const token = generateToken(user._id);

//     res.status(200).json({
//       success: true,
//       message: "Login Successfull.",
//       token: token,
//       user: {
//         _id: user.id,
//       },
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// Delete User
// app.delete("/user/:id", async (req, res) => {
//   const { id } = req.params;

//   const result = await User.findByIdAndDelete(id);

//   if (result) {
//     res.send("Deleted Succesfully.");
//   }

//   return result;
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
