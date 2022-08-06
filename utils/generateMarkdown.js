// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

  ${data.description}

  ${data.licenseBadge}

  [A deployed version can be viewed here.](${data.URL})
  
---
## Contents

1. [About](#about)
    1. [User Story](#user%20story)
    2. [Acceptance criteria](#acceptance%20criteria)
    3. [Visuals](#visuals)
    4. [Build](#build)
2. [Installation](#installation)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Authors and acknowledgment](#authors%20and%20acknowledgment)

---
## About

  ${data.about}

---

## User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

---

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
  
  
---
## Visuals:

![my screenshot](images/Visual2.png)

---

## Build:

  To clone the repo:
  
      git clone ${data.clone}
      
---

## Installation:
  ${data.installation}

  
---

## License
  License used for this project - ${data.license}
  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).

---

## Contributing:
  
  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request

  Following a code review, your feature will be merged.


---

## Tests:
  ${data.test}

---

## Authors and Acknowledgments
  ${data.author}

---

## Questions:
* GitHub Username: ${data.userName}
* GitHub Email: ${data.userEmail}
* GitHub Live URL: ${data.URL}
  
`;
}

module.exports = generateMarkdown;
