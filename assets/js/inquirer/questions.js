// Imports
const {
  getDepartmentNames,
  getEmployeeNames,
  getRoleTitles,
  getEmployeeManagerNames,
} = require("../queries/questions");

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
async function addRoleQuestions() {
  // Gets the names of the departments from the database
  const departmentNames = await getDepartmentNames();

  // Creates question list
  const questions = [
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
      type: "list",
      name: "department",
      message: "What department does this role belong to? ",
      choices: departmentNames,
    },
  ];

  // Returns question list
  return questions;
}

// Questions to add a new employee
async function addEmployeeQuestions() {
  // Gets the titles of the roles from the database
  const roleTitles = await getRoleTitles();
  const managerNames = await getEmployeeManagerNames();

  // Creates question list
  const questions = [
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
      type: "list",
      name: "role",
      message: "What's the role of the new employee? ",
      choices: roleTitles,
    },
    {
      type: "list",
      name: "manager",
      message: "What's the manager of the new employee? ",
      choices: managerNames,
    },
  ];

  // Returns question list
  return questions;
}

// Questions to update the role of an employee
async function updateEmployeeRoleQuestions() {
  // Gets the names of the employees from the database
  const employeeNames = await getEmployeeNames();
  // Gets the titles of the roles from the database
  const roleTitles = await getRoleTitles();

  // Creates question list
  const questions = [
    {
      type: "list",
      name: "employee",
      message: "What's the employee you want to change the role of? ",
      choices: employeeNames,
    },
    {
      type: "list",
      name: "newRole",
      message: "What's the new role of the employee? ",
      choices: roleTitles,
    },
  ];

  // Returns question list
  return questions;
}

// Exports
module.exports = {
  actionMenuQuestions,
  addDepartmentQuestions,
  addRoleQuestions,
  addEmployeeQuestions,
  updateEmployeeRoleQuestions,
};
