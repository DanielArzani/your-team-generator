const Employee = require("../lib/employee.js");

describe("Employee", () => {
  const employee = new Employee();
  beforeEach(() => {
    employee.name = "Daniel";
    employee.id = 1234;
    employee.email = "daniel@gmail";
  });
  it("returns name, id and email properties", () => {
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining("@"));
  });
  it("getName returns name", () => {
    expect(employee.getName()).toEqual("Daniel");
  });
  it("getId returns id", () => {
    expect(employee.getId()).toEqual(1234);
  });
  it("getEmail returns email", () => {
    expect(employee.getEmail()).toEqual("daniel@gmail");
  });
  it("getRole returns Employee", () => {
    expect(employee.getRole()).toEqual("Employee");
  });
});
