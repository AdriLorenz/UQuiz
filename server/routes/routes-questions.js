// Import express
const express = require("express");
const {
  getAnswers,
  returnAnswers,
  getCorrectAnswerByQuestion,
  getIncorrectAnswer1ByQuestion,
  getIncorrectAnswer2ByQuestion,
} = require("../controllers/answers-controller.js");
const {
  returnThemes,
  getThemes,
} = require("../controllers/themes-controller.js");
var app = express();
const {
  authUser,
  authRole,
  checkNotAuthenticated,
  checkAuthenticated,
} = require("../controllers/auth");

// Import Questions Controller

const {
  createQuestion,
  deleteQuestion,
  getQuestionById,
  getQuestionByTheme,
  getQuestions,
  returnQuestions,
  updateQuestion,
  createQuestionAndAnswers,
  updateQuestionAndAnswers,
  getQuestionByIdEJS,
  getQuestionsWithAnswers,
} = require("../controllers/questions-controller.js");
const {
  returnTopics,
  getTopicByQuestion,
} = require("../controllers/topics-controller.js");

// Init express router
const routerQuestions = express.Router();

routerQuestions.get("/questions/data", getQuestions);

// Route get all questions
routerQuestions.get("/questions", async (req, res, next) => {
  try {
    let answers = await returnAnswers();
    let questions = await returnQuestions();
    let themes = await returnThemes();
    res.render("../views/questions.ejs", { answers, questions, themes });
  } catch (error) {
    next(error);
  }
});

routerQuestions.get(
  "/questions/theme/:theme_id_fk",
  checkAuthenticated,
  authRole(2),
  async (req, res, next) => {
    try {
      const id = req.params.theme_id_fk;
      let answers = await getAnswers();
      let questions = await getQuestions();
      let themes = await getThemes();
      let questionsByThemes = await getQuestionByTheme(req, res);
      res.render("../views/questionsByThemes.ejs", {
        id,
        answers,
        questions,
        themes,
        questionsByThemes,
      });
    } catch (error) {
      next(error);
    }
  }
);

routerQuestions.get(
  "/questions/create",
  checkAuthenticated,
  authRole(2),
  async (req, res) => {
    let themes = await returnThemes();
    let topics = await returnTopics();
    res.render("../views/create-question.ejs", { themes, topics });
  }
);

routerQuestions.get(
  "/questions/edit/:question_id",
  checkAuthenticated,
  authRole(2),
  async (req, res) => {
    const questionId = req.params.question_id;
    let questionContent = await getQuestionByIdEJS(questionId);
    let correctAnswer = await getCorrectAnswerByQuestion(questionId);
    let incorrectAnswer1 = await getIncorrectAnswer1ByQuestion(questionId);
    let incorrectAnswer2 = await getIncorrectAnswer2ByQuestion(questionId);
    let themes = await returnThemes();
    let topics = await returnTopics();
    res.render("../views/edit-question.ejs", {
      question_id: questionId,
      questionContent,
      correctAnswer,
      incorrectAnswer1,
      incorrectAnswer2,
      themes,
      topics,
    });
  }
);

routerQuestions.delete("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});
// Route get question by id
routerQuestions.get("/questions/:question_id", getQuestionById);
// Route get question by theme
routerQuestions.get("/questions/theme/:theme_id_fk", getQuestionByTheme);
// Post page

// Route create a new question
routerQuestions.post("/questions", createQuestionAndAnswers);
routerQuestions.post("/questions/data", createQuestion);
// Route update question by id
routerQuestions.put("/questions/edit/:question_id", updateQuestionAndAnswers);
routerQuestions.put("/questions/data/:question_id", updateQuestion);
// Route delete question by id
routerQuestions.delete("/questions/:question_id", deleteQuestion);

//get questions with answers
routerQuestions.get("/questionsWithAnswers", getQuestionsWithAnswers);
// export router
module.exports = routerQuestions;
