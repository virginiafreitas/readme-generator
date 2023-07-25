// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, badge) {
  if (license !== "none") {
    return `[![GitHub License: ${license}](https://img.shields.io/badge/License-${license}-${badge}.svg)](https://opensource.org/licenses/${license})`
  }

return "";
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, badge) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license, data.badge)}
  ## Description:
  ${data.description}
  
  ## Installation:
  ${data.installation}

  ## Test Instructions:
  ${data.tests}

  ## Usage:
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Questions:
  - GitHub URL: https://github.com/${data.github}
  - e-mail address: ${data.email}

  ## License:
  The application is covered under the ${data.license} license.

  ### Table of Content
  * [Description](#description)
  * [Installation](#installation)
  * [Questions](#questions)
  * [License](#license)
  `;
}

module.exports = generateMarkdown;
// work on index.js 30% of the time and licence 70%