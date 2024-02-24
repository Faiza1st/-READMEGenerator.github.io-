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
        name: 'dependencies',
        message: 'Enter the command to install dependencies (e.g., npm install):',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter the command to run tests (e.g., npm test):',
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

// Create a function to write README file and prompt successfull attempt
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Your README.md file has been successfully generated!');
        }
    });
}

// Create a function to initialize 
function init() {
    // Prompt the user for information
    inquirer.prompt(questions)
        .then((answers) => {
            // Generate README content based on user input
            const readmeContent = generateReadMe(answers);

            // Write README file
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => console.error(error));
}

// Generate README content based on user input
function generateReadMe(answers) {
    // Generate license and badge notice
    const badge = generatebadge(answers.license);
    const licenseNotice = generateNotice(answers.license);

    // Generate GitHub link in Questions section
    const gitLink = generateGitLink(answers.github, answers.email);

    return `
    # ${answers.name}

    ${badge}
    
    ## Description
    ${answers.description}
    
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    To install dependencies, run:
    \`\`\`
    ${answers.dependencies}
    \`\`\`
    
    ## Usage
    ${answers.usage}
    
    ## License
    ${licenseNotice}
    
    ## Contributing
    ${answers.contributing}
    
    ## Tests
    To run tests, use the following command:
    \`\`\`
    ${answers.tests}
    \`\`\`
    
    ## Questions
    ${generateGitLink(answers.github, answers.email)}
      `;
}


// Generate a license notice based on the selected license
function generateNotice(license) {
    if (license === 'None') {
        return 'This project is under no license.';
    }
    return `This project is covered under the [${license}] license.`;
}

function generatebadge(license) {
    if (license === 'None') {
        return '';
    }
    return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-brightgreen)`;
}


// Generate a GitHub link in the Questions section
function generateGitLink(username, email) {
    return `For additional questions, reach me through [GitHub](https://github.com/${username}) or via email at ${email}.`;
}

// Function call to initialize app
init();