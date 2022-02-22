const db = require("../models");
const UserScore = db.user_score;

module.exports = (wss) => {
  wss.on("connection", (ws) => {
    ws.on("message", async (data) => {
      ratings = await UserScore.findAll({
        order: [["user_score", "DESC"]],
        include: [db.users],
      });

      ws.send(JSON.stringify({ ratings, numberOfClients: wss.clients.size }));
    });
  });
  wss.on("listening", (data) => {
    console.log(data);
  });

  wss.on("open", function open() {
    ws.send("All glory to WebSockets!");
  });
};
