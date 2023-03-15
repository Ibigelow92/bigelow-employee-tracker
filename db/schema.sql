DROP DATABASE IF EXISTS;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NULL,
    FOREIGN KEY (department_id)
      REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
      REFERENCES role(id)
      ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
      REFERENCES employee(id)
      ON DELETE SET NULL
);

/*ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use 
near '' at line 1
ERROR 1007 (HY000): Can't create database 'employee_tracker_db'; database exists
Database changed
ERROR 1050 (42S01): Table 'department' already exists
ERROR 1050 (42S01): Table 'role' already exists
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use 
near 'FOREIGN KEY (manager_id)
      REFERENCES employee(id)
    ON DELETE SET NULL
)' at line 9*/


