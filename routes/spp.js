const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("SPP route works!");
});

module.exports = router;
