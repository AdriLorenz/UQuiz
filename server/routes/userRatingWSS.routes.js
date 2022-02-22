module.exports = (wss) => {
  let wsRouter = require("express").Router();
  const userScoreController = require("../controllers/user_score.controller");

  wsRouter.get("/userScores", async (socket, req) => {
    socket.on("connection", async (data) => {
      //   ratings = await userScoreController.getUserScoresOrdered();
      //   console.log(ratings);
      socket.send(ratings);
    });
  });
};
