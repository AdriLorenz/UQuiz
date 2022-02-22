if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const db = require("./models");
const User = require("./models").users;
const flash = require("express-flash");
const session = require("express-session");
const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");
const passport = require("passport");
const WebSocket = require("ws");

const initializePassport = require("./config/passport-config");

db.sequelize.sync().then(() => {
  console.log("Dropped an resync db");
});

// Create web socket server
const wss = new WebSocket.Server({ port: 8080, clientTracking: true }, () => {
  console.log("Web socket server started");
});
// Initialise weSocketServer for user scores and number of Users connected
require("./websockets/userScores.wss")(wss);
// Init express
const app = express();

// Function to serve all static files
// inside public directory.
app.use(express.static("public"));

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
// persistent login sessions
app.use(passport.session());
app.use(express.static("public"));

initializePassport(passport, (email) =>
  User.findOne({
    where: {
      user_email: email,
    },
  })
);

app.delete("/logout", (req, res) => {
  req.logOut();
  req.session = null;
});

// use router
require("./routes/answers.routes")(app);
require("./routes/users.routes")(app);
require("./routes/themes.routes")(app);
require("./routes/questions.routes")(app);
require("./routes/userScore.routes")(app);
require("./routes/topics.routes")(app);
require("./routes/classrooms.routes")(app);
require("./routes/roles.routes")(app);
require("./routes/login.routes")(app);
require("./routes/routes")(app);
require("./routes/userRatingWSS.routes")(wss);

app.listen(5000, () =>
  console.log("Server running at http://localhost:5000", " ", global.appRoot)
);
