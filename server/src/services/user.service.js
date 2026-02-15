import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const createUserService = async ({ name, email, password }) => {
  // check if user with that email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email already registered");
  }

  // hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  // store the user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};
