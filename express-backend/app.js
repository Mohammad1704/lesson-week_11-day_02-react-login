import express from "express";
import models from "./db/models";
import bodyParser from "body-parser";
import logger from "morgan";
import cors from "cors";
import peopleRouter from "./routes/people.routes";
import articlesRouter from "./routes/articles.routes";
import usersRouter from "./routes/users.routes";
import passport from "passport";
import startegy from "./lib/passportStartegy";

const app = express();

const port = 3001;

// Define our auth startegy from before
passport.use(startegy);

/*** Middleware ***/
app.use(bodyParser.json());
app.use(cors());
// Only init after setting a startegy
app.use(logger("dev"));
app.use(passport.initialize());
app.use(usersRouter);
app.use(peopleRouter);
app.use(articlesRouter);

app.use((req, res) => {
  res.status(404).json({ msg: "ERROE" });
});

models.sequelize.sync().then(() => {
  console.log("sync complete");

  app.listen(port, () =>
    console.log(`express-api app listening on port ${port}!`)
  );
});
