const jwt = require("jsonwebtoken");

module.exports.userMiddleware = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const obj = jwt.decode(bearerToken);
    if (obj) {
      next();
    } else
      return res
        .sendStatus(401)
        .json({ message: "Invalid token ", success: false });
  } else {
    res.status(403).json({ message: "Invalid token ", success: false });
  }
};
