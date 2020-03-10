const inquirer = require("inquirer");

module.exports = {
  askCommands: () => {
    const questions = [
      {
        name: "match",
        message: "matching pattern or file extension (must begin with a dot): ",
        validate(value) {
          if (value.length) {
            return true;
          }
          return "Your command is empty";
        }
      },
      {
        name: "replacer",
        message:
          "new file name or extension replacer (must begin with a dot): ",
        validate(value) {
          if (value.length) {
            return true;
          }
          return "Your command is empty";
        }
      },
      {
        name: "level",
        message: "level (1 or 2): ",
        validate(value) {
          if (value.length) {
            return true;
          }
          return "A number is required";
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};
