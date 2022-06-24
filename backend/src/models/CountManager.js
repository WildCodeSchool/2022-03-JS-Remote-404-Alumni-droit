const AbstractManager = require("./AbstractManager");

class CountManager extends AbstractManager {
  static table = "profile";

  // andOrWhere(sqlQueryToTest) {
  //   return sqlQueryToTest.includes("WHERE") ? " AND" : " WHERE";
  // }

  countAll() {
    return this.connection
      .query(
        `SELECT COUNT(lastname) FROM ${CountManager.table} INNER JOIN user ON user.id = ${CountManager.table}.user_id WHERE is_valid = true`
      )
      .then((res) => res[0]);
  }
}

module.exports = CountManager;
