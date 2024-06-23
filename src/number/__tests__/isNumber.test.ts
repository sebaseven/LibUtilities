import { isNumber } from '../isNumber';
describe('isNumber', () => {

    // returns true for positive integers
    it('should return true when given a positive integer', () => {
      expect(isNumber(42)).toBe(true);
    });

    // returns false for NaN
    it('should return false when given NaN', () => {
      expect(isNumber(NaN)).toBe(false);
    });

    // returns true for negative integers
    it('should return true for negative integers', () => {
      expect(isNumber(-5)).toBe(true);
    });

    // returns true for positive floating-point numbers
    it('should return true for positive floating-point numbers', () => {
      expect(isNumber(3.14)).toBe(true);
    });

    // returns true for negative floating-point numbers
    it('should return true for negative floating-point numbers', () => {
      expect(isNumber(-2.5)).toBe(true);
    });

    // returns true for zero
    it('should return true for zero', () => {
      expect(isNumber(0)).toBe(true);
    });

    // returns false for Infinity
    it('should return false for Infinity', () => {
      expect(isNumber(Infinity)).toBe(false);
    });

    // returns false for -Infinity
    it('should return false for -Infinity', () => {
      expect(isNumber(-Infinity)).toBe(false);
    });
});
