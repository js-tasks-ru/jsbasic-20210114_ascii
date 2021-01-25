/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    let item = salaries[key];
    if (typeof item == 'number' && isNaN(item) == false && isFinite(item)) {
      sum += item;
    }
  }
  return sum;
}