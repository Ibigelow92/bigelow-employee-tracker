# bigelow-employee-tracker

## Description

This app is a content management system made for the purpose of helping managers keep track of their employees. It lets employers view, add, and modify employee info in their database. It provides a simple enough interface for a user who is not particularly tech-savvy and it allows for the database to be modified using a very lightweight application that does not require a very extensive code base. As a learning developer, I learned a great deal about how MySql works, including its constraints and complications. A major difficulty was finding how to add a new entry to the database when one of its columns ought to be referencing another column from a different table. 

## Installation

To install this application, simply clone the repo to your device. 

## Usage

To start using the application, first install the dependencies. Right click the file "index.js", then click "open in integrated terminal". Type "npm i" followed by "mysql" then press enter. Then do the same for "inquirer" and "console.table". You also need to open MySql and start the files. To start MySql, type in the terminal, "mysql -u root -p". After you type in your password, you will be in the MySql terminal. You need to initiate the schema.sql file and the seeds.sql file. First type SOURCE db/schema.sql; and press enter. Then type SOURCE db/seeds.sql; and press enter again. You have now initiated your MySql files and populated the tables with the seed data. You are ready to use the application. Go back to the bash terminal, type node index.js and press enter. This will start the application. You will see a list of options. Use the arrow keys to select an option and press enter to select it. When you select the option to view an employee, a role, or a department, the app should return a table with the info you requested. If you choose to add an employee, a role, or a department, it will not show you the table, but it will give you a message telling you that the info was successfully added. Or if there was an error, it will notify you. The same is true for the update option. 

## Credits

The following video, articles and documentation were instrumental in giving me a conceptual grasp of the project. 

https://www.youtube.com/watch?v=SnncAvMYxgY

https://stackoverflow.com/questions/66626936/inquirer-js-populate-list-choices-from-sql-database

https://www.w3schools.com/jsref/met_console_table.asp

https://dev.mysql.com/doc/refman/8.0/en/insert.html

https://dev.mysql.com/doc/refman/8.0/en/select.html

## License

MIT License

Copyright (c) 2023 Ibigelow92

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

