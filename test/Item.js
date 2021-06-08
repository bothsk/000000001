const os = require("os");
const config = require("./config/" + os.userInfo().username);
process.env.NODE_ENV = config.NODE_ENV;
process.env.LISTENPORT = config.port;
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const Sdk = require("../sdk/index");
const db = require("../db");

describe("SDK", () => {
  const SDK = new Sdk();

  before(async () => {
    await SDK.init("api", "test");
  });

  after(async () => {
    await SDK.shutdown();
  });

  describe("should given all items", () => {
    it("should given all items", async () => {
      const result = await SDK.Item.all_item();
      expect(result).to.be.eq(db);
    });
  });

  describe("should given a item by name", () => {
    it("should given a item by name", async () => {
      const req = {
        name: "box",
      };
      const result = await SDK.Item.find_item(req);
      expect(result).to.be.eq(db.find((x) => x.name === req.name));
    });
  });
});
