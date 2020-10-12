const findBestEmployee = function (employees) {
    'use strict';

    const entries = Object.entries(employees);

  let name = "";

  let task = 0;

  for (let i = 0; i < entries.length; i++) {
    if (task < entries[i][1]) {
      task = entries[i][1];
      name = entries[i][0];
    }
  }
  return name;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
console.log(findBestEmployee(developers)); 
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
console.log(findBestEmployee(sellers)); 
// 'lux'  