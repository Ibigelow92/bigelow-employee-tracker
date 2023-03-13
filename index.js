const mysql = require('mysql');
const inquirer = require('inquirer');
require('console.table');

const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Nec.Glu.49%',
      database: 'employee_tracker_db'
    },
    console.log(`Connected to employee_tracker_db database.`)
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
    connection.query(
        // https://dev.mysql.com/doc/refman/8.0/en/select.html
        'SELECT' /*select what*/,
        (err, res) => {
            if (err) throw err;
            console.table(res);
            promptAction();
        }
    );
}

const viewAllRoles = () => {
    connection.query(
        // https://dev.mysql.com/doc/refman/8.0/en/select.html
        'SELECT' /*select what*/,
        (err, res) => {
            if (err) throw err;
            console.table(res);
            promptAction();
        }
    );
};

const viewAllEmployees = () => {
    connection.query(
        // https://dev.mysql.com/doc/refman/8.0/en/select.html
        'SELECT' /*select what*/,
        (err, res) => {
            if (err) throw err;
            console.table(res);
            promptAction();
        }
    );
};

//need to change this
const addDepartment = () => {
    inquirer
        .prompt([
            {
                name: 'deptName',
                type: 'input',
                message: "Enter department name.",
            }
        ])
        .then((answer) => {
            connection.query(
                // https://dev.mysql.com/doc/refman/8.0/en/insert.html
                'INSERT //' /*INSERT what where?*/,
                {
                    name: answer.deptName,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Successfully added new employee');
                    promptAction();
                }
            );
        });
};

const addRole = () => {
    inquirer
        .prompt([
            {
                name: 'roleName',
                type: 'input',
                message: "Enter role name",
            },
            {
                name: 'roleSalary',
                type: 'input',
                message: "Enter role salary",
            },
            {
                name: 'roleDepartment',
                type: 'input',
                message: "Enter role department",
            }
        ])
        .then((answer) => {
            connection.query(
                // https://dev.mysql.com/doc/refman/8.0/en/insert.html
                'INSERT //' /*INSERT what where?*/,
                {
                    first_name: answer.roleName,
                    last_name: answer.roleSalary,
                    role_id: answer.roleDepartment
                },
                (err) => {
                    if (err) throw err;
                    console.log('Successfully added new employee');
                    promptAction();
                }
            );
        });
};

const addEmployee = () => {
    inquirer
        .prompt([
            {
                name: 'firstName',
                type: 'input',
                message: "Enter employee's first name.",
            },
            {
                name: 'lastName',
                type: 'input',
                message: "Enter employee's last name.",
            },
            {
                name: 'roleID',
                type: 'input',
                message: "Enter employee's role ID.",
            },
            {
                name: 'managerID',
                type: 'input',
                message: "Enter employee's manager ID",
            }
        ])
        .then((answer) => {
            connection.query(
                // https://dev.mysql.com/doc/refman/8.0/en/insert.html
                'INSERT //' /*INSERT what where?*/,
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: answer.roleID,
                    manager_id: answer.managerID
                },
                (err) => {
                    if (err) throw err;
                    console.log('Successfully added new employee');
                    promptAction();
                }
            );
        });
};

const updateRole = () => {
    
};

connection = () => {
    if (err) throw err;
    console.log('Running employee tracker CMS')
    promptAction();
};