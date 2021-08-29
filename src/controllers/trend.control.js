const express = require("express");

const router = express.Router();
const Trend = require("../models/trend.models");

router.post("", async function (req, res) {
  const items = await Trend.create(req.body);
  return res.send(items);
});
router.get("", async function (req, res) {
  const items = await Trend.find().lean().exec();
  return res.send(items);
});

router.patch("/:id", async function (req, res) {
  const items = await Trend.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  return res.send(items);
});
router.delete("/:id", async function (req, res) {
  const items = await Trend.findByIdAndDelete(req.params.id).lean().exec();

  return res.send(items);
});
module.exports = router;
