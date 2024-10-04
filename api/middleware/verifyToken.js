import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization || req.headers.Authorization;

  if (!token) return res.status(401).json({ message: "No Autenticado" });

  const extractedToken = token.split(" ")[1];

  jwt.verify(extractedToken, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token no valido" });
    req.userId = payload.id;
    
    next();
  });
};
