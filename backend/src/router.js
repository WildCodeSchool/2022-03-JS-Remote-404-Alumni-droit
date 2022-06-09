const { LogError } = require("concurrently");
const express = require("express");

// const { ItemController } = require("./controllers");

const router = express.Router();

const pool = require("./models/index");

// router.get("/items", ItemController.browse);
// router.get("/items/:id", ItemController.read);
// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

const andOrWhere = (sqlQueryToTest) =>
  sqlQueryToTest.includes("WHERE") ? " AND" : " WHERE"; // penser à l'exporter et à l'importer

router.get("/annuaire", (req, res) => {
  const { diplome, promo, job, nomPrenom } = req.query;

  let sqlQuery = `SELECT * FROM profile`;
  const sqlValue = [];

  // test des params
  // il faudra ajouter un test pour savoir si l'utilisateur est inscrit et validé, si oui 'full access' sinon 'WHERE is_private = 0'

  if (job) {
    sqlQuery += ` INNER JOIN profession ON profession_id1 = profession.id`;
  }
  if (diplome || promo) {
    sqlQuery += ` INNER JOIN profile_diplome ON profile_id = profile.user_id`;
    sqlQuery += ` INNER JOIN diplome ON diplome_id = diplome.id`;
  }

  if (diplome) {
    sqlQuery += `${andOrWhere(sqlQuery)} diplome.id = ?`;
    sqlValue.push(`${diplome}`);
  }
  if (promo) {
    sqlQuery += `${andOrWhere(sqlQuery)} year = ?`;
    sqlValue.push(`${promo}`);
  }
  if (job) {
    sqlQuery += ` ${andOrWhere(sqlQuery)} profession_id1 = ?`;
    sqlValue.push(`${job}`);
  }
  if (nomPrenom) {
    sqlQuery += `${andOrWhere(sqlQuery)} firstname LIKE ? OR lastname LIKE ?`;
    sqlValue.push(`%${nomPrenom}%`, `%${nomPrenom}%`);
  }

  return pool
    .query(sqlQuery, sqlValue)
    .then((result) => res.status(200).send(result[0]));
});

router.get("/annuaire/:id", (req, res) => {
  pool
    .query("SELECT * FROM profile WHERE id = ?", [req.params.id])
    .then((result) => res.status(200).send(result[0][0]));
});

module.exports = router;
