const { readdir, rename } = require("fs");
const color  = require('chalk')
module.exports = {

  renameFiles : (dirname, answers) => {
    readdir(`${dirname}`, "utf8", (err, data) => {
      if (err) throw err;
      data.map(file => {
        if (file.match(`${answers.match}`)) {
          let newname
          if(answers.match.includes('.') && file.split(`${answers.match}`)[1] === ''){
            newname = file.replace(`${answers.match}`, `${answers.replacer}`);
            console.log(newname)
          }
          else{
            if(!answers.match.includes('.') && file.split(`${answers.match}`)[0] === ''){
              newname = file.replace(`${answers.match}`, `${answers.replacer}`);
              console.log(newname)
            }
          }

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
