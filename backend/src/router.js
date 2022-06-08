const express = require("express");

const { ItemController } = require("./controllers");

const router = express.Router();

const pool = require("./models/index");

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

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
  // const filtered = { diplome, promo, job, nomPrenom };
  let sqlQuery = "SELECT firstname, lastname FROM profile";
  const sqlValue = [];

  const andOrWhere = (sqlQueryToTest) =>
    sqlQueryToTest.includes("WHERE") ? " AND " : " WHERE ";

  // test des params
  if (diplome) {
    andOrWhere(sqlQuery);
    sqlQuery += " diplome LIKE ?";
    sqlValue.push(`%${diplome}%`);
    console.warn(`case diplome: ${sqlQuery}`);
  }
  if (promo) {
    andOrWhere(sqlQuery);
    sqlQuery += " promo LIKE ?";
    sqlValue.push(`%${promo}%`);
    console.warn(`case promo: ${sqlQuery}`);
  }
  if (job) {
    andOrWhere(sqlQuery);
    sqlQuery += " job LIKE ?";
    sqlValue.push(`%${job}%`);
    console.warn(`case job: ${sqlQuery}`);
  }
  if (nomPrenom) {
    sqlQuery += `${andOrWhere(sqlQuery)} firstname LIKE ? OR lastname LIKE ?`;
    sqlValue.push(`%${nomPrenom}%`, `%${nomPrenom}%`);
    console.warn(`case nomPrenom: ${sqlQuery}`);
  }
  // switch (
  //   nomPrenom // attention, seul nomPrenom est testé
  // ) {
  //   case diplome:
  //     sqlQuery += " WHERE diplome LIKE ?";
  //     sqlValue.push(`%${diplome}%`);
  //     console.warn(`case diplome: ${sqlQuery}`);
  //     break;
  //   case promo:
  //     andOrWhere(sqlQuery);
  //     sqlQuery += " promo LIKE ?";
  //     sqlValue.push(`%${promo}%`);
  //     console.warn(`case promo: ${sqlQuery}`);
  //   case job:
  //     andOrWhere(sqlQuery);
  //     sqlQuery += " job LIKE ?";
  //     sqlValue.push(`%${job}%`);
  //     console.warn(`case job: ${sqlQuery}`);
  //   case nomPrenom:
  //     sqlQuery += andOrWhere(sqlQuery) + `firstname LIKE ? OR lastname LIKE ?`;
  //     sqlValue.push(`%${nomPrenom}%`, `%${nomPrenom}%`);
  //     console.warn(`case nomPrenom: ${sqlQuery}`);
  //   default:
  //     console.warn("case: default");
  //     break;
  // }

  return pool
    .query(sqlQuery, sqlValue)
    .then((result) => res.status(200).send(result[0]));
});

module.exports = router;
