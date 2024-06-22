
import {capitalize} from '../capitalize';

describe('capitalize', () => {

    // capitalizes single word strings correctly
    it('should capitalize single word strings correctly', () => {
      const input = 'hello';
      const expectedOutput = 'Hello';
      const result = capitalize(input);
      expect(result).toBe(expectedOutput);
    });

    // handles empty strings without errors
    it('should handle empty strings without errors', () => {
      const input = '';
      const expectedOutput = '';
      const result = capitalize(input);
      expect(result).toBe(expectedOutput);
    });

    // capitalizes multi-word strings correctly
    it('should capitalize multi-word strings correctly', () => {
      const input = 'hello world';
      const expectedOutput = 'Hello World';
      const result = capitalize(input);
      expect(result).toBe(expectedOutput);
    });

    // converts all characters after the first to lowercase
    it('should convert all characters after the first to lowercase', () => {
      const input = 'HeLLo WoRLd';
      const expectedOutput = 'Hello World';
      const result = capitalize(input);
      expect(result).toBe(expectedOutput);
    });

    // handles strings with mixed case correctly
    it('should handle strings with mixed case correctly', () => {
      const input = 'hElLo WoRlD';
      const expectedOutput = 'Hello World';
      const result = capitalize(input);
      expect(result).toBe(expectedOutput);
    });
});

