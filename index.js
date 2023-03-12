const mysql = require('mysql');
const inquirer = require('inquirer');
const Query = require("./db/query");
require('console.table');
require('dotenv').config();

// view all departments, 
// view all roles, view all employees,
//  add a department, add a role, add an employee, 
// and update an employee role

const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employees_db'
    },
    console.log(`Connected to the books_db database.`)
  );

const promptAction = () => {
    inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        name: "prompt_action",
        choices: [
            "View all departments", 
            "View all roles",    
            "View all employees", 
            "Add department", 
            "Add role", 
            "Add employee", 
            "Update employee role", 
            "Quit"
        ],
    })
    .then(answer => {
        switch (answer.prompt_action) {
            case "View all departments":
                viewAllDepartments();
                break;
            case "View all roles":
                viewAllRoles();
                break;
            case "View all employees":
                viewAllEmployees();
                break;
            case "Add department":
                addDepartment();
                break;
            case "Add role":
                addRole();
                break;
            case "Add employee":
                addEmployee();
                break;
            case "Update employee role":
                UpdateRole();
                break;
            case "Quit":
                process.exit();
        }
    });
};

const viewAllDepartments = () => {
    
}

const viewAllRoles = () => {
    
};

const viewAllEmplotees = () => {

};

const addDepartment = () => {
    
};

const addRole = () => {
    
};

const addEmployee = () => {
    
};

const updateRole = () => {
    
};
