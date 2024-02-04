// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input to create a ReadMe File 
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide information about how to use project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for application:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address:',
    },
];

