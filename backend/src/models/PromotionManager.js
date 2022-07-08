const AbstractManager = require("./AbstractManager");

class FilterPromotionManager extends AbstractManager {
  static table = "profile_diplome";

  findAll() {
    return this.connection.query(
      `SELECT DISTINCT year FROM ${this.table} ORDER BY year ASC`
    );
  }
}

module.exports = FilterPromotionManager;
