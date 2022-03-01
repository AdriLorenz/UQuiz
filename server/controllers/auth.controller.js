function authUser(req, res, next) {
  if (req.user == null) {
    res.status(403);
    return res.send("You need to sign in");
  }
  next();
}

function authRole(role) {
  return (req, res, next) => {
    if (req.user.role_id_fk !== role) {
      res.status(401);
      return res.send("You are not allowed");
    }

    next();
  };
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("users/");
  }
  next();
}

function checkAuthenticated(req, res, next) {
  console.log(req.user);
  if (req.isAuthenticated()) {
    return next();
  }
  return res
    .status(400)
    .json({ statusCode: 400, message: "not authenticated" });
}

module.exports = {
  authUser,
  authRole,
  checkNotAuthenticated,
  checkAuthenticated,
};
