const db = require("../models");

const UserScore = db.user_score;

exports.getAllUserScore = async (req, res) => {
  try {
    const userScores = await UserScore.getAll();
    res.send(userScores);
  } catch (error) {
    res.status(500).send(`An error has occured : ${error.message}`);
  }
};

exports.getUserScoresOrdered = async (req, res) => {
  try {
    const userScoresOrdered = await UserScore.findAll({
      order: ["user_score", "DESC"],
    });
    console.log(userScoresOrdered);
    res.send(userScoresOrdered);
  } catch (error) {
    // res.status(500).send(`An error has occured : ${error.message}`);
    res.status(500).send(error.message);
  }
};

exports.getOneUserScore = async (req, res) => {
  if (!req.params.user_id) {
    res.status(400).send({ message: "Please provide an id." });
    return;
  }

  try {
    const userScore = await UserScore.findOne({
      where: { user_id_fk: req.params.user_id },
    });
    return userScore;
  } catch (error) {
    res.status(500).send(`An error has occured : ${error.message}`);
  }
};

exports.updateUserScore = async (req, res) => {
  if (!req.params.user_id) {
    res.status(400).send({ message: "Please provide an id." });
    return;
  }

  try {
    await UserScore.update(req.body, {
      where: { user_id: req.params.user_id },
    });

    res.send("Score updated successfully.");
  } catch (error) {
    res.status(500).send(`An error has occured : ${error.message}`);
  }
};

exports.addUserScore = async (req, res) => {
  if (!req.params.user_id) {
    res.status(400).send({ message: "Please provide an id." });
    return;
  }
  try {
    const userScore = await UserScore.findOne({
      where: { user_id_fk: req.params.user_id },
    }).user_score;

    updatedValues = {
      user_score: req.body.user_score + userScore,
      user_id: req.params.user_id,
    };

    await UserScore.update(updatedValues, {
      where: { user_id_fk: req.params.user_id },
    });
  } catch (error) {
    res.status(500).send(`An error has occured : ${error.message}`);
  }
};

exports.createUserScore = async (user_id) => {
  try {
    await UserScore.create({ user_id_fk: user_id, user_score: 0 });
  } catch (error) {
    res.status(500).send(`An error has occured : ${error.message}`);
  }
};
