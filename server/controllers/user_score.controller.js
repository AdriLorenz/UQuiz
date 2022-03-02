const db = require("../models");

const UserScore = db.user_score;

exports.getAllUserScore = async (req, res) => {
  try {
    const userScores = await UserScore.findAll();
    res.send(userScores);
  } catch (error) {
    res.status(500).send(`An error has occured : ${error.message}`);
  }
};

exports.getUserScoresOrdered = async (req, res) => {
  try {
    const userScoresOrdered = await UserScore.findAll({
      order: [["user_score", "DESC"]],
    });
    console.log(userScoresOrdered);
    res.send(userScoresOrdered);
  } catch (error) {
    // res.status(500).send(`An error has occured : ${error.message}`);
    res.status(500).send(error.message);
  }
};

exports.getOneUserScore = async (req, res) => {
  try {
    const userScore = await UserScore.findOne({
      where: { user_id_fk: req.params.id },
    });
    res.send(userScore);
  } catch (error) {
    res.status(500).send(`An error has occured : ${error.message}`);
  }
};

exports.updateUserScore = async (req, res) => {
  if (!req.params.id) {
    res.status(400).send({ message: "Please provide an id." });
    return;
  }

  try {
    const status = await UserScore.update(req.body, {
      where: { user_id_fk: req.params.id },
    });

    console.log(status);
    const message =
      status == 1
        ? "Score updated successfully"
        : "Nothing to update or score not found";

    res.send(message);
  } catch (error) {
    res.status(500).send(`An error has occured : ${error.message}`);
  }
};

exports.addUserScore = async (req, res) => {
  if (!req.params.id) {
    res.status(400).send({ message: "Please provide an id." });
    return;
  }
  try {
    const user = await UserScore.findOne({
      where: { user_id_fk: req.params.id },
    });

    const userScore = user.user_score;
    updatedValues = {
      user_score: parseInt(req.body.user_score) + parseInt(userScore),
      user_id: req.params.id,
    };

    await UserScore.update(updatedValues, {
      where: { user_id_fk: req.params.id },
    });

    res.send({ message: "Updated successfully" });
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
