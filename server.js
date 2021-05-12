
//const figlet = require('figlet');I need to find out about this and if I want to use it 
const mysql = require('mysql');
const inquirer = require('inquirer');
const chalk = require('chalk');
const conTable = require('console.table');
const util = require('util');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: '',
    database: 'employees_db',
});

connection.connect(function (err) {
    if (err) throw err;
    welcome();
});

const query = util.promisify(connection.query).bind(connection);

const welcome = () => {
    figlet.text(
        'Employee Tracker',
        {
            font: 'roman',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 150,
            whitespaceBreak: true,
        },
        function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(chalk.cyan(data));
            console.log(chalk.cyan('-'.repeat(95)));
            mainMenu();
        }
    );
};



const mainMenu = () => {
    inquirer
        .prompt({
            name: 'menu',
            type: 'list',
            message:
                'Welcome to the Employee Tracker. Please Choose from the list below:',
            choices: [
                'View All Employees',
                'View Employees by Department',
                'View Employees by Role',
                'View Employees by Manager',
                'Add Employee',
                // 'Remove Employee',
                'Add Department',
                'Update Employee Role',
                // 'Update Employee Manager',
                'View All Roles',
                'Add Role',
                // 'Remove Role
                'Exit',
            ],
        })
        .then(function (answer) {
            switch (answer.menu) {
                case 'View All Employees':
                    viewEmp();
                    break;

                case 'View Employees by Department':
                    viewDept();
                    break;

                case 'View Employees by Role':
                    viewRole();
                    break;

                case 'View Employees by Manager':
                    viewManager();
                    break;

                case 'Add Employee':
                    addEmp();
                    break;

                // case 'Remove Employee':
                //     removeEmp();
                //     break;

                case 'Add Department':
                    addDept();
                    break;

                case 'Update Employee Role':
                    updateRole();
                    break;

                // case 'Update Employee Manager':
                //     updateManager();
                //     break;

                case 'View All Roles':
                    viewAllRoles();
                    break;

                case 'Add Role':
                    addRole();
                    break;

                // case 'Remove Role':
                //     removeRoles();
                //     break;

                case 'Exit':
                    connection.end();
                    break;
            }
        });
};

