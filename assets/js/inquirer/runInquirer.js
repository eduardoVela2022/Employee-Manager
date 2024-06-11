// Imports
const inquirer = require("inquirer");
const {
  actionMenuQuestions,
  addDepartmentQuestions,
  addRoleQuestions,
  addEmployeeQuestions,
  updateEmployeeRoleQuestions,
} = require("./questions");
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require("../queries/inquirer");
const {
  connectToDatabase,
  disconnectFromDatabase,
} = require("../queries/client");

// Runs inquirer
async function runInquirer() {
  // Connects to database
  await connectToDatabase();

  // Inquirer asks the action menu questions
  inquirer.prompt(actionMenuQuestions).then(async (answers) => {
    // Checks which action the user selected from the action menu
    switch (answers.selectedAction) {
      case "View all departments":
        // Gets all the departments from the database
        await getAllDepartments();
        break;
      case "View all roles":
        // Gets all the roles from the databases
        await getAllRoles();
        break;
      case "View all employees":
        // Gets all the employees from the database
        await getAllEmployees();
        break;
      case "Add a department":
        inquirer.prompt(addDepartmentQuestions).then((answers) => {
          // Adds a new department to the database
          addDepartment(answers.name);
        });
        break;
      case "Add a role":
        inquirer.prompt(await addRoleQuestions()).then((answers) => {
          // Gets data from the answered questions
          const { title, salary, department } = answers;
          // Adds a new role to the database
          addRole(title, salary, department);
        });
        break;
      case "Add an employee":
        inquirer.prompt(await addEmployeeQuestions()).then((answers) => {
          // Gets data from the answered questions
          const { firstName, lastName, role, manager } = answers;
          // Adds a new employee to the database
          addEmployee(firstName, lastName, role, manager);
        });
        break;
      case "Update an employee's role":
        inquirer.prompt(await updateEmployeeRoleQuestions()).then((answers) => {
          // Gets data from the answered questions
          const { employee, newRole } = answers;
          // Updates the role of an employee
          updateEmployeeRole(employee, newRole);
        });
        break;
      case "Close the program":
        break;
    }

    // Disconnects from database
    await disconnectFromDatabase();
  });
}

// Exports
module.exports = runInquirer;
