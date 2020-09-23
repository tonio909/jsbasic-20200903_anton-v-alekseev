/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let i = 0;
  for (let rows of table.rows) {
    rows.cells[i++].style.backgroundColor = 'red';
  }
}
