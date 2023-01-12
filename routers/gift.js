const express = require("express");
const { GiftRecord } = require("../records/gift.record");

const giftRouter = express.Router();

giftRouter.get("/", async (req, res) => {
  const giftsList = await GiftRecord.listAll();

  res.render("gift/list", {
    giftsList,
  });
});

giftRouter.post("/", async (req, res) => {
  const data = {
    ...req.body,
    count: Number(req.body.count),
  };

  const newGift = new GiftRecord(data);
  await newGift.insert();

  return res.redirect("/gift");
});

module.exports = {
  giftRouter,
};
