var mongoose = require('mongoose');

// Schema
var competitionSchema = new mongoose.Schema({
  name: String,
  creator: String,
  GroupUrl: String,
  points: {
    groupPhase: {
      correctOutcome: Number,
      correctScore: Number,
      teamRank: Number,
      extraPointsTeamRank: Number
    },
    knockoutPhase: {
      correctScore: Number,
      Ro16WinningTeam: Number,
      QFWinningTeam: Number,
      SemiWinningTeam: Number,
      ThirdPlace: Number,
      FirstPlace: Number,
    },
    correctBonusQuestions: Number
  }
});

module.exports = mongoose.model("Competition", competitionSchema);
