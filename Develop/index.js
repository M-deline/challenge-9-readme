// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Write the name of your project...',
        validate: userTitle => {
            if (userTitle) {
                // console.log('Title success...')
                return true;
            } else {
                console.log('Title invalid...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Write your email...',
        validate: emailAddress => {
            if (emailAddress) {
                return true;
            } else {
                console.log('email invalid...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'summary',
        message: 'Write down a brief overview of your project...',
        validate: projectSummary => {
            if (projectSummary) {
                // console.log('Summary success...')
                return true;
            } else {
                console.log('Summary invlaid...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'inspiration',
        message: 'Write down the reason why you created this project...',
        validate: inspiration => {
            if (inspiration) {
                // console.log('Inspiration success...')
                return true;
            } else {
                console.log('Inspiration invalid...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installationProcess',
        message: 'Write down the installation instructions...',
        validate: installInstructions => {
            if (installInstructions) {
                // console.log('Installation Instructions success...')
                return true;
            } else {
                console.log('Installation Instructions invalid...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Write down the usage information',
        validate: usageInfo => {
            if (usageInfo) {
                // console.log('Usage Information success...')
                return true;
            } else {
                console.log('Usage Information invalid...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'Write down contribution guidelines...',
        validate: contributionGuidelines => {
            if (contributionGuidelines) {
                // console.log('Contribution Guidelines success...')
                return true;
            } else {
                console.log('Contribution Guidelines inavlid...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Testing',
        message: 'Write down testing instructions...',
        validate: testing => {
            if (testing) {
                // console.log('Testing Instructions success...')
                return true;
            } else {
                console.log('Testing Instructions invalid...');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose which license to use...',
        choices: ['mit', 'none', 'apache']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        console.log("test README success --> go to the readme folder to view")
    })
 }

// TODO: Create a function to initialize app
function init() {
    console.log("README success. Go to readme_folder to view.");
    inquirer.prompt(questions)
    .then(readmeData => {
        writeToFile("./readme_folder/readme.md", generateMarkdown(readmeData))
    })
};
// Function call to initialize app
init();


