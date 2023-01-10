const express = require("express");
const { GiftRecord } = require("../records/gift.record");

const giftRouter = express.Router();

giftRouter.get("/", (req, res) => {
  const giftsList = GiftRecord.listAll();

  res.render("gift/list", {
    giftsList,
  });
});

module.exports = {
  giftRouter,
};
