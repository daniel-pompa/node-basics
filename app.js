import 'colors';
import argv from './configuration/yargs.js';
import { createFile } from './helpers/index.js';

console.clear();

createFile(argv.base, argv.show, argv.limit)
  .then(fileName => console.log(`${fileName} creado`.green))
  .catch(error => console.log(error));
