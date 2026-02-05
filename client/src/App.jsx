import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/user", {
        name,
        email,
        password,
      });

      const token = response.data.token;
      console.log(token);

      localStorage.setItem("token", token);

      console.log("logged in");
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
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

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

        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default App;
