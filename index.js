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
                updateRole();
                break;
            case "Quit":
                process.exit();
        }
    });
};

// https://dev.mysql.com/doc/refman/8.0/en/select.html
const viewAllDepartments = () => {
    connection.query('SELECT * FROM department', (err, res) => {
            if (err) throw err;
            console.table(res);
            promptAction();
        }
    );
}

// https://dev.mysql.com/doc/refman/8.0/en/select.html
const viewAllRoles = () => {
    connection.query('SELECT * FROM role', (err, res) => {
            if (err) throw err;
            console.table(res);
            promptAction();
        }
    );
};

const viewAllEmployees = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
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
                message: "Enter department name",
            }
        ])
        // https://dev.mysql.com/doc/refman/8.0/en/insert.html
        // INSERT INTO tbl_name () VALUES();
        .then((answer) => {
            connection.query('INSERT INTO department (name) VALUES (?)', /*How do you use INSERT to create another row?*/
                [
                    answer.deptName
                ],
                (err) => {
                    if (err) throw err;
                    console.log('Successfully added new department');
                    promptAction();
                }
            );
        });
};

const addRole = () => {
    inquirer
        .prompt([
            {
                name: 'roleTitle',
                type: 'input',
                message: "Enter role title",
            },
            {
                name: 'roleSalary',
                type: 'input',
                message: "Enter role salary",
            },
            {
                name: 'roleDepartmentID',
                type: 'input',
                message: "Enter role department ID",
            }
        ])
        // https://dev.mysql.com/doc/refman/8.0/en/insert.html
        //example:
        // INSERT INTO role (first_name, last_name, role_id) VALUES ("First", "Last", 1)
        .then((answer) => {
            connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
                [
                    answer.roleTitle,
                    answer.roleSalary,
                    answer.roleDepartmentID
                ],
                (err) => {
                    if (err) throw err;
                    console.log('Successfully added new role');
                    promptAction();
                }
            );
        });
};

// sqlMessage: 'Cannot add or update a child row: a foreign key constraint fails 
// (`employee_tracker_db`.`employee`, CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`role_id`) 
// REFERENCES `role` (`id`) ON DELETE SET NULL)',
// Error: ER_NO_REFERENCED_ROW_2: Cannot add or update a child row: a foreign key constraint fails 
// (`employee_tracker_db`.`employee`, CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`role_id`)
// REFERENCES `role` (`id`) ON DELETE SET NULL)
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
        // https://dev.mysql.com/doc/refman/8.0/en/insert.html
        // INSERT INTO tbl_name () VALUES();
        .then((answer) => {
            connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
                [
                    answer.firstName,
                    answer.lastName,
                    answer.roleID,
                    answer.managerID
                ],
                (err) => {
                    if (err) throw err;
                    console.log('Successfully added new employee');
                    promptAction();
                }
            );
        });
};

const updateRole = () => {
    let sql = 'SELECT * FROM employee';
    let employeeID = 0;
    connection.query(sql, (err, employee) => {
        if (err) throw err;
        connection.query('SELECT * FROM role', (err, roles) => {
            inquirer
                .prompt([
                    {
                        name: 'employee',
                        type: 'list',
                        message: 'Select which employee you want to update',
                        choices() {
                            const optionsArray = [];
                            employee.forEach(({id, first_name, last_name}) => {
                                optionsArray.push(id + ' ' + first_name + ' ' + last_name)
                            })
                            return optionsArray;
                        }
                    },
                    {
                        name: 'newRole',
                        type: 'list',
                        message: 'Select new role',
                        choices() {
                            const optionsArray = [];
                            roles.forEach(({ id, title }) => {
                                optionsArray.push(id + ' ' + title)
                            })
                            return optionsArray;
                        }
                    }
                ])
                .then((answer) => {
                    console.log(answer);
                    connection.query(
                        'UPDATE employee set ? WHERE ?',
                        [
                            {
                                role_id: answer.newRole.split(' ')[0],
                            },
                            {
                                id: answer.employee.split(' ')[0],
                            },
                        ],
                        (err) => {
                            if (err) throw err;
                            console.log('Employee role successfully updated');
                            promptAction();
                        }
                    )
                })
        })
    });
};

connection.connect((err) => {
    if (err) throw err;
    console.log('Running employee tracker CMS')
    promptAction();
}
)