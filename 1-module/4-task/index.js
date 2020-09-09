/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let strToLowerCase = str.toLowerCase();
  let arr = ["1xbet", "xxx"];
  return strToLowerCase.includes(arr[0]) || strToLowerCase.includes(arr[1]);
}
