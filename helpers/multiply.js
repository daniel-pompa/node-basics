const fs = require('fs');

const createFile = async (base = 5) => {
  try {
    let output = '';

    for (let i = 1; i <= 10; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(output);

    fs.writeFileSync(`documents/table-${base}.txt`, output);
  } catch (error) {
    throw error;
  }

  return `table-${base}.txt`;
};

module.exports = {
  createFile
};
