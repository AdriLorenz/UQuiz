if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const flash = require("express-flash");
const session = require("express-session");
const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");
const passport = require("passport");

const initializePassport = require("./config/passport-config");

const db = require("./models");

db.sequelize.sync().then(() => {
  console.log("Dropped an resync db");
});

// Init express
const app = express();

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 }, () => {
  console.log("server started");
});

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log("data recieved %o " + data);
    ws.send(data);
  });
});
wss.on("listening", () => {
  console.log("server is listening on port 8080");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Set view engine to .ejs
app.engine("html", require("ejs").renderFile);
app.set("view-engine", "ejs");

app.use(methodOverride("_method"));

app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + "/public"));
app.use(express.static("public"));

initializePassport(
  passport,
  (email) =>
    User.findOne({
      where: {
        user_email: email,
      },
    }),
  (id) =>
    User.findOne({
      where: {
        user_id: id,
      },
    }),
  (role) =>
    User.findOne({
      where: {
        role_id_fk: role,
      },
    })
);

app.delete("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

// use router
require("./routes/routes-answers")(app);
require("./routes/routes-users")(app);
require("./routes/routes-themes")(app);
require("./routes/routes-questions")(app);

require("./routes/routes-topics")(app);
require("./routes/routes-classrooms")(app);
require("./routes/routes-roles")(app);
require("./routes/routes")(app);

app.listen(5000, () => console.log("Server running at http://localhost:5000"));
