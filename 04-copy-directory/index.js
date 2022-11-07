const { copyFile }= require('fs/promises');
const { copyDir }= require('fs/promises');
const { readdir }= require('fs/promises');
const fs = require('fs').promises;
const path = require('path');
const dirr=path.join(__dirname,'files')

fs.mkdir(path.join(__dirname,'files-copy'), { recursive: true }, (err) => {
    if (err) throw err;
});

const dirr1=path.join(__dirname,'files-copy');

const deleteFiles = async () => {
  try { 
    const files = await readdir(dirr1,{withFileTypes: true});
    for (const file of files){
      let delfile = path.join(dirr1, file.name);
      if (file.isFile()) {
        await fs.unlink(delfile);
      }
    }
  } catch (err) {
    console.error(err);
  }
}
deleteFiles();

const copyFilesFromFolder = async () => {
  try { 
  const files = await readdir(dirr,{withFileTypes: true});
    for (const file of files){
      let from = path.join(dirr, file.name);
      let to = path.join(dirr1, file.name);
      if (file.isFile()) {
        await copyFile(from, to);
      }
    }
  } catch (err) {
    console.error(err);
  }
}
copyFilesFromFolder();
