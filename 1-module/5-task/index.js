/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let truncatedStr = str.substring(0, maxlength - 1);
    return truncatedStr + '…';
  } else {
    return str;
  }
}
