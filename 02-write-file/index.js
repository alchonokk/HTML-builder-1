const fs = require('fs');
const path = require('path'); 
const outFilePath = path.join(__dirname, 'yourtext.txt');
const { stdin, stdout } = require('process');
const readline = require('readline');
const rl = readline.createInterface({input:stdin, output:stdout, prompt:'Please, write your message here: \n' });

fs.createWriteStream(outFilePath);
rl.prompt();

rl.on('line', (line) => {
  if (line === 'exit'){
    console.log('Goodbye!');
    process.exit();
  } else {
    fs.appendFile(outFilePath, `${line}\n`, () => {});
    console.log('Please, write your message here:');
  }   
}).on('close', () => {
  console.log('Goodbye!');
  process.exit();
});
