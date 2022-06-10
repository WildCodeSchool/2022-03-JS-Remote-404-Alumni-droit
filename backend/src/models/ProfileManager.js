const AbstractManager = require("./AbstractManager");

class ProfileManager extends AbstractManager {
  static table = "profile";

  andOrWhere(sqlQueryToTest) {
    return sqlQueryToTest.includes("WHERE") ? " AND" : " WHERE";
  }

  findAll(query) {
    const { diplome, promo, job, nomPrenom } = query;
    let sqlQuery = `SELECT * FROM ${ProfileManager.table}`;
    const sqlValue = [];

    if (job) {
      sqlQuery += ` INNER JOIN profession ON profession_id1 = profession.id`;
    }
    if (diplome || promo) {
      sqlQuery += ` INNER JOIN profile_diplome ON profile_id = profile.user_id`;
      sqlQuery += ` INNER JOIN diplome ON diplome_id = diplome.id`;
    }

    if (diplome) {
      sqlQuery += `${this.andOrWhere(sqlQuery)} diplome.id = ?`;
      sqlValue.push(`${diplome}`);
    }
    if (promo) {
      sqlQuery += `${this.andOrWhere(sqlQuery)} year = ?`;
      sqlValue.push(`${promo}`);
    }
    if (job) {
      sqlQuery += ` ${this.andOrWhere(sqlQuery)} profession_id1 = ?`;
      sqlValue.push(`${job}`);
    }
    if (nomPrenom) {
      sqlQuery += `${this.andOrWhere(
        sqlQuery
      )} firstname LIKE ? OR lastname LIKE ?`;
      sqlValue.push(`%${nomPrenom}%`, `%${nomPrenom}%`);
    }
    return this.connection.query(sqlQuery, sqlValue);
  }

  insert(item) {
    return this.connection.query(
      `insert into ${ProfileManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ProfileManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ProfileManager;
