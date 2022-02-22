// Import Topic Model
const { rmSync } = require("fs");
const db = require("../models");
const Topic = db.topics;

// Get all topic

exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.findAll();
    res.send(topics);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getOneTopicWithQuestionsWithAnswers = async (req, res) => {
  try {
    const topic = await Topic.findOne({
      where: { topic_name: req.params.topic_name },
      include: [{ model: db.questions, include: { model: db.answers } }],
    });
    res.send(topic);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get topic by id
exports.getTopicById = async (req, res) => {
  try {
    const topic = await Topic.findByPk(req.params.topic_id);
    res.send(topic);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Create a new topic
exports.createTopic = async (req, res) => {
  if (!req.body.topic_name || !req.body.theme_id_fk) {
    res.status(400).send("Please provide all information to create a topic.");

    return;
  }
  try {
    await Topic.create(req.body);
    res.json({
      message: "Topic Created",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update topic by id
exports.updateTopic = async (req, res) => {
  try {
    await Topic.update(req.body, {
      where: {
        topic_id: req.params.topic_id,
      },
    });
    res.json({
      message: "Topic Updated",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete topic by id
exports.deleteTopic = async (req, res) => {
  try {
    await Topic.destroy({
      where: {
        topic_id: req.params.topic_id,
      },
    });
    res.json({
      message: "Topic Deleted",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }

  // exports.getTopicsOfTheme = async (req, res) => {
  //   try {
  //     themeReceived = await theme.findOne({
  //       where: { theme_name: req.body.theme_name },
  //     });

  //     const topic = await Topic.findAll({
  //       where: {
  //         theme_id_fk: themeReceived.theme_id,
  //       },
  //     });

  //     res.send(topic);
  //   } catch (error) {
  //     res.status(500).send(error.message);
  //   }
  // };
};
