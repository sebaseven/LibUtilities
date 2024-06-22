import { isEmpty } from '../isEmpty';
describe('isEmpty', () => {

    // returns true for an empty object
    it('should return true when the object is empty', () => {
        expect(isEmpty({})).toBe(true);
    });

    // returns true for null
    it('should return true when the value is null', () => {
        expect(isEmpty(null)).toBe(true);
    });

    // returns true for an empty array
    it('should return true when the array is empty', () => {
        expect(isEmpty([])).toBe(true);
    });

    // returns true for an empty string
    it('should return true when the string is empty', () => {
        expect(isEmpty('')).toBe(true);
    });

    // returns false for a non-empty object
    it('should return false when the object is not empty', () => {
        expect(isEmpty({ key: 'value' })).toBe(false);
    });
});
