// Imports
const {
  departmentNameValidation,
  roleTitleValidation,
  roleSalaryValidation,
  stringValidation,
} = require("./validation");

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
    validate: departmentNameValidation,
  },
];

// Questions to add a new role
function addRoleQuestions(departmentList) {
  // Gets the names of the departments from the department list
  const departmentNames = departmentList.map((department) => department.name);

  // Creates question list
  const questions = [
    {
      type: "input",
      name: "title",
      message: "What's the title of the new role? ",
      validate: roleTitleValidation,
    },
    {
      type: "input",
      name: "salary",
      message: "What's the salary of the new role? ",
      validate: roleSalaryValidation,
    },
    {
      type: "rawlist",
      name: "department",
      message: "What department does this role belong to? ",
      choices: departmentNames,
    },
  ];

  // Returns question list
  return questions;
}

// Questions to add a new employee
function addEmployeeQuestions(roleList, employeeList) {
  // Gets the titles of the roles from role list
  const roleTitles = roleList.map((role) => role.title);
  // Gets the manager names from the employee List
  const managerNames = employeeList.map(
    (employee) => `${employee.first_name} ${employee.last_name}`
  );

  // Creates question list
  const questions = [
    {
      type: "input",
      name: "firstName",
      message: "What's the first name of the new employee? ",
      validate: stringValidation,
    },
    {
      type: "input",
      name: "lastName",
      message: "What's the last name of the new employee? ",
      validate: stringValidation,
    },
    {
      type: "rawlist",
      name: "role",
      message: "What's the role of the new employee? ",
      choices: roleTitles,
    },
    {
      type: "rawlist",
      name: "manager",
      message: "What's the manager of the new employee? ",
      choices: [...managerNames, "No one"],
    },
  ];

  // Returns question list
  return questions;
}

// Questions to update the role of an employee
function updateEmployeeRoleQuestions(employeeList, roleList) {
  // Gets the names of the employees from the employee list
  const employeeNames = employeeList.map(
    (employee) => `${employee.first_name} ${employee.last_name}`
  );
  // Gets the titles of the roles from the role list
  const roleTitles = roleList.map((role) => role.title);

  // Creates question list
  const questions = [
    {
      type: "rawlist",
      name: "employeeName",
      message: "What's the employee you want to change the role of? ",
      choices: employeeNames,
    },
    {
      type: "rawlist",
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
