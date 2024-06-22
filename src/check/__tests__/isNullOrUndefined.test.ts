import { isNullOrUndefined } from '../isNullOrUndefined';
describe('isNullOrUndefined', () => {

    // returns true for null
    it('should return true when value is null', () => {
      expect(isNullOrUndefined(null)).toBe(true);
    });

    // handles empty string correctly
    it('should return false when value is an empty string', () => {
      expect(isNullOrUndefined('')).toBe(false);
    });

    // returns true for undefined
    it('should return true when value is undefined', () => {
      expect(isNullOrUndefined(undefined)).toBe(true);
    });

    // returns false for non-null and non-undefined values
    it('should return false when value is not null or undefined', () => {
      expect(isNullOrUndefined('test')).toBe(false);
    });

    // works correctly with string values
    it('should work correctly with string values', () => {
      expect(isNullOrUndefined('')).toBe(false);
    });
});
