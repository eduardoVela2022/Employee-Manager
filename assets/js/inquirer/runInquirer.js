//Imports
const inquirer = require("inquirer");
const {
  actionMenuQuestions,
  addDepartmentQuestions,
  addRoleQuestions,
  addEmployeeQuestions,
  updateEmployeeRoleQuestions,
} = require("./questions");

// Runs inquirer
function runInquirer() {
  // Inquirer asks the action menu questions
  inquirer.prompt(actionMenuQuestions).then((answers) => {
    // Checks which action the user selected from the action menu
    switch (answers.selectedAction) {
      case "View all departments":
        // SELECT
        break;
      case "View all roles":
        // SELECT
        break;
      case "View all employees":
        // SELECT
        break;
      case "Add a department":
        inquirer.prompt(addDepartmentQuestions).then((answers) => {
          // INSERT
        });
        break;
      case "Add a role":
        inquirer.prompt(addRoleQuestions).then((answers) => {
          // INSERT
        });
        break;
      case "Add an employee":
        inquirer.prompt(addEmployeeQuestions).then((answers) => {
          // INSERT
        });
        break;
      case "Update an employee's role":
        inquirer.prompt(updateEmployeeRoleQuestions).then((answers) => {
          // UPDATE
        });
        break;
      case "Close the program":
        break;
    }
  });
}

// Exports
module.exports = runInquirer;
