// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
  return '![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg))';}
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "none") {
       
    //all the licenses we included in the code
    const licenseLinks = {
        'MIT': 'https://opensource.org/licenses/MIT',
        'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
        'Boost1.0': 'https://opensource.org/licenses/BSL-1.0',
        'NPL2.0': 'https://opensource.org/licenses/NPL-2.0',
        'BSD2': 'https://opensource.org/licenses/BSD-2-Clause',
        'BSD3': 'https://opensource.org/licenses/BSD-3-Clause',
    }; 
    return "";
  }

    return licenseLinks[license] || '';
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `${renderLicenseBadge(license)}\n
    Link: ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project} 
${renderLicenseBadge(data.license)}
## Git Hub Username & email
${data.username}
${data.email}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Table of Contents
* [Features](#features)
* [Languages & Dependencies](#languagesanddependencies)
* [How to Use This Application](#HowtoUseThisApplication)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Repo Info
${data.repInfo}
## Languages & Dependencies
${data.installCommand}
## How to Use This Application:
${data.repInfo}
## Contributors
${data.contributions}
## How to run Tests
${data.testCommand}
`;
}

module.exports = generateMarkdown;
