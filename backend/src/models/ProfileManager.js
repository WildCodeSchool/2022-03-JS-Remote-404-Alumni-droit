const AbstractManager = require("./AbstractManager");

class ProfileManager extends AbstractManager {
  static table = "profile";

  andOrWhere(sqlQueryToTest) {
    return sqlQueryToTest.includes("WHERE") ? " AND" : " WHERE";
  }

  findAll(query) {
    const { diplome, promo, job, nomPrenom } = query;
    let sqlQuery = `SELECT lastname, firstname, P.id, W.job, U.is_valid, photo FROM ${ProfileManager.table} as P`;
    const sqlValue = [];

    sqlQuery += ` INNER JOIN user as U ON P.id = U.id`;
    sqlQuery += ` INNER JOIN profession as W ON P.profession_id = W.id`;

    if (diplome || promo) {
      sqlQuery += ` INNER JOIN profile_diplome as PD ON PD.profile_id = P.id`;
      sqlQuery += ` INNER JOIN diplome as D ON PD.diplome_id = D.id`;
    }
    /**
     * si is Admin, alors affiche pas la query U.is_valid
     * si is User, alors affiche U.is_valid = 1
    // //  */
    // sqlQuery += ` ${this.andOrWhere(sqlQuery)} U.is_valid = 1`;

    if (diplome) {
      sqlQuery += `${this.andOrWhere(sqlQuery)} PD.diplome_id = ?`;
      sqlValue.push(`${diplome}`);
    }
    if (promo) {
      sqlQuery += `${this.andOrWhere(sqlQuery)} year = ?`;
      sqlValue.push(`${promo}`);
    }
    if (job) {
      sqlQuery += ` ${this.andOrWhere(sqlQuery)} P.profession_id = ?`;
      sqlValue.push(`${job}`);
    }
    if (nomPrenom) {
      sqlQuery += `${this.andOrWhere(
        sqlQuery
      )} P.firstname LIKE ? OR P.lastname LIKE ?`;
      sqlValue.push(`%${nomPrenom}%`, `%${nomPrenom}%`);
    }

    sqlQuery += ` LIMIT 30`;

    return this.connection.query(sqlQuery, sqlValue).then((res) => res[0]);
  }

  findMyProfile(id) {
    return this.connection
      .query(`select * from  ${ProfileManager.table} where user_id = ?`, [id])
      .then((res) => res[0]);
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

  questionMarkComa(sqlQueryToTest) {
    return sqlQueryToTest.charAt(sqlQueryToTest.length - 1) === "?" ? "," : " ";
  }

  update(user, id) {
    const {
      lastname,
      firstname,
      emailpro,
      phone,
      professionId,
      employeur,
      poste,
      bio,
      siteweb,
      facebook,
      linkedin,
      twitter,
      instagram,
    } = user;

    let sqlQuery = `UPDATE ${ProfileManager.table} set`;
    const sqlValue = [];

    if (lastname) {
      sqlQuery += `${this.questionMarkComa(sqlQuery)} lastname = ?`;
      sqlValue.push(`${lastname}`);
    }
    if (firstname) {
      sqlQuery += `${this.questionMarkComa(sqlQuery)} firstname = ?`;
      sqlValue.push(`${firstname}`);
    }
    if (emailpro) {
      sqlQuery += `${this.questionMarkComa(sqlQuery)} emailpro = ?`;
      sqlValue.push(`${emailpro}`);
    }
    if (phone) {
      sqlQuery += `${this.questionMarkComa(sqlQuery)} phone = ?`;
      sqlValue.push(`${phone}`);
    }
    if (professionId) {
      sqlQuery += `${this.questionMarkComa(sqlQuery)} profession_id = ?`;
      sqlValue.push(`${professionId}`);
    }
    if (employeur) {
      sqlQuery += `${this.questionMarkComa(sqlQuery)} employeur = ?`;
      sqlValue.push(`${employeur}`);
    }
    if (poste) {
      sqlQuery += `${this.questionMarkComa(sqlQuery)} poste = ?`;
      sqlValue.push(`${poste}`);
    }
    if (bio) {
      sqlQuery += `${this.questionMarkComa(sqlQuery)} bio = ?`;
      sqlValue.push(`${bio}`);
    }
    if (siteweb) {
      sqlQuery += `${this.questionMarkComa(sqlQuery)} siteweb = ?`;
      sqlValue.push(`${siteweb}`);
    }
    if (facebook) {
      sqlQuery += `${this.questionMarkComa(sqlQuery)} facebook = ?`;
      sqlValue.push(`${facebook}`);
    }
    if (linkedin) {
      sqlQuery += `${this.questionMarkComa(sqlQuery)} linkedin = ?`;
      sqlValue.push(`${linkedin}`);
    }
    if (twitter) {
      sqlQuery += `${this.questionMarkComa(sqlQuery)} twitter = ?`;
      sqlValue.push(`${twitter}`);
    }
    if (instagram) {
      sqlQuery += `${this.questionMarkComa(sqlQuery)} instagram = ?`;
      sqlValue.push(`${instagram}`);
    }
    sqlQuery += ` where id = ?`;
    sqlValue.push(`${id}`);

    return this.connection.query(sqlQuery, sqlValue).then((res) => res[0]);
  }

  countAll() {
    return this.connection
      .query(
        `SELECT COUNT(*) as n FROM ${ProfileManager.table} INNER JOIN user ON user.id = ${ProfileManager.table}.user_id WHERE is_valid = true`
      )
      .then((res) => res[0][0].n);
  }
}

module.exports = ProfileManager;
