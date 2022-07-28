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

  findAll() {
    return this.connection.query(`select DISTINCT title from ${this.table}`);
  }

  multipleFind(data) {
    return Promise.all(data.map((pers) => this.find(pers.id)));
  }

  insert(master, id) {
    const name = master.master === "" ? master.masterName : master.master;
    return this.connection.query(
      `insert into ${this.table} (profile_id, title, year, university) values (?, ?, ?, ?)`,
      [id, name, master.masterYear, master.masterLocation]
    );
  }
}

module.exports = MasterManager;
