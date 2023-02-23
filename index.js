// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the items that will go in the table of contents",
        name: "contents"
    },
    {
        type: "input",
        message: "What are the instructions for installation?",
        name: "installation"
    },
    {
        type: "input",
        message: "What are the directions for usage?",
        name: "usage"
    },
    {
        type: "list",
        name: "license",
        message: "Which license is used?",
        choices: ["None", "Apache", "MIT", "Boost", "Creative Commons", "Eclipse", "The Unilicense"],
        validate: (value) => {
            if (value) { return true } else { return "Please choose a license for repo" }
        }
    },
    {
        type: "input",
        message: "What are the contributing guidelines?",
        name: "contributions"
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
])
    .then(answers => {
        fs.writeFileSync("README.md", `
# ${answers.title}

# Description
${answers.description}
[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

# Installation
${answers.installation}

# Usage
${answers.usage}

# License
${answers.license}

# Contributions
${answers.contributions}

# Tests
${answers.tests}

# Questions
Contact me with questions at GitHub: https://github.com/${answers.github}
or email me at ${answers.email}

`)
    })

