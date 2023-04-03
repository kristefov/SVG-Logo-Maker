const { Triangle } = require("./shapes");

test("Triangle renders properly", () => {
  const shape = new Triangle('blue');
  expect(shape.toString()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
  );
});
