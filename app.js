const { createFile } = require('./helpers/multiply.js');

console.clear();

const base = 5;

createFile(base)
  .then(fileName => console.log(fileName, 'creado'))
  .catch(error => console.log(error));
