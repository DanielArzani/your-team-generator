class Employee {
  constructor(name = "", id, email) {
    this.name = name;
    this.id = String(id);
    this.email = String(email);
  }
  // Methods
  getName(name) {
    return (this.name = name);
  }
  getId(id) {
    return (this.id = id);
  }
  getEmail(email) {
    return (this.email = email);
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
