const color = require("chalk");
const { rename } = require("fs");
const spinner = require("ora")();
module.exports = {
  renamer: (file, answers, dirname) => {
    if (file.match(`${answers.match}`)) {
      let newname;
      if (
        answers.match.includes(".") &&
        file.split(`${answers.match}`)[1] === ""
      ) {
        newname = file.replace(`${answers.match}`, `${answers.replacer}`);
      } else if (
        !answers.match.includes(".") &&
        file.split(`${answers.match}`)[0] === ""
      ) {
        newname = file.replace(`${answers.match}`, `${answers.replacer}`);
      } else if (
        !answers.match.includes(".") &&
        file.split(`${answers.match}`)[0] !== ""
      ) {
        newname = file.replace(`${answers.match}`, `${answers.replacer}`);
      } else {
        return;
      }

      return rename(
        `${dirname}/${file}`,
        `${dirname}/${newname}`,
        (err, data) => {
          if (err) return err;
          spinner.succeed(
            `${color.green(`${file}`)} => ${color.magenta(`${newname}`)}`
          );
        }
      );
    }
  }
};
