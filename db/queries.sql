-- To view all departments
SELECT * FROM departments;

-- To view all roles
SELECT * FROM roles;

-- To view all employees
SELECT * FROM employees;

-- To update an employee's role
UPDATE employees SET role_id = 1 WHERE employees.id = 13;