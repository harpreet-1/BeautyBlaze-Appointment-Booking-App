const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("./auth");

const googleRouter = express.Router();
require("dotenv").config();

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

googleRouter.use(
  session({ secret: "cats", resave: false, saveUninitialized: true })
);
googleRouter.use(passport.initialize());
googleRouter.use(passport.session());

googleRouter.get("/", (req, res) => {
  res.send('<a href="/auth/google">Sign up with Google</a>');
});

googleRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

googleRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/google/failure",
  })
);

googleRouter.get("/protected", isLoggedIn, (req, res) => {
  console.log("user", req.user);
  res.send(`Hello ${req.user.displayName}`);
});

googleRouter.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("Goodbye!");
});

googleRouter.get("/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

// googleRouter.listen(process.env.PORT, () =>
//   console.log(`listening on port: ${process.env.PORT}`)
// );

module.exports = googleRouter;
