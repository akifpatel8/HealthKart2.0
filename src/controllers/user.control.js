const express = require("express");

const router = express.Router();
const Item = require("../models/user.models");

// router.get("/kart", async function (req, res) {
//   const user = await Item.find().lean().exec();
//   res.render("users/allusers", {
//     users: user,
//   });
// });

router.post("", async function (req, res) {
  const user = await Item.create(req.body);
  return res.send(user);
});
router.get("/item",async(req,res)=>{
  res.sendFile()
})
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
router.get("", async function (req, res) {
  const user = await Item.find().lean().exec();
  const img = user.img;

  return res.sendFile("users/product.ejs");
});

module.exports = router;
