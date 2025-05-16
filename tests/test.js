// Simple Jest test
test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }  
  
  // Using describe blocks for organization
  describe('Calculator', () => {
    test('adds two numbers correctly', () => {
      expect(add(1, 2)).toBe(3);
    });
  
    test('subtracts two numbers correctly', () => {
      expect(subtract(5, 2)).toBe(3);
    });
  });
  