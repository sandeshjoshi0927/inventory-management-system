import express, { response } from "express";

const app = express();
const PORT = process.env.SERVER_PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello Worlds.");
});

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
