// Imports
const { getAllDepartments, getAllRoles } = require("../queries/inquirer");

// Validates a new department's name
async function departmentNameValidation(name) {
  // Checks if it is not empty
  if (name === "") {
    // If it is, return an error message
    return "Please enter a valid value.";
  }
  // Checks if it is unique
  // Gets department names from the database
  const departmentNames = (await getAllDepartments()).map(
    (department) => department.name
  );
  // Checks if the name already exists
  if (departmentNames.includes(name.trim())) {
    // If it does, return an error message
    return "That department name already exists. Please enter another one";
  }

  // If no errors were detected, return true
  return true;
}

// Validates a new role's title
async function roleTitleValidation(title) {
  // Checks if it is not empty
  if (title === "") {
    // If it is, return an error message
    return "Please enter a valid value.";
  }
  // Checks if it is unique
  // Gets department names from the database
  const roleTitles = (await getAllRoles()).map((role) => role.title);
  // Checks if the name already exists
  if (roleTitles.includes(title.trim())) {
    // If it does, return an error message
    return "That role title already exists. Please enter another one";
  }

  // If no errors were detected, return true
  return true;
}

// Validates a new role's salary
function roleSalaryValidation(salary) {
  // Checks if the salary is a number
  if (isNaN(salary) || salary === "") {
    // If it isn't, return error message
    return "Please enter a number.";
  }

  // If no errors were detected, return true
  return true;
}

// Validates a string
function stringValidation(string) {
  // Checks if it is not empty
  if (string === "") {
    // If it is, return an error message
    return "Please enter a valid value.";
  }

  // If no errors were detected, return true
  return true;
}

// Exports
module.exports = {
  departmentNameValidation,
  roleTitleValidation,
  roleSalaryValidation,
  stringValidation,
};
