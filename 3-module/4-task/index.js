/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  return users.filter(a => a.age <= age).map(b => `${b.name}, ${b.balance}`).join("\n");
}
