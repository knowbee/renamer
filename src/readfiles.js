const { readdir, rename } = require("fs");
const color  = require('chalk')
module.exports = {

  renameFiles : (dirname, answers) => {
    readdir(`${dirname}`, "utf8", (err, data) => {
      if (err) throw err;
      data.map(file => {
        if (file.match(`${answers.match}`)) {
          const newname = file.split(`${answers.match}`, 1);
          return rename(
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
  }
}
