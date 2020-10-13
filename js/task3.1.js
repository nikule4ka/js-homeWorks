const findBestEmployee = function (employees) {
    'use strict';

    const entries = Object.entries(employees);
    let valueEntry = 999999;
    let theBest = "";

    for (const entry of entries) {
        //const key = entry[0];
        //const value = entry[1];
        //console.log(entry);
        
        if (entry[1] < valueEntry) {
            valueEntry = entry[1];
            theBest = entry[0];

        }
  }
    return theBest;
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