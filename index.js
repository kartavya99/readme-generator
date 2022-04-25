// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please entre the title of the project:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please entre the description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please entre the installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please entre the usage information:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please entre the test instructions:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please entre the contribution guideline:'
    },
    {
        type: 'checkbox',
        name: 'License',
        message: 'Please choose the license if required:',
        choices : [
            'Boost Software License 1.0',
            'Mozilla Public License 2.0',
            'The MIT License',
            'IBM Public License Version 1.0',
            'Eclipse Public License 1.0',
            'Public Domain Dedication and License (PDDL)'
        ]
    },
    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'Please enter the Github Username:'
    },  
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email address:'
    },  

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => error ? console.log(error) : console.log('Readme file successfully created'));
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => { 
            console.log('answers captured');
            writeToFile('./utils/READMe.md', generateMarkdown(data));
        })
    
}

// Function call to initialize app
init();
