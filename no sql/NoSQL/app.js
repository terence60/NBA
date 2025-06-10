const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectMongoDB = require("./config/dbMongo");
const ENV = require("./config/env");
const app = express();

// IMPORT ROUTES
const userRouter = require("./router/user.router");
// const articleRouter = require("./router/article.router");
// const avisRouter = require("./router/avis.router");

// CONNEXION MONGO
connectMongoDB(ENV.MONGO_URI, ENV.DB_NAME);

// MIDDLEWARES
app.use(express.json());
app.use(cors({
  origin: [ENV.PORT_APPLICATION_FRONT],
  credentials: true,
}));
app.use(cookieParser());


// URLS API PREFIX
app.use("/api/user", userRouter);
// app.use("/api/article", articleRouter);
// app.use("/api/avis", avisRouter);

// MIDDLEWARE DE GESTION DÉERREURS
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Une erreur est survenue.";
  const details = error.details || null;

  res.status(status).json({
    error: {
      status,
      message,
      details,
    },
  });
});

module.exports = app;
