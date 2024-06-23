/**
 * @desc Format Currency Util Function
 *
 * @return { string }
 */
import { isNumber } from './isNumber';
export const formatCurrency = (
  num: number = 0,
  decimals: number = 2,
  withSign: boolean = true
): string => {
  if (!isNumber(num)) return '0';
  const parseNumber = parseFloat(num.toString());
  const numDecimals = Number.isInteger(parseNumber) ? 0 : decimals;
  const formatWithFixedPoint = parseNumber
    .toFixed(numDecimals)
    .replace('.', ',');
  let formatted = formatWithFixedPoint
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  if (withSign) formatted = '$' + formatted;
  return formatted;
};
export const formatCurrencyIntDecimals = (
  num: number = 0,
  decimals: number = 2,
  withSign: boolean = true,
  showZeros: boolean = true
): string => {
  if (!isFinite(num)) return '0';

  const absoluteNum = Math.abs(num); // Tomamos el valor absoluto del número para formatearlo
  const numDecimals = decimals;
  const formatWithFixedPoint = absoluteNum
    .toFixed(num % 1 === 0 && !showZeros ? 0 : numDecimals)
    .replace('.', ',');

  let formatted = formatWithFixedPoint
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  if (withSign) {
    formatted = formatted.includes('-') ? '-$' + formatted.replace('-', '') : '$' + formatted;
  }

  return num < 0 ? '-' + formatted : formatted;
};

export const splitAmountToInput = (value: string): { numbers: string; decimals: string } => {
  let numbers = '0';
  let decimals = '00';
  if (value.length > 2) {
    decimals = value.substr(value.length - 2, 2);
    numbers = value.substr(0, value.length - 2);
  } else {
    decimals = value.length === 1 ? `0${value}` : value;
    numbers = '0';
  }

  return {
    numbers,
    decimals,
  };
};

export const formatAmount = (value: string | number): string => {
  return value.toString().replace(/^0+/, '').replace('.', '');
};

export const dottedNumber = (value: string): string => {
  return value.toString().replace(/\./g, '');
};

export const formatAmountInput = (value?: string | null): { defaultNumber: string; defaultDecimals: string } => {
    const defaultNumber = '0';
    const defaultDecimals = '';
    if (value === undefined || value === null)
      return { defaultNumber, defaultDecimals };
  
    const number = value
      .replace('-', '')
      .replace(/^0+/, '')
      .replace(',', '')
      .replace('..', '')
      .split('.');
  
    const numbers =
      number[0].length > 0 ? dottedNumber(number[0]) : defaultNumber;
    const decimals =
      number[1]?.length > 0 ? number[1]?.substr(0, 2) : defaultDecimals;
  
    return { defaultNumber: numbers, defaultDecimals: decimals }; // Corregido aquí
  };
  

/**
 * @desc Extract currencies from string
 *
 * @return { string[] | null }
 */
export const extractCurrencyOfString = (msg: string): string[] | null => {
  const currencyRegExp = new RegExp(
    /\$\d+(\.\d{3})?(\.\d{3})?(\,\d{2})?/,
    'gi',
  );
  return msg.match(currencyRegExp);
};

export const formatAmountRow = (value: number): string => {
  // Check if the number is positive, negative, or zero
  const sign = value >= 0 ? '+' : '-';

  // Get the integer and decimal parts of the number
  const [integerPart, decimalPart] = Math.abs(value).toFixed(2).split('.');

  // Format the integer part with thousands separators
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Build the final string with the desired format
  const formattedValue = `${sign} $${formattedInteger},${decimalPart}`;

  return formattedValue;
};

export const amountWithoutSign = (amount: number): string =>
  String(amount).replace(/^(-|\+)/, '');

