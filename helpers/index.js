import fs from 'node:fs';

export const createFile = async (base = 5, list = false, limit = 10) => {
  try {
    let output = '';
    let consoleOutput = '';

    for (let i = 1; i <= limit; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
      consoleOutput += `${base} x ${i} = ${base * i}\n`.green;
    }

    // Displays the table in console if --list or -l option is passed
    if (list) {
      console.log(consoleOutput);
    }

    fs.writeFileSync(`documents/table-${base}.txt`, output);
  } catch (error) {
    throw error;
  }

  return `table-${base}.txt`;
};
