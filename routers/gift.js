const express = require("express");
const { GiftRecord } = require("../records/gift.record");

const giftRouter = express.Router();

giftRouter.get("/", async (req, res) => {
  const giftsList = await GiftRecord.listAll();

  res.render("gift/list", {
    giftsList,
  });
});

module.exports = {
  giftRouter,
};
