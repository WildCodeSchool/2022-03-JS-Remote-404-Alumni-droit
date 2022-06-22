// const { LogError } = require("concurrently");
const models = require("../models");

class ProfileController {
  static browse = async (req, res) => {
    // "annuaire" listing
    try {
      const profiles = await models.profile.findAll(req.query);
      if (profiles[0]) {
        const diplomes = await models.diplome.multipleFind(profiles);
        profiles.forEach((pers, index) => {
          let aa = diplomes[index];
          pers.diplome = aa;
        });
      }
      res.status(200).json(profiles);
    } catch {
      res.status(500).send("erreur");
    }
  };

  static read = async (req, res) => {
    // fiche profile
    try {
      const profiles = await models.profile.find(req.params.id);
      if (profiles[0][0]) {
        const diplomes = await models.diplome.multipleFind(profiles[0]);
        const masters = await models.master.multipleFind(profiles[0]);
        // const masters = await Promise.all(
        //   profiles[0].map((pers) => models.master.find(pers.id))
        // );
        profiles[0].forEach((pers, index) => {
          pers.diplome = diplomes[index];
          pers.masters = masters[index];
        });
      }
      res.status(200).json(profiles[0]);
    } catch {
      res.status(500).send("erreur");
    }
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
