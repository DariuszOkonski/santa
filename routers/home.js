const express = require("express");

const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  return res.redirect("/child");
});

module.exports = {
  homeRouter,
};
