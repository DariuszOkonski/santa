const express = require("express");

const childRouter = express.Router();

childRouter.get("/", (req, res) => {
  return res.render("children/list");
});

module.exports = {
  childRouter,
};
