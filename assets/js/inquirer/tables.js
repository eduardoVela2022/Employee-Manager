// Prints a department table
function departmentTable(departmentList) {
  // Table header
  console.log("\n[Departments Table]\n");
  console.log("------------------------------------------------------------");
  // Table content
  departmentList.forEach((department) => {
    // Table item
    console.log(`ID: ${department.id} | Name: ${department.name}`);
    console.log("------------------------------------------------------------");
  });
  console.log("\n");
}

// Prints a role table
function roleTable(roleList, departmentList) {
  // Gets the name of the department the role belongs to
  function getDepartmentNameById(id, departmentList) {
    // Gets the department which id matches the given id
    const departmentName = departmentList.filter(
      (department) => department.id === id
    );

    // Returns the department's name
    return departmentName[0].name;
  }

  // Table header
  console.log("\n[Roles Table]\n");
  console.log(
    "------------------------------------------------------------------------------------------------------------------------"
  );
  // Table content
  roleList.forEach((role) => {
    // Table item
    console.log(
      `ID: ${role.id} | Title: ${role.title} | Salary: $${
        role.salary
      } | Department: ${getDepartmentNameById(
        role.department_id,
        departmentList
      )}`
    );
    console.log(
      "------------------------------------------------------------------------------------------------------------------------"
    );
  });
  console.log("\n");
}

// Prints a role table
function employeeTable(employeeList, roleList) {
  // Gets the title of the role that the employee has
  function getRoleTitleById(id, roleList) {
    // Gets the role which id matches the given id
    const roleTitle = roleList.filter((role) => role.id === id);

    // Returns the role's title
    return roleTitle[0].title;
  }

  // Gets the name of the manager the employee is assinged
  function getEmployeeManagerNameById(id, employeeList) {
    // Gets the manager which id matches the given id
    const employeeManagerName = employeeList.filter(
      (employee) => employee.id === id
    );

    // Returns the manager's full name
    return `${employeeManagerName[0].first_name} ${employeeManagerName[0].last_name}`;
  }

  // Table header
  console.log("\n[Employees Table]\n");
  console.log(
    "------------------------------------------------------------------------------------------------------------------------"
  );
  // Table content
  employeeList.forEach((employee) => {
    // Table item
    console.log(
      `ID: ${employee.id} | Full Name: ${employee.first_name} ${
        employee.last_name
      } | Role: ${getRoleTitleById(employee.role_id, roleList)} | Manager: ${
        employee.manager_id !== null
          ? getEmployeeManagerNameById(employee.manager_id, employeeList)
          : "No one"
      }`
    );
    console.log(
      "------------------------------------------------------------------------------------------------------------------------"
    );
  });
  console.log("\n");
}

//Exports
module.exports = { departmentTable, roleTable, employeeTable };
