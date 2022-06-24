const AbstractManager = require("./AbstractManager");

class MasterManager extends AbstractManager {
  static table = "master";

  find(id) {
    return this.connection
      .query(
        `select year, title, university from profile as P INNER JOIN ${this.table} as M ON P.id = M.profile_id WHERE P.id = ?`,
        [id]
      )
      .then((res) => res[0]);
  }

  multipleFind(data) {
    return Promise.all(data.map((pers) => this.find(pers.id)));
  }
}

module.exports = MasterManager;
