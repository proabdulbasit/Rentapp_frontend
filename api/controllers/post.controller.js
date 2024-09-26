import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    const posts = await prisma.post.findMany({
      where: {
        type: query.type || undefined,
        pet: query.pet || undefined,
        bathType: query.bathType || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte: parseInt(query.maxPrice) || 10000000,
        },
      },
    });
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error al obtener las habitaciones" });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    const token = req.cookies?.token;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (!err) {
          const saved = await prisma.savedPost.findUnique({
            where: {
              userId_postId: {
                postId: id,
                userId: payload.id,
              },
            },
          });
          res.status(200).json({ ...post, isSaved: saved ? true : false });
        }
      });
    }
    res.status(200).json({ ...post, isSaved: false });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error al obtener la habitacion" });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error al crear la habitacion" });
  }
};

export const updatePost = async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error al actualizar la habitacion" });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (post.userId !== tokenUserId) {
      return res
        .status(403)
        .json({ message: "No estas autorizado para realizar esta accion" });
    }

    await prisma.post.delete({
      where: { id },
    });

    res.status(200).json({ message: "Habitacion Elminada" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error al eliminar la habitacion" });
  }
};
