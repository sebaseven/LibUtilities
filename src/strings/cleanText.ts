/**
 * @desc Convert a latin text, removing accents, special characters, and setting lowercase.
 * @param {string} str the string to convert
 * @returns {string} the cleaned text
 */
export function cleanText(str: string = ''): string {
  let cleanAccents = removeAccents(str);

  // Reemplazar caracteres especiales como '&'
  cleanAccents = cleanAccents.replace(/[^\w\s]/g, '');

  // Reemplazar todos los caracteres de salto de línea con un espacio
  cleanAccents = cleanAccents.replace(/\n/g, ' ');

  // Reemplazar múltiples espacios en blanco con uno solo
  cleanAccents = cleanAccents.replace(/\s+/g, ' ');

  // Si el resultado es una cadena de solo espacios, devolver cadena vacía
  if (cleanAccents.trim() === '') {
    return '';
  }

  // Convertir el texto a minúsculas
  return cleanAccents.toLowerCase();
}

const accentsMap: Map<string, string> = new Map([
  ['A', 'Á|À|Ã|Â|Ä'],
  ['a', 'á|à|ã|â|ä'],
  ['E', 'É|È|Ê|Ë'],
  ['e', 'é|è|ê|ë'],
  ['I', 'Í|Ì|Î|Ï'],
  ['i', 'í|ì|î|ï'],
  ['O', 'Ó|Ò|Ô|Õ|Ö'],
  ['o', 'ó|ò|ô|õ|ö'],
  ['U', 'Ú|Ù|Û|Ü'],
  ['u', 'ú|ù|û|ü'],
  ['C', 'Ç'],
  ['c', 'ç'],
  ['N', 'Ñ'],
  ['n', 'ñ'],
]);

function removeAccents(text: string): string {
  return [...text].map(char => {
    for (const [baseChar, accents] of accentsMap) {
      if (accents.includes(char)) {
        return baseChar;
      }
    }
    return char;
  }).join('');
}

export default cleanText;
