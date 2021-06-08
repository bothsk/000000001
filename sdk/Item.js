const db = require("../db");

class Item {
  /**
   * @constructor
   * @param {Biltmore} Biltmore Merchant SDK
   */
  constructor(SDK) {
    return (async () => {
      this.SDK = SDK;

      return this; // when done
    })();
  }

  async all_item() {
    try {
      let result = db;
      return result;
    } catch (e) {
      throw e;
    }
  }

  async create_item(req) {
    try {
      let newID = db.length + 1;
      db.push({ id: newID, name: req.name });
      return db;
    } catch (e) {
      throw e;
    }
  }

  async delete_item(req) {
    try {
      let deleteItem = db.findIndex((x) => x.name === req.name);
      db.splice(deleteItem, 1);
      return db;
    } catch (e) {
      throw e;
    }
  }

  async find_item(req) {
    try {
      let findItem = db.find((x) => x.name === req.name);
      return findItem;
    } catch (e) {
      throw e;
    }
  }

  async update_item(req) {
    try {
      let updateItem = db.findIndex((x) => x.name === req.params.name);
      db[updateItem].name = req.body.name;
      return db;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = Item;
