import { createUserService } from "../services/user.service.js";

export const createUser = async (req, res) => {
  try {
    const user = await createUserService(req.body);

    // return success message with user detail
    return res.status(201).json({
      success: true,
      message: "User created successfully.",
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
};
