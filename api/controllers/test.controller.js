import jwt from "jsonwebtoken";

export const shouldBeLoggedIn = async (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "No Autenticado" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token no valido" });
  });

  res.status(200).json({ message: "Estas Autenticado" });
};

export const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "No Autenticado" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token no valido" });
    if (!payload.isAdmin){
        return res.status(403).json({ message: "No tienes permisos para acceder"})
    }
  });

  res.status(200).json({ message: "Estas Autenticado" });
};
