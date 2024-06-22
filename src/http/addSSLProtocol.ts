/**
 * @desc Add https protocol If the url passed in as an argument does not contains that protocol or http and prepend it. Otherwise returns the url with no changes.
 * @param {string} url The url to test.
 */
export const addHttpsProtocol = (url: string): string =>
    !/^https?:\/\//i.test(url) ? `https://${url}` : url
  
export const isLinkHttps = (url: string): boolean => /^https?:\/\//i.test(url);