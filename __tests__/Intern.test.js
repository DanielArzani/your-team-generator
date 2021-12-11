const Intern = require("../lib/Intern.js");

test("intern has school property that is a string", () => {
  const intern = new Intern("Dan", "123", "dan@gmail", "Durham College");
  expect(intern.school).toEqual(expect.any(String));
});

test("gets interns school", () => {
  const intern = new Intern("Dan", "123", "dan@gmail");

  expect(intern.getSchool("school")).toEqual(expect.any(String));
});

test("getRole method returns string Engineer", () => {
  const intern = new Intern();

  expect(intern.getRole()).toBe("Intern");
});
