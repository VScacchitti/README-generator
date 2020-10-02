//require modules
var fs = require("fs");
var inquirer = require("inquirer");

//Prompt function

function promptQuestions() {
  return inquirer.prompt([
    {
      type: "input",
      message: "Pleae enter your GitHub username.",
      name: "username",
    },
    {
      type: "input",
      message: "Please enter your email address.",
      name: "email",
    },
    {
      type: "input",
      message: "What is the GitHub URL for project?",
      name: "url",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Give a brief description of this project.",
      name: "description",
    },
    {
      type: "input",
      message: "What packages need to be installed to run this project?",
      name: "installation",
    },
    {
      type: "input",
      message: "What technologies were used in the creation of this project?",
      name: "technology",
    },
    {
      type: "input",
      message: "Give an example of how this application can be used",
      name: "usage",
    },
    {
      type: "input",
      name: "license",
      message: "What kind of license would you like to use?",
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "No License"],
    },
    {
      type: "input",
      message: "Please list all contributors (yourself included).",
      name: "contributor",
    },
    {
      type: "input",
      message: "What command is used to perform a test?",
      name: "tests",
    },
  ]);
}

promptQuestions();
