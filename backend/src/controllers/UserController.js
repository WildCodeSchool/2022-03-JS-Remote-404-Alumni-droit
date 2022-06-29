const { v4: uuidv4 } = require("uuid");
const models = require("../models");
const { passwordHash, passwordVerify } = require("../services/password");
const { jwtSign } = require("../services/jwt");

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

  static login = (req, res) => {
    models.user
      .findByMail(req.body.email)
      .then(async (rows) => {
        if (rows[0] == null) {
          return res.status(401).send({
            error: "Mot de passe ou email erroné",
          });
        }

        if (rows[0].is_valid) {
          if (await passwordVerify(rows[0].password, req.body.password)) {
            const profile = await models.profile.findMyProfile(rows[0].id);
            const token = jwtSign(
              { email: rows[0].email, role: rows[0].role },
              { expiresIn: "1h" }
            );
            delete rows[0].password;

            return res
              .cookie("access_token", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
              })
              .status(200)
              .json({ ...rows[0], ...profile[0] });
          }
          return res.status(401).send({
            error: "Mot de passe ou email erroné",
          });
        }
        return res.status(401).send({
          error: "Votre compte est en cours de validation",
        });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).send({
          error: err.message,
        });
      });
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
