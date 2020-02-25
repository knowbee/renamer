const { readdir } = require("fs");
const {renamer} = require('./renamer')

module.exports = {

  opener : (dirname, answers) => {
    readdir(`${dirname}`, "utf8", (err, data) => {
      if (err) throw err;
      data.map(file => {
        renamer(file, answers, dirname)
      });
    });
  }
}


