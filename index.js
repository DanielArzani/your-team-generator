//* Imports
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { off } = require("process");

//* Team Array
// Creates empty array which will hold all roles
const team = [];

//* Input Questions

const questions = function () {
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

const engineerObj = function () {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "Please enter engineer's name",
    },
    {
      type: "input",
      name: "engineerId",
      message: "Please enter engineer's ID",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Please enter engineer's Email Address",
    },
    {
      type: "input",
      name: "githubUsername",
      message: "Please enter your Github username",
    },
  ]);
};

const chooseRole = function () {
  console.log(`
    =================
    Add a New Role
    =================
    `);
  return inquirer
    .prompt({
      type: "list",
      name: "role",
      message: "Would you like to add another team member or are you finished?",
      choices: ["Engineer", "Intern", "Finished"],
    })
    .then(({ role }) => {
      if (role === "Engineer") {
        return engineerObj();
      } else if (role === "Intern") {
        // Call intern object
      } else {
        return;
      }
    });
};

questions();
