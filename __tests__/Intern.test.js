const Intern = require("../lib/intern.js");

describe("Intern", () => {
  const intern = new Intern();
  beforeEach(() => {
    intern.school = "University of Toronto";
  });
  it("has school property equal to any string", () => {
    expect(intern.school).toEqual(expect.any(String));
  });
  it("getSchool returns school", () => {
    expect(intern.getSchool()).toEqual("University of Toronto");
  });
  it("getRole returns Intern", () => {
    expect(intern.getRole()).toEqual("Intern");
  });
});
