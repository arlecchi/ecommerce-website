const { add, multiply, divide } = require('../../../src/utils/math');

describe('Math Utils', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should handle negative numbers', () => {
      expect(add(-1, 1)).toBe(0);
    });

    test('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
    });
  });

  describe('multiply', () => {
    test.each([
      [2, 3, 6],
      [0, 5, 0],
      [-2, 3, -6],
      [2.5, 4, 10]
    ])('multiply(%p, %p) should return %p', (a, b, expected) => {
      expect(multiply(a, b)).toBe(expected);
    });
  });

  describe('divide', () => {
    test('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });

    test('should handle decimal results', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 3);
    });
  });
});
