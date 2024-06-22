import { isObjectLike } from '../isObjectLike';
describe('isObjectLike', () => {

    // returns true for plain objects
    it('should return true when value is a plain object', () => {
      const value = { key: 'value' };
      expect(isObjectLike(value)).toBe(true);
    });

    // returns false for functions
    it('should return false when value is a function', () => {
      const value = () => {};
      expect(isObjectLike(value)).toBe(false);
    });

    // returns true for objects with numeric keys
    it('should return true for objects with numeric keys', () => {
      const value = { 1: 'one', 2: 'two' };
      expect(isObjectLike(value)).toBe(true);
    });

    // returns true for objects with mixed string and numeric keys
    it('should return true for objects with mixed string and numeric keys', () => {
      const value = { 1: 'one', key: 'value' };
      expect(isObjectLike(value)).toBe(true);
    });

    // returns true for objects with nested objects
    it('should return true for objects with nested objects', () => {
      const value = { key: { nestedKey: 'nestedValue' } };
      expect(isObjectLike(value)).toBe(true);
    });

    // returns true for objects with null prototype
    it('should return true for objects with null prototype', () => {
      const value = Object.create(null);
      expect(isObjectLike(value)).toBe(true);
    });

    // returns false for arrays
    it('should return false for arrays', () => {
      const value = [1, 2, 3];
      expect(isObjectLike(value)).toBe(false);
    });

    // returns false for Date instances
    it('should return false for Date instances', () => {
      const value = new Date();
      expect(isObjectLike(value)).toBe(false);
    });

    // returns false for RegExp instances
    it('should return false when value is a RegExp instance', () => {
      const value = /pattern/;
      expect(isObjectLike(value)).toBe(false);
    });

    // returns false for null values
    it('should return false when value is null', () => {
      const value = null;
      expect(isObjectLike(value)).toBe(false);
    });

    // returns false for primitive values (string, number, boolean, symbol, bigint, undefined)
    it('should return false when value is a primitive value', () => {
      const value = 'string';
      expect(isObjectLike(value)).toBe(false);
    });
});
