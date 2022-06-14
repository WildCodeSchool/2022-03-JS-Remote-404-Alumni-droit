const AbstractManager = require("./AbstractManager");

class ProfileManager extends AbstractManager {
  static table = "diplome";

  find(id) {
    return this.connection.query(
      `select year, title from profile_diplome as PD INNER JOIN ${this.table} as TT ON PD.diplome_id = TT.id WHERE PD.profile_id = ?`,
      [id]
    );
  }
}

module.exports = ProfileManager;
