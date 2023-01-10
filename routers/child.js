const express = require("express");
const { ChildRecord } = require("../records/child.record");
const { GiftRecord } = require("../records/gift.record");

const childRouter = express.Router();

childRouter.get("/", (req, res) => {
  const childrenList = ChildRecord.listAll();
  const giftsList = GiftRecord.listAll();

  return res.render("children/list", {
    childrenList,
    giftsList,
  });
});

module.exports = {
  childRouter,
};