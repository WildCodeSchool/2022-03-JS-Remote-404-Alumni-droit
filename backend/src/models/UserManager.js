const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(email, password) {
    return this.connection.query(
      `insert into ${UserManager.table} (email, password, is_valid) values (?, ?, ?)`,
      [email, password, 0]
    );
  }

  update(user) {
    // console.log(">>>>>>");
    // console.log(user);
    return this.connection.query(
      `update ${UserManager.table} set is_valid = ? where id = ?`,
      [user.is_valid, user.id]
    );
  }

  findByMail(email) {
    return this.connection
      .query(`select * from ${UserManager.table} where email = ?`, [email])
      .then((res) => res[0]);
  }
}

module.exports = UserManager;
