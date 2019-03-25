import express from "express";
import models from "../db/models";
import jwtOptions from "../lib/passportOptions";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/api/login", (req, res) => {
  if (req.body.username && req.body.password) {
    // Find the user based on their username in our database

    models.Person.findOne({
      where: { username: req.body.username }
    })
      .then(person => {
        if (person !== null) {
          if (person.password === req.body.password) {
            // Select the information we want to send to the user.
            const payload = {
              id: person.id,
              firstName: person.firstName,
              lastName: person.lastName,
              username: person.username
            };

            // Build a JWT token using the payload
            const token = jwt.sign(payload, jwtOptions.secretOrKey, {
              expiresIn: 60
            });
            // Send the JWT Token to the user.
            res.status(200).json({ success: true, token: token });
          } else {
            res.status(401).json({ error: "Invalid username or password" });
          }
        } else {
          res.status(401).json({ error: "Invalid username or password" });
        }
      })
      .catch(e => console.log(e));
  } else {
    res.status(400).json({ error: "Username & Password Required" });
  }
});

export default router;
