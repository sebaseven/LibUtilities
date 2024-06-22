import {isString} from '../isString';
describe('isString', () => {

    // returns true for a simple string
    it('should return true when given a simple string', () => {
        expect(isString('hello')).toBe(true);
    });

    // returns false for a string object created with new String()
    it('should return false when given a string object created with new String()', () => {
        expect(isString(new String('hello'))).toBe(false);
    });

    // returns true for an empty string
    it('should return true for an empty string', () => {
        expect(isString('')).toBe(true);
    });

    // returns false for a number
    it('should return false for a number', () => {
        expect(isString(123)).toBe(false);
    });

    // returns false for a boolean
    it('should return false for a boolean', () => {
        expect(isString(true)).toBe(false);
    });

    // returns false for an object
    it('should return false when given an object', () => {
        expect(isString({})).toBe(false);
    });

    // returns false for an array
    it('should return false when given an array', () => {
        expect(isString([])).toBe(false);
    });

    // returns false for null
    it('should return false when given null', () => {
        expect(isString(null)).toBe(false);
    });

    // returns false for undefined
    it('should return false when given undefined', () => {
        expect(isString(undefined)).toBe(false);
    });

    // returns false for a function
    it('should return false when given a function', () => {
        expect(isString(() => {})).toBe(false);
    });

    // returns false for a symbol
    it('should return false when given a symbol', () => {
        expect(isString(Symbol())).toBe(false);
    });

    // returns false for a BigInt
    it('should return false when given a BigInt', () => {
        expect(isString(BigInt(10))).toBe(false);
    });

    // returns false for a date object
    it('should return false when given a date object', () => {
        expect(isString(new Date())).toBe(false);
    });

    // returns false for a regular expression
    it('should return false when given a regular expression', () => {
        expect(isString(/test/)).toBe(false);
    });
});
