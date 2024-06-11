// Action menu questions
const actionMenuQuestions = [
  {
    type: "rawlist",
    name: "selectedAction",
    message: "Choose one of the following actions:",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee's role",
      "Close the program",
    ],
  },
];

// Questions to add a new department
const addDepartmentQuestions = [
  {
    type: "input",
    name: "name",
    message: "What's the name of the new department? ",
  },
];

// Questions to add a new role
const addRoleQuestions = [
  {
    type: "input",
    name: "title",
    message: "What's the title of the new role? ",
  },
  {
    type: "input",
    name: "salary",
    message: "What's the salary of the new role? ",
  },
  {
    type: "input",
    name: "department",
    message: "What department does this role belong to? ",
  },
];

// Questions to add a new employee
const addEmployeeQuestions = [
  {
    type: "input",
    name: "firstName",
    message: "What's the first name of the new employee? ",
  },
  {
    type: "input",
    name: "lastName",
    message: "What's the last name of the new employee? ",
  },
  {
    type: "input",
    name: "role",
    message: "What's the role of the new employee? ",
  },
  {
    type: "input",
    name: "manager",
    message: "What's the manager of the new employee? ",
  },
];

// Questions to update the role of an employee
const updateEmployeeRoleQuestions = [
  {
    type: "input",
    name: "employee",
    message: "What's the employee you want to change the role of? ",
  },
  {
    type: "input",
    name: "newRole",
    message: "What's the new role of the employee? ",
  },
];

// Exports
module.exports = {
  actionMenuQuestions,
  addDepartmentQuestions,
  addRoleQuestions,
  addEmployeeQuestions,
  updateEmployeeRoleQuestions,
};
