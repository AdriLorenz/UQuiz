// Import Question Model
const db = require("../models");
const Question = db.questions;
const Answer = db.answers;

exports.getQuestionsWithAnswers = async (req, res) => {
  try {
    const questions = await Question.findAll({ include: [db.answers] });
    res.send(questions);
  } catch (err) {
    console.log(err);
  }
};

// Get all question
exports.getQuestionsWithTopic = async (req, res) => {
  try {
    const question = await Question.findAll({ include: [db.topics] });
    res.send(question);
  } catch (err) {
    console.log(err);
  }
};

exports.getOneWithAnswers = async (req, res) => {
  console.log("alsdjfasdflsakhjlkdsfskjfasdf");
  try {
    const questionWithAnswers = await Question.findOne({
      where: { question_id: req.params.question_id },
      include: [db.answers],
    });
    res.send(questionWithAnswers);
  } catch (err) {
    console.log(err);
  }
};

exports.returnQuestions = async (req, res) => {
  try {
    const question = await Question.findAll();
    console.log(question);
    return question;
  } catch (err) {
    console.log(err);
  }
};

// Get question by id
exports.getQuestionWithTopicByIdQuestion = async (req, res) => {
  try {
    console.log("asfasf2425324543252345243");
    const question = await Question.findOne({
      where: {
        question_id: req.params.question_id,
      },
      include: [{ model: db.topics, required: true }],
    });
    res.send(question);
  } catch (err) {
    console.log(err);
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
    console.log(err);
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
    console.log(err);
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
    console.log(err);
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
    console.log(err);
  }
}

// Update question and answers by id question
exports.updateQuestionAndAnswers = async (req, res) => {
  try {
    await Question.update(req.body, {
      where: {
        question_id: req.params.question_id,
      },
    });

    const getAnswerId = async () => {
      try {
        const answer = await Answer.findAll({
          where: {
            answer_points: 0,
            question_id_fk: req.params.question_id,
          },
        });
        return answer[1].dataValues.answer_id;
      } catch (err) {
        console.log(err);
      }
    };
    const answerId = await getAnswerId();
    console.log("The last question ID is: " + answerId);

    await Answer.update(
      {
        answer_content: req.body.correctAnswer,
        answer_points: 10,
      },
      {
        where: {
          question_id_fk: req.params.question_id,
          answer_points: 10,
        },
      }
    );
    await Answer.update(
      {
        answer_content: req.body.wrongAnswer1,
      },
      {
        where: {
          answer_id: answerId - 1,
          question_id_fk: req.params.question_id,
          answer_points: 0,
        },
      }
    );
    await Answer.update(
      {
        answer_content: req.body.wrongAnswer2,
      },
      {
        where: {
          answer_id: answerId,
          question_id_fk: req.params.question_id,
          answer_points: 0,
        },
      }
    );
    res.redirect("/questions");
  } catch (err) {
    console.log(err);
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
    console.log(err);
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
    console.log(err);
  }
};

// Delete question by id
exports.deleteQuestion = async (req, res) => {
  try {
    console.log(req.params.question_id);
    await Question.destroy({
      where: {
        question_id: req.params.question_id,
      },
    });
    res.redirect("/questions");
  } catch (err) {
    console.log(err);
  }
};
