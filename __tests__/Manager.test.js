const Manager = require("../lib/Manager");

test("manager has a office number that is a number", () => {
  const manager = new Manager("Dan", "123", "dan@gmail", 5);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("getRole method returns string Manager", () => {
  const manager = new Manager();

  expect(manager.getRole()).toBe("Manager");
});
