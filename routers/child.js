const express = require("express");
const { ChildRecord } = require("../records/child.record");
const { GiftRecord } = require("../records/gift.record");

const childRouter = express.Router();

childRouter.get("/", async (req, res) => {
  const childrenList = await ChildRecord.listAll();
  const giftsList = await GiftRecord.listAll();

  return res.render("children/list", {
    childrenList,
    giftsList,
  });
});

childRouter.post("/", async (req, res) => {
  console.log(req.body);

  const data = {
    ...req.body,
  };

  const newChild = new ChildRecord(data);
  await newChild.insert();

  return res.redirect("/child");
});

module.exports = {
  childRouter,
};
