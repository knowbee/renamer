const color  = require('chalk')
const { rename } = require("fs");

module.exports = {
  /**
 * Renames file names
 *
 * @param {String} file
 * @param {String} answers
 * @param {String} dirname
 * @returns {<String>} A new file name.
 */
   renamer : (file, answers, dirname) =>{
      if (file.match(`${answers.match}`)) {
        let newname
        if(answers.match.includes('.') && file.split(`${answers.match}`)[1] === ''){
          newname = file.replace(`${answers.match}`, `${answers.replacer}`);
        }
        else{
          if(!answers.match.includes('.') && file.split(`${answers.match}`)[0] === ''){
            newname = file.replace(`${answers.match}`, `${answers.replacer}`);
          }
          if(!answers.match.includes('.') && file.split(`${answers.match}`)[0] !== ''){
            newname = file.replace(`${answers.match}`, `${answers.replacer}`);
          }
          else{
            return
          }
        }
        return rename(
          `${dirname}/${file}`,
            `${dirname}/${newname}`,
            (err, _data) => {
              if (err) return err;
              console.log(`${color.green(`${file}`)} => ${color.magenta(`${newname}`)}`)
            }
        );
      }
    }
}
