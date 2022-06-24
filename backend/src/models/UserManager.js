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
    return this.connection.query(
      `update ${UserManager.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }
}

module.exports = UserManager;
