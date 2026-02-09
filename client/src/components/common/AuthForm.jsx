import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AuthForm = ({ type }) => {
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
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        {type === "register" && (
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
          </div>
        )}

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">
          {type === "register" ? "Register" : "Sign in"}
        </button>
      </form>

      <p>
        <span>{type === "login" ? "Don't" : "Already"} have an account? </span>
        <span>
          <Link to={type === "register" ? "/login" : "/register"}>
            {type === "register" ? "Sign in" : "Create One"}
          </Link>
        </span>
      </p>
    </>
  );
};

export default AuthForm;
