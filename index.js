const inquirer = require('inquirer');
const fs = require('fs');
const filename = 'README.md';
const generateMarkdown = require("./utils/generateMarkdown.js")
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is the project title?',
    name: 'title',
    },
    {
    type: 'input',
    message: 'Provide a description of your project:',
    name: 'description',
    },
    {
    type: 'input',
    message: 'Provide the installation instructions for your application:',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'Provide usage information for your application:',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'Provide the contribution guidelines of your project:',
    name: 'contributing',
    },
    {
    type: 'input',
    message: 'Provide testing instructions for your application:',
    name: 'tests',
    },
    {
    type: 'list',
    message: 'Provide the license for your application:',
    name: 'license',
    choices: ["MIT", "GPL", "Apache License", "BSD", "Mozilla", "GNU", "none"] //find how to build items and colors and name of the license. specific readme syntax. search for readme intructions. 
    },
    {
    type: 'list',
    message: 'Provide the color you would like the license badge to be:',
    name: 'badge',
    choices: ["Light Grey", "Red", "Blue", "Yellow", "Bright Green"] //find how to build items and colors and name of the license. specific readme syntax. search for readme intructions. 
    },
    {
    type: 'input',
    message: 'Provide your Github username:',
    name: 'github',
    },
    {
    type: 'input',
    message: 'Provide your e-mail address:',
    name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app

function init(){
inquirer
  .prompt(questions)
  .then((response) => {
    console.log(response)

    writeToFile('README.md', generateMarkdown({...response}))
    
  });

}


// Function call to initialize app
init();







  /*
  GIVEN a command-line application that accepts user input
  WHEN I am prompted for information about my application repository
  THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, License, Questions, Test Instructions, Usage and Contributing,
  WHEN I enter my project title
  THEN this is displayed as the title of the README
  WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  WHEN I choose a license for my application from a list of options
  THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
  WHEN I enter my GitHub username
  THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
  WHEN I enter my email address
  THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
  WHEN I click on the links in the Table of Contents
  THEN I am taken to the corresponding section of the README
  */