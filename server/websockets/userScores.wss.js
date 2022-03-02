const db = require("../models");
const UserScore = db.user_score;

module.exports = (wss) => {
  wss.on("connection", (ws) => {
    ws.isAlive = true;
    ws.on("pong", () => (ws.isAlive = true));

    const interval = setInterval(function ping() {
      {
        wss.clients.forEach((ws) => {
          if (ws.isAlive == false) return ws.terminate();

          ws.isAlive = false;
          ws.ping();
        });
      }
    }, 3000);

    wss.clients.forEach((client) => {
      const rating = getRating();
      client.send(
        JSON.stringify({ numberOfClients: wss.clients.size, rating })
      );
    });

    ws.on("message", async (message) => {
      if (message == "updateScore") {
        wss.clients.forEach((client) => {
          const rating = getRating();
          client.send(JSON.stringify({ rating }));
        });
      }
    });

    ws.on("close", () => {
      clearInterval(interval);
      console.log("interval cleared");
      wss.clients.forEach((client) => {
        client.send(JSON.stringify({ numberOfClients: wss.clients.size }));
      });
    });
  });
};

async function getRating() {
  return await UserScore.findAll({
    order: [["user_score", "DESC"]],
    include: [db.users],
  });
}
