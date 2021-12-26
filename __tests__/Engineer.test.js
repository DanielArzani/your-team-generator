const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  const engineer = new Engineer();
  beforeEach(() => {
    engineer.github = "danielarzani";
  });
  it("github property is any string", () => {
    expect(engineer.github).toEqual(expect.any(String));
  });
  it("getGithub should return danielarzani", () => {
    expect(engineer.getGithub()).toEqual("danielarzani");
  });
  it("getRole should return Engineer", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
