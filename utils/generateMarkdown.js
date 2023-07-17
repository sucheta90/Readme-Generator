// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = license.split(" ").join("%20");
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache license 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0";
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html#license-text";
    case "MIT License":
      return "https://opensource.org/license/mit/";
    case 'BSD 2-Clause "Simplified" License':
      return "https://opensource.org/license/bsd-2-clause/";
    case 'BSD 3-Clause "New" or "Revised" License':
      return "https://opensource.org/license/bsd-3-clause/";
    case "Boost Software License 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";
    case "Creative Common Zero v1.0 Universal":
      return "https://choosealicense.com/licenses/cc0-1.0/";
    case "Eclipse Public License v2.0":
      return "https://www.eclipse.org/legal/epl-2.0/";
    case "GNU Lesser General Public License v2.1":
      return "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html#SEC1";
    case "GNU General Public License v2.0":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html#SEC1";
    case "Mozilla Public License 2.0":
      return "https://www.mozilla.org/en-US/MPL/2.0/";
    case "The Unlicense":
      return "https://choosealicense.com/licenses/unlicense/";
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

[![Static Badge](https://img.shields.io/badge/License-${renderLicenseBadge(
    data.license
  )}-FA6B26)](${renderLicenseLink(data.license)})


## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is licensed under \`${
    data.license
  }\`. To view fine-prints, please click the badge on the top of the page.

## Credits
${data.credits}


## Features
${data.features}

## How to Contribute
${data.contribution}

## Tests
${data.test}

## Questions
Please send an email at ${
    data.email
  } for any additional questions related to this project or visit my github profile at [Github](https://github.com/${
    data.username
  }/).
`;
}

module.exports = generateMarkdown;
