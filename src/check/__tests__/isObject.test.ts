import { isObject } from '../isObject';
describe('isObject', () => {

    // returns true for plain objects
    it('should return true when value is a plain object', () => {
      const value = {};
      const result = isObject(value);
      expect(result).toBe(true);
    });

    // returns false for null
    it('should return false when value is null', () => {
      const value = null;
      const result = isObject(value);
      expect(result).toBe(false);
    });

    // returns true for arrays
    it('should return true when value is an array', () => {
      const value: unknown = [];
      const result = isObject(value);
      expect(result).toBe(true);
    });

    // returns true for instances of classes
    it('should return true when value is an instance of a class', () => {
        
      class TestClass {}
      const value = new TestClass();
      const result = isObject(value);
      expect(result).toBe(true);
    });

    // returns true for objects created with Object.create(null)
    it('should return true when value is an object created with Object.create(null)', () => {
      const value = Object.create(null);
      const result = isObject(value);
      expect(result).toBe(true);
    });
});
