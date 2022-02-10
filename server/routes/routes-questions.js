module.exports = (app) => {
  // Import Controller
  const answer = require("../controllers/answers-controller");
  const theme = require("../controllers/themes-controller");
  const auth = require("../controllers/auth");
  const questions = require("../controllers/questions-controller");
  const topic = require("../controllers/topics-controller");

  // Init express router
  const routerQuestions = require("express").Router();

  routerQuestions.get("/data", questions.getQuestionsWithTopic);

  //question with topics with themes page
  // routerQuestions.get(
  //   "/theme/:theme_id_fk",
  //   auth.checkAuthenticated,
  //   auth.authRole(2),
  //   async (req, res, next) => {
  //     try {
  //       const questionsWithTopicsWithThemes =
  //         await theme.getThemesWithTopicAndQuestions();

  //       res.render("../views/questionsByThemes.ejs", {
  //         questionsWithTopicsWithThemes,
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   }
  // );

  // create page
  // routerQuestions.get(
  //   "/create",
  //   auth.checkAuthenticated,
  //   auth.authRole(2),
  //   async (req, res) => {
  //     let themes = await theme.returnThemes();
  //     let topics = await topic.returnTopics();
  //     res.render("../views/create-question.ejs", { themes, topics });
  //   }
  // );

  // edit page
  // routerQuestions.get(
  //   "/edit/:question_id",
  //   auth.checkAuthenticated,
  //   auth.authRole(2),
  //   async (req, res) => {
  //     const question = await questions.getAQuestionWithAnswers;
  //     res.render("../views/edit-question.ejs", {
  //       question,
  //     });
  //   }
  // );

  // get one question with answers
  routerQuestions.get("/WithAnswers/:question_id", questions.getOneWithAnswers);

  //get questions with answers
  routerQuestions.get("/WithAnswers", questions.getQuestionsWithAnswers);

  // Route get question by id
  routerQuestions.get(
    "/:question_id",
    questions.getQuestionWithTopicByIdQuestion
  );
  // Route get question by theme
  routerQuestions.get("/theme/:theme_id_fk", questions.getQuestionByTheme);

  // Route create a new question
  routerQuestions.post("/", questions.createQuestionAndAnswers);
  routerQuestions.post("/data", questions.createQuestion);

  // Route update question by id
  routerQuestions.put("/edit/:question_id", questions.updateQuestionAndAnswers);
  routerQuestions.put("/data/:question_id", questions.updateQuestion);

  // Route delete question by id
  routerQuestions.delete("/:question_id", questions.deleteQuestion);

  app.use("/questions", routerQuestions);
};
