// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//must make uppercase for link to work properly
function renderLicenseBadge(license) {
 let badge = license.toUpperCase().replace(" ", "&ensp;");
 return `
    [![Static Badge](https://img.shields.io/badge/license-${badge})](${renderLicenseLink(license)})
    `;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let link = license.replace(" ", "-");

    return `https://choosealicense.com/licenses/${link}/`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return "";
  } else {
    return `
    ## License
    ${renderLicenseBadge(license)}
      `;
  }
}
   


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents 
  - [Overview](#summary)
  - [Installation](#installationProcess)
  - [Usage](#usageInfo)
  - [Testing](#testing)
  - [Contributions](#Contribution)
  ## Overview
  ${data.title}
  ${data.inspiration}
  ${renderLicenseBadge(data.license)}
  ## Installation Process
  ${data.installationProcess}

  ## Usage 
  ${data.usageInfo}

  ## Testing 
  ${data.Testing}

  ## Contributions 
  ${data.Contribution}
  
  ## Contact 
  Contact me with questions
  [${data.github}](mailto:${data.emailAddress})
  
  `;
}

module.exports = generateMarkdown;
