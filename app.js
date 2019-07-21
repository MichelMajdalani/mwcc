var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');

var competitionRoutes = require("./routes/competitions");
var indexRoutes = require("./routes/index");

// mongoose.connect('mongodb://localhost:27017/majdalaniCompetition', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// }).then(() => {
//   console.log("Connected to DB!");
// }).catch(err => {
//   console.log("ERROR:", err.message);
// });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use("/", indexRoutes);
app.use("/competitions", competitionRoutes);

var port = process.env.PORT || 27017;

app.listen(port, () => {
  console.log("Server started...");
});
