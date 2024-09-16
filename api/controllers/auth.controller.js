import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //Hash password

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    //Crea y guarda nuevo usuario
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "Usuario creado con exito" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error al crear usuario" });
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    //Verificar si el usuario existe
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    //Verifica si el password coincide
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid)
      return res.status(404).json({ message: "La contraseña no coincide" });
    //Genera cookie token y envia al usuario
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error al iniciar sesion" });
  }
};
export const logout = (req, res) => {
  //db operations
  console.log("logout endpoint");
};
