// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdownGenerator = require('./utils/generateMarkdown.js')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Write the name of your project...',
        validate: userTitle => {
            if (userTitle) {
                console.log('test true input')
                return true;
            } else {
                console.log('test false input');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email address',
        message: "Write your email...",
        validate: userGithub => {
            if (userGithub) {
                console.log('test true github')
                return true;
            } else {
                console.log('test false github');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'brief description',
        message: 'Write down a brief overview of your project...',
        validate: projectSummary => {
            if (projectSummary) {
                console.log('test true summary')
                return true;
            } else {
                console.log('test false summary');
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
                console.log('test true inspo')
                return true;
            } else {
                console.log('test false inspo');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Write down the installation instructions...',
        validate: installInstructions => {
            if (installInstructions) {
                console.log('test true installation instructions')
                return true;
            } else {
                console.log('test false installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'Write down the usage information',
        validate: usageInfo => {
            if (usageInfo) {
                console.log('test true usage info')
                return true;
            } else {
                console.log('test false usage info');
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
                console.log('test true contribution guidelines')
                return true;
            } else {
                console.log('test false contribution guidelines');
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
                console.log('test true testing instructions')
                return true;
            } else {
                console.log('test false testing instructions');
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
    
 }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
