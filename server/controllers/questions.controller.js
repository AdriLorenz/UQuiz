// Import Question Model
const db = require("../models");
const Question = db.questions;
const Answer = db.answers;

exports.getQuestionsWithAnswers = async (req, res) => {
  try {
    const questions = await Question.findAll({ include: [db.answers] });
    res.send(questions);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get all question
exports.getQuestionsWithTopic = async (req, res) => {
  try {
    const question = await Question.findAll({ include: [db.topics] });
    res.send(question);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getOneWithAnswers = async (req, res) => {
  try {
    const questionWithAnswers = await Question.findOne({
      where: { question_id: req.params.question_id },
      include: [db.answers],
    });
    res.send(questionWithAnswers);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get question by id
exports.getQuestionWithTopicByIdQuestion = async (req, res) => {
  try {
    const question = await Question.findOne({
      where: {
        question_id: req.params.question_id,
      },
      include: [{ model: db.topics, required: true }],
    });
    res.send(question);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// easier to get themes with corresponding questions
exports.getQuestionByTheme = async (req, res) => {
  try {
    const question = await Question.findAll({
      where: {
        theme_id_fk: req.params.theme_id_fk,
      },
      include: [{ model: Theme, required: true }],
    });
    return question;
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Create a new question
exports.createQuestion = async (req, res) => {
  try {
    await Question.create(req.body);
    res.json({
      message: "Question Created",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createQuestionAndAnswers = async (req, res) => {
  const wrongAnswerNumber = 2;

  try {
    const questionCreated = await Question.create(req.body);

    const answers = [];

    for (let i = 1; i <= wrongAnswerNumber; i++) {
      const answer = await createAnswer(req.body["wrongAnswer" + i], false);
      answers.push(answer);
    }
    answers.push(await createAnswer(req.body.correctAnswer, true));

    answers.forEach((answer) => {
      questionCreated.addAnswer(answer);
    });
    res.redirect("/questions");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

async function createAnswer(content, status) {
  try {
    const answer = await Answer.create({
      answer_content: content,
      answer_status: status,
    });
    return answer;
  } catch (err) {
    res.status(500).send(err.message);
  }
}

// Update question and answers by id question
exports.updateQuestionAndAnswers = async (req, res) => {
  try {
    const updatedQuestion = {
      question_id: req.body.question_id,
      question_content: req.body.question_content,
      question_difficulty: req.body.question_difficulty,
      topic_id_fk: req.body.topic_id_fk,
    };

    await Question.update(updatedQuestion, {
      where: {
        question_id: req.params.question_id,
      },
    });

    req.body.answers.forEach((answer) => {
      Answer.update(answer, { where: { answer_id: answer.answer_id } });
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getAQuestionWithAnswers = async (req, res) => {
  try {
    const question = await Question.findOne({
      where: { question_id: req.params.question_id },
      include: [db.answers],
    });
    res.send(question);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    await Question.update(req.body, {
      where: {
        question_id: req.params.question_id,
      },
    });
    res.json({
      message: "Question Updated",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete question by id
exports.deleteQuestion = async (req, res) => {
  try {
    await Question.destroy({
      where: {
        question_id: req.params.question_id,
      },
    });
    res.redirect("/questions");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
