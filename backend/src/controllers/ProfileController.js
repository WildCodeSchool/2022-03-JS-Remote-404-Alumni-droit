// const { LogError } = require("concurrently");
const models = require("../models");

class ProfileController {
  static browse = async (req, res) => {
    try {
      const profiles = await models.profile.findAll(req.query);
      if (profiles[0]) {
        const diplomesArray = await Promise.all(
          profiles.map((prof) => {
            return models.diplome.find(prof.id);
          })
        );
        const result = profiles.map((prof, index) => ({
          ...prof,
          diplomes: diplomesArray[index][0],
        }));

        res.status(200).json(result);
      } else {
        // tableau vide, pas de profil
      }
    } catch {
      res.status(500).send("erreur");
    }
  };

  static read = (req, res) => {
    models.profile
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

    models.item
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

  static add = (req, res) => {
    const item = req.body;

    // TODO validations (length, format...)

    models.item
      .insert(item)
      .then(([result]) => {
        res.status(201).send({ ...item, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.item
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

module.exports = ProfileController;
