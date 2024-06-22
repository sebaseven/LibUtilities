import { isString } from '@src/check'

export const includes = (stringValue: string, searchableValue: string): boolean => {
  return isString(stringValue) && isString(searchableValue) ? stringValue.includes(searchableValue) : false
}