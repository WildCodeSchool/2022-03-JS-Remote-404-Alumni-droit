// const { LogError } = require("concurrently");
const models = require("../models");

class ProfileController {
  static browse = async (req, res) => {
    try {
      const profiles = await models.profile.findAll(req.query);
      if (profiles[0]) {
        for (let i = 0; i < profiles.length; i += 1) {
          const diplomes = await models.diplome.find(profiles[i].id);
          profiles[i].diplome = diplomes[0];
        }
        res.status(200).json(profiles);
      } else {
        // tableau vide, pas de profil
      }
    } catch {
      res.status(500).send("erreur");
    }
    //   // ici
    // promise all
    // find by id
    // rows.forEach(row =>{ model.diplome.find(row.id) })

    // passer en async await, déclarer le profile controller en async

    // try {
    //   const objets = await db.query("SELECT * FROM objets WHERE id_pages = ?", [
    //     id,
    //   ]);
    //   const objetsDetail = [];
    //   for (let i = 0; i < objets[0].length; i++) {
    //     const detailsProvisoire = await db.query(
    //       "SELECT * FROM profession WHERE id_objets = ?",
    //       [objets[0][i].id_objets]
    //     );
    //     const objetsProvisoire = {
    //       component: "objets",
    //       data: {
    //         ...objets[0][i],
    //         details: detailsProvisoire[0],
    //       },
    //     };
    //     objetsDetail.push(objetsProvisoire);
    //   }
    //   return objetsDetail;
    // } catch (error) {
    //   console.error(error);
    // }

    //
    // })
    // .catch((err) => {
    //   console.error(err);
    //   res.sendStatus(500);
    // });
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
