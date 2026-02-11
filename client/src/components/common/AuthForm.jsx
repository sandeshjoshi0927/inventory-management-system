import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AuthForm = ({ type, label }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/user", {
        name,
        email,
        password,
      });

      const token = response.data.token;

      localStorage.setItem("token", token);

      navigate("/dashboard");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex items-center justify-center bg-red-300">
      <div className="grid gap-10">
        <div className="font-bold text-2xl">{label}</div>

        <form onSubmit={(e) => handleSubmit(e)}>
          {type === "register" && (
            <div className="flex flex-col">
              <label htmlFor="name">Name: </label>
              <input
                className="border border-black rounded-sm px-2 py-3"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {type === "register" ? "Register" : "Sign in"}
          </button>
        </form>

        <p>
          <span>
            {type === "login" ? "Don't" : "Already"} have an account?{" "}
          </span>
          <span>
            <Link to={type === "register" ? "/login" : "/register"}>
              {type === "register" ? "Sign in" : "Create One"}
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
