const inquirer = require('inquirer');
const fs = require('fs');
// npm that check if the color is valid
const isColor = require('is-color')
// importing the objects from shapes.js
const { Circle, Triangle, Square } = require('./lib/shapes');
// questions for user to generate a logo based on his/her answers
const questions = [
  { type: 'input',
    name: 'text',
    message: 'Enter text for the logo (Up to 3 character)',
    // validate user input
    validate: text => {
      if(text.length < 1 || text.length > 3){
        return 'Invalid length'
      }
      return true
    }
  },
  { type: 'input',
    name: 'color',
    message: 'Enter a text color',
    // validate user input
    validate: color => {
      if(!isColor(color)){
        return 'Invalid color'
      }
      return true
    }
  },
  {
    type: 'list',
    message: 'Choose shape for the logo',
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square']
  },
  { type: 'input',
    name: 'shapeColor',
    message: 'Enter a shape color',
    // validate user input
    validate: shapeColor => {
      if(!isColor(shapeColor)){
        return 'Invalid color'
      }
      return true
    }
  },
];
// function to create the logo.svg file in logo directory
inquirer.prompt(questions).then((answers) => {
  fs.writeFile('./logo/logo.svg', generateSVG(answers), (err) => {
    err ? console.log(err) : console.log("Successfully created", "\x1b[32m Generated logo.svg")
  })})
// function to generate the SVG Logo
const generateSVG = ({color,text,shape,shapeColor}) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  ${generateShapeSVG(shape, shapeColor)}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
  </svg>`
}

// function to generate the shape of the SVG
const generateShapeSVG = (shape, shapeColor) => {
  switch(shape){
      case 'Circle':
        return new Circle(shapeColor)
      case 'Triangle':
        return new Triangle(shapeColor)
      case 'Square':
        return new Square(shapeColor)
      default:
  }
}