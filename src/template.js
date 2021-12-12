// create Manager card
const generateManager = function (manager) {
  return `
        <div class="cards">
            <div class="top">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="bot">
             <p>ID: ${manager.id}></p>
                <p>EMAIL:Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
      `;
};

// create Engineer card
const generateEngineer = function (engineer) {
  return `
    <div class="cards">
        <div class="top">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
        </div>
        <div class="bot">
         <p>ID: ${engineer.id}></p>
            <p>EMAIL:Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
  `;
};

// create Intern card
const generateIntern = function (intern) {
  return `
    <div class="cards">
        <div class="top">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
        </div>
        <div class="bot">
         <p>ID: ${intern.id}></p>
            <p>EMAIL:Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </div>
    </div>
  `;
};

// push array to page
generateHTML = (data) => {
  // array for cards
  pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // call manager function
    if (role === "Manager") {
      const managerCard = generateManager(employee);

      pageArray.push(managerCard);
    }

    // call engineer function
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);

      pageArray.push(engineerCard);
    }

    // call intern function
    if (role === "Intern") {
      const internCard = generateIntern(employee);

      pageArray.push(internCard);
    }
  }

  // joining strings
  const employeeCards = pageArray.join("");

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

// generate html page
const generateTeamPage = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Generator</title>
      <link rel="stylesheet" href="./styles.css" />
    </head>
    <body>
      <header>
        <h1>Team Generator</h1>
      </header>
  
      <main>
        <div class="container">
          <!-- Cards -->
          ${employeeCards}
        </div>
      </main>
    </body>
  </html>
  `;
};

// export to index
module.exports = generateHTML;
