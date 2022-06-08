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
  // good !
  pool
    .query("SELECT * FROM profile")
    .then((result) => res.status(201).send(result[0]));
});

router.get("/annuaire/:id", (req, res) => {
  // good !
  const { id } = req.params.id;
  pool
    .query("SELECT * FROM profile WHERE id = ?", [id])
    .then((result) => res.status(201).send(result[0][0]));
});

router.get("/test", (req, res) => {
  const { diplome, promo, job, nomPrenom } = req.query;
  let sqlQuery = "SELECT * FROM profile";
  const sqlValue = [];

  // test des params
  // il faudra ajouter un test pour savoir si l'utilisateur est inscrit et validé, si oui 'full access' sinon 'WHERE is_private = 0'

  if (diplome) {
    andOrWhere(sqlQuery);
    sqlQuery += `${andOrWhere(sqlQuery)} diplome = ?`;
    sqlValue.push(`${diplome}`);
  }
  if (promo) {
    andOrWhere(sqlQuery);
    sqlQuery += `${andOrWhere(sqlQuery)} promo = ?`;
    sqlValue.push(`${promo}`);
  }
  if (job) {
    sqlQuery += `${andOrWhere(sqlQuery)} profession_id1 = ?`;
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

module.exports = router;
