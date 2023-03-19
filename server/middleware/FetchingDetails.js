const jwt = require("jsonwebtoken");
const jwt_secret = "recipehehe";

const Fetch = (req, res, next) => {
  const token = req.header("jwt_token");

  if (!token) {
    return res.status(401).json({ error: "Authentication failed: No token provided" });
  }

  try {
    const verify = jwt.verify(token, jwt_secret);
    req.User = verify.User;
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({ error: "Authentication failed: Invalid token" });
  }
};

module.exports = Fetch;
