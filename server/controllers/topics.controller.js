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
    res.send(topic || { message: "Topic not found" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get topic by id
exports.getTopicById = async (req, res) => {
  try {
    const topic = await Topic.findByPk(req.params.topic_id);
    res.send(topic || { message: "Topic is not found" });
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
    const status = await Topic.update(req.body, {
      where: {
        topic_id: req.params.topic_id,
      },
    });

    const message =
      status == 1 ? "Topic updated" : "Nothing to update or topic not found";
    res.json({
      message,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete topic by id
exports.deleteTopic = async (req, res) => {
  try {
    const status = await Topic.destroy({
      where: {
        topic_id: req.params.topic_id,
      },
    });

    const message = status == 1 ? "Topic deleted" : "Topic not found";

    res.json({
      message,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
