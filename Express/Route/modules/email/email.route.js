const route = require("express").Router();

route.get("/", (req, res) => {
  res.json("Email!");
});

module.exports = route;
