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
  getIdFromDepartmentName,
} = require("../queries/inquirer");

// States
let departmentList = [];
let roleList = [];
let employeeList = [];

// Updates all the states with the data from the database
async function loadData() {
  // Loads database tables
  departmentList = await getAllDepartments();
  roleList = await getAllRoles();
  employeeList = await getAllEmployees();
}

// Runs inquirer
async function runInquirer() {
  // Loads database data into the states
  await loadData();

  // Inquirer asks the action menu questions
  inquirer.prompt(actionMenuQuestions).then((answers) => {
    // Checks which action the user selected from the action menu
    switch (answers.selectedAction) {
      case "View all departments":
        // Display department list data
        console.log(departmentList);
        break;
      case "View all roles":
        // Display role list data
        console.log(roleList);
        break;
      case "View all employees":
        // Display employee list data
        console.log(employeeList);
        break;
      case "Add a department":
        inquirer.prompt(addDepartmentQuestions).then(async (answers) => {
          // Adds a new department to the database
          await addDepartment(answers.name);
        });
        break;
      case "Add a role":
        inquirer
          .prompt(addRoleQuestions(departmentList))
          .then(async (answers) => {
            // Gets data from the answered questions
            const { title, salary, department } = answers;
            const departmentId = await getIdFromDepartmentName(department);

            // Adds a new role to the database
            await addRole(title, salary, departmentId);
          });
        break;
      case "Add an employee":
        inquirer
          .prompt(addEmployeeQuestions(roleList, employeeList))
          .then(async (answers) => {
            // Gets data from the answered questions
            const { firstName, lastName, role, manager } = answers;
            // Adds a new employee to the database
            await addEmployee(firstName, lastName, role, manager);
          });
        break;
      case "Update an employee's role":
        inquirer
          .prompt(updateEmployeeRoleQuestions(employeeList, roleList))
          .then(async (answers) => {
            // Gets data from the answered questions
            const { employeeName, newRole } = answers;

            // Gets selected employee from employee list
            const selectedEmployee = employeeList.filter(
              (employee) =>
                `${employee.first_name} ${employee.last_name}` === employeeName
            );
            // Gets selected role from role list
            const selectedRole = roleList.filter(
              (role) => role.title === newRole
            );

            // Updates the role of the selected employee
            await updateEmployeeRole(
              selectedEmployee[0].id,
              selectedRole[0].id
            );
          });
        break;
      case "Close the program":
        break;
    }
  });
}

// Exports
module.exports = runInquirer;
