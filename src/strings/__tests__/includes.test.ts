
import {includes} from '../includes';
describe('includes', () => {

    // returns true when searchableValue is a substring of stringValue
    it('should return true when searchableValue is a substring of stringValue', () => {
      const stringValue = 'hello world';
      const searchableValue = 'world';
      const result = includes(stringValue, searchableValue);
      expect(result).toBe(true);
    });

    // both stringValue and searchableValue are empty strings
    it('should return true when both stringValue and searchableValue are empty strings', () => {
      const stringValue = '';
      const searchableValue = '';
      const result = includes(stringValue, searchableValue);
      expect(result).toBe(true);
    });

    // returns false when searchableValue is not a substring of stringValue
    it('should return false when searchableValue is not a substring of stringValue', () => {
      const stringValue = 'hello world';
      const searchableValue = 'foo';
      const result = includes(stringValue, searchableValue);
      expect(result).toBe(false);
    });

    // returns false when either stringValue or searchableValue is not a string
    it('should return false when either stringValue or searchableValue is not a string', () => {
      const stringValue = '123'; // Convert to string
      const searchableValue = 'world';
      const result = includes(stringValue, searchableValue);
      expect(result).toBe(false);
    });

    // handles empty stringValue and non-empty searchableValue correctly
    it('should handle empty stringValue and non-empty searchableValue correctly', () => {
      const stringValue = '';
      const searchableValue = 'world';
      const result = includes(stringValue, searchableValue);
      expect(result).toBe(false);
    });
});
