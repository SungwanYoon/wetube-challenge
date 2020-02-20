const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleProfile = (req, res) => res.send("Hello Profile");

const handleHome = (req, res) => res.send("Hello from home");

app.get("/profile", handleProfile);

app.get("/", handleHome);

app.listen(PORT, handleListening);
