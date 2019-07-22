var express = require("express");
var router = express.Router();

// ROOT ROUTE
router.get("/", (req, res) => {
  res.render("landing");
});

module.exports = router;
