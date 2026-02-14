import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { createUser, loginUser } from "../../utils/auth.js";

const AuthForm = ({ type, label }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (type === "register") {
        const response = await createUser(name, email, password);

        if (response.data.success) {
          navigate("/dashboard");
        }
      } else {
        const response = await loginUser(email, password);

        if (!response) {
          throw new Error("Error getting token.");
        }

        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid gap-10 p-6 rounded-sm border border-gray-100 shadow-lg w-full max-w-120">
        <h1 className="font-bold text-2xl">{label}</h1>

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
          {type === "register" && (
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name: </label>
              <input
                className="p-2 border-b rounded-0 border-indigo-400 outline-0"
                type="text"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email: </label>
            <input
              className="p-2 border-b rounded-0 border-indigo-400 outline-0"
              type="email"
              placeholder="Enter an email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password: </label>
            <input
              className="p-2 border-b rounded-0 border-indigo-400 outline-0"
              type="password"
              placeholder="**********"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit">
            {type === "register" ? "Register" : "Sign In"}
          </Button>
        </form>

        <p>
          <span>
            {type === "login" ? "Don't" : "Already"} have an account?{" "}
          </span>
          <span>
            <Link
              to={type === "register" ? "/login" : "/register"}
              className="text-indigo-400 hover:underline underline-offset-2"
            >
              {type === "register" ? "Sign in" : "Create One"}
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
