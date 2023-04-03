const inqurier = require('inquirer');
const fs = require('fs');
const isColor = require('is-color')
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
  { type: 'input',
    name: 'text',
    message: 'Enter text for the logo (Up to 3 character)',
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
    validate: shapeColor => {
      if(!isColor(shapeColor)){
        return 'Invalid color'
      }
      return true
    }
  },
];

inqurier.prompt(questions).then((answers) => {
  const svg = generateSVG(answers)
  console.log(svg)
  }
)

const generateSVG = ({color,text,shape,shapeColor}) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  ${generateShapeSVG(shape, shapeColor)}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
  
  </svg>`
}

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