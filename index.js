const fs = require("fs");
const inquirer = require("inquirer");
const template = require("./src/template.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

const teamData = [];

// Manager Input
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the team managers name?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the managers name");
        return false;
      }
    },
  },
  {
    type: "number",
    name: "id",
    message: "What is their employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?",
    validate: (email) => {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      if (valid) {
        return true;
      } else {
        console.log("Please enter a valid email!");
        return false;
      }
    },
  },
  {
    type: "number",
    name: "officeNumber",
    message: "What is their Office Number?",
  },
];

function chooseRole() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Do you want to add an engineer or an intern?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the their name?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the employee's name");
            return false;
          }
        },
      },
      {
        type: "number",
        name: "id",
        message: "What is their employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter a valid email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is their Github username?",
        when: (input) => input.role === "Engineer",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the employee's Github username");
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Which school did they attend?",
        when: (input) => input.role === "Intern",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the intern's school");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmMember",
        message: "Do you want to add another team member?",
      },
    ])
    .then((data) => {
      let employee;
      let { role, name, id, email, github, school } = data;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
      }

      // Adds their data
      teamData.push(employee);

      // Asks if user wishes to create another role
      if (data.confirmMember) {
        return chooseRole(teamData);
      } else {
        // console.log(teamData);
        return teamData;
      }
    });
}

async function getInput() {
  // Get manager inputs and push data to team array
  const managerData = await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    managerData.name,
    managerData.id,
    managerData.email,
    managerData.officeNumber
  );
  teamData.push(manager);
  console.log(teamData);

  // Calls function that gets team members data
  const teamInfo = await chooseRole();
  console.log(teamInfo);

  // Create File
  fs.writeFile("./dist/index.html", template(teamInfo), (err) => {
    if (err) throw err;
    else
      console.log(
        "Congratulations! Your team profile has been successfully created."
      );
  });
}

getInput();
