# Node Basics ![Node](./assets/node.svg)

A simple console application to create multiplication tables using arguments received by console and learn basic Node.js concepts.

Rebuild the node modules in case you want to use this exercise.

In the project directory run the following command:

```bash
npm install
```

## Learning goals

- Requiring information from other files
- Requiring packages in Node.js
- Import custom files
- How to use ES modules in Node.js
- NPM
- Package.json
- Yargs
- Receive command line parameters
- Console colors

## Requirements

It is necessary to have installed:

A source code editor such as [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/) or any other editor we like.

[![Node.js](https://img.shields.io/badge/node-v18.14.1-green)](https://nodejs.org/es) [![NPM](https://img.shields.io/badge/npm-v9.3.1-red)](https://www.npmjs.com/)

## Launch the application

In the project directory run the following command:

```bash
node app
```

## Usage

To display the help in the project directory run the following command:

```bash
node app --help
```

```bash
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Is the number used to create the multiplication table [number] [required] [default: 5]
  -s, --show     Display the table in console                          [boolean] [default: false]
  -l, --limit    Is the number up to which the table will be created   [number] [default: 10]
```

## Install nodemon (optional)

nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Install nodemon using your favorite package manager:

```bash
npm install -g nodemon
```

```bash
yarn global add nodemon
```

And nodemon will be installed globally to your system path.

In the project directory run the following command:

```bash
nodemon app
```

You can also install nodemon as a development dependency:

```bash
npm install --save-dev nodemon
```

```bash
yarn add nodemon -D
```

With a local installation, nodemon will not be available in your system path or you will not be able to use it directly from the command line. Instead, the local installation of nodemon can be run by calling it from within an npm script in the package.json file.

```json
"scripts": {
    "dev": "nodemon app"
}
```

In the project directory run the following command:

```bash
npm run dev
```

More information about nodemon is available at the following link [nodemon](https://www.npmjs.com/package/nodemon)

## Installation and configuration of yargs

Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.

__Installation__

```bash
npm install yargs
```

__Configuration for this project__

```js
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
```

More information about yargs is available at the following link [yargs](https://www.npmjs.com/package/yargs)

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
