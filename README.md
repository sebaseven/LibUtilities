# Utilities Library

This library provides a collection of utility functions for common JavaScript tasks. It was created by Seba Morgado for a TP Level UP course.

## Installation

Install the library using npm:

```bash
npm i utilitieslibrary
```
License
-------

This library is distributed under the FREE license.

Functions
---------

The library includes the following functions:

### arraylable(value: unknown\[\] | null): unknown\[\]

Checks if a value is an array and returns it. If not, returns an empty array.

### map(array: T\[\], fn: (element: T) => U): U\[\]

Applies a function to all elements of an array and returns a new array with the results.

### sum(data: number\[\]): number

Calculates the sum of all elements in a number array.

### isEmpty(value: unknown): boolean

Checks if a value is empty (null, undefined, empty string, or empty object).

### isNullOrUndefined(value: unknown): value is NullOrUndefined

Determines if a value is null or undefined.

### isObjectLike(value: unknown): value is GenericObject

Checks if a value is an object-like type (not Date, RegExp, or Array).

### isObject(value: unknown): boolean

Checks if a value is a plain object (not null, array, function, etc.).

### obscureEmail(email: string): string

Obscures an email address by replacing most characters in the username with asterisks.

### getEnvironmentVariable(environmentVariable: string): string

Retrieves an environment variable and throws an error if not found.

### getEnvironmentVariablesFromArray(environmentVariables: string\[\]): Record

Retrieves multiple environment variables from an array and throws an error if any are not found.

### addHttpsProtocol(url: string): string

Adds "https://" to a URL if it does not already have a protocol (http:// or https://).

### isLinkHttps(url: string): boolean

Checks if a URL starts with "https://".

### formatCurrency(num: number = 0, decimals: number = 2, withSign: boolean = true): string

Formats a number as currency with a specific number of decimal places and an optional sign.

### formatCurrencyIntDecimals(num: number = 0, decimals: number = 2, withSign: boolean = true, showZeros: boolean = true): string

Formats a number as currency with a specific number of decimal places, an optional sign, and control over trailing zeros.

### splitAmountToInput(value: string): { numbers: string; decimals: string }

Splits a currency string into separate "numbers" and "decimals" parts.

### formatAmount(value: string | number): string

Removes leading zeros and the decimal point from a string representation of a number.

### dottedNumber(value: string): string

Removes any decimal point from a string representation of a number.

### formatAmountInput(value?: string | null): { defaultNumber: string; defaultDecimals: string }

Formats a currency input value, handling various edge cases.

### extractCurrencyOfString(msg: string): string\[\] | null

Extracts all currency matches from a string using a regular expression.

### formatAmountRow(value: number): string

Formats a number for display in a table row, including sign and thousands separators.

### amountWithoutSign(amount: number): string

Removes the plus or minus sign from a number.

### capitalize(s: string): string

Capitalizes the first letter of each word in a string.

### includes(stringValue: string, searchableValue: string): boolean

Checks if a string includes a substring (case-sensitive).

### throttle(fn: T, delay: number = 500): (...args: Parameters) => void

Creates a throttled function that can only be called once within a specified delay period.

### debounce(fn: T, delay: number): (...args: Parameters) => void

Creates a debounced function that delays execution until after a specified period of inactivity.