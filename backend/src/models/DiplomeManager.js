const AbstractManager = require("./AbstractManager");

class ProfileManager extends AbstractManager {
  static table = "diplome";

  find(id) {
    return this.connection
      .query(
        `select year, title from profile_diplome as PD INNER JOIN ${this.table} as TT ON PD.diplome_id = TT.id WHERE PD.profile_id = ?`,
        [id]
      )
      .then((res) => res[0]);
  }

  multipleFind(data) {
    return Promise.all(data.map((pers) => this.find(pers.id)));
  }

  insert(diplome, id) {
    return this.connection.query(
      `insert into profile_diplome (profile_id, diplome_id, year) values (?, ?, ?)`,
      [id, diplome.diplome, diplome.diplomeYear]
    );
  }
}

module.exports = ProfileManager;
