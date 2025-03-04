require("dotenv").config();
console.log(process.env);
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Hello World!");
});
const person = {
  name: "John",
  age: 30,
};

app.get("/about", (req, res) => {
  res.json();
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running on port 8000");
});
