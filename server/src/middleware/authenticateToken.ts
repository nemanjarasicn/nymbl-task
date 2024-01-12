import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const tokenHeader = req.header("Authorization");
  const jwtSecret = process.env.JWTSECRET;

  if (!tokenHeader) {
    return res.status(401).json({ message: "Unauthorized - Token missing" });
  }

  // Extract the token without the "Bearer " prefix
  const token = tokenHeader.split(" ")[1];

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden - Invalid token" });
    }

    req.user = user;
    next();
  });
};

export default authenticateToken;
