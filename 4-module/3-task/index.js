/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let config = {};
  let i = 0;

  for (let headCells of table.tHead.rows[0].cells) {
    if (headCells.textContent === "Name") {
      config[i] = () => {};
    }

    if (headCells.textContent === "Age") {
      config[i] = function(ageValue) {
        if (ageValue.textContent < 18) {
          this.style = "text-decoration: line-through";
        }
      };
    }

    if (headCells.textContent === "Gender") {
      config[i] = function(genderValue) {
        if (genderValue.textContent === "m") {
          this.classList.add("male");
        } else {
          this.classList.add("female");
        }
      };
    }

    if (headCells.textContent === "Status") {
      config[i] = function(statusValue) {
        if (!statusValue.hasAttribute("data-available")) {
          this.hidden = true;
          return;
        }
        if (statusValue.dataset.available === "true") {
          this.classList.add("available");
        } else if (statusValue.dataset.available === "false") {
          this.classList.add("unavailable");
        }
      };
    }
    i++;
  }

  for (let key of table.tBodies[0].rows) {
    for (let i = 0, ln = key.cells.length; i < ln; i++) {
      config[i].call(key, key.cells[i]);
    }
  }

}
