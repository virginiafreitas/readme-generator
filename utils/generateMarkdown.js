// Created a function named 'renderLicenseBadge' that takes two parameters ('license' and 'badge') and returns a license badge based on which license is passed in.
function renderLicenseBadge(license, badge) {
  
  // Checks if the 'license' parameter is not equal to "none". If a valid license is selected, the function returns a Markdown-formatted license badge string URL.
  if (license !== "none") {
    // The badge string includes an image link pointing to an SVG badge that represents the chosen license. The URL for the image is constructed using the 'license' and 'badge' parameters.
    return `[![GitHub License: ${license}](https://img.shields.io/badge/License-${license}-${badge}.svg)](https://opensource.org/licenses/${license})`
  }
   // If 'license' is equal to "none", indicating that no license was chosen, the function returns an empty string. This ensures that no license badge will be displayed in the generated README.md file if no license is selected.
return "";
}

// Created a function named 'generateMarkdown' that takes a 'data' object as a parameter to generate the contents of the README.md file based on user input or other data.
function generateMarkdown(data) {
  // The function returns a string containing the dynamically generated content for the README.md file. The content is based on the properties of the 'data' object passed as a parameter.
// The function calls 'renderLicenseBadge()' to generate a license badge based on the 'license' and 'badge' properties in 'data'. The generated badge is displayed right below the title.
 // The README content includes sections with outputs retrieved from 'data' inputs.
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license, data.badge)}

  ### Description:
  ${data.description}
  
  ### Installation:
  ${data.installation}

  ### Test Instructions:
  ${data.tests}

  ### Usage:
  ${data.usage}

  ### Contributing
  ${data.contributing}

  ### Questions:
  - GitHub URL: https://github.com/${data.github}
  - e-mail address: ${data.email}

  ### License:
  The application is covered under the ${data.license} license.

  ### Table of Content
  * [Description](#description)
  * [Installation](#installation)
  * [Questions](#questions)
  * [License](#license)
  `;
}

// Exports the 'generateMarkdown' function from the current module, allowing other modules to import and use it using 'require' making it accessible for generating markdown content or other tasks in those modules.
module.exports = generateMarkdown;
