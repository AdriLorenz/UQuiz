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
      client.send(JSON.stringify({ numberOfClients: wss.clients.size }));
    });

    ws.on("message", async (message) => {
      if (message == "updateScore") {
        const ratings = await UserScore.findAll({
          order: [["user_score", "DESC"]],
          include: [db.users],
        });

        wss.clients.forEach((client) => {
          client.send(JSON.stringify({ ratings }));
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
