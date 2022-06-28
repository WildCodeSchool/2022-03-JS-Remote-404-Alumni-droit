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

    sqlQuery += ` INNER JOIN user ON user_id = user.id`;

    if (job) {
      sqlQuery += ` INNER JOIN profession ON profession_id = profession.id`;
    }
    if (diplome || promo) {
      sqlQuery += ` INNER JOIN profile_diplome ON profile_id = profile.user_id`;
      sqlQuery += ` INNER JOIN diplome ON diplome_id = diplome.id`;
    }

    sqlQuery += ` ${this.andOrWhere(sqlQuery)} is_valid = 1`;

    if (diplome) {
      sqlQuery += `${this.andOrWhere(sqlQuery)} diplome.id = ?`;
      sqlValue.push(`${diplome}`);
    }
    if (promo) {
      sqlQuery += `${this.andOrWhere(sqlQuery)} year = ?`;
      sqlValue.push(`${promo}`);
    }
    if (job) {
      sqlQuery += ` ${this.andOrWhere(sqlQuery)} profession_id = ?`;
      sqlValue.push(`${job}`);
    }
    if (nomPrenom) {
      sqlQuery += `${this.andOrWhere(
        sqlQuery
      )} firstname LIKE ? OR lastname LIKE ?`;
      sqlValue.push(`%${nomPrenom}%`, `%${nomPrenom}%`);
    }

    sqlQuery += ` LIMIT 30`;

    return this.connection.query(sqlQuery, sqlValue).then((res) => res[0]);
  }

  insert(user, id) {
    const date = new Date();
    return this.connection.query(
      `insert into ${ProfileManager.table} (user_id, lastname, firstname, creation_date, emailpro, phone, profession_id, employeur, poste, bio, siteweb, facebook, linkedin, twitter, instagram) values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        user.lastname,
        user.firstname,
        `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        user.emailpro,
        user.phone,
        user.profession_id,
        user.employeur,
        user.poste,
        user.bio,
        user.siteweb,
        user.facebook,
        user.linkedin,
        user.twitter,
        user.instagram,
      ]
    );
  }

  countAll() {
    return this.connection
      .query(
        `SELECT COUNT(*) as n FROM ${ProfileManager.table} INNER JOIN user ON user.id = ${ProfileManager.table}.user_id WHERE is_valid = true`
      )
      .then((res) => res[0][0].n);
  }

  update(item) {
    return this.connection.query(
      `update ${ProfileManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ProfileManager;
