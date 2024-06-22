import { sum } from '../sum';
describe('sum', () => {

    // sum of positive integers
    it('should return the sum of positive integers when given an array of positive numbers', () => {
        const data = [1, 2, 3, 4, 5];
        const result = sum(data);
        expect(result).toBe(15);
    });

    // sum of an empty array
    it('should return 0 when given an empty array', () => {
        const data: number[] = [];
        const result = sum(data);
        expect(result).toBe(0);
    });

    // sum of negative integers
    it('should return the sum of negative integers when given an array of negative numbers', () => {
        const data = [-1, -2, -3, -4, -5];
        const result = sum(data);
        expect(result).toBe(-15);
    });

    // sum of mixed positive and negative integers
    it('should return the sum of mixed positive and negative integers when given an array of mixed numbers', () => {
        const data = [-1, 2, -3, 4, -5];
        const result = sum(data);
        expect(result).toBe(-3);
    });

    // sum of an array with a single element
    it('should return the single element when given an array with a single element', () => {
        const data = [10];
        const result = sum(data);
        expect(result).toBe(10);
    });
});
