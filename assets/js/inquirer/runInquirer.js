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
const { departmentTable, roleTable, employeeTable } = require("./tables");

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
  inquirer.prompt(actionMenuQuestions).then(async (answers) => {
    // Checks which action the user selected from the action menu
    switch (answers.selectedAction) {
      case "View all departments":
        // Display department list data
        departmentTable(departmentList);

        // Returns the user to the action menu
        await runInquirer();

        break;

      case "View all roles":
        // Display role list data
        roleTable(roleList, departmentList);

        // Returns the user to the action menu
        await runInquirer();

        break;

      case "View all employees":
        // Display employee list data
        employeeTable(employeeList, roleList);

        // Returns the user to the action menu
        await runInquirer();

        break;

      case "Add a department":
        // Inquirer asks the questions to add a new department to the database
        inquirer.prompt(addDepartmentQuestions).then(async (answers) => {
          // Adds a new department to the database
          await addDepartment(answers.name);
        });

        // Returns the user to the action menu
        await runInquirer();

        break;

      case "Add a role":
        // Inquirer asks the questions to add a new role to the database
        inquirer
          .prompt(addRoleQuestions(departmentList))
          .then(async (answers) => {
            // Gets data from the answered questions
            const { title, salary, department } = answers;

            // Gets selected department from the department list
            const selectedDepartment = departmentList.filter(
              (item) => item.name === department
            );

            // Adds a new role to the database
            await addRole(title, salary, selectedDepartment[0].id);
          });

        // Returns the user to the action menu
        await runInquirer();

        break;

      case "Add an employee":
        // Inquirer asks the questions to add a new employee to the database
        inquirer
          .prompt(addEmployeeQuestions(roleList, employeeList))
          .then(async (answers) => {
            // Gets data from the answered questions
            const { firstName, lastName, role, manager } = answers;

            // Gets selected role from role list
            const selectedRole = roleList.filter((item) => item.title === role);

            // Gets the selected manager from the employee list
            const selectedManager = employeeList.filter(
              (employee) =>
                `${employee.first_name} ${employee.last_name}` === manager
            );

            // If no manager was found, selected manager is set to null
            if (selectedManager.length === 0) {
              // Adds a new employee without a manager to the database
              await addEmployee(firstName, lastName, selectedRole[0].id, null);
            } else {
              // Adds a new employee with a manager to the database
              await addEmployee(
                firstName,
                lastName,
                selectedRole[0].id,
                selectedManager[0].id
              );
            }
          });

        // Returns the user to the action menu
        await runInquirer();

        break;

      case "Update an employee's role":
        // Inquirer asks the questiosn to update the role of a employee to the database
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

        // Returns the user to the action menu
        await runInquirer();

        break;
      case "Close the program":
        break;
    }
  });
}

// Exports
module.exports = { runInquirer };
