/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (let name of friends) {
    let str = `${name.firstName} ${name.lastName}`;
    let li = document.createElement('li');
    li.textContent = str;
    ul.append(li);
  }

  return ul;
}
