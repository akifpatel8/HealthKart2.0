const express = require("express");

const router = express.Router();

router.get("", async function (req, res) {
  res.render("users/items.ejs");
});

module.exports = router;
