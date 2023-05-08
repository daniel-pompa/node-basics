import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    default: 5, // If not pass the default value of the base will be 5
    describe: 'Is the number used to create the multiplication table',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Display the table in console',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10, // If not pass the default value of the base will be 10
    describe: 'Is the number up to which the table will be created',
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw 'La base tiene que ser un número entero';
    }
    return true;
  }).argv;

export default argv;
