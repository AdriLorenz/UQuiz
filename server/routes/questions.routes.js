module.exports = (app) => {
  // Import Controller
  const auth = require("../controllers/auth.controller");
  const questions = require("../controllers/questions.controller");

  // Init express router
  const routerQuestions = require("express").Router();

  routerQuestions.get("/data", questions.getQuestionsWithTopic);

  // get one question with answers
  routerQuestions.get("/WithAnswers/:question_id", questions.getOneWithAnswers);

  //get questions with answers
  routerQuestions.get("/WithAnswers", questions.getQuestionsWithAnswers);

  // Route get question by id
  routerQuestions.get(
    "/:question_id",
    questions.getQuestionWithTopicByIdQuestion
  );

  // Route create a new question
  routerQuestions.post("/", questions.createQuestionAndAnswers);
  routerQuestions.post("/data", questions.createQuestion);

  // Route update question by id
  routerQuestions.put("/edit/:question_id", questions.updateQuestionAndAnswers);
  routerQuestions.put("/data/:question_id", questions.updateQuestion);

  // Route delete question by id
  routerQuestions.delete("/:question_id", questions.deleteQuestion);

  routerQuestions.use(auth.checkAuthenticated);
  app.use("/questions", routerQuestions);
};
