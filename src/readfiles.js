const { readdir, rename } = require("fs");
const color  = require('chalk')
module.exports = {

  renameFiles : (dirname, answers) => {
    readdir(`${dirname}`, "utf8", (err, data) => {
      if (err) throw err;
      data.map(file => {
        if (file.match(`${answers.match}`)) {
          const newname = file.replace(`${answers.match}`, `${answers.replacer}`);
          return rename(
            `${dirname}/${file}`,
              `${dirname}/${newname}`,
              (err, data) => {
                if (err) return err;
                console.log(`${color.green(`${dirname}/${file}`)} => ${color.magenta(`${dirname}/${newname}`)}`)
              }
          );
        }
      });
    });
  }
}
