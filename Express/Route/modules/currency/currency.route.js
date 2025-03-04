const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("Currency!");
});

module.exports = router;
