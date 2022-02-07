module.exports = (app) => {
  const topic = require("../controllers/topics-controller");

  const routerTopics = require("express").Router();

  // Route get all topics
  routerTopics.get("/", topic.getTopics);
  // Route get topic by id
  routerTopics.get("/:topic_id", topic.getTopicById);
  // Route create a new topic
  routerTopics.post("/", topic.createTopic);
  // Route update topic by id
  routerTopics.put("/:topic_id", topic.updateTopic);
  // Route delete topic by id
  routerTopics.delete("/:topic_id", topic.deleteTopic);

  app.use("/topics", routerTopics);
};
