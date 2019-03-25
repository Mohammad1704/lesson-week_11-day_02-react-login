import express from "express";
import models from "../db/models";
import bodyParser from "body-parser";
import passport from "passport";
const router = express.Router();

// http://localhost:3001/api/articles
router.get("/api/articles", (req, res) => {
  models.Article.findAll()
    .then(articles => {
      res.status(200).json({ articles: articles });
    })
    .catch(e => console.log(e));
});

// http://localhost:3001/api/article/1
router.get("/api/article/:id", (req, res) => {
  models.Article.findByPk(req.params.id)
    .then(article => {
      res.status(200).json({ article: article });
    })
    .catch(e => console.log(e));
});

// http://localhost:3001/api/person/1/articles
// Get All Articles by Person Record ID
router.get(
  "/api/person/:id/articles",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("\n\n\n *******", res);
    models.Person.findByPk(req.params.id, {
      include: [{ model: models.Article }]
    })
      .then(person => {
        res.status(200).json({ person: person });
      })
      .catch(e => console.log(e));
  }
);

export default router;
