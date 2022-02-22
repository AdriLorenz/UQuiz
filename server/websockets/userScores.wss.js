wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log("data recieved %o " + data);
    ws.send(data);
  });
});
wss.on("listening", () => {
  console.log("server is listening on port 8080");
});
