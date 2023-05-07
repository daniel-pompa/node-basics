const fs = require('fs');

console.clear();

const base = 9;
let output = '';

for (let i = 1; i <= 10; i++) {
  output += `${base} x ${i} = ${base * i}\n`;
}

console.log(output);

fs.writeFile(`documents/table-${base}.txt`, output, error => {
  if (error) throw error;
  console.log(`tabla-${base}.txt creado`);
});
