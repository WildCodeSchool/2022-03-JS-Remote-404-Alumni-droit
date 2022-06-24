const { v4: uuidv4 } = require("uuid");
const models = require("../models");
const { passwordHash } = require("../services/password");
// passwordVerify
// const { jwtSign } = require("../services/jwt");

class UserController {
  static browse = (req, res) => {
    models.user
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.user
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const item = req.body;

    // TODO validations (length, format...)

    item.id = parseInt(req.params.id, 10);

    models.user
      .update(item)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = async (req, res) => {
    const user = req.body;
    try {
      const hash = await passwordHash(user.password);
      const id = uuidv4();
      const request = await models.user.insert(user.email, hash, id);
      await models.profile.insert(user, request[0].insertId);
      res.status(200).json({
        msg: "Votre compte a été crée avec succès, en attente de validation",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  // static login = (req, res) => {
  //   const { email, password } = req.body;

  //   if (!email || !password) {
  //     return res
  //       .status(400)
  //       .send({ error: "Please specify both email and password" });
  //   }

  //   models.user
  //     .findByMail(email)
  //     .then(async ([rows]) => {
  //       if (rows[0] == null) {
  //         return res.status(401).send({
  //           error: "Invalid email",
  //         });
  //       }
  //       const { id, registeredEmail, password: hash, role } = rows[0];

  //       if (await passwordVerify(hash, password)) {
  //         const token = jwtSign({ id, role }, { expiresIn: "1h" });

  //         return res
  //           .cookie("access_token", token, {
  //             httpOnly: true,
  //             secure: process.env.NODE_ENV === "production",
  //           })
  //           .status(200)
  //           .send({
  //             id,
  //             registeredEmail,
  //             role,
  //           });
  //       }
  //       return res.status(401).send({
  //         error: "Invalid password",
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       return res.status(500).send({
  //         error: err.message,
  //       });
  //     });
  // };

  static delete = (req, res) => {
    models.user
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserController;
