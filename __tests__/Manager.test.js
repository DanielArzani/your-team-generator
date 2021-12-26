const Manager = require("../lib/manager.js");

describe("Manager", () => {
  const manager = new Manager();
  beforeEach(() => {
    manager.officeNumber = 3124;
  });
  it("officeNumber property is any number", () => {
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });
  it("getRole returns Manager", () => {
    expect(manager.getRole()).toEqual("Manager");
  });
});
