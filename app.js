var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var passport = require("passport");
var FacebookStrategy = require('passport-facebook').Strategy;

// IMPORT MODELS
var Competition = require("./models/competitions");

// IMPORT ROUTES
var competitionRoutes = require("./routes/competitions");
var indexRoutes = require("./routes/index");

// DATABASE
mongoose.connect('mongodb://localhost/majdalaniCompetition', {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  console.log("Connected to DB!");
}).catch(err => {
  console.log("ERROR:", err.message);
});

// APP CONFIGURATION
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

// ROUTES
app.use("/", indexRoutes);
app.use("/competitions", competitionRoutes);

// SERVER
var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started...");
});
