module.exports = (app) => {
  const UserScore = require("../controllers/user_score-controller");

  const router = require("express").Router();

  router.get("/", UserScore.getAllUserScore);
  router.get("/ordered", UserScore.getUserScoresOrdered);
  router.get("/:id", UserScore.getOneUserScore);

  router.put("/:id", UserScore.updateUserScore);
  router.put("/add/:id", UserScore.addUserScore);
};
