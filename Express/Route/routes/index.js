const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("Hello World!");
});

const qrRote = require("../modules/qrcode/qr.route");
const email = require("../modules/email/email.route");
const currency = require("../modules/currency/currency.route");

router.use("/api/v1/qr", qrRote);
router.use("/api/v1/email", email);
router.use("/api/v1/currency", currency);

module.exports = router;
