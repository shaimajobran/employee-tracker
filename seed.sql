USE employees;

INSERT INTO departments (name)
VALUES ("Sales"), ("Service"), ("Tech");

INSERT INTO roles (title, salary, dept_id)
VALUES 
("Sales Representative", 50000, 1), 
("Accountant", 80000, 1), 
("Customer Service", 45000, 2),
("Intern IT", 55000, 3), 
("Tech Officer", 275000, 3), 
("Director of Sales", 150000, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
("Shaima", "Jobran", 6, 0),
("Malik", "Kassim", 2, 1),
("Med", "Abdul", 5, 0),
("Debbi", "Wood", 1, 2),
("Ryan", "Lucas", 11, 6),
("Sami", "Boot", 4, 3),
("Rose", "Ali", 3, 0);