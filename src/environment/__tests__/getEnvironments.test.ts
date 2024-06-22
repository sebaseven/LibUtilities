import { getEnvironmentVariable } from '../getEnvironments';
describe('getEnvironmentVariable', () => {

    // returns the value of an existing environment variable
    it.skip('should return the value of an existing environment variable', () => {
      process.env.TEST_VARIABLE = 'test_value';
      const result = getEnvironmentVariable('TEST_VARIABLE');
      expect(result).toBe('test_value');
    });

    // throws an error when the environment variable does not exist
    it('should throw an error when the environment variable does not exist', () => {
      delete process.env.NON_EXISTENT_VARIABLE;
      expect(() => getEnvironmentVariable('NON_EXISTENT_VARIABLE')).toThrowError("Couldn't find environment variable: NON_EXISTENT_VARIABLE");
    });

    // handles environment variables with typical string values
    it('should return the value of an existing environment variable with typical string value', () => {
      process.env.TEST_VARIABLE = 'test_value';
      const result = getEnvironmentVariable('TEST_VARIABLE');
      expect(result).toBe('test_value');
    });


    // handles environment variables with empty string values
    it('should throw an error when trying to retrieve an environment variable with empty string value', () => {
      process.env.TEST_VARIABLE = '';
      expect(() => getEnvironmentVariable('TEST_VARIABLE')).toThrowError("Couldn't find environment variable: TEST_VARIABLE");
    });
});
