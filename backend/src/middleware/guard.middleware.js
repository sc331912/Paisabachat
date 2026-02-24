import jwt from "jsonwebtoken";

export const verifyTokenGuard = async (req, res, next) => {
  try {
    const authorization = req.headers['authorization'];

    if (!authorization) {
      return res.status(400).json({ message: "No token" });
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer") {
      return res.status(400).json({ message: "Invalid token type" });
    }

    const payload = await jwt.verify(token, process.env.FORGOT_TOKEN_SECRET);

    req.user = payload;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Token expired or invalid" });
  }
};