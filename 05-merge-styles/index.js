const { readdir }= require('fs/promises');
const path = require('path');
const dirr=path.join(__dirname,'styles')
const dirr1=path.join(__dirname,'project-dist','bundle.css')
const fs = require('fs');
const outfile = fs.createWriteStream(dirr1,'utf-8');

const createFileOfStyles = async () => {
  try { 
    const files = await readdir(dirr, {withFileTypes: true});
    for (const file of files){
      if (file.isFile()) {
        let extn = path.extname(file.name);
        
        if (extn === '.css'){
          const readfile = fs.createReadStream(path.join(dirr,file.name), 'utf-8')
          readfile.pipe(outfile);
        } 
      } 
    }
  } catch (err) {
    console.error(err);
  }
}
createFileOfStyles();
