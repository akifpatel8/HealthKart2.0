const express = require("express");

const router = express.Router();

router.get("", async function (req, res) {
  res.render("users/kart.ejs")
  });
  
  module.exports=router