//* Imports
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");

//* Team Array
// Creates empty array which will hold all roles
const team = [];

//* Inquiries

const managerInput = function () {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter manager's name",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter manager's ID",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter manager's Email Address",
      },
      {
        type: "number",
        name: "officeNumber",
        message: "Please enter manager's Office Number",
      },
    ])
    .then((managerData) => {
      // Creates new manager object using answers and pushes to team array
      const { name, id, email, officeNumber } = managerData;
      const manager = new Manager(name, id, email, officeNumber);

      team.push(manager);
      //   console.log(manager);
      console.log(team);
    });
};

const chooseRole = function () {
  console.log(`
    =================
    Add a New Role
    =================
    `);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose what kind of employee you wish to add",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is their name?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter their Employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter their email address",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter their Github username",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the school they graduated from",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add another team member?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { role, name, id, email, github, school, addEmployee } = employeeData;
      // Will decide if employee is engineer or intern
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
      }

      // Adds new employee to team array
      team.push(employee);
      console.log(employee);

      // Asks if user wishes to create another role
      if (addEmployee) {
        return chooseRole(team);
      } else {
        return team;
      }
    });
};

// Generates HTML file
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(
        "Congratulations! Your team profile has been successfully created."
      );
    }
  });
};

//^ Basic version just to see if it works
// managerInput()
//   .then(chooseRole)
//   .then((team) => {
//     console.log(team);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//^ This will be the working version once I actually write up my html and css
managerInput()
  .then(chooseRole)
  .then((team) => {
    return template(team);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
