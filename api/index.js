// import express from 'express';
// import cors from 'cors';
// import cookieParser from 'cookie-parser'
// import postRoute from './routes/post.route.js';
// import authRoute from './routes/auth.route.js'
// import testRoute from './routes/test.route.js'
// import userRoute from './routes/user.route.js'

// const app = express();

// //app.use(cors({origin: process.env.CLIENT_URL, credentials:true}));
// app.use(cors({
//     origin: '*',
//     credentials: true
//   }));

// app.use(express.json())
// app.use(cookieParser())

// app.use("/api/auth", authRoute);
// app.use("/api/posts", postRoute);
// app.use("/api/test", testRoute);
// app.use("/api/users", userRoute);

// app.listen(8800, () => {
//     console.log("server is running")
// });
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";

const app = express();

// Lista de orígenes permitidos
const allowedOrigins = [
  "https://rentapp-final-j2ac.vercel.app", // Frontend en producción
  "http://localhost:5173", // Para desarrollo local
  "https://rentapp-final-j2ac-i11ita8fr-alan-arriagas-projects.vercel.app", // Frontend en producción
  "https://rentapp-final-and9.vercel.app",
];

// Configuración de CORS para manejar múltiples orígenes
app.use(
  cors({
    origin: function (origin, callback) {
      // Si el origen está en la lista permitida o no hay origen (en caso de herramientas como Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("No autorizado por CORS"));
      }
    },
    credentials: true, // Habilitar envío de cookies/credenciales
    methods: "GET, POST, PUT, DELETE, OPTIONS", // Métodos permitidos
    allowedHeaders:
      "Origin, X-Requested-With, Content-Type, Accept, Authorization", // Encabezados permitidos
  })
);

// Middleware para manejar solicitudes preflight (`OPTIONS`)
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    return res.sendStatus(200); // Responder exitosamente a las solicitudes preflight
  }
  next();
});

app.use(express.json());
app.use(cookieParser());

app.get("/api/hello", (req, res) => {
  res.send("Hello World!");
});

// Rutas de la aplicación
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/users", userRoute);

// Inicia el servidor en el puerto 8800
app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
