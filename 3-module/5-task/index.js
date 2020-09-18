/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let numbers = str.split(',').join(' ').split(' ').filter(a => parseFloat(a)).map(b => parseFloat(b));
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)};
}
