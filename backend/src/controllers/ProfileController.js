// const { LogError } = require("concurrently");
const models = require("../models");

class ProfileController {
  static count = async (req, res) => {
    // count how many alumni
    try {
      const countAlumni = await models.profile.countAll(req.query);
      res.status(200).json(countAlumni);
    } catch {
      res.status(500).send("erreur");
    }
  };

  static browse = async (req, res) => {
    // "annuaire" listing

    try {
      const profiles = await models.profile.findAll(
        req.query,
        req.access_token
      );

      if (profiles) {
        const diplomes = await Promise.all(
          profiles.map((profile) => models.diplome.find(profile.id))
        );
        profiles.forEach((profile, index) => {
          profile.diplomes = diplomes[index];
        });
      }

      res.status(200).json(profiles);
    } catch (erreur) {
      console.error(erreur);
      res.status(500).send("erreur");
    }
  };

  static read = async (req, res) => {
    // fiche profile
    try {
      const profiles = await models.profile.find(req.params.id); /// à faire pour résultat vide
      if (profiles[0][0]) {
        const diplomes = await models.diplome.find(profiles[0][0].id);
        const masters = await models.master.find(profiles[0][0].id);
        const job = await models.profession.find(profiles[0][0].id);

        profiles[0][0].job = job[0].job;
        profiles[0][0].diplome = diplomes;
        profiles[0][0].masters = masters;
      }
      res.status(200).json(profiles[0][0]);
    } catch (err) {
      console.error(err);
      res.status(500).send(`erreur fiche profil`);
    }
  };

  static edit = (req, res) => {
    const user = req.body;

    // TODO validations (length, format...)

    models.profile
      .update(user, parseInt(req.params.id, 10))
      .then((result) => {
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
    models.profile
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
