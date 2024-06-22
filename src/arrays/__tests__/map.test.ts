import { map } from '../map';

describe('map', () => {

  it('should transform each element of the array using the provided function', () => {
    const numbers = [1, 2, 3];
    const doubledNumbers = map(numbers, (x) => x * 2);
    expect(doubledNumbers).toEqual([2, 4, 6]);

    const words = ['Hello', 'World', 'FCO'];
    const lengths = map<string, number>(words, (x) => x.length);
    expect(lengths).toEqual([5, 5, 3]);
  });
  it('should return an empty array when given an empty array', () => {
    const emptyArray: number[] = [];
    const result = map(emptyArray, (x) => x * 2);
    expect(result).toEqual([]);
  });
});