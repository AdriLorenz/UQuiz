const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const user = require("../models/user.model");
const passport = require("passport");
global.getUserByEmail;

function initialize(getUserByEmail) {
  const authenticateUser = async (email, password, done) => {
    this.getUserByEmail = getUserByEmail(email);

    this.getUserByEmail.then(async (res) => {
      if (res === null) {
        return done(null, false, { message: "No user linked to that email" });
      }
      try {
        if (await bcrypt.compare(password, res.user_password)) {
          console.log("HEREEEE");
          return done(null, res);
        } else {
          return done(null, false, { message: "Password incorrect" });
        }
      } catch (e) {
        return done(e);
      }
    });
  };
  passport.use(
    new localStrategy(
      { usernameField: "email", passwordField: "password" },
      authenticateUser
    )
  );

  passport.serializeUser(async (email, done) => {
    this.getUserByEmail.then((data) => {
      console.log("user being serialized " + data);
      done(null, data);
    });
  });

  passport.deserializeUser(async (email, done) => {
    this.getUserByEmail.then((data) => {
      done(null, data.user_id);
    });
  });
}

module.exports = initialize;
