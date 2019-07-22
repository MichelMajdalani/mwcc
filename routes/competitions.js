var express = require("express");
var router = express.Router();
var Competitions = require("../models/competitions");

// INDEX ROUTE - list all available campaigns
router.get("/", (req, res) => {
  res.render("competitions/index");
});

module.exports = router;
