import { arraylable } from '../arraylable';
describe('arraylable', () => {

    // returns the same array if input is a valid array
    it('should return the same array when input is a valid array', () => {
        const input = [1, 2, 3];
        const result = arraylable(input);
        expect(result).toBe(input);
    });

    // handles nested arrays correctly
    it('should return the same nested array when input is a nested array', () => {
        const input = [[1, 2], [3, 4]];
        const result = arraylable(input);
        expect(result).toBe(input);
    });

    // returns an empty array if input is null
    it('should return an empty array when input is null', () => {
      const input = null;
      const result = arraylable(input);
      expect(result).toEqual([]);
    });

    // handles an empty array correctly by returning it as is
    it('should return the same empty array when input is an empty array', () => {
    const input: any[] = [];
      const result = arraylable(input);
      expect(result).toBe(input);
    });

    // handles arrays with mixed data types
    it('should handle arrays with mixed data types', () => {
      const input = [1, 'two', true];
      const result = arraylable(input);
      expect(result).toBe(input);
    });

    // handles very large arrays efficiently
    it('should handle very large arrays efficiently', () => {
      const input = new Array(1000000).fill(0);
      const result = arraylable(input);
      expect(result).toBe(input);
    });

    // handles arrays with undefined or null elements
    it('should handle arrays with undefined or null elements', () => {
      const input = [1, undefined, null, 4];
      const result = arraylable(input);
      expect(result).toBe(input);
    });

    // handles arrays with special characters or symbols
    it('should handle arrays with special characters or symbols', () => {
      const input = ['@', '#', '$'];
      const result = arraylable(input);
      expect(result).toBe(input);
    });

    // handles arrays with only one element
    it('should return the same array when input has only one element', () => {
        const input = [1];
        const result = arraylable(input);
        expect(result).toBe(input);
    });

    // handles arrays with boolean values
    it('should return the same array when input has boolean values', () => {
        const input = [true, false];
        const result = arraylable(input);
        expect(result).toBe(input);
    });

    // handles arrays with objects
    it('should return the same array when input has objects', () => {
        const input = [{ key: 'value' }, { key: 'value' }];
        const result = arraylable(input);
        expect(result).toBe(input);
    });
});
