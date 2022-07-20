//title of my project and sections entitled Description, Table of Contents, 
//Installation, Usage, License, Contributing, Tests, and Questions


const inquirer = require("inquirer");
const fs = require("fs");


inquirer.prompt([{
    name:"title",
    message:"title of my project"
}])

.then(answers=>console.log(answers.title));

fs.appendFile("README.md","helloooo", function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// fs.appendFile('DataFlairDemo.txt', 'welcome to DataFlair', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });
