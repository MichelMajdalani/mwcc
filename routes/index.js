var express = require("express");
var router = express.Router();

// Root routes
router.get("/", (req, res) => {
  res.render("landing");
});

module.exports = router;
