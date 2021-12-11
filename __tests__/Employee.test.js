//Notes
//Might change to full name
//Id should be 10 char long
//Email needs to contain @

//* Imports
const Employee = require("../lib/Employee");

//* Tests

test("employee has a name,id and email", () => {
  const employee = new Employee("Dan", 2345674542, "dan@gmail");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toHaveLength(10);
  expect(employee.email).toContain("@");
});

test("will get the employees name", () => {
  const employee = new Employee("Dan");

  expect(employee.getName(employee.name)).toEqual(
    expect.stringContaining(employee.name)
  );
});

test("will get the employees id number", () => {
  const employee = new Employee("Dan", "1");

  expect(employee.getId(employee.id)).toEqual(
    expect.stringContaining(employee.id)
  );
});

test("gets employees email", () => {
  const employee = new Employee("Dan", "daniel@gmail");

  expect(employee.getEmail(employee.email)).toEqual(
    expect.stringContaining(employee.email)
  );
});

test("gets role", () => {
  const employee = new Employee();

  expect(employee.getRole()).toBe("Employee");
});
