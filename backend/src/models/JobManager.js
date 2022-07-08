const AbstractManager = require("./AbstractManager");

class JobManager extends AbstractManager {
  static table = "profession";

  find(id) {
    return this.connection
      .query(
        `select job from profile as P INNER JOIN ${this.table} as TT ON TT.id = profession_id WHERE P.id = ?`,
        [id]
      )
      .then((res) => res[0]);
  }

  findAll() {
    return this.connection.query(
      `select * from  ${this.table} ORDER BY id ASC`
    );
  }

  jobFind(data) {
    return Promise.all(data.map((pers) => this.find(pers.id)));
  }
}

module.exports = JobManager;
