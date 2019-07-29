var express = require("express");
var router = express.Router();
var Competitions = require("../models/competitions");

// INDEX ROUTE - list all available campaigns
router.get("/", (req, res) => {
	Competitions.find({}, function(err, foundData) {
		if(err) {
			console.log(err);
		} else {
			res.render("competitions/index", {competitions: foundData});
		}
	});	
});

// CREATE ROUTE - Creates a new competition and redirect to main page
router.post("/", (req, res) => {
	var competitionPoints = req.body.points;
	Competitions.create({
		name: req.body.name,
		creator: "Delete",
		GroupUrl: req.body.url,
		points: {
			 groupPhase: {
			  correctOutcome: competitionPoints.correctOutcome,
			  correctScore: competitionPoints.GScorrectScore ,
			  teamRank: competitionPoints.teamRank,
			  extraPointsTeamRank: competitionPoints.allTeamRank
			},
			knockoutPhase: {
			  correctScore: competitionPoints.KOcorrectscore,
			  Ro16WinningTeam: competitionPoints.RO16winningteam,
			  QFWinningTeam: competitionPoints.QFwinningteam,
			  SemiWinningTeam: competitionPoints.SFwinningteam,
			  ThirdPlace: competitionPoints.third,
			  FirstPlace: competitionPoints.champion,
			},
			correctBonusQuestions: req.body.questions
		}
	}, function(err, newData) {
		if(err) {
			console.log(err);
		} else {
			console.log(newData);
			res.redirect("/competitions");
		}
	});
});

// NEW ROUTE - display form to add a new competition
router.get("/new", (req, res) => {
	res.render("competitions/new");
});

module.exports = router;
