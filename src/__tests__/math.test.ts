import { add, subtract, greet } from '../utils/math';

describe('math utilities', () => {
  describe('add', () => {
    it('should add two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should handle negative numbers', () => {
      expect(add(-5, 3)).toBe(-2);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });
  });

  describe('greet', () => {
    it('should greet a person by name', () => {
      expect(greet('Alice')).toBe('Hello, Alice!');
    });
  });
});
