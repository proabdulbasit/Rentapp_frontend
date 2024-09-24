import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
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
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error al obtener la habitacion" });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUser = req.userId;

  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUser,
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
