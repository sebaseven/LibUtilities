import { amountWithoutSign, formatAmount, formatAmountRow, formatCurrency, formatCurrencyIntDecimals, splitAmountToInput } from '../currency';
describe('formatCurrency', () => {

    // formats positive numbers with default decimals and sign
    it('should format positive numbers with default decimals and sign', () => {
      const result = formatCurrency(1234.56);
      expect(result).toBe('$1.234,56');
    });

    // formats positive numbers with specified decimals and sign
    it('should format positive numbers with specified decimals and sign', () => {
      const result = formatCurrency(1234.5678, 3, true);
      expect(result).toBe('$1.234,568');
    });

    // formats positive numbers with specified decimals without sign
    it('should format positive numbers with specified decimals without sign', () => {
      const result = formatCurrency(1234.5678, 3, false);
      expect(result).toBe('1.234,568');
    });

    // formats zero with default settings
    it('should format zero with default settings', () => {
      const result = formatCurrency(0);
      expect(result).toBe('$0');
    });

    // formats integers without decimals
    it('should format integers without decimals', () => {
      const result = formatCurrency(100);
      expect(result).toBe('$100');
    });

    // formats large numbers with thousand separators
    it('should format large numbers with thousand separators', () => {
      const result = formatCurrency(1234567.89);
      expect(result).toBe('$1.234.567,89');
    });

    // handles non-numeric input gracefully
    it('should handle non-numeric input gracefully', () => {
      const result = formatCurrency('abc');
      expect(result).toBe('0');
    });
});


describe('formatCurrencyIntDecimals', () => {

  // formats integer numbers with default decimals and sign
  it('should format integer numbers with default decimals and sign', () => {
    const result = formatCurrencyIntDecimals(1234);
    expect(result).toBe('$1.234,00');
  });

  // handles zero as input number
  it('should handle zero as input number', () => {
    const result = formatCurrencyIntDecimals(0);
    expect(result).toBe('$0,00');
  });

  // formats float numbers with specified decimals and sign
  it('should format float numbers with specified decimals and sign', () => {
    const result = formatCurrencyIntDecimals(1234.5678, 3, true, true);
    expect(result).toBe('$1.234,568');
  });

  // formats numbers without sign when withSign is false
  it('should format numbers without sign when withSign is false', () => {
    const result = formatCurrencyIntDecimals(1234.5678, 2, false, true);
    expect(result).toBe('1.234,57');
  });

  // formats numbers with commas as decimal separators
  it('should format number with commas as decimal separators', () => {
    const result = formatCurrencyIntDecimals(1234.56);
    expect(result).toBe('$1.234,56');
  });

  // formats numbers with dots as thousand separators
  it('should format number with dots as thousand separators', () => {
    const result = formatCurrencyIntDecimals(1234567.89);
    expect(result).toBe('$1.234.567,89');
  });

  // handles negative numbers correctly
  it('should handle negative numbers correctly', () => {
    const result = formatCurrencyIntDecimals(-9876.54);
    expect(result).toBe('-$9.876,54');
  });
});


describe('splitAmountToInput', () => {

  // splits value with more than two digits into numbers and decimals correctly
  it('should split value with more than two digits into numbers and decimals correctly', () => {
    const result = splitAmountToInput('12345');
    expect(result).toEqual({ numbers: '123', decimals: '45' });
  });

  // handles value with one digit by padding decimals with a leading zero
  it('should pad decimals with leading zero when value has one digit', () => {
    const result = splitAmountToInput('5');
    expect(result).toEqual({ numbers: '0', decimals: '05' });
  });

});

describe('formatAmount', () => {


  // input is a string with only zeros
  it('should return an empty string when input is a string with only zeros', () => {
    const result = formatAmount('0000');
    expect(result).toBe('');
  });

  // converts string to number and removes leading zeros
  it('should convert string to number and remove leading zeros', () => {
    const result = formatAmount('000123');
    expect(result).toBe('123');
  });

  // removes decimal point from number
  it('should remove decimal point from number', () => {
    const result = formatAmount(123.45);
    expect(result).toBe('12345');
  });

  // removes decimal point from string representation of number
  it('should remove decimal point from string representation of number', () => {
    const result = formatAmount('123.45');
    expect(result).toBe('12345');
  });
});



describe('formatAmountRow', () => {

  // Formats positive numbers correctly with a '+' sign
  it('should format positive numbers correctly with a "+" sign', () => {
    const result = formatAmountRow(1234.56);
    expect(result).toBe('+ $1.234,56');
  });

  // Handles very large numbers with multiple thousands separators
  it('should handle very large numbers with multiple thousands separators', () => {
    const result = formatAmountRow(1234567890.12);
    expect(result).toBe('+ $1.234.567.890,12');
  });

  // Formats negative numbers correctly with a '-' sign
  it('should format negative numbers correctly with a "-" sign', () => {
    const result = formatAmountRow(-1234.56);
    expect(result).toBe('- $1.234,56');
  });

  // Adds thousands separators to the integer part of the number
  it('should add thousands separators to the integer part of the number', () => {
    const result = formatAmountRow(1234567.89);
    expect(result).toBe('+ $1.234.567,89');
  });

  // Ensures two decimal places are always present
  it('should ensure two decimal places are always present', () => {
    const result = formatAmountRow(1000);
    expect(result).toBe('+ $1.000,00');
  });
});


describe('amountWithoutSign', () => {

  // removes leading minus sign from negative numbers
  it('should remove leading minus sign when the number is negative', () => {
    const result = amountWithoutSign(-123);
    expect(result).toBe('123');
  });


  // removes leading plus sign from positive numbers
  it('should remove leading plus sign when the number is positive', () => {
    const result = amountWithoutSign(+123);
    expect(result).toBe('123');
  });

  // returns the same string if no sign is present
  it('should return the same string if no sign is present', () => {
    const result = amountWithoutSign(456);
    expect(result).toBe('456');
  });

  // works with zero without sign
  it('should work with zero without sign', () => {
    const result = amountWithoutSign(0);
    expect(result).toBe('0');
  });
});
