const Sdk = require("@sabuytech/libsbt");
const Item = require("./Item");

class Api extends Sdk {
  constructor() {
    super();
  }

  async init(origin, facility) {
    await super.init(origin, facility);
    this.Item = await new Item(this);
    return this;
  }

  async shutdown() {
    await super.shutdown();
  }
}

module.exports = Api;
