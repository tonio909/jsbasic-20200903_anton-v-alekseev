export default class UserTable {
  constructor(rows) {
    this.elem = this.renderTable(rows);
    this.deleteRow();
  }

  renderTable(rows) {
    let table = document.createElement('table');
    let tableHeader = '<thead><tr>' +
      '<th>Имя</th>' +
      '<th>Возраст</th>' +
      '<th>Зарплата</th>' +
      '<th>Город</th>' +
      '<th></th>' +
      '</tr></thead>';
    table.insertAdjacentHTML('afterbegin', tableHeader);

    let tableBody = document.createElement('tbody');

    rows.forEach(element => {let row = `<tr>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.salary}</td>
        <td>${element.city}</td>
        <td><button>X</button></td>
        </tr>`;

    tableBody.insertAdjacentHTML('beforeend', row);

    });

    table.append(tableBody);

    return table;
  }

  deleteRow() {
    let table = this.elem;
    table.addEventListener('click', (event) => event.target.nodeName === 'BUTTON' && event.target.innerText === 'X' && event.target.closest('tr').remove());
  }
}
