USE employee_tracker_db

INSERT INTO department (id, name)
VALUES (1, "Sales"), 
       (2, "Accounting"),
       (3, "Research and development");

INSERT INTO role (id, title, salary)
VALUES (4, "Sales associate", 60000),
       (5, "Accountant", 75000),
       (6, "Reseatch specialist", 80000);

INSERT INTO employee (id, first_name, last_name)
VALUES (7, "Will", "Wilson"),
       (8, "John", "Johnson"),
       (9, "Firstnamey", "Lastnamington");