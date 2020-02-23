const { readdir, rename } = require("fs");

// This function do all the magic of renaming the found files inside folder

module.exports = {
  renameFiles : (dirname, answers) => {
    readdir(`${dirname}`, "utf8", (err, data) => {
      if (err) throw err;
      data.map(file => {
        if (file.match(eval(answers.match))) {
          const newname = file.split(eval(answers.match), 1);
          return rename(
            `${dirname}/${file}`,
            `${dirname}/${newname}${answers.replacer}`,
            (err, data) => {
              if (err) return err;
            }
          );
        }
      });
    });
  }
}
