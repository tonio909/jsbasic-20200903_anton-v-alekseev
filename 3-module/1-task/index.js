/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let names = [];
  for (let key in users) {
    names.push(users[key].name);
  }
  return names;
}
