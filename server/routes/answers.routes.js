// Import express
module.exports = (app) => {
  // Import Answers Controller
  const answer = require("../controllers/answers-controller");
  const auth = require("../controllers/auth");

  // Init express router
  const routerAnswers = require("express").Router();

  // Route get all answers
  routerAnswers.get("/data", answer.getAnswers);

  // Route get answer by id
  routerAnswers.get("/:answer_id", answer.getAnswerById);

  // Route get answer by theme
  routerAnswers.get("/question/:question_id_fk", answer.getAnswerOfQuestion);

  // Route create a new answer
  routerAnswers.post("/", answer.createAnswer);

  // Route update answer by id
  routerAnswers.put("/:answer_id", answer.updateAnswer);

  // Route delete answer by id
  routerAnswers.delete("/:answer_id", answer.deleteAnswer);

  routerAnswers.use(auth.checkAuthenticated);
  app.use("/answers", routerAnswers);
};
