const express = require("express");

const router = express.Router();

router.get("", async function (req, res) {
  res.render("users/product.ejs")
  });
  
  module.exports=router