const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
};

module.exports = { add, multiply, divide };
