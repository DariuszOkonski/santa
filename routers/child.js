const express = require("express");
const { ChildRecord } = require("../records/child.record");
const { GiftRecord } = require("../records/gift.record");
const { ValidationError } = require("../utils/errors");

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
  const data = {
    ...req.body,
  };

  const newChild = new ChildRecord(data);
  await newChild.insert();

  return res.redirect("/child");
});

childRouter.patch("/gift/:childId", async (req, res) => {
  console.clear();
  console.log("PATCH child");
  const child = await ChildRecord.getOne(req.params.childId);

  if (child === null) {
    throw new ValidationError("Nie znaleziono dziecka z podanym ID.");
  }

  console.log("req.body.giftId: ", req.body.giftId);

  const gift =
    req.body.giftId === "" ? null : await GiftRecord.getOne(req.body.giftId);

  console.log("child: ", child);
  console.log("gift: ", gift);

  if (gift) {
    console.log(gift.count, await gift.countGivenGifts());
  }

  child.giftId = gift?.id ?? null;

  await child.update();

  return res.redirect("/child");
});

module.exports = {
  childRouter,
};

// 51:58
