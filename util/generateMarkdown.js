// function to generate markdown for README
function generateMarkdown(data) {
  const avatar = `https://github.com/${data.username}.png?size=50`;
  const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;

  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests] (#tests)
  - [Contributors](#contributors)
  - [Details](#details)

  ## Installation
  Packages required: ${data.installation}

  ## Usage
  Examples of program usage: ${data.usage}

  ## License
  ${data.license}

  ## Tests
  To Test, run the following command : ${data.tests}

  ## Contributors
  ${data.contributor}

  ## Contact
  \n![badge](${gitHub})
  \n![Profile Image](${avatar})
  \nview the project in GitHub: ${data.url}
  \nFor any questions, please contact me directly at ${data.email}

`;
}

module.exports = generateMarkdown;
