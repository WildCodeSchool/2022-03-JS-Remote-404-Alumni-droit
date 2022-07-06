const AbstractManager = require("./AbstractManager");

class DiplomeManager extends AbstractManager {
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
}

module.exports = DiplomeManager;
