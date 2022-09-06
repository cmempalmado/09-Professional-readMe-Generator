// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkDown = require('./utils/generateMarkdown.js')
const path = require('path') 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What will be the title for this project: ',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Write an appropriate description for this app: ',
    },

    {
        type: 'input',
        name: 'install',
        message: 'Write instructions on how install dependecies to run this app: ',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Write the usage story for this app: ',
    },

    {
        type: 'option',
        name: 'test',
        message: 'Write down the instructions on how to use this app: ',
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'Enter contributors, if applicable: ',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a lincense for this app: ',
        choices: ['MIT', 'BSD 3', 'APACHE 2.0', 'GPL 3.0', 'None'],
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username: ',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName + '.md', data, (err) => {
        err ? console.log("There was an error") : console.log("readMe created")
    }); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log('Your README has been created');
            writeToFile('README', generateMarkDown(response))
        });
}

// Function call to initialize app
init();