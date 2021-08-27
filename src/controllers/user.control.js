const express = require("express");

const router = express.Router();
const Item = require("../models/user.models");
router.post("", async function (req, res) {
  const user = await Item.create(req.body);
  return res.send(user);
});
router.get("", async function (req, res) {
  const user = await Item.find().lean().exec();

  return res.send(user);
});
router.delete("/:id", async function (req, res) {
  const user = await Item.findByIdAndDelete(req.params.id).lean().exec();

  return res.send(user);
});
router.get("/web", async function (req, res) {
  const user = await Item.find().lean().exec();
  const img = user.img;

  return res.render("users/allusers", {
    users: user,
    img,
  });
});

module.exports = router;
