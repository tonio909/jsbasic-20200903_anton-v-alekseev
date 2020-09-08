/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {

  if (n === 0) {return 1;}

  let arr = [n];

  for (let i = 1; i < n; i++) {
    let fac = n - i;
    arr.push(fac);
  }

  return arr.reduce(function (a, b) {
    return a * b;
  });

}
