import { cleanText } from '../cleanText';
describe('cleanText', () => {

    // converts accented characters to non-accented counterparts
    it('should convert accented characters to non-accented counterparts', () => {
      const input = 'Café';
      const expectedOutput = 'cafe';
      const result = cleanText(input);
      expect(result).toBe(expectedOutput);
    });

    // handles empty string input gracefully
    it('should handle empty string input gracefully', () => {
      const input = '';
      const expectedOutput = '';
      const result = cleanText(input);
      expect(result).toBe(expectedOutput);
    });

    // removes multiple consecutive spaces
    it('should remove multiple consecutive spaces', () => {
      const input = 'text    with    multiple    spaces';
      const expectedOutput = 'text with multiple spaces';
      const result = cleanText(input);
      expect(result).toBe(expectedOutput);
    });

    // converts text to lowercase
    it('should convert text to lowercase', () => {
      const input = 'Text To Convert';
      const expectedOutput = 'text to convert';
      const result = cleanText(input);
      expect(result).toBe(expectedOutput);
    });

    // replaces newline characters with spaces
    it('should replace newline characters with spaces', () => {
      const input = 'text\nwith\nnewlines';
      const expectedOutput = 'text with newlines';
      const result = cleanText(input);
      expect(result).toBe(expectedOutput);
    });

    // handles strings with mixed cases correctly
    it('should handle mixed cases correctly', () => {
      const input = 'Café TeSt';
      const expectedOutput = 'cafe test';
      const result = cleanText(input);
      expect(result).toBe(expectedOutput);
    });

    // handles strings with only spaces
    it('should handle strings with only spaces', () => {
      const input = '     ';
      const expectedOutput = '';
      const result = cleanText(input);
      expect(result).toBe(expectedOutput);
    });


    // handles strings with special characters
    it('should handle special characters when present', () => {
      const input = 'Café & é';
      const expectedOutput = 'cafe e';
      const result = cleanText(input);
      expect(result).toBe(expectedOutput);
    });

    // handles strings with no accented characters
    it('should handle strings with no accented characters', () => {
      const input = 'hello world';
      const expectedOutput = 'hello world';
      const result = cleanText(input);
      expect(result).toBe(expectedOutput);
    });

    // maintains single spaces between words
    it('should maintain single spaces between words', () => {
      const input = 'hello   world';
      const expectedOutput = 'hello world';
      const result = cleanText(input);
      expect(result).toBe(expectedOutput);
    });
});

