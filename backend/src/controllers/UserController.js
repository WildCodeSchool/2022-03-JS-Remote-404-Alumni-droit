const { v4: uuidv4 } = require("uuid");
const models = require("../models");
const { passwordHash } = require("../services/password");

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

  /// /
  // static register = async (req, res) => {
  //   const { email, password } = req.body;

  //   if (!email || !password) {
  //     return res
  //       .status(400)
  //       .send({ error: "Please specify both email and password" });
  //   }

  //   try {
  //     const hash = await passwordHash(password);

  //     models.user
  //       .insert({ email, password: hash })
  //       .then(([result]) => {
  //         res.status(201).send({ id: result.insertId, email });
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         res.status(500).send({
  //           error: err.message,
  //         });
  //       });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).send({
  //       error: err.message,
  //     });
  //   }
  // };

  /// //
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
