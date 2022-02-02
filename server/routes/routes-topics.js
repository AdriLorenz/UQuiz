module.exports = (app) => {
  const topic = require("../controllers/topics-controller");

  const routerTopics = require("express").Router();

  // Route get all topics
  routerTopics.get("/topics", topic.getTopics);
  // Route get topic by id
  routerTopics.get("/topics/:topic_id", topic.getTopicById);
  // Route create a new topic
  routerTopics.post("/topics", topic.createTopic);
  // Route update topic by id
  routerTopics.put("/topics/:topic_id", topic.updateTopic);
  // Route delete topic by id
  routerTopics.delete("/topics/:topic_id", topic.deleteTopic);
};
