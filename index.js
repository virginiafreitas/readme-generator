
//Imported 'inquirer' to interact with the user through the command line by prompting questions and receiving answers.
const inquirer = require('inquirer');
//Imported 'fs' to work with the file system, including reading and writing files.
const fs = require('fs');
//Defined a constant variable 'filename' that stores the name of the ReadMe file to be created.
const filename = 'README.md';
//Imported the 'generateMarkdown' function from the described path.
const generateMarkdown = require("./utils/generateMarkdown.js")
//Imported the 'path' module, which helps in handling file or directory paths in a cross-platform manner.
const path = require('path')

//Defined an array 'questions' to collect user input using the inquirer module.
const questions = [
    {
    //'input' type means it expects a text-based answer from the user.
    type: 'input',
    // The message to be displayed to the user when this question is prompted.
    message: 'What is the project title?',
    // The 'name' property is used to identify this question's answer in the user's response object.
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
    //'list' type means it will present the user with a set of choices.
    message: 'Provide the license for your application:',
    name: 'license',
    //The 'choices' property holds an array of options from which the user can choose.
    choices: ["MIT", "GPL", "Apache License", "BSD", "Mozilla", "GNU", "none"] 
    },
    {
    type: 'list',
    message: 'Provide the color you would like the license badge to be:',
    name: 'badge',
    choices: ["lightgrey", "red", "blue", "yellow", "brightgreen"] 
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

// Created a function named 'writeToFile' that takes two parameters('fileName' and 'data') to write README file
function writeToFile(fileName, data) {
    // The 'fs.writeFileSync()' method is used to synchronously write data to a file on the file system.
    // The first argument is the file path where the data will be written, using 'path.join()' to ensure platform independence.
    // 'process.cwd()' returns the current working directory, and 'fileName' is the relative or absolute path to the file where data will be written.
    // The second argument is the 'data' that will be written to the file.
    // The function returns the result of 'fs.writeFileSync()'.
return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// Created the function init which is responsible for initializing the process of generating a README.md file.
function init(){
// The 'inquirer.prompt()' method is used to prompt the user with the 'questions' array defined earlier. It returns a Promise that resolves to the user's responses.
inquirer
  .prompt(questions)
  // Once the user provides their responses to the prompted questions, the 'then' method of the Promise is executed. The user's responses are available in the 'response' object.
  .then((response) => {
    // The 'console.log()' method is used here to display the 'response' object, which will show the user's answers to the questions in the terminal.
    console.log(response)
    // The 'generateMarkdown()' function is called, passing the 'response' object as a parameter using the spread operator ('...').
    // This function takes take the user's responses and generate the content for the README.md file based on the predefined template.
    // The result of 'generateMarkdown()' is then passed as the 'data' parameter to the 'writeToFile()' function.
    // The 'writeToFile()' function will write the generated content to the specified 'README.md' file synchronously on the file system. It is called with two arguments:
    // 1. 'README.md': indicates that the generated content will be written to a file named 'README.md'.
    // 2. The result of 'generateMarkdown()': the content that will be written to the 'README.md' file.
    writeToFile('README.md', generateMarkdown({...response}))
  });
}

// Function call to initialize the application
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