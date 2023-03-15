USE employee_tracker_db

/*So if I'm using a key, do I have to write that particular value in 
my seeds file?*/
INSERT INTO department (id, name)
VALUES (001, "Sales"), 
       (002, "Accounting"),
       (003, "Research and development");

SELECT * FROM department;

INSERT INTO role (id, title, salary)
VALUES (004, "Sales associate", 60000),
       (005, "Accountant", 75000),
       (006, "Reseatch specialist", 80000);

SELECT * FROM role;

INSERT INTO employee (id, first_name, last_name)
VALUES (007, "Will", "Wilson"),
       (008, "John", "Johnson"),
       (009, "Firstnamey", "astnamington");

SELECT * FROM employee;