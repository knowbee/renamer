const {opener} = require("./readfiles");
const { readdir, lstatSync } = require("fs");
const {renamer} = require('./renamer')


module.exports = {
  opendirs : async (answers, dirname) => {
   try {
    readdir(`${dirname}`, (err, data) => {
      if (err) throw err;
      data.map(file => {
        const type = lstatSync(`${dirname}/${file}`).isDirectory();
        if(isNaN(+answers.level)){
          console.log('level should be a number')
          process.exit(1)
        }
        if (type && +answers.level === 2) {
          opener(`${dirname}/${file}/`, answers);
        }
        if(!type && +answers.level === 1){
          renamer(file, answers, dirname)
        }          
      });
    });
    return true
     
   } catch (error) {
     console.log(error)
   }
  }
}
