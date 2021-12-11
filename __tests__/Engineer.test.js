const Engineer = require("../lib/Engineer");

test("engineer has a github username", () => {
  const engineer = new Engineer("Dan", "123", "dan@gmail", "DanArzani");

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets github username", () => {
  const engineer = new Engineer("Dan", "123", "dan@gmail");

  expect(engineer.getGithub("danArzani")).toEqual(expect.any(String));
});

test("getRole method returns string Engineer", () => {
  const engineer = new Engineer();

  expect(engineer.getRole()).toBe("Engineer");
});
