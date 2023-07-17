// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "Please enter your github username: ",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? ",
  },
  {
    type: "input",
    name: "title",
    message: "Please enter the desired title for your for you project: ",
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the pupose of and/or motivation for your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? ",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe the usage of your project: ",
  },
  {
    type: "list",
    name: "license",
    choices: [
      "None",
      "Apache license 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      "Boost Software License 1.0",
      "Creative Common Zero v1.0 Universal",
      "Eclipse Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "GNU General Public License v2.0",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
    default: "None",
    message: "Please select the preferred license: ",
  },
  {
    type: "input",
    name: "credits",
    message:
      "Would you like to credit someone or any website or tools that might have been helpful while building it? ",
  },
  {
    type: "input",
    name: "features",
    message: "What are special features does the project demonstrates? ",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please describe steps to contribute to this project? ",
  },
  {
    type: "input",
    name: "test",
    message: "Describe the steps to run a test: ",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => console.error(error));
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const response = generateMarkdown(answers);
      writeToFile("./output/README.md", response);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
