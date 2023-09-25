// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
    (![Static Badge](https://img.shields.io/badge/:badgeContent)
    )](${renderLicenseLink(license)})
    `;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `(https://choosealicense.com/licenses/)`;
  } else {
    {return '';
  }
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
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
  ## TOC 
  - [Overview](#summary)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Testing] (#testing)
  - [Contributions] (#contributions)
  ## Overview
  ${data.projectSummary}'
  ${data.inspiration}
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(linkUrl)}

  ## Installation Process
  ${data.installationProcess}

  ## Usage 
  ${data.usageInfo}

  ## Testing 
  ${data.Testing}

  ## Contributions 
  ${data.Contribution}
  
  ## Contact 
  [Email: ${data.emailAddress}] (mailto:${data.emailAddress})
  
  `;
}

module.exports = generateMarkdown;
