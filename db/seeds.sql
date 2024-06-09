-- Sample data for the departments table
INSERT INTO departments (name) VALUES
('Sales'),
('Human Resources'),
('Management'),
('Information Technologies'),
('Customer Support');

-- Sample data for the roles table
INSERT INTO roles (title, salary, department_id) VALUES
('Sales Agent', 20000, 1),
('Recruiter', 36000, 2),
('Seniour Recruiter', 42000, 2),
('Manager', 35000, 3),
('Front End Developer', 38000, 4),
('Back End Developer', 38000, 4),
('Customer Support Agent', 26000, 5);

-- Sample data for the employees table
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('Regina', 'Johnson', 4, NULL),
('Samuel', 'Garcia', 4, 1),
('George', 'Butler', 4, 1),
('Raymond', 'Green', 4, 1),
('Kimberly', 'Hall', 4, 1),
('Edward', 'Smith', 1, 2),
('Max', 'Evans', 1, 2),
('Michael', 'Davis', 2, 3),
('Samantha', 'Brown', 3, 3),
('Richard', 'Harris', 5, 4),
('Paul', 'Anderson', 6, 4),
('Alexa', 'Walker', 7, 5),
('Theresa', 'Roberts', 7, 5);

