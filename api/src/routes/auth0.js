const { Router } = require("express");

const { auth } = require("express-openid-connect");
const { requiresAuth } = require("express-openid-connect");

const router = Router();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:3001/auth",
  clientID: "77EjLrKelZj94cQ52cxTE8Zf9jompNiu",
  issuerBaseURL: "https://dev-le1rpmhu2ixl7y1b.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));

// req.isAuthenticated is provided from the auth router
router.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

router.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

module.exports = router;
