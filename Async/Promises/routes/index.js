const router = require("express").Router();

const value = require("../modules/value/value.route");

router.use("/api/v1/value", value);

module.exports = router;
