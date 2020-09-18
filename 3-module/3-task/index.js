/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str.split('');
  arr.forEach(function(item, i, arr) {
    if (item === '-') {
      arr.splice(i, 2, arr[i + 1].toUpperCase());
    }
  });
  return arr.join('');
}
