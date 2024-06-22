export const getEnvironmentVariable = (environmentVariable: string): string => {
    const validatedEnvironmentVariable = process.env[environmentVariable];
    if (validatedEnvironmentVariable) {
      return validatedEnvironmentVariable;
    }
    throw new Error(`Couldn't find environment variable: ${environmentVariable}`);
  };
  export const getEnvironmentVariablesFromArray = (
    environmentVariables: string[],
  ): Record<string, string> => {
    const result: Record<string, string> = {};
    for (const variable of environmentVariables) {
      const unvalidatedEnvironmentVariable = process.env[variable];
      if (unvalidatedEnvironmentVariable) {
        result[variable] = unvalidatedEnvironmentVariable;
      } else {
        throw new Error(`Couldn't find environment variable: ${variable}`);
      }
    }
    return result;
  };