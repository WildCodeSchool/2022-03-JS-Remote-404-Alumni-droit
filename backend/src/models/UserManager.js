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

  findByMail(email) {
    return this.connection.query(
      `select * from ${UserManager.table} where email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
