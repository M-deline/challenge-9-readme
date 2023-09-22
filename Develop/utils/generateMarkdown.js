// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
    [![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-green.svg)](${renderLicenseLink(license)})
    `;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `(https://choosealicense.com/licenses/${linkUrl}/.)`;
  } else {
    {return '';
  }
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## License
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
   }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## TOC 
  - [Overview](#project-overview)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Testing] (#testing)
  - [Contributions] (#contributions)
`;
}

module.exports = generateMarkdown;
