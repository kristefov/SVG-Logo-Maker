// object that holds the shapeColor for the svg file
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}
class Circle extends Shape{
  constructor(shapeColor){
    super(shapeColor)
  }
  toString() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
  }
}
class Triangle extends Shape{
  constructor(shapeColor){
    super(shapeColor)
  }
  toString() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
  }
}
class Square extends Shape{
  constructor(shapeColor){
    super(shapeColor)
  }
  toString() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
  }
}
// exporting the objects to index.js
module.exports = {
  Circle,Triangle,Square
}