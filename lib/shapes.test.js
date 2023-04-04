const { Triangle, Square, Circle } = require("./shapes");
// test if the triangle renders properly
test('Triangle renders properly', () => {
  const shape = new Triangle('blue');
  expect(shape.toString()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
  );
});
// test if the square renders properly 
test('Square renders properly', () => {
  const shape1 = new Square('blue');
  expect(shape1.toString()).toEqual(
   '<rect  x="50" y="10" width="200" height="200" fill="blue"/>' 
  );
});
// test if the circle render properly
test('Circle renders properly', () => {
  const shape2 = new Circle('blue');
  expect(shape2.toString()).toEqual(
   '<circle cx="150" cy="100" r="80" fill="blue"/>' 
  );
});
