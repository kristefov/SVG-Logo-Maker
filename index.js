const inqurier = require('inquirer');
const fs = require('fs')

const questions = [
  { type: 'input',
    name: 'logoText',
    message: 'Enter text for the logo (Must be more than 1 character)'
  },
  { type: 'input',
    name: 'logoColor',
    message: 'Enter a text color'
  },
  { type: 'input',
    name: 'logoShape',
    message: 'Enter shape for the logo'
  },
  {
    type: 'list',
    message: 'Choose shape for the logo',
    name: 'license',
    choices: ['Circle', 'Polygon', 'Eclipse','Rectangle' ]
  },
  { type: 'input',
    name: 'logoShapeColor',
    message: 'Enter a shape color'
  },
];
