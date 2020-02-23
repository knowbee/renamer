const {renameFiles} = require("./readfiles");
const { readdir, lstatSync, rename } = require("fs");

module.exports = {
  opendirs : (answers, dirname) => {
    readdir(`${dirname}`, (err, data) => {
      if (err) throw err;
      data.map(f => {
        const type = lstatSync(`${dirname}/${f}`).isDirectory();
        if (type && Number(answers.level) === 2) {
          renameFiles(`${dirname}/${f}/`, answers);
        }
        else{
          if(!type && Number(answers.level) === 1){
            const newname = f.split(eval(answers.match), 1);
            rename(
              `${dirname}/${f}`,
              `${dirname}/${newname}${answers.replacer}`,
              (err, data) => {
                if (err) return err;
              }
            );
          }          
        }
      });
    });
  }
}

