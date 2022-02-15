module.exports = (app) => {
  const topic = require("../controllers/topics-controller");
  const auth = require("../controllers/auth");

  const routerTopics = require("express").Router();

  // Route get all topics
  routerTopics.get("/", topic.getTopics);

  // Route to get topics of a theme name
  // routerTopics.get("/ofTheme/:theme_name", topic.getTopicsOfTheme);

  // Route to get questions with answers of a topic
  routerTopics.get(
    "/:topic_name/WithQuestions",
    topic.getOneTopicWithQuestionsWithAnswers
  );
  // Route get topic by id
  routerTopics.get("/:topic_id", topic.getTopicById);
  // Route create a new topic
  routerTopics.post("/", topic.createTopic);
  // Route update topic by id
  routerTopics.put("/:topic_id", topic.updateTopic);
  // Route delete topic by id
  routerTopics.delete("/:topic_id", topic.deleteTopic);

  routerTopics.use(auth.checkAuthenticated);
  app.use("/topics", routerTopics);
};
