const licenseArr =["Boost Software License 1.0", "Mozilla Public License 2.0", "The MIT License", "IBM Public License Version 1.0", "Eclipse Public License 1.0", "Public Domain Dedication and License (PDDL)"];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = licenseArr[0]){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } 
  else if (license = licenseArr[1]){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } 
  else if (license = licenseArr[2]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } 
  else if (license = licenseArr[3]){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } 
  else if (license = licenseArr[4]){
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } 
  else if (license = licenseArr[5]){
    return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
  } else {
    return "";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = licenseArr[0]) {
    return `[${licenseArr[0]}](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  else if(license = licenseArr[1]) {
    return `[${licenseArr[1]}](https://opensource.org/licenses/MPL-2.0)`;
  }
  else if(license = licenseArr[2]) {
    return `[${licenseArr[2]}](https://opensource.org/licenses/MIT)`;
  }
  else if(license = licenseArr[3]) {
    return `[${licenseArr[3]}](https://opensource.org/licenses/IPL-1.0)`;
  }
  else if(license = licenseArr[4]) {
    return `[${licenseArr[4]}](https://opensource.org/licenses/EPL-1.0)`;
  }
  else if(license = licenseArr[5]) {
    return `[${licenseArr[5]}](https://opendatacommons.org/licenses/pddl/)`;
  } 
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}

  
  ## Table of Contents

  * [License](#license)
  * [Description](#Description)
  * [Installation](#installation)
  * [Usage](#Usage)
  * [How to Contribute](#how-to-contribute)
  * [Test](#tests)
  * [Question??](#questions)

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}


  # Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.test}

  # Questions??
  ## Contact me here :

  [${data.gitHubUsername}](http://github/com/${data.gitHubUsername})
  
  ${data.email}`;

}

module.exports = generateMarkdown;
