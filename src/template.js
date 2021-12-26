function manager(manager) {
  return `<!-- Manager Card -->
  <div class="card manager-card">
    <!-- Top half - Image -->
    <!-- Used so we can place text relative to img -->
    <div class="img-wrapper">
      <!-- Role -->
      <span class="role">Manager</span>
      <!-- Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          class="icon"
          fill-rule="evenodd"
          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      <img src="./manager.jpg" alt="software engineer" />
    </div>
    <!-- Bottom half -->
    <div class="info">
    <p>${manager.name}</p>
    <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p>ID: ${manager.id}</p>
    <p>Office Number: ${manager.officeNumber}</p>
    </div>
  </div>`;
}

function engineer(engineer) {
  return `<!-- Engineer Card -->
  <div class="card engineer-card">
    <!-- Top half - Image -->
    <!-- Used so we can place text relative to img -->
    <div class="img-wrapper">
      <!-- Role -->
      <span class="role">Engineer</span>
      <!-- Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
      <img src="./engineer.jpg" alt="software engineer" />
    </div>
    <!-- Bottom half -->
    <div class="info">
    <p>${engineer.name}</p>
    <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p>ID: ${engineer.id}</p>
    <p>Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
  </div>`;
}

function intern(intern) {
  return `<!-- Intern Card -->
  <div class="card intern-card">
    <!-- Top half - Image -->
    <!-- Used so we can place text relative to img -->
    <div class="img-wrapper">
      <!-- Role -->
      <span class="role">Intern</span>
      <!-- Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <img src="./intern.jpg" alt="intern" />
    </div>
    <!-- Bottom half -->
    <div class="info">
    <p>${intern.name}</p>
    <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p>ID: ${intern.id}</p>
    <p>School: ${intern.school}</p>
    </div>
  </div>`;
}

function template(data) {
  const pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = manager(employee);
      pageArray.push(managerCard);
    }
    if (role === "Engineer") {
      const engineerCard = engineer(employee);
      pageArray.push(engineerCard);
    }
    if (role === "Intern") {
      const internCard = intern(employee);
      pageArray.push(internCard);
    }
  }

  const allCards = pageArray.join("");

  const createTeam = htmlPage(allCards);
  return createTeam;
}

function htmlPage(team) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Card</title>
      <style>
        /* Reset */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          font-size: 62.5%;
        }
  
        /* General Styles */
  
        body {
          width: 100vw;
        }
        p,
        span {
          font-size: 2rem;
        }
        a:link,a:visited{
          color: #0000EE;
          text-decoration: none;
        }
        a:active,
        a:hover {
          color: #0000be;
          text-decoration: none;
      }
        .card {
          border-radius: 9px;
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 300ms;
          width: 35rem;
        }
  
        .card:hover {
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
          transform: translateY(-10px);
        }
  
        /* Header */
  
        header {
          height: 30rem;
          background-color: blue;
  
          display: flex;
          align-items: center;
          justify-content: center;
        }
  
        header h1 {
          color: lightblue;
          font-size: 6rem;
        }
  
        /* Card Styles */
  
        /* For centering card */
        main {
          padding: 6rem 12rem;
        }
  
        .flexible-cards {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 3rem;
        }
  
        .engineer-card,
        .intern-card {
          justify-self: start;
        }
  
        /* Image and icon */
        .img-wrapper {
          position: relative;
        }
        img {
          filter: brightness(50%);
          width: 100%;
        }
  
        .role {
          text-transform: uppercase;
          font-weight: 500;
          color: lightblue;
          position: absolute;
          bottom: 0;
          left: 3rem;
          z-index: 1;
        }
        .icon {
          color: lightblue;
          position: absolute;
          height: 2.4rem;
          width: 2.4rem;
          bottom: 0;
          left: 0;
          z-index: 1;
        }
  
        /* Bottom half */
        .info {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          gap: 1rem;
  
          color: #333;
          padding: 3rem 6rem;
        }
  
        .info p:first-child {
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <!-- Header Section -->
      <header>
        <h1>Your Team</h1>
      </header>
      <!-- Card Section -->
      <main>
        <section class="section-cards">
          <div class="flexible-cards">
            ${team}
          </div>
        </section>
      </main>
    </body>
  </html>`;
}

module.exports = template;
