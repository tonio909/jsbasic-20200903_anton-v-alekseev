/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let salaryValues = [0];
  for (let salariesKey in salaries) {
    if (typeof salaries[salariesKey] === "number") {
      salaryValues.push(salaries[salariesKey]);
    }
  }
  return salaryValues.reduce((a, b) => a + b);
}
