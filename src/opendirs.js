const {renameFiles} = require("./readfiles");
const { readdir, lstatSync, rename } = require("fs");
const color = require("chalk");
module.exports = {
  opendirs : async (answers, dirname) => {
   try {
    readdir(`${dirname}`, (err, data) => {
      if (err) throw err;
      data.map(f => {
        const type = lstatSync(`${dirname}/${f}`).isDirectory();
        if(isNaN(+answers.level)){
          console.log('level should be a number')
          process.exit(1)
        }
        if (type && +answers.level === 2) {
          renameFiles(`${dirname}/${f}/`, answers);
        }
        if(!type && +answers.level === 1){
          const newname = f.split(`${answers.match}`, 1);
          rename(
            `${dirname}/${newname[0]}${answers.match}`,
            `${dirname}/${newname[0]}${answers.replacer}`,
            (err, data) => {
              if (err) return err;
              console.log(`${color.green(`${dirname}/${newname[0]}${answers.match}`)} => ${color.magenta(`${dirname}/${newname[0]}${answers.replacer}`)}`)
            }
          );
        }          
      });
    });
    return true
     
   } catch (error) {
     console.log(error)
   }
  }
}

